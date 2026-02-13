import { SUPPORTED_CHAINS } from "@namehash/namehash-ui";
import { isAddress } from "viem";
import { describe, expect, it } from "vitest";

import type { AccountId } from "@ensnode/ensnode-sdk";

import { benchmarkers } from "@/data/benchmarkers/index.ts";

describe("Benchmarkers data", () => {
  const benchmarkersData = benchmarkers;

  describe("Benchmarker data", () => {
    it("Should have valid addresses", () => {
      Object.entries(benchmarkersData).forEach(([name, benchmarker]: [string, AccountId]) => {
        expect(
          isAddress(benchmarker.address),
          `Address for benchmarker ${name} is not valid: ${benchmarker.address}`,
        ).toBe(true);
      });
    });

    it("Should have valid chain IDs from supported chains", () => {
      const supportedChainIds = SUPPORTED_CHAINS.map((chain) => chain.id);

      Object.entries(benchmarkersData).forEach(([name, benchmarker]: [string, AccountId]) => {
        expect(
          supportedChainIds.some((chainId) => chainId === benchmarker.chainId),
          `Chain ID for benchmarker ${name} is not in SUPPORTED_CHAINS: ${benchmarker.chainId}`,
        ).toBe(true);
      });
    });

    it("Should have unique addresses", () => {
      const addresses = Object.values(benchmarkersData).map((b: AccountId) => b.address);
      const uniqueAddresses = new Set(addresses);

      expect(
        uniqueAddresses.size === addresses.length,
        "Benchmarker addresses are not unique",
      ).toBe(true);
    });
  });
});
