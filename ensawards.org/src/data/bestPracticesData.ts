export interface BestPractice {
  id: string;
  name: string;
  description: string;
  category: string;
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
  name: string;
  description: string;
  status: CategoryStatus;
  bestPractices: BestPractice[];
}

export const supportEnsip19BestPractice: BestPractice = {
  id: "support-ensip-19",
  name: "Support ENSIP-19",
  description:
    "ENSIP standardizes reverse and primary name resolution for all coin types, defines how the process operates across the ecosystem.",
  category: "ENS Resolution",
  appsPassed: 3,
  appSupport: 100,
  technicalDetails: {
    main: {
      header: "Main Header",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    sides: [
      {
        header: "Side Header 1",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
};

export const placeholderBestPractice: BestPractice = {
  id: "placeholder-bp1",
  name: "Placeholder BP1",
  description:
    "Placeholder description that should interest user to seek details of this Best Practice.",
  category: "ENS Resolution",
  appsPassed: 0,
  appSupport: 0,
  technicalDetails: {
    main: {
      header: "Main Header",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    sides: [
      {
        header: "Side Header 1",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
};

export const BestPracticeCategories: BestPracticeCategory[] = [
  {
    id: "ens-resolution",
    name: "ENS Resolution",
    description:
      "The Resolution process at its core is the process of converting a human-readable name to a machine-readable address.",
    status: CategoryStatus.Updated,
    bestPractices: [supportEnsip19BestPractice, placeholderBestPractice],
  },
  {
    id: "naming-convention",
    name: "Naming Convention",
    description:
      "The DAO's guidelines when it comes to naming entities across the products and code of official ENS Service Providers.",
    status: CategoryStatus.ComingSoon,
    bestPractices: [],
  },
];
