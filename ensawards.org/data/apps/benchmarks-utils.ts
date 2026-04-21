import { type EnsAwardsScore } from "@/utils/types";

import { type AppBenchmark, BenchmarkResult } from "./benchmarks-types.ts";

/**
 * Returns a weight of all possible types of {@link BenchmarkResult}.
 *
 * For now, the weights for different {@link BenchmarkResult}s are:
 * {@link BenchmarkResult.Pass} = 1.0
 * {@link BenchmarkResult.PartialPass} = 0.5
 * {@link BenchmarkResult.Fail} = 0.0
 */
export const getBenchmarkWeight = (benchmark: AppBenchmark): number => {
  switch (benchmark.result) {
    case BenchmarkResult.Pass:
      return 1;

    case BenchmarkResult.PartialPass:
      return 0.5;

    // explicit zero value for the failed benchmark
    case BenchmarkResult.Fail:
      return 0;

    default:
      const _exhaustive: never = benchmark.result;
      throw new Error(
        `Unsupported BenchmarkResult: ${JSON.stringify(_exhaustive)}. Cannot calculate benchmark weight.`,
      );
  }
};

/**
 * Groups benchmarks by their {@link AppBenchmark.bestPractice.category.id} field.
 */
export const groupBenchmarksByCategory = (benchmarks: AppBenchmark[]): AppBenchmark[][] => {
  const groupedBenchmarks = new Map<string, AppBenchmark[]>();

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
export const calcCategoryScore = (benchmarks: AppBenchmark[]): EnsAwardsScore => {
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
