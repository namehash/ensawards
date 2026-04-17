import { type ContractNamingSeasonAward } from "./types";

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
