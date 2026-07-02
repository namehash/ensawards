import { getCurrencyInfo, type Price } from "@ensnode/ensnode-sdk";

//TODO: See https://github.com/namehash/ensawards/issues/151
/**
 * Converts the parsed currency representation from the {@link Price} form in its smallest unit
 * back to its original numeric value.
 *
 * **Note** For large values this conversion may lead to loss of precision
 *
 * @param value - a {@link Price} object with the amount in the smallest unit
 * @returns A number representing the actual amount of the given currency
 *
 * @example
 * Based on the USDC currency
 * interpretCurrency({ currency: "USDC", amount: 123456780n }) // returns 123.45678
 * interpretCurrency({ currency: "USDC", amount: 1000000n }) // returns 1
 * interpretCurrency({ currency: "USDC", amount: 1000n }) // returns 0.001
 */
export const interpretCurrency = (value: Price): number => {
  const currencyInfo = getCurrencyInfo(value.currency);
  return Number(value.amount) / Math.pow(10, currencyInfo.decimals);
};
