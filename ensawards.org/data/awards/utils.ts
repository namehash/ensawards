import { interpretCurrency } from "data/shared/currencies";

import type { Price } from "@ensnode/ensnode-sdk";

import { type Award, type AwardFinancial } from "./types";

/**
 * Sorts {@link Award}s of {@link AwardFinancial} type.
 *
 * Prioritizes awards with higher {@link AwardFinancial.price.amount} and,
 * in case of a tie, earlier {@link AwardFinancial.awardedAt} date.
 */
export const sortFinancialAwardsByPrice = (a: AwardFinancial, b: AwardFinancial): number => {
  const aPriceAmount = interpretCurrency(a.price);
  const bPriceAmount = interpretCurrency(b.price);
  if (aPriceAmount > bPriceAmount) return -1;
  if (aPriceAmount < bPriceAmount) return 1;

  return a.awardedAt - b.awardedAt;
};

/**
 * Checks if a given award value is valid
 * according to the invariants defined in {@link AwardFinancial}.
 */
export const isValidAwardValue = (awardPrice: Price): boolean => {
  const awardValue = interpretCurrency(awardPrice);
  return Number.isFinite(awardValue) && awardValue > 0;
};
