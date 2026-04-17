import { CONTRACT_NAMING_SEASON_DISTRIBUTED_AWARDS } from "data/contract-naming-season-awards";

import { type $ENS, type ContractNamingSeasonAward } from "./types";

export const CONTRACT_NAMING_SEASON_TOTAL_AWARD_POOL: $ENS = 10000;

export const $ensFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 3,
  maximumFractionDigits: 3,
});

/**
 * Sorts {@link ContractNamingSeasonAward}s.
 *
 * Prioritizes awards with higher {@link ContractNamingSeasonAward.award} and,
 * in case of a tie, earlier {@link ContractNamingSeasonAward.awardedAt} date.
 */
export const sortContractNamingSeasonAwards = (
  a: ContractNamingSeasonAward,
  b: ContractNamingSeasonAward,
): number => {
  if (a.award > b.award) return -1;
  if (a.award < b.award) return 1;

  return a.awardedAt - b.awardedAt;
};

/**
 * Calculates the remaining award pool in ENS Contract Naming Season.
 */
export const calcRemainingAwardPool = (): $ENS => {
  const distributedAwardPool = CONTRACT_NAMING_SEASON_DISTRIBUTED_AWARDS.reduce(
    (acc, award) => acc + award.award,
    0,
  );

  const remainingAwardPool = CONTRACT_NAMING_SEASON_TOTAL_AWARD_POOL - distributedAwardPool;

  if (remainingAwardPool < 0) {
    throw new Error(
      `Invariant(AwardDistributions): Remaining award pool cannot be negative, but was ${remainingAwardPool} instead`,
    );
  }

  return remainingAwardPool;
};
