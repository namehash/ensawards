import { CONTRACTS } from "@/data/contracts.ts";
import { isNormalizedName } from "@ensnode/ensnode-sdk";
import { describe, expect, it } from "vitest";

describe("contracts data", () => {
  const data = CONTRACTS;
  describe("CachedEnsProfile", () => {
    it("if defined, primaryName must be a non-empty normalized ENS name", () => {
      data.forEach((contract) => {
        if (contract.cachedEnsProfile !== null && contract.cachedEnsProfile.primaryName !== null) {
          expect(
            isNormalizedName(contract.cachedEnsProfile.primaryName),
            `Name={${contract.cachedEnsProfile.primaryName}} is not normalized`,
          ).toEqual(true);
        }
      });
    });

    it("if defined, each of the forwardNames must be a non-empty normalized ENS name", () => {
      data.forEach((contract) => {
        if (
          contract.cachedEnsProfile !== null &&
          contract.cachedEnsProfile.forwardNames !== undefined
        ) {
          contract.cachedEnsProfile.forwardNames.forEach((forwardName) => {
            expect(
              isNormalizedName(forwardName),
              `Name={${forwardName}} is not normalized`,
            ).toEqual(true);
          });
        }
      });
    });

    it("if ensMetadata is defined then either primaryName or forwardNames field must be defined and not null", () => {
      data.forEach((contract) => {
        if (
          contract.cachedEnsProfile !== null &&
          contract.cachedEnsProfile.ensMetadata !== undefined
        ) {
          expect(
            contract.cachedEnsProfile.primaryName !== null ||
              contract.cachedEnsProfile.forwardNames !== undefined,
            `Contract=${contract.contract.address} has no defined ENS names and defined ENS metadata`,
          ).toEqual(true);
        }
      });
    });
  });
});
