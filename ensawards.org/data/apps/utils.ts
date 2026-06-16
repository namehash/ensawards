import type {
  AcceptanceTestBenchmark,
  ApplicableAcceptanceTestBenchmark,
} from "data/acceptance-tests/types.ts";
import { getAcceptanceTestBenchmarksByApp } from "data/acceptance-tests/utils.ts";
import { AWARDS } from "data/awards/index.ts";
import type { Award } from "data/awards/types.ts";
import { BenchmarkResults } from "data/benchmarks/types.ts";
import { calcEnsAwardsPoints, getAppBenchmarks } from "data/benchmarks/utils.ts";
import { getBestPracticeBySlug } from "data/ens-best-practices/utils.ts";
import { EntityMetadataTypes } from "data/entity-metadata/types.ts";
import {
  asEnsAwardsScore,
  type EnsAwardsPoints,
  type EnsAwardsScore,
  type EnsAwardsScoreResult,
  EnsAwardsScoreResultTypes,
  EnsAwardsUndefinedScoreLabels,
} from "data/shared/ens-awards-score.ts";
import type { FormatTypeOptions } from "data/shared/format-type-options.ts";

import { getEnsAwardsBaseUrl } from "@/utils/index.ts";

import {
  type BestPractice,
  type BestPracticeTarget,
  CategoryStatuses,
} from "../ens-best-practices/types.ts";
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
    case "exchange":
      return AppTypes.Exchange;
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
 * @returns
 * An {@link EnsAwardsScoreResult} object containing the score and a label describing the result.
 * The {@link EnsAwardsScoreResult.score} field is:
 *  - undefined - if no benchmarks are completed, all completed benchmarks returned a not applicable result,
 * or if all completed benchmarks belong to a `BestPracticeCategory`
 * with status other than `Active`.
 *  - an {@link EnsAwardsScore} calculation for the `App` otherwise.
 */
export const calcAppScore = (app: App): EnsAwardsScoreResult => {
  const completedAcceptanceTestBenchmarks = getAcceptanceTestBenchmarksByApp(app.appSlug).filter(
    (acceptanceTestBenchmark) => acceptanceTestBenchmark !== undefined,
  );

  if (completedAcceptanceTestBenchmarks.length === 0)
    return {
      type: EnsAwardsScoreResultTypes.Undefined,
      score: undefined,
      label: EnsAwardsUndefinedScoreLabels.Pending,
    };

  const completedApplicableAcceptanceTestBenchmarks: ApplicableAcceptanceTestBenchmark[] =
    completedAcceptanceTestBenchmarks.filter(
      (benchmark): benchmark is ApplicableAcceptanceTestBenchmark =>
        // explicitly exclude benchmarks with `NotApplicable` result
        benchmark.result !== BenchmarkResults.NotApplicable,
    );

  if (completedApplicableAcceptanceTestBenchmarks.length === 0)
    return {
      type: EnsAwardsScoreResultTypes.Undefined,
      score: undefined,
      label: EnsAwardsUndefinedScoreLabels.NotApplicable,
    };

  const totalPoints: EnsAwardsPoints = completedApplicableAcceptanceTestBenchmarks.reduce(
    (sum, benchmark) => sum + calcEnsAwardsPoints(benchmark),
    0,
  );

  // Guarantee EnsAwardsScore type invariant by rounding the score to the nearest integer
  const score = Math.round(
    (totalPoints * 100) / completedApplicableAcceptanceTestBenchmarks.length,
  );

  return {
    type: EnsAwardsScoreResultTypes.Defined,
    score: asEnsAwardsScore(score),
    label: undefined,
  };
};

/**
 * Checks if the ENS {@link BestPractice} applies to all types that are specified in {@link AppTypes}.
 */
export const appliesToAllApps = (targets: BestPracticeTarget[]): boolean =>
  Object.values(AppTypes).every((appType) => targets.includes(appType));

/**
 * Sorts two {@link App}s based on their {@link EnsAwardsScore}.
 * For apps with `undefined` score,
 * the one with more benchmarks with `NotApplicable` result is ranked higher.
 */
export const sortApps = (a: App, b: App): number => {
  const aScoreResult = calcAppScore(a);
  const bScoreResult = calcAppScore(b);

  if (aScoreResult.score === undefined && bScoreResult.score === undefined) {
    const aNotApplicableBenchmarks = calcNotApplicableAppBenchmarks(a);
    const bNotApplicableBenchmarks = calcNotApplicableAppBenchmarks(b);
    return bNotApplicableBenchmarks - aNotApplicableBenchmarks;
  }

  if (bScoreResult.score === undefined) return -1;
  if (aScoreResult.score === undefined) return 1;

  return bScoreResult.score - aScoreResult.score;
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

    case AppTypes.Exchange:
      formattedType = plural ? "Exchanges" : "Exchange";
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

/**
 * Calculates the number of benchmarks with `NotApplicable` result for a given {@link App}.
 *
 * Excludes the benchmarks that belong to an inactive {@link BestPracticeCategory}.
 */
const calcNotApplicableAppBenchmarks = (app: App): number => {
  const benchmarksInActiveCategories: AcceptanceTestBenchmark[] = [];

  Object.entries(getAppBenchmarks(app.appSlug)).forEach(
    ([bestPracticeSlug, acceptanceTestBenchmarks]) => {
      const bestPractice = getBestPracticeBySlug(bestPracticeSlug);

      if (bestPractice === undefined) {
        throw new Error(
          `Invariant(BestPracticeSlug): Best practice with slug ${bestPracticeSlug} is not defined`,
        );
      }

      if (bestPractice.category.status === CategoryStatuses.Active) {
        benchmarksInActiveCategories.push(
          ...Object.values(acceptanceTestBenchmarks).filter((benchmark) => benchmark !== undefined),
        );
      }
    },
  );

  return benchmarksInActiveCategories.filter(
    (benchmark) => benchmark.result === BenchmarkResults.NotApplicable,
  ).length;
};
