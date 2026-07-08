// TODO: Add dynamic currency conversion rate lookups
export const ENS_TOKENS_TO_USDC_CONVERSION_RATE = 5.72;

export const ensTokenFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

export const ensTokenFormatterShort = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
