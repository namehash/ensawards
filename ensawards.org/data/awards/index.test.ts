import { AwardedEntityTypes } from "data/awards/awarded-entity-types";
import { AwardTypes } from "data/awards/types";
import { isValidAwardValue, isValidCustomAwardedEntityName } from "data/awards/utils";
import { getIncentiveProgramBySlug } from "data/incentive-programs/utils";
import { isNormalizedAddress, type NormalizedAddress } from "data/shared/normalizedAddress";
import { describe, expect, it } from "vitest";

import { AWARDS } from ".";

describe("Awards data", () => {
  const data = AWARDS;
  it("Should have valid and unique recipient addresses", () => {
    Array.from(AWARDS).forEach(([, awards]) => {
      const addresses: Set<NormalizedAddress> = new Set();
      awards.forEach((award) => {
        expect(
          isNormalizedAddress(award.awardedTo),
          `Invalid address: ${award.awardedTo}`,
        ).toStrictEqual(true);
        expect(addresses.has(award.awardedTo), `Duplicate address found: ${award.awardedTo}`).toBe(
          false,
        );
        addresses.add(award.awardedTo);
      });
    });
  });

  it("Should only have awards of `RecognitionAward` type if `totalAwardPool` is not defined for the corresponding Incentive Program", () => {
    Array.from(AWARDS).forEach(([incentiveProgramSlug, awards]) => {
      const incentiveProgram = getIncentiveProgramBySlug(incentiveProgramSlug);

      if (!incentiveProgram) {
        throw new Error(
          `Invariant(IncentiveProgramSlug): Incentive program with slug="${incentiveProgramSlug}" not found`,
        );
      }

      if (!incentiveProgram.totalAwardPool) {
        awards.forEach((award) => {
          expect(
            award.type === AwardTypes.RecognitionAward,
            `Award given to ${award.awardedTo} in Incentive Program with slug="${incentiveProgramSlug}" has type=${award.type}, but should be ${AwardTypes.RecognitionAward} since the Incentive Program does not define a totalAwardPool`,
          ).toStrictEqual(true);
        });
      }
    });
  });

  it("Should have valid award amounts when `AwardType` is `FinancialAward`", () => {
    Array.from(AWARDS)
      .flatMap(([, awards]) => awards)
      .filter((award) => award.type === AwardTypes.FinancialAward)
      .forEach((award) => {
        expect(isValidAwardValue(award.award)).toStrictEqual(true);
      });
  });

  it("If `awardedEntity` is provided and of type `Custom`, it should have a valid name", () => {
    Array.from(AWARDS)
      .flatMap(([, awards]) => awards)
      .forEach((award) => {
        if (award.awardedEntity && award.awardedEntity.type === AwardedEntityTypes.Custom) {
          expect(
            isValidCustomAwardedEntityName(award.awardedEntity.name),
            `Custom entity name is empty for an award awarded to: ${award.awardedTo}`,
          ).toEqual(true);
        }
      });
  });
});
