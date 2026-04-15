import type { AppSlug } from "data/apps/types.ts";
import type { Contribution } from "data/contributors/types.ts";
import type { BestPracticeSlug } from "data/ens-best-practices/types";

export enum BenchmarkResult {
  Pass = "Passed",
  PartialPass = "Partially passed",
  Fail = "Failed",
}

/**
 * Represents a benchmark result.
 */
export interface AppBenchmark {
  /** The result of the benchmark */
  result: BenchmarkResult;

  /** A record of all contributors involved in the addition or maintenance of the benchmark's data.
   *
   * @invariant A single contributor can only appear once in a specific contribution array,
   * but can mark new contribution by changing {@link lastUpdated} timestamp.
   */
  contributions: [Contribution, ...Contribution[]];
}

/**
 * Defines a relation between a {@link BestPractice} and an {@link AppBenchmark}.
 *
 * @invariant Each best practice must define an explicit key.
 */
export type BestPracticeBenchmarks = Record<BestPracticeSlug, AppBenchmark | undefined>;

/**
 * Defines a relation between an {@link App} and its {@link BestPracticeBenchmarks}s.
 * Each app can have multiple benchmarks, but each benchmark must be associated with a specific best practice.
 *
 * @invariant Each app must define an explicit key.
 */
export type AppBenchmarks = Record<AppSlug, BestPracticeBenchmarks>;
