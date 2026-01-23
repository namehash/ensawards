import type { AppType } from "@/types/apps.ts";

export interface BestPractice {
  id: string;
  slug: string;
  name: string;
  description: string;
  categoryName: string;
  categorySlug: string; //TODO: Refactor this dependency
  appliesTo: BestPracticeTarget[];
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

export const ProtocolTypes = {
  Dao: "DAO",
} as const;

export type ProtocolType = (typeof ProtocolTypes)[keyof typeof ProtocolTypes];

export type BestPracticeTarget = AppType | ProtocolType;

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
