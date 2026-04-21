import type { Award } from "data/awards/types.ts";
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

export interface BestPracticeAbstract<
  BestPracticeT extends BestPracticeType,
  AppliesToT extends BestPracticeTarget,
> {
  type: BestPracticeT;
  id: string;
  bestPracticeSlug: string;
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

export interface BestPracticeCategory {
  id: string;
  categorySlug: string;
  name: string;
  description: string;
  status: CategoryStatus;
  contributions: [Contribution, ...Contribution[]];
}
