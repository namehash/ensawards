import type { AppSlug } from "data/apps/types.ts";
import { getBestPracticeBySlug } from "data/ens-best-practices/utils.ts";

import type { UnixTimestamp } from "@ensnode/ensnode-sdk";

import { type EnsAwardsScore } from "@/components/atoms/ens-awards-score/types.ts";

import type { BestPracticeSlug } from "../ens-best-practices/types.ts";
import { type CategorySlug } from "../ens-best-practices/types.ts";
import { BENCHMARKS } from ".";
import { type AppBenchmark, BenchmarkResult, type BestPracticeBenchmarks } from "./types.ts";

/** Returns all benchmarks of a {@link App} by its {@link AppSlug}. */
export function getBenchmarksByAppSlug(slug: AppSlug): BestPracticeBenchmarks {
  return BENCHMARKS[slug];
}

/** Returns all benchmarks of a {@link BestPractice} by its {@link BestPracticeSlug}. */
export function getBenchmarksByBestPracticeSlug(
  slug: BestPracticeSlug,
): (AppBenchmark | undefined)[] {
  const benchmarks: (AppBenchmark | undefined)[] = [];

  for (const appBenchmarks of Object.values(BENCHMARKS)) {
    benchmarks.push(appBenchmarks[slug]);
  }

  return benchmarks;
}

/** Returns a single benchmark of an {@link App} on a specific {@link BestPractice}
 * decided by the {@link AppSlug} and {@link BestPracticeSlug}. */
export function getBenchmarkByAppSlugAndBestPracticeSlug(
  appSlug: AppSlug,
  bestPracticeSlug: BestPracticeSlug,
): AppBenchmark | undefined {
  const appBenchmarks = getBenchmarksByAppSlug(appSlug);
  return appBenchmarks[bestPracticeSlug];
}

/**
 * Points awarded for a benchmark result, where higher points indicate better benchmark results.
 * Used for calculating the EnsAwardsScore.
 *
 * @invariant EnsAwardsPoints must be a non-negative finite number.
 */
export type EnsAwardsPoints = number;

/**
 * Returns {@link EnsAwardsPoints} for all possible types of {@link BenchmarkResult}.
 *
 * For now, the points for different {@link BenchmarkResult}s are:
 * {@link BenchmarkResult.Pass} = 1.0
 * {@link BenchmarkResult.PartialPass} = 0.5
 * {@link BenchmarkResult.Fail} = 0.0
 */
export const getBenchmarkPoints = (benchmark: AppBenchmark): EnsAwardsPoints => {
  switch (benchmark.result) {
    case BenchmarkResult.Pass:
      return 1;

    case BenchmarkResult.PartialPass:
      return 0.5;

    // explicit zero value for the failed benchmark
    case BenchmarkResult.Fail:
    default:
      return 0;
  }
};

/**
 * Groups benchmarks by the {@link BestPracticeCategory} they belong to.
 */
export const groupBenchmarksByCategory = (
  benchmarks: BestPracticeBenchmarks,
): Map<CategorySlug, BestPracticeBenchmarks> => {
  const groupedBenchmarks: Map<CategorySlug, BestPracticeBenchmarks> = new Map();

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
 * undefined - if no benchmarks are completed
 * 0 <= x <= 100 - otherwise
 *
 * @throws if the {@link EnsAwardsScore} invariants are not satisfied
 */
export const calcCategoryScore = (
  benchmarks: BestPracticeBenchmarks,
): EnsAwardsScore | undefined => {
  const completedBenchmarks = Object.values(benchmarks).filter(
    (benchmark): benchmark is AppBenchmark => benchmark !== undefined,
  );
  if (completedBenchmarks.length === 0) return undefined;

  const score = Math.round(
    (completedBenchmarks.reduce((sum, benchmark) => sum + getBenchmarkPoints(benchmark), 0) * 100) /
      completedBenchmarks.length,
  );

  // Check EnsAwardsScore invariants
  if (!Number.isFinite(score) || !Number.isInteger(score) || score < 0 || score > 100) {
    throw new Error(
      `Invariant violation: EnsAwardsScore must be an integer between 0 and 100, but was ${score} instead`,
    );
  }

  return score;
};

/** Declare sort order for benchmark result (Pass → Partial Pass → Fail) */
const resultOrder = {
  [BenchmarkResult.Pass]: 0,
  [BenchmarkResult.PartialPass]: 1,
  [BenchmarkResult.Fail]: 2,
} as const satisfies Record<BenchmarkResult, number>;

/** Compares two benchmarks based on their state and result */
export const compareBenchmarks = (
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
