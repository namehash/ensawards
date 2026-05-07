import type { AcceptanceTest } from "data/acceptance-tests/types.ts";
import type { AcceptanceTestBenchmarks } from "data/benchmarks/types.ts";
import type { Contribution } from "data/contributors/types.ts";
import type { JSX } from "react";

import type { AppType } from "../apps/types.ts";
import type { ProtocolType } from "../protocols/types.ts";

export const BestPracticeTypes = {
  Protocol: "protocol",
  App: "app",
} as const;

export type BestPracticeType = (typeof BestPracticeTypes)[keyof typeof BestPracticeTypes];

export type BestPracticeTarget = AppType | ProtocolType;

/** A unique identifier for a best practice.
 *
 * @invariant Must be unique across all best practices.
 * @invariant Must match {@link ENSAWARDS_SLUG_PATTERN}.
 */
export type BestPracticeSlug = string;

export interface BestPracticeAbstract<
  BestPracticeT extends BestPracticeType,
  AppliesToT extends BestPracticeTarget,
> {
  type: BestPracticeT;
  id: string;
  bestPracticeSlug: BestPracticeSlug;
  name: string;
  description: string;
  category: BestPracticeCategory; // each best practice belongs to exactly one best practice category
  appliesTo: AppliesToT[];
  technicalDetails: {
    useCaseSummary: JSX.Element;
    desiredOutcome: JSX.Element;
    implementationRecommendations: JSX.Element;
    acceptanceTests: [AcceptanceTest, ...AcceptanceTest[]];
  };
  contributions: [Contribution, ...Contribution[]];
}

export interface BestPracticeProtocol
  extends BestPracticeAbstract<typeof BestPracticeTypes.Protocol, ProtocolType> {}

export interface BestPracticeApp
  extends BestPracticeAbstract<typeof BestPracticeTypes.App, AppType> {}

export type BestPractice = BestPracticeProtocol | BestPracticeApp;

/**
 * Defines relations between {@link BestPracticeSlug} and the {@link AcceptanceTestBenchmarks}
 * of the related {@link BestPractice} for a given app.
 *
 * @invariant An explicit key for each `BestPracticeSlug` should be added to this `Record` for each applicable {@link BestPractice}.
 * The value should be the related {@link AcceptanceTestBenchmarks}.
 */
export type BestPracticeBenchmarks = Record<BestPracticeSlug, AcceptanceTestBenchmarks>;

export const CategoryStatuses = {
  ComingSoon: "coming-soon",
  Active: "active",
} as const;

export type CategoryStatus = (typeof CategoryStatuses)[keyof typeof CategoryStatuses];

/** A unique identifier for a best practice category.
 *
 * @invariant Must be unique across all best practice categories.
 * @invariant Must match {@link ENSAWARDS_SLUG_PATTERN}.
 */
export type BestPracticeCategorySlug = string;

export interface BestPracticeCategory {
  id: string;
  categorySlug: BestPracticeCategorySlug;
  name: string;
  description: string;
  status: CategoryStatus;
}
