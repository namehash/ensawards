/** An amount in units of $ENS */
export type EnsTokens = number;
// TODO: Use an import from ensnode-sdk when the support for $ENS is implemented.
// See https://github.com/namehash/ensnode/issues/1941

export const ENS_TOKENS_TO_USDC_CONVERSION_RATE = 5.72;

export const ensTokenFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

export const ensTokenFormatterShort = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
