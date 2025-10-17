import { CONTRACTS } from "@/data/contracts.ts";
import { isNormalizedName } from "@ensnode/ensnode-sdk";
import { describe, expect, it } from "vitest";
import {ContractResolutionStatusIds} from "@/types/contracts.ts";

describe("contracts data", () => {
  const data = CONTRACTS;
  describe("CachedEnsProfile", () => {
    it("For `cachedIdentity` of type `ContractIdentityPrimaryNamed` or `ContractIdentityForwardNamed`, `name` must be a non-empty normalized ENS name", () => {
      data.forEach((contract) => {
        if (contract.cachedIdentity.resolutionStatus == ContractResolutionStatusIds.PrimaryNamed || contract.cachedIdentity.resolutionStatus === ContractResolutionStatusIds.ForwardNamed) {
          expect(
              contract.cachedIdentity.name.length > 0 && isNormalizedName(contract.cachedIdentity.name),
            `Name={${contract.cachedIdentity.name}} is not normalized`,
          ).toEqual(true);
        }
      });
    });
  });
});
