import type { AppSlug } from "data/apps/types.ts";
import type { Contribution } from "data/contributors/types.ts";
import type { BestPracticeSlug } from "data/ens-best-practices/types";

export enum BenchmarkResult {
  Pass = "passed",
  PartialPass = "partially-passed",
  Fail = "failed",
}

/**
 * Represents the benchmark of an {@link App} against a {@link BestPractice}.
 */
export interface AppBenchmark {
  /** The result of the benchmark */
  result: BenchmarkResult;

  /** A record of all contributors involved in the addition or maintenance of the benchmark's data.
   *
   * @invariant Multiple {@link Contribution} from the same contributor is not allowed.
   * When a contributor makes updates to their existing contribution, they should update the `lastUpdated` timestamp.
   */
  contributions: [Contribution, ...Contribution[]];
}
