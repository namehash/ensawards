/**
 * Points awarded for a benchmark result, where higher points indicate better benchmark results.
 * Used for calculating the EnsAwardsScore.
 *
 * @invariant EnsAwardsPoints must be a non-negative finite number.
 */
export type EnsAwardsPoints = number;

/**
 * Score for a benchmarked entity ({@link App} or {@link Protocol}) on ENSAwards.
 *
 * Can also be used to identify how well a {@link BestPractice} or
 * {@link BestPracticeCategory} follows established best practices
 * (see {@link calcBestPracticeEnsAwardsScore} or {@link calcCategoryScore}).
 *
 * @invariant Must be an integer between 0 and 100.
 */
export type EnsAwardsScore = number;

/**
 * Checks if a number is a valid {@link EnsAwardsScore}.
 */
export const isValidEnsAwardsScore = (maybeScore: number): maybeScore is EnsAwardsScore =>
  Number.isFinite(maybeScore) &&
  Number.isInteger(maybeScore) &&
  maybeScore >= 0 &&
  maybeScore <= 100;
