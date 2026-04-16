import { type ContractNamingSeasonAward } from "./types";

/**
 * Sorts {@link ContractNamingSeasonAward}s.
 *
 * Prioritizes awards with higher `awardValue` and, in case of a tie, earlier `awardedAt` date.
 */
export const sortContractNamingSeasonAwards = (
  a: ContractNamingSeasonAward,
  b: ContractNamingSeasonAward,
): number => {
  if (a.award > b.award) return -1;
  if (a.award < b.award) return 1;

  return a.awardedAt - b.awardedAt;
};
