import type { AppType } from "@/types/apps.ts";

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
  slug: string;
  name: string;
  description: string;
  categoryName: string;
  categorySlug: string; //TODO: Refactor this dependency
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
  slug: string;
  name: string;
  description: string;
  status: CategoryStatus;
  bestPractices: BestPractice[];
}
