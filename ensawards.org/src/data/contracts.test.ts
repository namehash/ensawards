import { CONTRACTS } from "@/data/contracts.ts";
import {
  type ContractIdentityForwardNamed,
  type ContractIdentityPrimaryNamed, type ContractIdentityResolved,
  ContractResolutionStatusIds,
  type EnsProfileForContract
} from "@/types/contracts.ts";
import {type ChainId, isNormalizedName} from "@ensnode/ensnode-sdk";
import { describe, expect, it } from "vitest";
import {type Address} from "viem";

// TODO: is this approach alright? I should probably rename this type and move it somewhere else,
//  but it seems good to define it and have more control over the request response
type RecordsAPIResponse = {
  records: {
    addresses: {
      60: Address | null;
    }
    texts: {
      docs: string | null;
      "compiled-metadata": string | null;
      avatar: string | null;
      audits: {auditor: string; report: string}[] | null;
    }
  },
  accelerationAttempted: boolean;
}

// TODO: this function should probably be moved somewhere else alongside the RecordsAPIResponse type
const responseToProfile = (response: RecordsAPIResponse): EnsProfileForContract => ({
  docs: response.records.texts.docs !== null ? new URL(response.records.texts.docs) : undefined,
  compiledMetadata: response.records.texts["compiled-metadata"] !== null ? new URL(response.records.texts["compiled-metadata"]) : undefined,
  avatar: response.records.texts.avatar !== null ? new URL(response.records.texts.avatar) : undefined,
  audits: response.records.texts.audits !== null ? response.records.texts.audits.map((audit) => ({auditor: audit.auditor, report: new URL(audit.report)})) : undefined,
});

// TODO: These functions should only be used for testing,
//  so that's why I think it's valid to store them here, but appreciate advice nonetheless
const testContractsCachedProfile = async (contractsCachedIdentity: ContractIdentityPrimaryNamed | ContractIdentityForwardNamed) => {
  const textRecordsToCheck = ["docs", "compiled-metadata", "avatar", "audits"];

  const recordsLookupURL = new URL(`/api/resolve/records/${encodeURIComponent(contractsCachedIdentity.name)}`, process.env.VITE_ENSNODE_URL);
  recordsLookupURL.searchParams.set("addresses", [60].join(",")); //we are only interested in the ETH coin type
  recordsLookupURL.searchParams.set("texts", textRecordsToCheck.join(","));

  const recordsResponse = await fetch(recordsLookupURL);
  expect(recordsResponse.status, "Records lookup failed").toBe(200);

  const recordsData = (await recordsResponse.json()) as RecordsAPIResponse;

  // Expect the returned address to match our data
  expect(recordsData.records.addresses["60"], `Contract named=${contractsCachedIdentity.name} has a different address than the cached one`).toEqual(contractsCachedIdentity.contract.address.toLowerCase());

  // Expect records from the response to equal our cached data
  const parsedResponse = responseToProfile(recordsData);
  expect(parsedResponse.docs, `profile.docs field for contract: ${contractsCachedIdentity.name} is stale`).toEqual(contractsCachedIdentity.profile?.docs?.href);
  expect(parsedResponse.compiledMetadata, `profile.compiledMetadata field for contract: ${contractsCachedIdentity.name} is stale`).toEqual(contractsCachedIdentity.profile?.compiledMetadata);
  expect(parsedResponse.avatar, `profile.avatar field for contract: ${contractsCachedIdentity.name} is stale`).toEqual(contractsCachedIdentity.profile?.avatar);
  expect(parsedResponse.audits, `profile.audits field for contract: ${contractsCachedIdentity.name} is stale`).toEqual(contractsCachedIdentity.profile?.audits);

}

const testContractsPrimaryName = async (contractsCachedIdentity: ContractIdentityResolved) => {
  const chainId: ChainId = 1; // for now, we only care about the mainnet TODO: Is that a correct assumption?
  const primaryNameLookupURL = new URL(`/api/resolve/primary-name/${encodeURIComponent(contractsCachedIdentity.contract.address)}/${chainId}`, process.env.VITE_ENSNODE_URL);

  const primaryNameResponse = await fetch(primaryNameLookupURL);
  expect(primaryNameResponse.status, "Primary Name lookup failed").toBe(200);

  const primaryNameData = (await primaryNameResponse.json());

  // If contract's resolutionStatus is ContractResolutionStatusIds.PrimaryNamed,
  // expect response to match its cached name
  if (contractsCachedIdentity.resolutionStatus === ContractResolutionStatusIds.PrimaryNamed){
    expect(primaryNameData["name"]).toEqual(contractsCachedIdentity.name);
  }
  // For forward named and unnamed contracts expect the response value to be null
  // (the contract still isn't primary named)
  else {
    const expectedResponseValue = null;
    expect(primaryNameData["name"]).toEqual(expectedResponseValue);
  }
}

describe("contracts data", () => {
  const data = CONTRACTS;
  describe("CachedIdentity", () => {
    it("For `cachedIdentity` of type `ContractIdentityPrimaryNamed` or `ContractIdentityForwardNamed`, `name` must be a non-empty normalized ENS name", () => {
      data.forEach((contract) => {
        if (
          contract.cachedIdentity.resolutionStatus == ContractResolutionStatusIds.PrimaryNamed ||
          contract.cachedIdentity.resolutionStatus === ContractResolutionStatusIds.ForwardNamed
        ) {
          expect(
            contract.cachedIdentity.name.length > 0 &&
              isNormalizedName(contract.cachedIdentity.name),
            `Name={${contract.cachedIdentity.name}} is not normalized`,
          ).toEqual(true);
        }
      });
    });

    //TODO: Can I make batch requests to the ENSNode API (not to my knowledge)? If so, is that a reasonable way to go?
    it("All values match the current state in ENS", async () => {
        for (const contract of data) {
          // 1) Check if the contract's primary name is unchanged
          // (either still the same or still not set)
          await testContractsPrimaryName(contract.cachedIdentity);

          // If the contract's resolutionStatus is ContractResolutionStatusIds.PrimaryNamed or ContractResolutionStatusIds.ForwardNamed,
          if (contract.cachedIdentity.resolutionStatus === ContractResolutionStatusIds.PrimaryNamed || contract.cachedIdentity.resolutionStatus === ContractResolutionStatusIds.ForwardNamed){
            // 2) Check that records from the response to equal our cached profile data
            await testContractsCachedProfile(contract.cachedIdentity);
          }
        }
    }, 60000);
    // wait 60s before terminating
    // Might need longer if we add more data
    // For current "prod" data (only 23 contracts) lasts around 10 seconds
  });
});
