import { CONTRACTS } from "@/data/contracts.ts";
import {ContractResolutionStatusIds, type EnsProfileForContract} from "@/types/contracts.ts";
import { isNormalizedName } from "@ensnode/ensnode-sdk";
import { describe, expect, it } from "vitest";
import {type Address} from "viem";

// TODO: is this approach alright? I should probably rename this type and move it somewhere else, but it seems good to define it
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
        const textRecordsToCheck = ["docs", "compiled-metadata", "avatar", "audits"];

        // TODO: this function should probably be moved somewhere else alongside the RecordsAPIResponse type
        const responseToProfile = (response: RecordsAPIResponse): EnsProfileForContract => ({
          docs: response.records.texts.docs !== null ? new URL(response.records.texts.docs) : undefined,
          compiledMetadata: response.records.texts["compiled-metadata"] !== null ? new URL(response.records.texts["compiled-metadata"]) : undefined,
          avatar: response.records.texts.avatar !== null ? new URL(response.records.texts.avatar) : undefined,
          audits: response.records.texts.audits !== null ? response.records.texts.audits.map((audit) => ({auditor: audit.auditor, report: new URL(audit.report)})) : undefined,
        });

        for (const contract of data) {
          const primaryNameLookupURL = new URL(``);

          // If the contract's resolutionStatus is ContractResolutionStatusIds.PrimaryNamed,
          if (contract.cachedIdentity.resolutionStatus === ContractResolutionStatusIds.PrimaryNamed){
            // 1) Check if the contract's primary name is unchanged
            const primaryNameResponse = await fetch(primaryNameLookupURL);
            expect(primaryNameResponse.status, "Primary Name lookup failed").toBe(200);

            const primaryNameData = (await primaryNameResponse.json());

            expect(primaryNameData["name"]).toEqual(contract.cachedIdentity.name);

            // 2) Check if the contract's profile fields are unchanged
            const recordsLookupURL = new URL(`/api/resolve/records/${encodeURIComponent(contract.cachedIdentity.name)}`, process.env.VITE_ENSNODE_URL);
            recordsLookupURL.searchParams.set("addresses", [60].join(",")); //we are only interested in the ETH coin type
            recordsLookupURL.searchParams.set("texts", textRecordsToCheck.join(","));

            const recordsResponse = await fetch(recordsLookupURL);
            expect(recordsResponse.status, "Records lookup failed").toBe(200);

            const recordsData = (await recordsResponse.json()) as RecordsAPIResponse;

            console.log("State:", recordsData);
            console.log("-----------");

            // Expect the returned address to match our data
            expect(recordsData.records.addresses["60"], `Contract named=${contract.cachedIdentity.name} has a different address than the cached one`).toEqual(contract.cachedIdentity.contract.address.toLowerCase());

            // Expect records from the response to equal our cached data
            const parsedResponse = responseToProfile(recordsData);
            expect(parsedResponse.docs, `profile.docs field for contract named ${contract.cachedIdentity.name} is stale`).toEqual(contract.cachedIdentity.profile?.docs?.href);
            expect(parsedResponse.compiledMetadata, `profile.compiledMetadata field for contract named ${contract.cachedIdentity.name} is stale`).toEqual(contract.cachedIdentity.profile?.compiledMetadata);
            expect(parsedResponse.avatar, `profile.avatar field for contract named ${contract.cachedIdentity.name} is stale`).toEqual(contract.cachedIdentity.profile?.avatar);
            expect(parsedResponse.audits, `profile.audits field for contract named ${contract.cachedIdentity.name} is stale`).toEqual(contract.cachedIdentity.profile?.audits);

          }

          // If the contract is forward named
          if (contract.cachedIdentity.resolutionStatus === ContractResolutionStatusIds.ForwardNamed){
            // 1) Check that it still doesn't have the primary name set

            // 2) Check that the forward name still resolves to the same address (with useRecords?)
          }

          // If the contract's resolutionStatus is ContractResolutionStatusIds.Unnamed
          if (contract.cachedIdentity.resolutionStatus === ContractResolutionStatusIds.Unnamed){
            // Check that it wasn't named in the meantime
            const expectedResponseValue = null;
            const primaryNameResponse = await fetch(primaryNameLookupURL);
            expect(primaryNameResponse.status, "Primary Name lookup failed").toBe(200);

            const primaryNameData = (await primaryNameResponse.json());

            // Expect this request to return null (the contract is still not primary named)
            expect(primaryNameData["name"]).toEqual(expectedResponseValue);
          }
        }
    });
  });
});
