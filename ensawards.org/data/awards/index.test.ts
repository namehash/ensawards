import { AwardedEntityTypes } from "data/awards/awarded-entity-types";
import { isValidCustomAwardedEntityName } from "data/awards/awarded-entity-utils";
import { AwardTypes } from "data/awards/types";
import { isValidAwardValue } from "data/awards/utils";
import type { IncentiveProgramSlug } from "data/incentive-programs/types";
import { isNormalizedAddress, type NormalizedAddress } from "data/shared/normalizedAddress";
import { describe, expect, it } from "vitest";

import { AWARDS } from ".";

describe("Awards data", () => {
  it("Should have valid and unique recipient addresses per incentive program", () => {
    const awardsByIncentiveProgram: Map<IncentiveProgramSlug, Set<NormalizedAddress>> = new Map();
    AWARDS.forEach((award) => {
      const addresses =
        awardsByIncentiveProgram.get(award.associatedIncentiveProgramSlug) ??
        new Set<NormalizedAddress>();

      expect(
        isNormalizedAddress(award.awardedTo),
        `Invalid address: ${award.awardedTo}`,
      ).toStrictEqual(true);
      expect(
        addresses.has(award.awardedTo),
        `Duplicate address found: ${award.awardedTo} for incentive program: ${award.associatedIncentiveProgramSlug}`,
      ).toBe(false);

      addresses.add(award.awardedTo);
      awardsByIncentiveProgram.set(award.associatedIncentiveProgramSlug, addresses);
    });
  });
});

it("Should have valid award amounts when `AwardType` is `FinancialAward`", () => {
  AWARDS.filter((award) => award.type === AwardTypes.FinancialAward).forEach((award) => {
    expect(isValidAwardValue(award.price)).toStrictEqual(true);
  });
});

it("If `awardedEntity` is provided and of type `Custom`, it should have a valid name", () => {
  AWARDS.forEach((award) => {
    if (award.awardedEntity && award.awardedEntity.type === AwardedEntityTypes.Custom) {
      expect(
        isValidCustomAwardedEntityName(award.awardedEntity.name),
        `Custom entity name is empty for an award awarded to: ${award.awardedTo}`,
      ).toEqual(true);
    }
  });
});
