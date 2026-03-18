import { type EnsAwardsScore } from "@/utils/types";

import { ENS_BEST_PRACTICES } from "../ens-best-practices";
import { type BestPracticeApp, BestPracticeTypes } from "../ens-best-practices/types.ts";
import {
  type AppBenchmarkCompleted,
  type AppBenchmarkPending,
  BenchmarkResult,
  BenchmarkStatuses,
  type EffectiveAppBenchmark,
} from "./benchmarks-types.ts";
import { type AppType } from "./types";

/**
 * Returns a weight of all possible types of {@link BenchmarkResult}.
 *
 * For now, the weights for different {@link BenchmarkResult}s are:
 * {@link BenchmarkResult.Pass} = 1.0
 * {@link BenchmarkResult.PartialPass} = 0.5
 * {@link BenchmarkResult.Fail} = 0.0
 */
export const getBenchmarkWeight = (benchmark: EffectiveAppBenchmark): number => {
  if (benchmark.status === BenchmarkStatuses.Pending) return 0;

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
 * Groups benchmarks by their {@link AppBenchmark.bestPractice.category.id} field.
 */
export const groupBenchmarksByCategory = (
  benchmarks: EffectiveAppBenchmark[],
): EffectiveAppBenchmark[][] => {
  const groupedBenchmarks = new Map<string, EffectiveAppBenchmark[]>();

  for (const benchmark of benchmarks) {
    const { category } = benchmark.bestPractice;
    const categoryBenchmarks = groupedBenchmarks.get(category.id) ?? [];

    categoryBenchmarks.push(benchmark);

    groupedBenchmarks.set(category.id, categoryBenchmarks);
  }

  return Array.from(groupedBenchmarks.values());
};

/**
 * Calculates {@link EnsAwardsScore} for all benchmarks belonging to a single {@link BestPracticeCategory} as a percentage of passed benchmark weight.
 *
 * @returns
 * 0 - if no benchmarks passed, the list is empty or benchmarks don't belong to the same category
 * 0 < x < 100 - otherwise
 *
 * @throws if the {@link EnsAwardsScore} invariants are not satisfied
 */
export const calcCategoryScore = (benchmarks: EffectiveAppBenchmark[]): EnsAwardsScore => {
  if (benchmarks.length === 0) return 0;

  const [firstBenchmark] = benchmarks;
  const areAllBenchmarksOfSameCategory = benchmarks.every(
    (benchmark) => benchmark.bestPractice.category.id === firstBenchmark.bestPractice.category.id,
  );

  if (!areAllBenchmarksOfSameCategory) return 0;

  const score = Math.round(
    (benchmarks.reduce((sum, benchmark) => sum + getBenchmarkWeight(benchmark), 0) * 100) /
      benchmarks.length,
  );

  // Check EnsAwardsScore invariants
  if (!Number.isFinite(score) || !Number.isInteger(score) || score < 0 || score > 100) {
    throw new Error(
      `Invariant violation: EnsAwardsScore must be an integer between 0 and 100, but was ${score} instead`,
    );
  }

  return score;
};

export const buildEffectiveAppBenchmarks = (
  explicitBenchmarks: AppBenchmarkCompleted[],
  appType: AppType,
): EffectiveAppBenchmark[] => {
  const allBenchmarks: EffectiveAppBenchmark[] = [];

  ENS_BEST_PRACTICES.filter(
    (bestPractice): bestPractice is BestPracticeApp =>
      bestPractice.type === BestPracticeTypes.App && bestPractice.appliesTo.includes(appType),
  ).forEach((bestPractice) => {
    const newBenchmark =
      explicitBenchmarks.find((benchmark) => benchmark.bestPractice.id === bestPractice.id) ??
      ({ bestPractice, status: BenchmarkStatuses.Pending } as AppBenchmarkPending);

    allBenchmarks.push(newBenchmark);
  });

  return allBenchmarks;
};
