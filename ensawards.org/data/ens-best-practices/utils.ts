import { BenchmarkResult } from "data/benchmarks/types.ts";
import { getAppBenchmarksByBestPractice, getEnsAwardsPoints } from "data/benchmarks/utils.ts";
import { type EnsAwardsScore, isValidEnsAwardsScore } from "data/shared/ens-awards-score.ts";

import { BEST_PRACTICE_CATEGORIES, ENS_BEST_PRACTICES } from "./index.ts";
import { type BestPractice, type BestPracticeApp, type BestPracticeCategory } from "./types.ts";

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

export const getBestPracticeTypeLabel = (bestPracticeType: string): string => {
  return bestPracticeType.charAt(0).toUpperCase() + bestPracticeType.slice(1);
};

/**
 * Calculates an {@link EnsAwardsScore} for a {@link BestPractice},
 * by calculating the average score of all apps that were benchmarked on this best practice.
 *
 * @returns `undefined` if no apps were benchmarked on this best practice,
 * otherwise returns the {@link EnsAwardsScore}.
 */
export const calcBestPracticeScore = (
  bestPractice: BestPracticeApp,
): EnsAwardsScore | undefined => {
  let benchmarkedApps = 0;
  let bestPracticePoints = 0;

  const bestPracticeBenchmarks = getAppBenchmarksByBestPractice(bestPractice.bestPracticeSlug);

  for (const benchmark of bestPracticeBenchmarks) {
    if (benchmark === undefined) {
      continue;
    }

    benchmarkedApps += 1;

    bestPracticePoints += getEnsAwardsPoints(benchmark);
  }

  if (benchmarkedApps === 0) return undefined;

  const score = Math.round((bestPracticePoints * 100) / benchmarkedApps);

  // Check EnsAwardsScore invariants
  if (!isValidEnsAwardsScore(score)) {
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

  const bestPracticeBenchmarks = getAppBenchmarksByBestPractice(bestPractice.bestPracticeSlug);

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
