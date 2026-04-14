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
