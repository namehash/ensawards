import type {
  AcceptanceTestBenchmark,
  AcceptanceTestBenchmarkApplicable,
} from "data/acceptance-tests/types.ts";
import { generalizeAcceptanceTestBenchmarks } from "data/acceptance-tests/utils.ts";
import type { AppSlug } from "data/apps/types.ts";
import { getAppBySlug } from "data/apps/utils.ts";
import { getBestPracticeBySlug } from "data/ens-best-practices/utils.ts";
import type { FormatTypeOptions } from "data/shared/format-type-options.ts";
import type { UnixTimestamp } from "enssdk";

import type {
  BestPractice,
  BestPracticeBenchmarks,
  BestPracticeSlug,
} from "../ens-best-practices/types.ts";
import {
  type BestPracticeCategory,
  type BestPracticeCategorySlug,
  BestPracticeTypes,
  CategoryStatuses,
} from "../ens-best-practices/types.ts";
import {
  asEnsAwardsScore,
  type EnsAwardsPoints,
  type EnsAwardsScore,
  type EnsAwardsScoreResult,
  EnsAwardsScoreResultTypes,
  EnsAwardsUndefinedScoreLabels,
} from "../shared/ens-awards-score.ts";
import { APP_BENCHMARKS } from ".";
import {
  type AcceptanceTestBenchmarks,
  type BenchmarkResult,
  BenchmarkResults,
  type BenchmarkSuccessRatio,
} from "./types.ts";

/** Returns all benchmarks of an {@link App} by its {@link AppSlug}.
 */
export function getAppBenchmarks(slug: AppSlug): BestPracticeBenchmarks {
  const appBenchmarks = APP_BENCHMARKS[slug];

  if (appBenchmarks === undefined) {
    throw new Error(
      `Invariant(AppBenchmarks): Benchmarks for app with slug ${slug} are not defined`,
    );
  }
  return appBenchmarks;
}

/**
 * Returns all {@link AcceptanceTestBenchmarks} of a {@link BestPractice} by its {@link BestPracticeSlug}.
 */
export function getAcceptanceTestBenchmarksByBestPractice(
  slug: BestPracticeSlug,
): AcceptanceTestBenchmarks[] {
  const bestPractice = getBestPracticeBySlug(slug);

  if (bestPractice === undefined) {
    throw new Error(`Invariant(BestPracticeSlug): BestPractice with slug ${slug} is not defined`);
  }

  const benchmarks: AcceptanceTestBenchmarks[] = [];

  for (const [appSlug, appBenchmarks] of Object.entries(APP_BENCHMARKS)) {
    const app = getAppBySlug(appSlug);

    if (app === undefined) {
      throw new Error(`Invariant(AppSlug): App with slug ${appSlug} is not defined`);
    }

    if (bestPractice.type === BestPracticeTypes.App && bestPractice.appliesTo.includes(app.type)) {
      const acceptanceTestBenchmarks = appBenchmarks[slug];

      if (acceptanceTestBenchmarks === undefined) {
        throw new Error(
          `Invariant(BestPracticeBenchmarks): Required benchmarks for app-${appSlug} on best practice-${slug} are not defined`,
        );
      }

      benchmarks.push(acceptanceTestBenchmarks);
    }
  }

  return benchmarks;
}

/** Returns the {@link AcceptanceTestBenchmarks} of an {@link App} on a specific {@link BestPractice}
 * decided by the {@link AppSlug} and {@link BestPracticeSlug}.
 * */
export function getAppAcceptanceTestBenchmarks(
  appSlug: AppSlug,
  bestPracticeSlug: BestPracticeSlug,
): AcceptanceTestBenchmarks {
  const appBenchmarks = getAppBenchmarks(appSlug);
  const acceptanceTestBenchmarks = appBenchmarks[bestPracticeSlug];

  if (acceptanceTestBenchmarks === undefined) {
    throw new Error(
      `Invariant(BestPracticeBenchmarks): Required benchmarks for app-${appSlug} on best practice-${bestPracticeSlug} are not defined`,
    );
  }

  return acceptanceTestBenchmarks;
}

/**
 * Returns {@link EnsAwardsPoints} for all possible types of {@link BenchmarkResult}.
 *
 * For now, the points for different {@link BenchmarkResult}s are:
 * {@link BenchmarkResults.Pass} = 1.0
 * {@link BenchmarkResults.PartialPass} = 0.5
 * {@link BenchmarkResults.Fail} = 0.0
 */
export const calcEnsAwardsPoints = (
  benchmark: AcceptanceTestBenchmarkApplicable,
): EnsAwardsPoints => {
  const benchmarkResult = benchmark.result;

  switch (benchmarkResult) {
    case BenchmarkResults.Pass:
      return 1;

    case BenchmarkResults.PartialPass:
      return 0.5;

    // explicit zero value for the failed benchmark
    case BenchmarkResults.Fail:
      return 0;

    default:
      const _exhaustive: never = benchmarkResult;
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
 * An {@link EnsAwardsScoreResult} object containing the score and a label describing the result.
 * The {@link EnsAwardsScoreResult.score} field is:
 *  - undefined - if no benchmarks are completed for the `BestPracticeCategory`,
 * all completed benchmarks returned a not applicable result,
 * or the category status is not `Active`.
 *  - an {@link EnsAwardsScore} calculation for the `BestPracticeCategory` otherwise.
 *
 * @throws if the {@link EnsAwardsScore} invariants are not satisfied
 * @throws if the input benchmarks do not belong to the same `BestPracticeCategory`
 */
export const calcBestPracticeCategoryScore = (
  benchmarks: BestPracticeBenchmarks,
): EnsAwardsScoreResult => {
  let bestPracticeCategory: undefined | BestPracticeCategory = undefined;

  for (const bestPracticeSlug of Object.keys(benchmarks)) {
    const bestPractice = getBestPracticeBySlug(bestPracticeSlug);

    if (!bestPractice) {
      throw new Error(
        `Invariant(BestPracticeSlug): BestPractice with slug ${bestPracticeSlug} is not defined`,
      );
    }

    if (bestPracticeCategory === undefined) {
      bestPracticeCategory = bestPractice.category;
    }

    if (bestPractice.category.categorySlug !== bestPracticeCategory.categorySlug) {
      throw new Error(`All benchmarks must belong to the same category`);
    }
  }

  if (
    bestPracticeCategory === undefined ||
    bestPracticeCategory.status !== CategoryStatuses.Active
  ) {
    return {
      type: EnsAwardsScoreResultTypes.Undefined,
      score: undefined,
      label: EnsAwardsUndefinedScoreLabels.InactiveCategory,
    };
  }

  const completedBenchmarks: AcceptanceTestBenchmark[] = [];

  for (const acceptanceTestBenchmarks of Object.values(benchmarks)) {
    for (const acceptanceTestBenchmark of Object.values(acceptanceTestBenchmarks)) {
      if (acceptanceTestBenchmark !== undefined) {
        completedBenchmarks.push(acceptanceTestBenchmark);
      }
    }
  }

  if (completedBenchmarks.length === 0)
    return {
      type: EnsAwardsScoreResultTypes.Undefined,
      score: undefined,
      label: EnsAwardsUndefinedScoreLabels.Pending,
    };

  // explicitly exclude benchmarks with `NotApplicable` result
  const completedApplicableBenchmarks: AcceptanceTestBenchmarkApplicable[] =
    completedBenchmarks.filter(
      (benchmark): benchmark is AcceptanceTestBenchmarkApplicable =>
        benchmark.result !== BenchmarkResults.NotApplicable,
    );

  if (completedApplicableBenchmarks.length === 0)
    return {
      type: EnsAwardsScoreResultTypes.Undefined,
      score: undefined,
      label: EnsAwardsUndefinedScoreLabels.NotApplicable,
    };

  const score = Math.round(
    (completedApplicableBenchmarks.reduce(
      (sum, benchmark) => sum + calcEnsAwardsPoints(benchmark),
      0,
    ) *
      100) /
      completedApplicableBenchmarks.length,
  );

  return {
    type: EnsAwardsScoreResultTypes.Defined,
    score: asEnsAwardsScore(score),
    label: undefined,
  };
};

/** Declare sort order for benchmark result
 * (Pass → Partial Pass → Fail → Not Applicable) */
const resultOrder = {
  [BenchmarkResults.Pass]: 0,
  [BenchmarkResults.PartialPass]: 1,
  [BenchmarkResults.Fail]: 2,
  [BenchmarkResults.NotApplicable]: 3,
} as const satisfies Record<BenchmarkResult, number>;

/** Sorts two {@link AcceptanceTestBenchmark}s relative to each other. */
export const sortAcceptanceTestBenchmarks = (
  a: AcceptanceTestBenchmark | undefined,
  b: AcceptanceTestBenchmark | undefined,
): number => {
  // All undefined acceptance test benchmarks are interpreted as pending
  // and should be sorted after completed benchmarks
  if (!a && !b) return 0;
  if (!a) return 1;
  if (!b) return -1;

  const resultDiff = resultOrder[a.result] - resultOrder[b.result];
  return resultDiff;
};

/** Sorts two {@link BenchmarkResult}s relative to each other. */
export const sortBenchmarkResults = (
  a: BenchmarkResult | undefined,
  b: BenchmarkResult | undefined,
): number => {
  // All undefined benchmark results are interpreted as pending
  // and should be sorted after completed benchmark results
  if (!a && !b) return 0;
  if (!a) return 1;
  if (!b) return -1;

  const resultDiff = resultOrder[a] - resultOrder[b];
  return resultDiff;
};

export const getAcceptanceTestBenchmarkLastUpdateTimestamp = (
  benchmark: AcceptanceTestBenchmark,
): UnixTimestamp => {
  const contributionTimestamps = benchmark.contributions.map(
    (contribution) => contribution.lastUpdated,
  );

  return Math.max(...contributionTimestamps);
};

export const formatBenchmarkResult = (
  benchmarkResult?: BenchmarkResult,
  options: Omit<FormatTypeOptions, "plural"> = { lowercase: false },
): string => {
  const { lowercase } = options;

  if (!benchmarkResult) {
    return lowercase ? "pending" : "Pending";
  }

  switch (benchmarkResult) {
    case BenchmarkResults.Pass:
      return lowercase ? "passed" : "Passed";

    case BenchmarkResults.PartialPass:
      return lowercase ? "partially passed" : "Partially Passed";

    case BenchmarkResults.Fail:
      return lowercase ? "failed" : "Failed";

    case BenchmarkResults.NotApplicable:
      return lowercase ? "not applicable" : "Not Applicable";

    default:
      const _exhaustive: never = benchmarkResult;
      throw new Error(`Unsupported BenchmarkResult: ${_exhaustive}`);
  }
};

/*
 * Summarizes all acceptance test benchmarks of an `App` related to a `BestPractice` into a single `BenchmarkResult`.
 *
 * @returns an object containing the best practice and the summarized benchmark result for that best practice,
 * if any belonging benchmarks exist. Otherwise, returns the best practice with an undefined benchmark result.
 *
 * @throws Error if `BestPracticeSlug` invariant is violated
 */
export const summarizeAppsAcceptanceTestBenchmarks = (
  bestPracticeSlug: BestPracticeSlug,
  bestPracticeBenchmarks: AcceptanceTestBenchmarks,
): { bestPractice: BestPractice; generalizedBenchmarkResult?: BenchmarkResult } => {
  const bestPractice = getBestPracticeBySlug(bestPracticeSlug);

  if (bestPractice === undefined) {
    throw new Error(
      `Invariant(BestPracticeSlug): Best practice with slug ${bestPracticeSlug} not found`,
    );
  }

  const generalizedBenchmarkResult = generalizeAcceptanceTestBenchmarks(bestPracticeBenchmarks);

  return {
    bestPractice,
    generalizedBenchmarkResult,
  };
};

/**
 * Calculates the {@link BenchmarkSuccessRatio} for a given set of {@link AcceptanceTestBenchmarks}.
 *
 * Omits the `undefined` (pending) benchmarks and the ones with `BenchmarkResults.NotApplicable` from the calculation.
 */
export const calcBenchmarkSuccessRatio = (
  acceptanceTestBenchmarks: AcceptanceTestBenchmarks,
): BenchmarkSuccessRatio | undefined => {
  let testsPassed = 0;
  let allTests = 0;

  for (const benchmark of Object.values(acceptanceTestBenchmarks)) {
    if (benchmark === undefined || benchmark.result === BenchmarkResults.NotApplicable) {
      continue;
    }

    allTests += 1;

    // Currently, we treat `BenchmarkResults.PartialPass`
    // and `BenchmarkResults.Pass` as successful benchmarks.
    if (
      benchmark.result === BenchmarkResults.Pass ||
      benchmark.result === BenchmarkResults.PartialPass
    ) {
      testsPassed += 1;
    }
  }

  if (allTests === 0) {
    return undefined;
  }

  return { testsPassed, allTests };
};

/**
 * Sorts two {@link BenchmarkSuccessRatio}s relative to each other.
 */
export const sortBenchmarkSuccessRatios = (
  a: BenchmarkSuccessRatio | undefined,
  b: BenchmarkSuccessRatio | undefined,
): number => {
  let successRatioDiff = 0;
  if (a !== undefined && b !== undefined) {
    const aNumericalSuccesRatio = a.testsPassed / a.allTests;
    const bNumericalSuccesRatio = b.testsPassed / b.allTests;

    successRatioDiff = bNumericalSuccesRatio - aNumericalSuccesRatio;
  }
  if (a === undefined) successRatioDiff = 1;
  if (b === undefined) successRatioDiff = -1;
  return successRatioDiff;
};
