import type { Contribution } from "data/contributors/types.ts";

import type { UnixTimestamp } from "@ensnode/ensnode-sdk";

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
  /** Unix timestamp when the benchmark was last updated */
  lastUpdated: UnixTimestamp;
  /** A record of all contributors involved in the addition or maintenance of the benchmark's data */
  contributions: [Contribution, ...Contribution[]];
}
