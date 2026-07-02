import { AwardTypes } from "data/awards/types";
import { isValidAwardValue } from "data/awards/utils";
import { type IncentiveProgramSlug, IncentiveProgramTypes } from "data/incentive-programs/types";
import { getAwardsByIncentiveProgramSlug } from "data/incentive-programs/utils";
import { isValidSlug } from "data/shared/slugs";
import { describe, expect, it } from "vitest";

import { areStringsUnique } from "@/utils";

import { INCENTIVE_PROGRAMS } from ".";

describe("Incentive Program data", () => {
  const data = INCENTIVE_PROGRAMS;

  it("Should have valid and unique slugs", () => {
    const slugArray: IncentiveProgramSlug[] = [];

    data.forEach((incentiveProgram) => {
      expect(
        isValidSlug(incentiveProgram.incentiveProgramSlug),
        `Slug={${incentiveProgram.incentiveProgramSlug}} is not valid`,
      ).toEqual(true);

      slugArray.push(incentiveProgram.incentiveProgramSlug);
    });

    expect(areStringsUnique(slugArray), `Slugs for Incentive Programs are not unique.`).toEqual(
      true,
    );
  });

  it("For the AwardPool type, all of program's awards should be of the same currency as the program's totalAwardPool", () => {
    data.forEach((incentiveProgram) => {
      if (incentiveProgram.type === IncentiveProgramTypes.AwardPool) {
        const programCurrency = incentiveProgram.totalAwardPool.currency;

        getAwardsByIncentiveProgramSlug(incentiveProgram.incentiveProgramSlug)
          .filter((award) => award.type === AwardTypes.FinancialAward)
          .forEach((financialAward) => {
            expect(
              financialAward.price.currency,
              `Financial award with transaction hash ${financialAward.transaction.transactionHash} has currency ${financialAward.price.currency} which does not match the program's totalAwardPool currency ${programCurrency}`,
            ).toEqual(programCurrency);
          });
      }
    });
  });

  it("For the AwardPool type, the program's `totalAwardPool` should be valid", () => {
    data.forEach((incentiveProgram) => {
      if (incentiveProgram.type === IncentiveProgramTypes.AwardPool) {
        expect(
          isValidAwardValue(incentiveProgram.totalAwardPool),
          `Incentive program with slug ${incentiveProgram.incentiveProgramSlug} has invalid totalAwardPool value ${incentiveProgram.totalAwardPool.amount}`,
        ).toEqual(true);
      }
    });
  });
});
