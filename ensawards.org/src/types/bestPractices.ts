import type { AppType } from "@/types/apps.ts";

export interface BestPractice {
  id: string;
  slug: string;
  name: string;
  description: string;
  categoryName: string;
  categorySlug: string; //TODO: Refactor this dependency
  appliesTo: BestPracticeAppliesTo[];
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

export const NonAppBestPracticeApplications = {
  Dao: "DAOs",
} as const;

export type NonAppBestPracticeAppliesTo =
  (typeof NonAppBestPracticeApplications)[keyof typeof NonAppBestPracticeApplications];

export type BestPracticeAppliesTo = AppType | NonAppBestPracticeAppliesTo;

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
