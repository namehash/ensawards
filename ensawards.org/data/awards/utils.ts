import { interpretCurrency } from "data/shared/currencies";

import type { Price } from "@ensnode/ensnode-sdk";

import { type AwardFinancial } from "./types";

/**
 * Sorts {@link AwardFinancial}s.
 *
 * Prioritizes awards with higher {@link AwardFinancial.price.amount} and,
 * in case of a tie, earlier {@link AwardFinancial.awardedAt} date.
 *
 * @throws
 * If the two awards have different {@link AwardFinancial.price.currency} values.
 */
export const sortFinancialAwardsByPrice = (a: AwardFinancial, b: AwardFinancial): number => {
  if (a.price.currency !== b.price.currency) {
    throw new Error(
      `Cannot compare awards with \`price\` in different currencies: ${a.price.currency} vs ${b.price.currency}`,
    );
  }

  const aPriceAmount = a.price.amount;
  const bPriceAmount = b.price.amount;

  if (aPriceAmount > bPriceAmount) return -1;
  if (aPriceAmount < bPriceAmount) return 1;

  return a.awardedAt - b.awardedAt;
};

/**
 * Checks if a given award value is valid
 * according to the invariants defined in {@link AwardFinancial}.
 */
export const isValidAwardValue = (awardPrice: Price): boolean => {
  // Check the raw `Price.amount` value first
  if (awardPrice.amount <= 0n) {
    return false;
  }

  // Then check the user-facing interpreted value
  const interpretedAmount = interpretCurrency(awardPrice);
  return Number.isFinite(interpretedAmount) && interpretedAmount > 0;
};
