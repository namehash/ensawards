import { type AppBenchmark } from "data/benchmarks/types.ts";
import { getBenchmarkPoints, getBenchmarksByAppSlug } from "data/benchmarks/utils.ts";

import type { EnsAwardsScore } from "@/components/atoms/ens-awards-score/types";

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
  const appBenchmarks = getBenchmarksByAppSlug(app.appSlug);

  const completedBenchmarks = Object.values(appBenchmarks).filter(
    (benchmark): benchmark is AppBenchmark => benchmark !== undefined,
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
 * Checks if the ENS {@link BestPractice} applies to all types that are specified in {@link AppTypes}.
 */
export const appliesToAllApps = (targets: BestPracticeTarget[]): boolean =>
  Object.values(AppTypes).every((appType) => targets.includes(appType));

/**
 * Compares two apps based on their {@link EnsAwardsScore}.
 */
export const compareApps = (a: App, b: App): number => {
  const aEnsAwardsScore = calcAppScore(a);
  const bEnsAwardsScore = calcAppScore(b);

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
