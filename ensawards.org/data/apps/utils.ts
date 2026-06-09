import { getAcceptanceTestBenchmarksByApp } from "data/acceptance-tests/utils.ts";
import { AWARDS } from "data/awards/index.ts";
import type { Award } from "data/awards/types.ts";
import { calcEnsAwardsPoints } from "data/benchmarks/utils.ts";
import { EntityMetadataTypes } from "data/entity-metadata/types.ts";
import {
  asEnsAwardsScore,
  type EnsAwardsPoints,
  type EnsAwardsScore,
} from "data/shared/ens-awards-score.ts";
import type { FormatTypeOptions } from "data/shared/format-type-options.ts";

import { getEnsAwardsBaseUrl } from "@/utils/index.ts";

import type { BestPractice, BestPracticeTarget } from "../ens-best-practices/types.ts";
import { APPS } from "./index.ts";
import { type App, type AppSlug, type AppType, AppTypes } from "./types.ts";

/**
 * Validates that the provided string is a valid {@link AppType}.
 *
 * @throws if the provided string is invalid
 */
export const asAppType = (maybeAppType: string): AppType => {
  switch (maybeAppType) {
    case "wallet":
      return AppTypes.Wallet;
    case "explorer":
      return AppTypes.Explorer;
    case "defi-app":
      return AppTypes.DeFi;
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
 * @returns undefined - if no benchmarks are completed or
 * if all completed benchmarks belong to a `BestPracticeCategory`
 * with status other than `Active`.
 */
export const calcAppScore = (app: App): EnsAwardsScore | undefined => {
  const completedAcceptanceTestBenchmarks = getAcceptanceTestBenchmarksByApp(app.appSlug).filter(
    (acceptanceTestBenchmark) => acceptanceTestBenchmark !== undefined,
  );

  if (completedAcceptanceTestBenchmarks.length === 0) return undefined;

  const totalPoints: EnsAwardsPoints = completedAcceptanceTestBenchmarks.reduce(
    (sum, benchmark) => sum + calcEnsAwardsPoints(benchmark),
    0,
  );

  // Guarantee EnsAwardsScore type invariant by rounding the score to the nearest integer
  const score = Math.round((totalPoints * 100) / completedAcceptanceTestBenchmarks.length);

  return asEnsAwardsScore(score);
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
 * @returns `undefined` if `imagePath` is `undefined`,
 * else builds a URL for the app OG image associated with `imagePath`.
 */
export const buildAppOgImageUrl = (imagePath: string | undefined): URL | undefined => {
  if (!imagePath) return undefined;

  return new URL(imagePath, "https://ensawards.org/data/apps/");
};

export const formatAppType = (
  appType: AppType,
  options: FormatTypeOptions = { lowercase: false, plural: false },
): string => {
  const { plural, lowercase } = options;

  let formattedType: string;

  switch (appType) {
    case AppTypes.Wallet:
      formattedType = plural ? "Wallets" : "Wallet";
      break;

    case AppTypes.Explorer:
      formattedType = plural ? "Explorers" : "Explorer";
      break;

    case AppTypes.DeFi:
      formattedType = plural ? "DeFi apps" : "DeFi app";
      break;

    default:
      const _exhaustive: never = appType;
      throw new Error(`Unsupported AppType: ${_exhaustive}`);
  }

  // Keep "DeFi" capitalized even when `lowercase` option is true
  if (lowercase && appType !== AppTypes.DeFi) {
    formattedType = formattedType.toLowerCase();
  }

  return formattedType;
};

/**
 * Returns the URL to the app details page for a given {@link App}.
 */
export const getAppDetailsUrl = (app: App): URL =>
  new URL(`/app/${app.appSlug}`, getEnsAwardsBaseUrl());

/**
 * Returns all {@link Award}s associated with a given {@link AppSlug}.
 */
export const getAwardsByAppSlug = (appSlug: AppSlug): Award[] =>
  AWARDS.filter(
    (award) =>
      award.awardedEntityMetadata?.type === EntityMetadataTypes.App &&
      award.awardedEntityMetadata.app.appSlug === appSlug,
  );
