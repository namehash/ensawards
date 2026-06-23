import type { AcceptanceTestBenchmark, AcceptanceTestSlug } from "data/acceptance-tests/types";

export const BenchmarkResults = {
  Pass: "passed",
  PartialPass: "partially-passed",
  Fail: "failed",
  NotApplicable: "not-applicable",
} as const;

export type BenchmarkResult = (typeof BenchmarkResults)[keyof typeof BenchmarkResults];

/**
 * Represents the benchmarks of an {@link App} against {@link AcceptanceTest}s of {@link BestPractice}s.
 *
 * @invariant
 * An explicit key for each {@link AcceptanceTestSlug} should be added to this `Record`
 * for each {@link AcceptanceTest} available on a given best practice.
 *
 * If an app doesn't have a benchmark completed for an `AcceptanceTest`
 * then the benchmark should be explicitly set to `undefined`.
 *
 * Otherwise, the value should be an `AcceptanceTestBenchmark`
 * describing how the related app performed for the `AcceptanceTest`.
 */
export type AcceptanceTestBenchmarks = Record<
  AcceptanceTestSlug,
  AcceptanceTestBenchmark | undefined
>;

/**
 * Represents the ratio of failed benchmarks
 * for a given {@link App}, {@link BestPractice}, or {@link BestPracticeCategory}.
 */
export interface BenchmarkFailRatio {
  /**
   * Number of all tests that
   * had a benchmark result of `BenchmarkResults.Fail` for the given {@link App}, {@link BestPractice}, or {@link BestPracticeCategory}.
   *
   * @invariant
   * Must be >= 0
   */
  benchmarksFailed: number;

  /**
   * Number of all test benchmarks that were relevant
   * for the given {@link App}, {@link BestPractice}, or {@link BestPracticeCategory}.
   *
   * Includes `pending` and `not-applicable` benchmarks.
   *
   * @invariant
   * Must be greater or equal to `benchmarksFailed`.
   */
  allBenchmarks: number;
}
