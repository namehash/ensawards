import type { Contribution } from "data/contributors/types.ts";

import type { UnixTimestamp } from "@ensnode/ensnode-sdk";

import type { BestPracticeApp } from "../ens-best-practices/types.ts";

export enum BenchmarkResult {
  Pass = "Passed",
  PartialPass = "Partially passed",
  Fail = "Failed",
}

/**
 * Represents all types of benchmark statuses on ENSAwards where:
 *
 * Complete - means that an {@link App} that this benchmark is assigned to
 * was benchmarked against a given {@link BestPractice} at least once in the past, and
 * such benchmark is recorded in our data.
 *
 * Pending - means that an {@link App} that this benchmark is assigned to
 * hasn't been benchmarked against a given {@link BestPractice} yet, and such benchmark
 * is automatically appended to our data at build time.
 */
export const BenchmarkStatuses = {
  Completed: "Completed",
  Pending: "Pending",
} as const;

/**
 * The derived string union of possible {@link BenchmarkStatuses}.
 */
export type BenchmarkStatus = (typeof BenchmarkStatuses)[keyof typeof BenchmarkStatuses];

export interface AppBenchmarkAbstract<BenchmarkStatusT extends BenchmarkStatus> {
  /** The best practice being benchmarked */
  bestPractice: BestPracticeApp;

  /** The status of a benchmark */
  status: BenchmarkStatusT;
}

/**
 * Represents a benchmark to be made on a specific {@link App} in regards to an applicable {@link BestPractice}.
 */
export interface AppBenchmarkPending
  extends AppBenchmarkAbstract<typeof BenchmarkStatuses.Pending> {}

/**
 * Represents a benchmark result for a specific {@link BestPractice} within an {@link App}.
 */
export interface AppBenchmarkCompleted
  extends AppBenchmarkAbstract<typeof BenchmarkStatuses.Completed> {
  /** The result of the benchmark */
  result: BenchmarkResult;
  /** Unix timestamp when the benchmark was last updated */
  lastUpdated: UnixTimestamp;
  /** A record of all contributors involved in the addition or maintenance of the benchmark's data */
  contributions: [Contribution, ...Contribution[]];
}

export type EffectiveAppBenchmark = AppBenchmarkPending | AppBenchmarkCompleted;
