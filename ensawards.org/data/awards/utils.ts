import { type EnsTokens } from "data/shared/ensTokens";

import { type Award, type AwardFinancial } from "./types";

/**
 * Sorts {@link Award}s of {@link AwardFinancial} type.
 *
 * Prioritizes awards with higher {@link AwardFinancial.price} and,
 * in case of a tie, earlier {@link AwardFinancial.awardedAt} date.
 */
export const sortFinancialAwardsByPrice = (a: AwardFinancial, b: AwardFinancial): number => {
  if (a.price > b.price) return -1;
  if (a.price < b.price) return 1;

  return a.awardedAt - b.awardedAt;
};

/**
 * Checks if a given award value is valid
 * according to the invariants defined in {@link AwardFinancial}.
 */
export const isValidAwardValue = (awardValue: EnsTokens): boolean => {
  return Number.isFinite(awardValue) && awardValue > 0;
};
