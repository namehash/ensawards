import { type AppBenchmark } from "data/benchmarks/types.ts";
import { getAppBenchmarks, getEnsAwardsPoints } from "data/benchmarks/utils.ts";
import { type EnsAwardsScore, isValidEnsAwardsScore } from "data/shared/ens-awards-score.ts";

import type { BestPractice, BestPracticeTarget } from "../ens-best-practices/types.ts";
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
 * @returns undefined - if no benchmarks are completed.
 */
export const calcAppScore = (app: App): EnsAwardsScore | undefined => {
  const appBenchmarks = getAppBenchmarks(app.appSlug);

  const completedBenchmarks = Object.values(appBenchmarks).filter(
    (benchmark) => benchmark !== undefined,
  );

  if (completedBenchmarks.length === 0) return undefined;

  const totalPoints = completedBenchmarks.reduce(
    (sum, benchmark) => sum + getEnsAwardsPoints(benchmark),
    0,
  );

  // Guarantee EnsAwardsScore type invariant by rounding the score to the nearest integer
  const score = Math.round((totalPoints * 100) / completedBenchmarks.length);

  // Check EnsAwardsScore invariants
  if (!isValidEnsAwardsScore(score)) {
    throw new Error(
      `Invariant violation: EnsAwardsScore must be an integer between 0 and 100, but was ${score} instead`,
    );
  }

  return score;
};

/**
 * Checks if the ENS {@link BestPractice} applies to all types that are specified in {@link AppTypes}.
 */
export const appliesToAllApps = (targets: BestPracticeTarget[]): boolean =>
  Object.values(AppTypes).every((appType) => targets.includes(appType));

/**
 * Sorts two {@link App}s based on their {@link EnsAwardsScore}.
 */
export const sortApps = (a: App, b: App): number => {
  const aScore = calcAppScore(a);
  const bScore = calcAppScore(b);

  if (aScore === undefined && bScore === undefined) return 0;
  if (bScore === undefined) return -1;
  if (aScore === undefined) return 1;

  return bScore - aScore;
};

/** Builds the URL for an app's Open Graph image.
 *
 * @returns undefined if the app doesn't have an og image path, otherwise returns the URL for the og image.
 */
export const buildAppOgImageUrl = (imagePath: string | undefined): URL | undefined => {
  if (!imagePath) return undefined;

  return new URL(imagePath, "https://ensawards.org/data/apps/");
};

export const getAppTypeLabel = (appType: AppType): string => {
  return appType.charAt(0).toUpperCase() + appType.slice(1);
};
