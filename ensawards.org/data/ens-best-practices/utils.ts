import { AppTypes } from "data/apps/types.ts";
import { type AcceptanceTestBenchmarks, BenchmarkResults } from "data/benchmarks/types.ts";
import { calcEnsAwardsPoints, getAppBenchmarksByBestPractice } from "data/benchmarks/utils.ts";
import { ProtocolTypes } from "data/protocols/types.ts";
import { asEnsAwardsScore, type EnsAwardsScore } from "data/shared/ens-awards-score.ts";
import type { FormatTypeOptions } from "data/shared/format-type-options.ts";

import { BEST_PRACTICE_CATEGORIES, ENS_BEST_PRACTICES } from "./index.ts";
import {
  type BestPractice,
  type BestPracticeApp,
  type BestPracticeCategory,
  type BestPracticeCategorySlug,
  type BestPracticeSlug,
  type BestPracticeTarget,
  type BestPracticeType,
  BestPracticeTypes,
} from "./types.ts";

/**
 * Returns a {@link BestPracticeCategory} by {@link BestPracticeCategory.categorySlug}.
 */
export const getBestPracticeCategoryBySlug = (
  categorySlug: BestPracticeCategorySlug,
): BestPracticeCategory | undefined => {
  return BEST_PRACTICE_CATEGORIES.find((category) => category.categorySlug === categorySlug);
};

/**
 * Returns a {@link BestPracticeCategory} by {@link BestPracticeCategory.id}.
 */
// TODO: The id field in BestPracticeCategory is currently a string.
// Since we will be removing it (see https://github.com/namehash/ensawards/issues/182)
// I don't want to create a type/ type alias for it
export const getBestPracticeCategoryById = (
  categoryId: string,
): BestPracticeCategory | undefined => {
  return BEST_PRACTICE_CATEGORIES.find((category) => category.id === categoryId);
};

/**
 * Returns an ENS {@link BestPractice} by {@link BestPractice.bestPracticeSlug}.
 */
export const getBestPracticeBySlug = (
  bestPracticeSlug: BestPracticeSlug,
): BestPractice | undefined => {
  return ENS_BEST_PRACTICES.find(
    (bestPractice) => bestPractice.bestPracticeSlug === bestPracticeSlug,
  );
};

/**
 * Returns an ENS {@link BestPractice} by {@link BestPractice.id}.
 */
// TODO: The id field in BestPractice is currently a string.
// Since we will be removing it (see https://github.com/namehash/ensawards/issues/182)
// I don't want to create a type/ type alias for it
export const getBestPracticeById = (bestPracticeId: string): BestPractice | undefined => {
  return ENS_BEST_PRACTICES.find((bestPractice) => bestPractice.id === bestPracticeId);
};

/**
 * Returns all {@link BestPractice}s belonging to the provided {@link BestPracticeCategory}.
 */
export const getBestPracticesByCategory = (category: BestPracticeCategory): BestPractice[] => {
  return ENS_BEST_PRACTICES.filter((bestPractice) => bestPractice.category.id === category.id);
};

export const formatBestPracticeType = (
  bestPracticeType: BestPracticeType,
  options: FormatTypeOptions = { lowercase: false, plural: false },
): string => {
  const { lowercase, plural } = options;
  let formattedType: string;
  switch (bestPracticeType) {
    case BestPracticeTypes.Protocol:
      formattedType = plural ? "Protocols" : "Protocol";
      break;

    case BestPracticeTypes.App:
      formattedType = plural ? "Apps" : "App";
      break;

    default:
      const _exhaustive: never = bestPracticeType;
      throw new Error(`Unsupported BestPracticeType: ${_exhaustive}`);
  }

  if (lowercase) {
    formattedType = formattedType.toLowerCase();
  }

  return formattedType;
};

/**
 * Calculates an {@link EnsAwardsScore} for a {@link BestPractice},
 * by calculating the total score of all apps that were benchmarked on this best practice
 * and dividing it by the total number of acceptance test benchmarks completed on it.
 *
 * @returns `undefined` if no apps were benchmarked on this best practice,
 * otherwise returns the {@link EnsAwardsScore}.
 */
export const calcBestPracticeScore = (
  bestPractice: BestPracticeApp,
): EnsAwardsScore | undefined => {
  let benchmarkedAcceptanceTests = 0;
  let bestPracticePoints = 0;

  const bestPracticeBenchmarks = getAppBenchmarksByBestPractice(
    bestPractice.bestPracticeSlug,
  ).flatMap((appBenchmark) => Object.values(appBenchmark));

  for (const acceptanceTestBenchmark of bestPracticeBenchmarks) {
    if (acceptanceTestBenchmark === undefined) {
      continue;
    }

    benchmarkedAcceptanceTests += 1;

    bestPracticePoints += calcEnsAwardsPoints(acceptanceTestBenchmark);
  }

  if (benchmarkedAcceptanceTests === 0) return undefined;

  const score = Math.round((bestPracticePoints * 100) / benchmarkedAcceptanceTests);

  return asEnsAwardsScore(score);
};

// TODO: How to define a passing app now? When it passes all acceptance tests? When it's ensawards score is at least 50? When it passes at least one of them?
// For now, I chose the 1st option, but I'm open to changing that
const isAppPassing = (appBenchmarks: AcceptanceTestBenchmarks): boolean => {
  let allTestsPassed = true;

  for (const acceptanceTestBenchmark of Object.values(appBenchmarks)) {
    // Explicit acceptance of Pass & Partial Pass results
    if (
      acceptanceTestBenchmark === undefined ||
      (acceptanceTestBenchmark.result !== BenchmarkResults.Pass &&
        acceptanceTestBenchmark.result !== BenchmarkResults.PartialPass)
    ) {
      allTestsPassed = false;
      break;
    }
  }
  return allTestsPassed;
};
/**
 * Calculates how many apps passed our acceptance tests on this {@link BestPractice}.
 *
 * For now, both {@link BenchmarkResults.Pass} and {@link BenchmarkResults.PartialPass} are treated as a pass.
 */
export const calcAppsPassed = (bestPractice: BestPracticeApp): number => {
  let appsPassed = 0;

  const bestPracticeBenchmarks = getAppBenchmarksByBestPractice(bestPractice.bestPracticeSlug);

  bestPracticeBenchmarks.forEach((acceptanceTestsBenchmarks) => {
    if (isAppPassing(acceptanceTestsBenchmarks)) {
      appsPassed += 1;
    }
  });

  return appsPassed;
};

export const formatBestPracticeTarget = (
  target: BestPracticeTarget,
  options: FormatTypeOptions = { lowercase: false, plural: false },
): string => {
  const { lowercase, plural } = options;
  let formattedTarget: string;
  switch (target) {
    case AppTypes.Explorer:
      formattedTarget = plural ? "Explorers" : "Explorer";
      break;

    case AppTypes.Wallet:
      formattedTarget = plural ? "Wallets" : "Wallet";
      break;

    case ProtocolTypes.DAO:
      formattedTarget = plural ? "DAOs" : "DAO";
      break;

    case ProtocolTypes.DeFi:
      formattedTarget = plural ? "DeFi protocols" : "DeFi protocol";
      break;

    default:
      const _exhaustive: never = target;
      throw new Error(`Unsupported BestPracticeTarget: ${_exhaustive}`);
  }

  if (lowercase) {
    formattedTarget = formattedTarget.toLowerCase();
  }

  return formattedTarget;
};
