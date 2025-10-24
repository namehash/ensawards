import { CONTRACTS } from "@/data/contracts.ts";
import { ContractResolutionStatusIds } from "@/types/contracts.ts";
import { getChainName } from "@/utils/chains.ts";
import { type ChainId, isNormalizedName } from "@ensnode/ensnode-sdk";
import { type Address, getAddress, isAddress, isAddressEqual } from "viem";
import { describe, expect, it } from "vitest";

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
  });
});
