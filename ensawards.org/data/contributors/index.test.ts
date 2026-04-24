import { SUPPORTED_CHAINS } from "@namehash/namehash-ui";
import { isNormalizedAddress } from "data/shared/normalizedAddress";
import { isValidSlug } from "data/shared/slugs";
import { getAddress } from "viem";
import { describe, expect, it } from "vitest";

import type { AccountId, ChainId } from "@ensnode/ensnode-sdk";

import contributors from ".";

describe("Contributors data", () => {
  const contributorsData = contributors;

  describe("Contributor data", () => {
    it("Should have valid, normalized addresses", () => {
      Object.entries(contributorsData).forEach(([name, contributor]: [string, AccountId]) => {
        expect(
          isNormalizedAddress(contributor.address),
          `Address for contributor ${name} is not valid: ${contributor.address}`,
        ).toEqual(true);
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

    it("Should have valid and unique contributor aliases", () => {
      const aliases = Object.keys(contributorsData);
      const uniqueAliases = new Set();

      aliases.forEach((alias) => {
        expect(isValidSlug(alias), `Contributor alias "${alias}" is not valid.`).toBe(true);
        expect(uniqueAliases.has(alias), `Contributor alias "${alias}" is not unique.`).toBe(false);
        uniqueAliases.add(alias);
      });
    });

    it("Should have unique addresses per chain", () => {
      const addressesPerChain: Record<ChainId, Set<string>> = {};

      Object.values(contributorsData).forEach((contributor: AccountId) => {
        if (!addressesPerChain[contributor.chainId]) {
          addressesPerChain[contributor.chainId] = new Set();
        }
        addressesPerChain[contributor.chainId].add(getAddress(contributor.address));
      });

      Object.entries(addressesPerChain).forEach(([chainId, addresses]) => {
        expect(
          addresses.size,
          `Contributor addresses are not unique for chain ID ${chainId}`,
        ).toEqual(
          Object.values(contributorsData).filter(
            (contributor: AccountId) => contributor.chainId === Number(chainId),
          ).length,
        );
      });
    });
  });
});
