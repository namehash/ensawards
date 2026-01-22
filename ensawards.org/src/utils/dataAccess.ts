import { APPS } from "@/data/apps.ts";
import { BEST_PRACTICES, BEST_PRACTICE_CATEGORIES } from "@/data/bestPractices.ts";
import { ORGANIZATIONS } from "@/data/organizations.ts";
import { type App, AppTypes, BenchmarkResult } from "@/types/apps.ts";
import type {
  BestPractice,
  BestPracticeAppliesTo,
  BestPracticeCategory,
} from "@/types/bestPractices.ts";
import type { OrgId, Organization } from "@/types/organizations.ts";

export const getOrgById = (orgId: OrgId): Organization => {
  //Because of invariant that ORGANIZATIONS array satisfies we are guaranteed to find corresponding org
  return ORGANIZATIONS.find((org) => org.id === orgId)!;
};

export const getOrgBySlug = (orgSlug: string): Organization | undefined => {
  return ORGANIZATIONS.find((org) => org.slug === orgSlug);
};

export const getAppBySlug = (appSlug: string): App | undefined => {
  return APPS.find((app) => app.slug === appSlug);
};

export const getAppById = (appId: string): App | undefined => {
  return APPS.find((app) => app.id === appId);
};

export const getCategoryBySlug = (categorySlug: string): BestPracticeCategory | undefined => {
  return BEST_PRACTICE_CATEGORIES.find((category) => category.slug === categorySlug);
};

export const getCategoryById = (categoryId: string): BestPracticeCategory | undefined => {
  return BEST_PRACTICE_CATEGORIES.find((category) => category.id === categoryId);
};

export const getBestPracticeBySlug = (bestPracticeSlug: string): BestPractice | undefined => {
  return BEST_PRACTICES.find((bestPractice) => bestPractice.slug === bestPracticeSlug);
};

export const getBestPracticeById = (bestPracticeId: string): BestPractice | undefined =>
  BEST_PRACTICES.find((bestPractice) => bestPractice.id === bestPracticeId);

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

  return (accumulatedBenchmarks * 100) / app.benchmarks.length;
};

/**
 * Calculates how well the benchmarked apps apply this best practice.
 *
 * For now, the weights for different {@link BenchmarkResult}s are:
 * {@link BenchmarkResult.Pass} = 1.0
 * {@link BenchmarkResult.PartialPass} = 0.5
 * {@link BenchmarkResult.Fail} = 0.0
 */
export const calculateAppSupport = (bestPractice: BestPractice): number => {
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

  return (appSupport * 100) / benchmarkedApps;
};

/**
 * Calculates how many apps passed our benchmark on this best practice.
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
 * Checks if the ENS best practice applies to all types that are specified in {@link AppType}.
 */

// TODO: This name sucks, appreciate advice on improving it
export const bestPracticeAppliesToAllApps = (
  bestPracticeApplications: BestPracticeAppliesTo[],
): boolean => {
  const allAppTypes = Object.values(AppTypes);

  for (const appType of allAppTypes) {
    if (!bestPracticeApplications.includes(appType)) return false;
  }

  return true;
};
