import type { Contribution } from "data/contributors/types.ts";

import type { AppType } from "../apps/types.ts";

export const BestPracticeTypes = {
  Protocol: "Protocol",
  App: "App",
} as const;

export type BestPracticeType = (typeof BestPracticeTypes)[keyof typeof BestPracticeTypes];

export const ProtocolTypes = {
  DAO: "DAO",
  DeFi: "DeFi",
} as const;

export type ProtocolType = (typeof ProtocolTypes)[keyof typeof ProtocolTypes];

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
  category: BestPracticeCategory; // each best practice belongs to exactly one category
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

export enum CategoryStatus {
  ComingSoon,
  Active,
}

/** A unique identifier for a best practice category.
 *
 * @invariant Must be unique across all categories.
 * @invariant Must match {@link ENSAWARDS_SLUG_PATTERN}.
 */
export type CategorySlug = string;

export interface BestPracticeCategory {
  id: string;
  categorySlug: CategorySlug;
  name: string;
  description: string;
  status: CategoryStatus;
}
