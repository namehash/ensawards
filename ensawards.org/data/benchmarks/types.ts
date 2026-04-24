import type { Contribution } from "data/contributors/types.ts";

export const BenchmarkResults = {
  Pass: "passed",
  PartialPass: "partially-passed",
  Fail: "failed",
} as const;

export type BenchmarkResult = (typeof BenchmarkResults)[keyof typeof BenchmarkResults];

/**
 * Represents the benchmark of an {@link App} against a {@link BestPractice}.
 */
export interface AppBenchmark {
  /** The result of the benchmark */
  result: BenchmarkResult;

  /** A record of all contributors involved in the addition or maintenance of the benchmark's data.
   *
   * @invariant Multiple {@link Contribution} from the same contributor on the same app benchmark are not allowed.
   * When a contributor makes updates to their existing contribution,
   * they should update the `lastUpdated` timestamp of their existing `Contribution`.
   */
  contributions: [Contribution, ...Contribution[]];
}
