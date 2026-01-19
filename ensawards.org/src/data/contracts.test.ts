import { CONTRACTS } from "@/data/contracts.ts";
import {
  type ContractIdentityForwardNamed,
  type ContractIdentityPrimaryNamed,
  type ContractIdentityResolved,
  ContractResolutionStatusIds,
  type EnsProfileForContract,
} from "@/types/contracts.ts";
import { getENSNodeUrl } from "@/utils/env";
import {
  type ChainId,
  ENSNodeClient,
  type ResolveRecordsResponse,
  type ResolverRecordsResponseBase,
  evmChainIdToCoinType,
  isNormalizedName,
} from "@ensnode/ensnode-sdk";
import { getChainName } from "@namehash/namehash-ui";
import { millisecondsInSecond } from "date-fns/constants";
import { type Address, isAddress, isAddressEqual } from "viem";
import { describe, expect, it } from "vitest";

const client = new ENSNodeClient({
  url: getENSNodeUrl(),
});

/**
 * Serializes {@link EnsProfileForContract} into
 * an expected {@link ResolveRecordsResponse} "texts" field to facilitate data validation.
 */
const serializeEnsProfileForContract = (
  profile?: EnsProfileForContract,
): Omit<ResolverRecordsResponseBase, "name" | "addresses"> => {
  if (profile === undefined) {
    return {
      texts: {
        docs: null,
        "compiled-metadata": null,
        avatar: null,
        audits: null,
      },
    } as const satisfies Omit<ResolverRecordsResponseBase, "name" | "addresses">;
  }

  return {
    texts: {
      docs: profile.docs ? profile.docs.href : null,
      "compiled-metadata": profile.compiledMetadata ? profile.compiledMetadata.href : null,
      avatar: profile.avatar ? profile.avatar.href : null,
      audits: profile.audits ? JSON.stringify(profile.audits) : null,
      //TODO: to be honest I have no idea how such object could look like,
      // as I couldn't find any examples, but I'll assume it's a stringified JSON for now
    },
  } as const satisfies Omit<ResolverRecordsResponseBase, "name" | "addresses">;
};

const testContractsCachedProfile = async (
  contractsCachedIdentity: ContractIdentityPrimaryNamed | ContractIdentityForwardNamed,
) => {
  const { records } = await client.resolveRecords(contractsCachedIdentity.name, {
    addresses: [evmChainIdToCoinType(contractsCachedIdentity.contract.chain.id)],
    texts: ["docs", "compiled-metadata", "avatar", "audits"],
  });

  // Expect the returned address to match our data

  // NOTE: This check is only relevant for the forward named contracts,
  // as it is redundant for the primary named contracts that already passed the `testContractsPrimaryName` test.
  // We perform it anyway for the sake of code simplicity, as well as,
  // having a consistent data model for the `resolveRecords` response.
  const resolvedAddress =
    records.addresses[evmChainIdToCoinType(contractsCachedIdentity.contract.chain.id)];

  expect(
    resolvedAddress !== null &&
      isAddressEqual(contractsCachedIdentity.contract.address, resolvedAddress as Address),
    `Contract named=${contractsCachedIdentity.name} has a different address than the cached one on ${getChainName(contractsCachedIdentity.contract.chain.id)} chain.`,
  ).toEqual(true);

  // Expect records.texts from the response to equal our cached data
  const serializedProfile = serializeEnsProfileForContract(contractsCachedIdentity.profile);

  expect(
    records.texts.docs,
    `profile.docs field for contract: ${contractsCachedIdentity.name} is stale`,
  ).toEqual(serializedProfile.texts.docs);
  expect(
    records.texts["compiled-metadata"],
    `profile.compiledMetadata field for contract: ${contractsCachedIdentity.name} is stale`,
  ).toEqual(serializedProfile.texts["compiled-metadata"]);
  expect(
    records.texts.avatar,
    `profile.avatar field for contract: ${contractsCachedIdentity.name} is stale`,
  ).toEqual(serializedProfile.texts.avatar);
  expect(
    records.texts.audits,
    `profile.audits field for contract: ${contractsCachedIdentity.name} is stale`,
  ).toEqual(serializedProfile.texts.audits);
};

const testContractsPrimaryName = async (contractsCachedIdentity: ContractIdentityResolved) => {
  const { name } = await client.resolvePrimaryName(
    contractsCachedIdentity.contract.address,
    contractsCachedIdentity.contract.chain.id,
  );

  // If contract's resolutionStatus is ContractResolutionStatusIds.PrimaryNamed,
  // expect response to match its cached name
  if (contractsCachedIdentity.resolutionStatus === ContractResolutionStatusIds.PrimaryNamed) {
    expect(name).toEqual(contractsCachedIdentity.name);
  }

  // For forward named and unnamed contracts expect the response value to be null
  // (the contract still isn't primary named)
  else {
    const expectedResponseValue = null;
    expect(name).toEqual(expectedResponseValue);
  }
};

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
            `Name={${contract.cachedIdentity.name}} is empty or is not ENS normalized`,
          ).toEqual(true);
        }
      });
    });

    it("The `ContractDeployment.address` must be a valid and in checksum format", () => {
      data.forEach((contract) =>
        expect(
          isAddress(contract.cachedIdentity.contract.address),
          `The address=${contract.cachedIdentity.contract.address} is not valid or not in checksum format.`,
        ).toEqual(true),
      );
    });

    it("No two contracts share the same address and chainId", () => {
      const contractAddressesPerChain = new Map<ChainId, Set<Address>>();

      data.forEach((contract) => {
        const contractsChainId = contract.cachedIdentity.contract.chain.id;
        const contractsAddress = contract.cachedIdentity.contract.address;

        if (!contractAddressesPerChain.has(contractsChainId)) {
          contractAddressesPerChain.set(contractsChainId, new Set<Address>());
        }

        // The set will always be defined. We made sure with the if statement above
        const setOfAddressesForChain = contractAddressesPerChain.get(contractsChainId)!;

        setOfAddressesForChain.forEach((address) =>
          expect(
            isAddressEqual(address, contractsAddress),
            `Address=${contractsAddress} is duplicated for ${getChainName(contractsChainId)} chain.`,
          ).toEqual(false),
        );

        setOfAddressesForChain.add(contractsAddress);
      });
    });

    it("The `ContractDeployment.codeName` must be a non-empty string", () => {
      data.forEach((contract) =>
        expect(
          contract.cachedIdentity.contract.codeName.length,
          `The codeName for contract with address=${contract.cachedIdentity.contract.address} is an empty string`,
        ).toBeGreaterThan(0),
      );
    });

    it(
      "All cached ENS identities match the current state in ENS",
      async () => {
        for (const contract of data) {
          // 1) Check if the contract's primary name is unchanged
          // (either still the same or still not set)
          await testContractsPrimaryName(contract.cachedIdentity);

          // If the contract's resolutionStatus is ContractResolutionStatusIds.PrimaryNamed or ContractResolutionStatusIds.ForwardNamed,
          if (
            contract.cachedIdentity.resolutionStatus === ContractResolutionStatusIds.PrimaryNamed ||
            contract.cachedIdentity.resolutionStatus === ContractResolutionStatusIds.ForwardNamed
          ) {
            // 2) Check that records from the response to equal our cached profile data
            await testContractsCachedProfile(contract.cachedIdentity);
          }
        }
      },
      300 * millisecondsInSecond,
    );
    // wait 5 mins before terminating
    // Might need longer if we add more data (was 60s, now is 300s & seems like it's still not enough)
    // For current "prod" data (94 contracts) previously set up 60s
    // were too short for consistent pass (always timed out)
  });
});
