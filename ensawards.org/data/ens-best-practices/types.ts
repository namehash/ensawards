import type { AppBenchmark } from "data/benchmarks/types.ts";
import type { Contribution } from "data/contributors/types.ts";

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
    main: {
      header: string;
      content: string;
    };
    sides: {
      header: string;
      content: string;
    }[];
  };
  contributions: [Contribution, ...Contribution[]];
}

export interface BestPracticeProtocol
  extends BestPracticeAbstract<typeof BestPracticeTypes.Protocol, ProtocolType> {}

export interface BestPracticeApp
  extends BestPracticeAbstract<typeof BestPracticeTypes.App, AppType> {}

export type BestPractice = BestPracticeProtocol | BestPracticeApp;

/**
 * Defines relations between {@link BestPracticeSlug} and {@link AppBenchmark}
 * for the related {@link BestPractice}.
 *
 * @invariant An explicit key for each `BestPracticeSlug` should be added to this `Record` for each available {@link BestPractice}.
 * If an app doesn't have a benchmark completed for a `BestPractice` then the benchmark should be explicitly set to `undefined`.
 * Otherwise, the value should be an `AppBenchmark` describing how the related app performed for the `BestPractice`.
 */
export type BestPracticeBenchmarks = Record<BestPracticeSlug, AppBenchmark | undefined>;

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
