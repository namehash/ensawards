import { calcEnsAwardsPoints, getAppBenchmarks } from "data/benchmarks/utils.ts";
import {
  type EnsAwardsPoints,
  type EnsAwardsScore,
  validateEnsAwardsScore,
} from "data/shared/ens-awards-score.ts";

import type { BestPractice, BestPracticeTarget } from "../ens-best-practices/types.ts";
import { APPS } from "./index.ts";
import { type App, type AppSlug, type AppType, AppTypes } from "./types.ts";

/**
 * Validates a string as an {@link AppType}.
 */
export const validateAppType = (maybeAppType: string): AppType => {
  switch (maybeAppType) {
    case "wallet":
      return AppTypes.Wallet;
    case "explorer":
      return AppTypes.Explorer;
    default:
      throw new Error(`Invalid AppType value: ${maybeAppType}`);
  }
};

/**
 * Returns an {@link App} by {@link App.appSlug}.
 */
export const getAppBySlug = (appSlug: AppSlug): App | undefined => {
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

  const totalPoints: EnsAwardsPoints = completedBenchmarks.reduce(
    (sum, benchmark) => sum + calcEnsAwardsPoints(benchmark),
    0,
  );

  // Guarantee EnsAwardsScore type invariant by rounding the score to the nearest integer
  const score = Math.round((totalPoints * 100) / completedBenchmarks.length);

  validateEnsAwardsScore(score);

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
 * @returns
 * * `undefined` if the app doesn't have an OG image path.
 * In this case, a default OG image will be used for the app.
 * Otherwise, the URL for the OG image is returned.
 */
export const buildAppOgImageUrl = (imagePath: string | undefined): URL | undefined => {
  if (!imagePath) return undefined;

  return new URL(imagePath, "https://ensawards.org/data/apps/");
};

export const formatAppType = (appType: AppType, lowercase: boolean = false): string => {
  switch (appType) {
    case AppTypes.Wallet:
      return lowercase ? "wallet" : "Wallet";

    case AppTypes.Explorer:
      return lowercase ? "explorer" : "Explorer";

    default:
      const _exhaustive: never = appType;
      throw new Error(`Unsupported AppType: ${_exhaustive}`);
  }
};
