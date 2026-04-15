import { BenchmarkResult } from "data/benchmarks/types.ts";
import { getBenchmarkPoints, getBenchmarksByBestPracticeSlug } from "data/benchmarks/utils.ts";

import type { EnsAwardsScore } from "@/components/atoms/ens-awards-score/types.ts";

import { BEST_PRACTICE_CATEGORIES, ENS_BEST_PRACTICES } from "./index.ts";
import type { BestPractice, BestPracticeApp, BestPracticeCategory } from "./types.ts";

/**
 * Returns a {@link BestPracticeCategory} by {@link BestPracticeCategory.categorySlug}.
 */
export const getCategoryBySlug = (categorySlug: string): BestPracticeCategory | undefined => {
  return BEST_PRACTICE_CATEGORIES.find((category) => category.categorySlug === categorySlug);
};

/**
 * Returns a {@link BestPracticeCategory} by {@link BestPracticeCategory.id}.
 */
export const getCategoryById = (categoryId: string): BestPracticeCategory | undefined => {
  return BEST_PRACTICE_CATEGORIES.find((category) => category.id === categoryId);
};

/**
 * Returns an ENS {@link BestPractice} by {@link BestPractice.bestPracticeSlug}.
 */
export const getBestPracticeBySlug = (bestPracticeSlug: string): BestPractice | undefined => {
  return ENS_BEST_PRACTICES.find(
    (bestPractice) => bestPractice.bestPracticeSlug === bestPracticeSlug,
  );
};

/**
 * Returns an ENS {@link BestPractice} by {@link BestPractice.id}.
 */
export const getBestPracticeById = (bestPracticeId: string): BestPractice | undefined => {
  return ENS_BEST_PRACTICES.find((bestPractice) => bestPractice.id === bestPracticeId);
};

/**
 * Returns all {@link BestPractice}s belonging to the provided {@link BestPracticeCategory}.
 */
export const getBestPracticesByCategory = (category: BestPracticeCategory): BestPractice[] => {
  return ENS_BEST_PRACTICES.filter((bestPractice) => bestPractice.category.id === category.id);
};

/**
 * Calculates an {@link EnsAwardsScore} for a {@link BestPractice},
 * by calculating the average score of all apps that were benchmarked on this best practice.
 *
 * @returns `undefined` if no apps were benchmarked on this best practice,
 * otherwise returns an integer between 0 and 100.
 *
 * The points awarded for different {@link BenchmarkResult}s are defined by the {@link getBenchmarkPoints} function.
 */
export const calcBestPracticeScore = (
  bestPractice: BestPracticeApp,
): EnsAwardsScore | undefined => {
  let benchmarkedApps = 0;
  let bestPracticePoints = 0;

  const bestPracticeBenchmarks = getBenchmarksByBestPracticeSlug(bestPractice.bestPracticeSlug);

  for (const benchmark of bestPracticeBenchmarks) {
    if (benchmark === undefined) {
      continue;
    }

    benchmarkedApps += 1;

    bestPracticePoints += getBenchmarkPoints(benchmark);
  }

  if (benchmarkedApps === 0) return undefined;

  const score = Math.round((bestPracticePoints * 100) / benchmarkedApps);

  // Check EnsAwardsScore invariants
  if (!Number.isFinite(score) || !Number.isInteger(score) || score < 0 || score > 100) {
    throw new Error(
      `Invariant violation: EnsAwardsScore must be an integer between 0 and 100, but was ${score} instead`,
    );
  }

  return score;
};

/**
 * Calculates how many apps passed our benchmark on this {@link BestPractice}.
 *
 * For now, both {@link BenchmarkResult.Pass} and {@link BenchmarkResult.PartialPass} are treated as a pass.
 */
export const calcAppsPassed = (bestPractice: BestPracticeApp): number => {
  let appsPassed = 0;

  const bestPracticeBenchmarks = getBenchmarksByBestPracticeSlug(bestPractice.bestPracticeSlug);

  bestPracticeBenchmarks.forEach((benchmark) => {
    // Explicit acceptance of Pass & Partial Pass results
    if (
      benchmark !== undefined &&
      (benchmark.result === BenchmarkResult.Pass ||
        benchmark.result === BenchmarkResult.PartialPass)
    ) {
      appsPassed += 1;
    }
  });

  return appsPassed;
};
