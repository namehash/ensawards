import { CONTRACTS } from "@/data/contracts.ts";
import { isNormalizedName } from "@ensnode/ensnode-sdk";
import { describe, expect, it } from "vitest";

describe("contracts data", () => {
  const data = CONTRACTS;
  describe("CachedEnsProfile", () => {
    it("ensName must be a non-empty normalized ENS name", () => {
      data.forEach((contract) => {
        if (contract.cachedEnsProfile !== null) {
          expect(
            isNormalizedName(contract.cachedEnsProfile.ensName),
            `Name={${contract.cachedEnsProfile.ensName}} is not normalized`,
          ).toEqual(true);
        }
      });
    });
  });
});
