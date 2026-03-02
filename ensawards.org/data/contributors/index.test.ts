import { SUPPORTED_CHAINS } from "@namehash/namehash-ui";
import { isAddress } from "viem";
import { describe, expect, it } from "vitest";

import type { AccountId } from "@ensnode/ensnode-sdk";

import contributors from ".";

describe("Contributors data", () => {
  const contributorsData = contributors;

  describe("Contributor data", () => {
    it("Should have valid addresses", () => {
      Object.entries(contributorsData).forEach(([name, contributor]: [string, AccountId]) => {
        expect(
          isAddress(contributor.address),
          `Address for contributor ${name} is not valid: ${contributor.address}`,
        ).toBe(true);
      });
    });

    it("Should have valid chain IDs from supported chains", () => {
      const supportedChainIds = SUPPORTED_CHAINS.map((chain) => chain.id);

      Object.entries(contributorsData).forEach(([name, contributor]: [string, AccountId]) => {
        expect(
          supportedChainIds.some((chainId) => chainId === contributor.chainId),
          `Chain ID for contributor ${name} is not in SUPPORTED_CHAINS: ${contributor.chainId}`,
        ).toBe(true);
      });
    });

    it("Should have unique addresses", () => {
      const addresses = Object.values(contributorsData).map((c: AccountId) => c.address);
      const uniqueAddresses = new Set(addresses);

      expect(
        uniqueAddresses.size === addresses.length,
        "Contributor addresses are not unique",
      ).toBe(true);
    });
  });
});
