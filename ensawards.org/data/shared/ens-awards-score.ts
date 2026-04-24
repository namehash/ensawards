/**
 * Points awarded for a benchmark result, where higher points indicate better benchmark results.
 * Used for calculating an EnsAwardsScore.
 *
 * @invariant EnsAwardsPoints must be a non-negative finite number.
 */
export type EnsAwardsPoints = number;

/**
 * Score for a benchmarked entity ({@link App} or {@link Protocol}) on ENSAwards.
 *
 * Can also be used to identify how well a {@link BestPractice} or
 * {@link BestPracticeCategory} follows established best practices
 * (see {@link calcBestPracticeScore} or {@link calcBestPracticeCategoryScore}).
 *
 * @invariant Must be an integer between 0 and 100.
 */
export type EnsAwardsScore = number;

/**
 * Checks if a number is a valid {@link EnsAwardsScore}.
 */
export const isValidEnsAwardsScore = (maybeScore: number): maybeScore is EnsAwardsScore =>
  Number.isInteger(maybeScore) && maybeScore >= 0 && maybeScore <= 100;

/**
 * Validates that the provided number is a valid {@link EnsAwardsScore}.
 *
 * @throws if the provided score does not satisfy the invariants of {@link EnsAwardsScore}.
 */
export const asEnsAwardsScore = (maybeScore: number): EnsAwardsScore => {
  if (!isValidEnsAwardsScore(maybeScore)) {
    throw new Error(
      `Invariant violation: EnsAwardsScore must be an integer between 0 and 100, but was ${maybeScore} instead`,
    );
  }
  return maybeScore;
};
