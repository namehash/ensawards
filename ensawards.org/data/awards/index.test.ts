import { AwardTypes } from "data/awards/types";
import { isValidAwardValue } from "data/awards/utils";
import { EntityMetadataTypes } from "data/entity-metadata/types";
import { isValidCustomEntityName } from "data/entity-metadata/utils";
import type { IncentiveProgramSlug } from "data/incentive-programs/types";
import { type AccountIdString, isNormalizedAddress, stringifyAccountId } from "enssdk";
import { describe, expect, it } from "vitest";

import { AWARDS } from ".";

describe("Awards data", () => {
  // TODO: We are planning to remove this constraint. See: https://github.com/namehash/ensawards/issues/191
  it("Should have valid and unique recipient AccountIds per incentive program", () => {
    const awardsByIncentiveProgram: Map<IncentiveProgramSlug, Set<AccountIdString>> = new Map();
    AWARDS.forEach((award) => {
      const accountIdStrings =
        awardsByIncentiveProgram.get(award.associatedIncentiveProgramSlug) ??
        new Set<AccountIdString>();

      expect(
        isNormalizedAddress(award.awardedTo.address),
        `Invalid address: ${award.awardedTo.address}`,
      ).toStrictEqual(true);
      expect(
        accountIdStrings.has(stringifyAccountId(award.awardedTo)),
        `Duplicate address found: ${stringifyAccountId(award.awardedTo)} for incentive program: ${award.associatedIncentiveProgramSlug}`,
      ).toBe(false);

      accountIdStrings.add(stringifyAccountId(award.awardedTo));
      awardsByIncentiveProgram.set(award.associatedIncentiveProgramSlug, accountIdStrings);
    });
  });

  it("Should have valid award amounts when `AwardType` is `FinancialAward`", () => {
    AWARDS.filter((award) => award.type === AwardTypes.FinancialAward).forEach((award) => {
      expect(
        isValidAwardValue(award.price),
        `Invalid price for award: ${stringifyAccountId(award.awardedTo)} in incentive program: ${award.associatedIncentiveProgramSlug}`,
      ).toStrictEqual(true);
    });
  });

  it("If `awardedEntityMetadata` is provided and of type `Custom`, it should have a valid name", () => {
    AWARDS.forEach((award) => {
      if (
        award.awardedEntityMetadata &&
        award.awardedEntityMetadata.type === EntityMetadataTypes.Custom
      ) {
        expect(
          isValidCustomEntityName(award.awardedEntityMetadata.name),
          `Custom entity name is empty for an award awarded to: ${stringifyAccountId(award.awardedTo)}`,
        ).toEqual(true);
      }
    });
  });
});
