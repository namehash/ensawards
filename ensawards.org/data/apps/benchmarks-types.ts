import type { AccountId, UnixTimestamp } from "@ensnode/ensnode-sdk";

import type { BestPracticeApp } from "../ens-best-practices/types.ts";

export enum BenchmarkResult {
  Pass = "Pass",
  PartialPass = "Partial pass",
  Fail = "Fail",
}

/**
 * Represents a benchmark result for a specific best practice within an app.
 */
export interface AppBenchmark {
  /** The best practice being benchmarked */
  bestPractice: BestPracticeApp;
  /** The result of the benchmark */
  result: BenchmarkResult;
  /** The account ID of the person who performed the benchmark */
  benchmarkedBy: AccountId;
  /** Unix timestamp when the benchmark was performed */
  benchmarkedAt: UnixTimestamp;
}
