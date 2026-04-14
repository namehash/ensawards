import type { EnsAwardsScore } from "@/components/atoms/ens-awards-score/types";

import type {
  BestPractice,
  BestPracticeApp,
  BestPracticeTarget,
} from "../ens-best-practices/types.ts";
import {
  type AppBenchmarkCompleted,
  BenchmarkResult,
  BenchmarkStatuses,
} from "./benchmarks-types.ts";
import { getBenchmarkPoints } from "./benchmarks-utils.ts";
import { APPS } from "./index.ts";
import { type App, type AppType, AppTypes } from "./types.ts";

const AppTypeSlugMapping = new Map<string, AppType>([
  ["wallet", AppTypes.Wallet],
  ["explorer", AppTypes.Explorer],
]);

/**
 * Maps an app type slug to its {@link AppType}.
 */
export const getAppTypeBySlug = (appTypeSlug: string): AppType | undefined =>
  AppTypeSlugMapping.get(appTypeSlug);

/**
 * Returns an {@link App} by {@link App.appSlug}.
 */
export const getAppBySlug = (appSlug: string): App | undefined => {
  return APPS.find((app) => app.appSlug === appSlug);
};

/**
 * Returns an {@link App} by {@link App.id}.
 */
export const getAppById = (appId: string): App | undefined => {
  return APPS.find((app) => app.id === appId);
};

/**
 * Returns an {@link App} by {@link App.name}.
 */
export const getAppByName = (appName: string): App | undefined => {
  return APPS.find((app) => app.name === appName);
};

/**
 * Calculates {@link EnsAwardsScore} for an app.
 *
 * @returns undefined - if no benchmarks are completed or the list of app's benchmarks is empty.
 */
export const calcAppEnsAwardsScore = (app: App): EnsAwardsScore | undefined => {
  const completedBenchmarks = app.benchmarks.filter(
    (benchmark): benchmark is AppBenchmarkCompleted =>
      benchmark.status === BenchmarkStatuses.Completed,
  );

  if (completedBenchmarks.length === 0) return undefined;

  const accumulatedBenchmarkPoints = completedBenchmarks.reduce(
    (sum, benchmark) => sum + getBenchmarkPoints(benchmark),
    0,
  );

  // Guarantee EnsAwardsScore type invariant by rounding the score to the nearest integer
  const score = Math.round((accumulatedBenchmarkPoints * 100) / completedBenchmarks.length);

  // Check EnsAwardsScore invariants
  if (!Number.isFinite(score) || !Number.isInteger(score) || score < 0 || score > 100) {
    throw new Error(
      `Invariant violation: EnsAwardsScore must be an integer between 0 and 100, but was ${score} instead`,
    );
  }

  return score;
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
export const calcBestPracticeEnsAwardsScore = (
  bestPractice: BestPracticeApp,
): EnsAwardsScore | undefined => {
  let benchmarkedApps = 0;
  let bestPracticePoints = 0;

  for (const app of APPS) {
    const appBenchmark = app.benchmarks.find(
      (benchmark): benchmark is AppBenchmarkCompleted =>
        benchmark.bestPractice.id === bestPractice.id &&
        benchmark.status === BenchmarkStatuses.Completed,
    );

    if (appBenchmark === undefined) {
      continue;
    }

    benchmarkedApps += 1;

    bestPracticePoints += getBenchmarkPoints(appBenchmark);
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

  APPS.forEach((app) => {
    const appBenchmark = app.benchmarks.find(
      (benchmark): benchmark is AppBenchmarkCompleted =>
        benchmark.bestPractice.id === bestPractice.id &&
        benchmark.status === BenchmarkStatuses.Completed,
    );

    // Explicit acceptance of Pass & Partial Pass results
    if (
      appBenchmark !== undefined &&
      (appBenchmark.result === BenchmarkResult.Pass ||
        appBenchmark.result === BenchmarkResult.PartialPass)
    ) {
      appsPassed += 1;
    }
  });

  return appsPassed;
};

/**
 * Checks if the ENS {@link BestPractice} applies to all types that are specified in {@link AppTypes}.
 */
export const appliesToAllApps = (targets: BestPracticeTarget[]): boolean =>
  Object.values(AppTypes).every((appType) => targets.includes(appType));

/**
 * Compares two apps based on their {@link EnsAwardsScore}.
 */
export const compareApps = (a: App, b: App): number => {
  const aEnsAwardsScore = calcAppEnsAwardsScore(a);
  const bEnsAwardsScore = calcAppEnsAwardsScore(b);

  if (aEnsAwardsScore === undefined && bEnsAwardsScore === undefined) return 0;
  if (bEnsAwardsScore === undefined) return 1;
  if (aEnsAwardsScore === undefined) return -1;

  return bEnsAwardsScore - aEnsAwardsScore;
};

/** Builds the URL's href for an app's Open Graph image.
 *
 * @returns undefined if the app doesn't have an og image path, otherwise returns the URL string for the og image.
 */
export const buildAppOgImageUrlHref = (imagePath: string | undefined): string | undefined => {
  if (!imagePath) return undefined;

  return new URL(imagePath, "https://ensawards.org/data/apps/").href;
};
