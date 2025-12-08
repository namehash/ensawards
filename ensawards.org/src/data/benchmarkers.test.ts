import type { AccountId } from "@ensnode/ensnode-sdk";
import { benchmarkers } from "@/data/benchmarkers";
import { isAddress } from "viem";
import { describe, expect, it } from "vitest";

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

    it("Should have valid chain IDs", () => {
      Object.entries(benchmarkersData).forEach(([name, benchmarker]: [string, AccountId]) => {
        expect(
          typeof benchmarker.chainId === "number" && benchmarker.chainId > 0,
          `Chain ID for benchmarker ${name} is not valid: ${benchmarker.chainId}`,
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
