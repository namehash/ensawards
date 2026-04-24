import type { AppSlug } from "data/apps/types.ts";
import { getBestPracticeBySlug } from "data/ens-best-practices/utils.ts";
import type { FormatTypeOptions } from "data/shared/format-type-options.ts";

import type { UnixTimestamp } from "@ensnode/ensnode-sdk";

import type { BestPracticeBenchmarks, BestPracticeSlug } from "../ens-best-practices/types.ts";
import { type BestPracticeCategorySlug } from "../ens-best-practices/types.ts";
import {
  asEnsAwardsScore,
  type EnsAwardsPoints,
  type EnsAwardsScore,
} from "../shared/ens-awards-score.ts";
import { APP_BENCHMARKS } from ".";
import { type AppBenchmark, type BenchmarkResult, BenchmarkResults } from "./types.ts";

/** Returns all benchmarks of an {@link App} by its {@link AppSlug}.
 */
export function getAppBenchmarks(slug: AppSlug): BestPracticeBenchmarks {
  return APP_BENCHMARKS[slug];
}

/** Returns all benchmarks of a {@link BestPractice} by its {@link BestPracticeSlug}.
 *
 * If the related {@link App} doesn't have a benchmark completed for the specified {@link BestPractice}
 * then this function will return `undefined` as a representation of a pending benchmark for that app.
 *
 * Otherwise, the value will be an `AppBenchmark`
 * describing how the related {@link App} performed for the {@link BestPractice}.
 */
export function getAppBenchmarksByBestPractice(
  slug: BestPracticeSlug,
): (AppBenchmark | undefined)[] {
  const benchmarks: (AppBenchmark | undefined)[] = [];

  for (const appBenchmarks of Object.values(APP_BENCHMARKS)) {
    benchmarks.push(appBenchmarks[slug]);
  }

  return benchmarks;
}

/** Returns a single benchmark of an {@link App} on a specific {@link BestPractice}
 * decided by the {@link AppSlug} and {@link BestPracticeSlug}.
 * */
export function getAppBenchmark(
  appSlug: AppSlug,
  bestPracticeSlug: BestPracticeSlug,
): AppBenchmark | undefined {
  const appBenchmarks = getAppBenchmarks(appSlug);
  return appBenchmarks[bestPracticeSlug];
}

/**
 * Returns {@link EnsAwardsPoints} for all possible types of {@link BenchmarkResult}.
 *
 * For now, the points for different {@link BenchmarkResult}s are:
 * {@link BenchmarkResults.Pass} = 1.0
 * {@link BenchmarkResults.PartialPass} = 0.5
 * {@link BenchmarkResults.Fail} = 0.0
 */
export const calcEnsAwardsPoints = (benchmark: AppBenchmark): EnsAwardsPoints => {
  switch (benchmark.result) {
    case BenchmarkResults.Pass:
      return 1;

    case BenchmarkResults.PartialPass:
      return 0.5;

    // explicit zero value for the failed benchmark
    case BenchmarkResults.Fail:
      return 0;

    default:
      const _exhaustive: never = benchmark.result;
      throw new Error(`Unsupported BenchmarkResult: ${_exhaustive}`);
  }
};

/**
 * Groups benchmarks by the {@link BestPracticeCategory} they belong to.
 */
export const groupBenchmarksByCategory = (
  benchmarks: BestPracticeBenchmarks,
): Map<BestPracticeCategorySlug, BestPracticeBenchmarks> => {
  const groupedBenchmarks: Map<BestPracticeCategorySlug, BestPracticeBenchmarks> = new Map();

  for (const [bestPracticeSlug, benchmark] of Object.entries(benchmarks)) {
    const bestPractice = getBestPracticeBySlug(bestPracticeSlug);

    if (!bestPractice) continue;

    const { category } = bestPractice;
    const categoryBenchmarks = groupedBenchmarks.get(category.categorySlug) ?? {};

    categoryBenchmarks[bestPracticeSlug] = benchmark;

    groupedBenchmarks.set(category.categorySlug, categoryBenchmarks);
  }

  return groupedBenchmarks;
};

/**
 * Calculates {@link EnsAwardsScore} for all benchmarks belonging to a single {@link BestPracticeCategory}.
 *
 * @returns
 * undefined - if no benchmarks are completed for the `BestPracticeCategory`.
 * Otherwise, an {@link EnsAwardsScore} calculation for the `BestPracticeCategory`
 *
 * @throws if the {@link EnsAwardsScore} invariants are not satisfied
 */
export const calcBestPracticeCategoryScore = (
  benchmarks: BestPracticeBenchmarks,
): EnsAwardsScore | undefined => {
  const completedBenchmarks = Object.values(benchmarks).filter(
    (benchmark) => benchmark !== undefined,
  );
  if (completedBenchmarks.length === 0) return undefined;

  const score = Math.round(
    (completedBenchmarks.reduce((sum, benchmark) => sum + calcEnsAwardsPoints(benchmark), 0) *
      100) /
      completedBenchmarks.length,
  );

  return asEnsAwardsScore(score);
};

/** Declare sort order for benchmark result (Pass → Partial Pass → Fail) */
const resultOrder = {
  [BenchmarkResults.Pass]: 0,
  [BenchmarkResults.PartialPass]: 1,
  [BenchmarkResults.Fail]: 2,
} as const satisfies Record<BenchmarkResult, number>;

/** Sorts two {@link AppBenchmark}s relative to each other. */
export const sortBenchmarks = (
  a: AppBenchmark | undefined,
  b: AppBenchmark | undefined,
): number => {
  // All undefined benchmarks are interpreted as pending
  // and should be sorted after completed benchmarks
  if (!a && !b) return 0;
  if (!a) return 1;
  if (!b) return -1;

  const resultDiff = resultOrder[a.result] - resultOrder[b.result];
  return resultDiff;
};

export const getBenchmarkLastUpdateTimestamp = (benchmark: AppBenchmark): UnixTimestamp => {
  const contributionTimestamps = benchmark.contributions.map(
    (contribution) => contribution.lastUpdated,
  );

  return Math.max(...contributionTimestamps);
};

export const formatBenchmarkResult = (
  benchmark?: AppBenchmark,
  options: Omit<FormatTypeOptions, "plural"> = { lowercase: false },
): string => {
  const { lowercase } = options;

  if (!benchmark) {
    return lowercase ? "pending" : "Pending";
  }

  switch (benchmark.result) {
    case BenchmarkResults.Pass:
      return lowercase ? "passed" : "Passed";

    case BenchmarkResults.PartialPass:
      return lowercase ? "partially passed" : "Partially Passed";

    case BenchmarkResults.Fail:
      return lowercase ? "failed" : "Failed";

    default:
      const _exhaustive: never = benchmark.result;
      throw new Error(`Unsupported BenchmarkResult: ${_exhaustive}`);
  }
};
