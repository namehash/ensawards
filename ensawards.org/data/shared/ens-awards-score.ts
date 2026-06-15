import type { FormatTypeOptions } from "data/shared/format-type-options";

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

export const EnsAwardsUndefinedScoreLabels = {
  Pending: "pending",
  NotApplicable: "not-applicable",
  InactiveCategory: "inactive-category",
} as const;

export type EnsAwardsUndefinedScoreLabel =
  (typeof EnsAwardsUndefinedScoreLabels)[keyof typeof EnsAwardsUndefinedScoreLabels];

export const formatEnsAwardsUndefinedScoreLabel = (
  label: EnsAwardsUndefinedScoreLabel,
  options: Omit<FormatTypeOptions, "plural"> = { lowercase: false },
): string => {
  const { lowercase } = options;

  switch (label) {
    case EnsAwardsUndefinedScoreLabels.Pending:
      return lowercase ? "pending" : "Pending";

    case EnsAwardsUndefinedScoreLabels.NotApplicable:
      return lowercase ? "not applicable" : "Not Applicable";

    case EnsAwardsUndefinedScoreLabels.InactiveCategory:
      return lowercase ? "inactive category" : "Inactive Category";

    default:
      const _exhaustive: never = label;
      throw new Error(`Unsupported EnsAwardsUndefinedScoreLabel: ${_exhaustive}`);
  }
};

export interface EnsAwardsScoreResult {
  /**
   * Calculated EnsAwardsScore for the benchmarked entity
   * ({@link App}, {@link Protocol}, {@link BestPractice}, or {@link BestPracticeCategory}).
   *
   * Can be `undefined` if no benchmarks were completed or if all completed benchmarks returned a not applicable result.
   */
  score?: EnsAwardsScore;

  /**
   * Label to display instead of the score when necessary.
   * @invariant Required for `undefined` scores to provide context to the user.
   */
  label?: EnsAwardsUndefinedScoreLabel;
}

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
