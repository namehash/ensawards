import { AWARDS } from "data/awards";
import { type Award, AwardTypes } from "data/awards/types";
import { INCENTIVE_PROGRAMS } from "data/incentive-programs";
import type { IncentiveProgram, IncentiveProgramSlug } from "data/incentive-programs/types";

export const getIncentiveProgramBySlug = (
  incentiveProgramSlug: IncentiveProgramSlug,
): IncentiveProgram | undefined => {
  return INCENTIVE_PROGRAMS.find(
    (program) => program.incentiveProgramSlug === incentiveProgramSlug,
  );
};

export const getAwardsByIncentiveProgramSlug = (
  incentiveProgramSlug: IncentiveProgramSlug,
): Award[] => {
  return AWARDS.filter((award) => award.associatedIncentiveProgramSlug === incentiveProgramSlug);
};

/**
 * Returns the sum of all financial awards for a given {@link IncentiveProgram}.
 *
 * If there are no financial awards, it returns 0.
 */
export const sumIncentiveProgramFinancialAwards = (
  incentiveProgramSlug: IncentiveProgramSlug,
): number => {
  const incentiveProgramFinancialAwards = getAwardsByIncentiveProgramSlug(
    incentiveProgramSlug,
  ).filter((award) => award.type === AwardTypes.FinancialAward);

  return incentiveProgramFinancialAwards.reduce((acc, award) => acc + award.price, 0);
};

/**
 * Calculates the remaining award pool for a given {@link IncentiveProgram}.
 *
 * @throws If the calculated remaining award pool is negative.
 * @throws If the incentive program with the given slug
 * is not of type {@link IncentiveProgramAwardPool} or does not exist.
 */
export const calcIncentiveProgramRemainingAwardPool = (
  incentiveProgramSlug: IncentiveProgramSlug,
): number => {
  const totalAwardPool = getIncentiveProgramBySlug(incentiveProgramSlug)?.totalAwardPool ?? 0;

  if (totalAwardPool === undefined) {
    throw new Error(
      `Incentive program with slug ${incentiveProgramSlug} is not of type "IncentiveProgramAwardPool".`,
    );
  }

  const remainingAwardPool =
    totalAwardPool - sumIncentiveProgramFinancialAwards(incentiveProgramSlug);

  if (remainingAwardPool < 0) {
    throw new Error(
      `Invariant(IncentiveProgramAwardPool.totalAwardPool): Remaining award pool cannot be negative, but was ${remainingAwardPool} instead`,
    );
  }

  return remainingAwardPool;
};
