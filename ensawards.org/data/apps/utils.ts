import type {
  BestPractice,
  BestPracticeApp,
  BestPracticeTarget,
} from "../ens-best-practices/types.ts";
import { BenchmarkResult } from "./benchmarks-types.ts";
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
 * Calculates ENS Awards score for an app as a percentage of passed benchmark weight.
 *
 * For now, the weights for different {@link BenchmarkResult}s are:
 * {@link BenchmarkResult.Pass} = 1.0
 * {@link BenchmarkResult.PartialPass} = 0.5
 * {@link BenchmarkResult.Fail} = 0.0
 */
export const calculateAppEnsAwardsScore = (app: App) => {
  const accumulatedBenchmarks = app.benchmarks.reduce((sum, benchmark) => {
    switch (benchmark.result) {
      case BenchmarkResult.Pass:
        return sum + 1;

      case BenchmarkResult.PartialPass:
        return sum + 0.5;

      default:
        return sum;
    }
  }, 0);

  if (app.benchmarks.length === 0) return 0;

  return (accumulatedBenchmarks * 100) / app.benchmarks.length;
};

/**
 * Calculates how well the benchmarked apps apply this {@link BestPractice}.
 *
 * For now, the weights for different {@link BenchmarkResult}s are:
 * {@link BenchmarkResult.Pass} = 1.0
 * {@link BenchmarkResult.PartialPass} = 0.5
 * {@link BenchmarkResult.Fail} = 0.0
 */
export const calculateAppSupport = (bestPractice: BestPracticeApp): number => {
  let benchmarkedApps = 0;
  let appSupport = 0;

  for (const app of APPS) {
    const appBenchmark = app.benchmarks.find(
      (benchmark) => benchmark.bestPractice.id === bestPractice.id,
    );

    if (appBenchmark === undefined) {
      continue;
    }

    benchmarkedApps += 1;

    switch (appBenchmark.result) {
      case BenchmarkResult.Pass:
        appSupport += 1;
        break;

      case BenchmarkResult.PartialPass:
        appSupport += 0.5;
        break;

      default:
        // Explicit non-increase for failed benchmark
        appSupport += 0;
        break;
    }
  }

  if (benchmarkedApps === 0) return 0;

  return (appSupport * 100) / benchmarkedApps;
};

/**
 * Calculates how many apps passed our benchmark on this {@link BestPractice}.
 *
 * For now, both {@link BenchmarkResult.Pass} and {@link BenchmarkResult.PartialPass} are treated as a pass.
 */
export const calculateAppsPassed = (bestPractice: BestPractice): number => {
  let appsPassed = 0;

  APPS.forEach((app) => {
    const appBenchmark = app.benchmarks.find(
      (benchmark) => benchmark.bestPractice.id === bestPractice.id,
    );

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
