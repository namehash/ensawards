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

export const BestPracticeApplications = {
  Dao: "DAOs",
  App: "Apps",
} as const;

export type BestPracticeAppliesTo =
  (typeof BestPracticeApplications)[keyof typeof BestPracticeApplications];

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
