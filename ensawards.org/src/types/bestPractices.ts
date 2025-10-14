export interface BestPractice {
  id: string;
  slug: string;
  name: string;
  description: string;
  categoryName: string;
  categorySlug: string; //TODO: Refactor this dependency
  appsPassed: number;
  appSupport: number;
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

export enum CategoryStatus {
  ComingSoon,
  Updated,
  Implemented,
}

export interface BestPracticeCategory {
  id: string;
  slug: string;
  name: string;
  description: string;
  status: CategoryStatus;
  bestPractices: BestPractice[];
}
