import {
  type BestPractice,
  BestPracticeApplications,
  type BestPracticeCategory,
  CategoryStatus,
} from "@/types/bestPractices.ts";

export const recognizeAllENSNames: BestPractice = {
  id: "recognize-all-ens-names",
  slug: "recognize-all-ens-names",
  name: "Recognize all valid ENS names",
  description: "Support user input of all valid ENS names (not only .eth names).",
  categoryName: "Forward Resolution",
  categorySlug: "forward-resolution",
  supportDetails: {
    appBenchmarksResults: {
      appsPassed: 3,
      appSupport: 100,
    },
  },
  technicalDetails: {
    main: {
      header: "Technical Details",
      content:
        "The following is temporary placeholder content. Technical details will be added soon. " +
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    sides: [
      {
        header: "Additional Details",
        content:
          "The following is temporary placeholder content. Technical details will be added soon. " +
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
};

export const nameYourSmartContracts: BestPractice = {
  id: "name-your-smart-contracts",
  slug: "name-your-smart-contracts",
  name: "Name your smart contracts",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  categoryName: "Contract naming",
  categorySlug: "contract-naming",
  supportDetails: {
    appliesTo: [BestPracticeApplications.Dao],
  },
  technicalDetails: {
    main: {
      header: "Technical Details",
      content:
        "The following is temporary placeholder content. Technical details will be added soon. " +
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    sides: [
      {
        header: "Additional Details",
        content:
          "The following is temporary placeholder content. Technical details will be added soon. " +
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
};

export const displayNamedSmartContracts: BestPractice = {
  id: "display-named-smart-contracts",
  slug: "display-named-smart-contracts",
  name: "Display named smart contracts",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  categoryName: "Contract naming",
  categorySlug: "contract-naming",
  supportDetails: {
    appBenchmarksResults: {
      appsPassed: 2,
      appSupport: 40,
    },
    appliesTo: [BestPracticeApplications.App],
  },
  technicalDetails: {
    main: {
      header: "Technical Details",
      content:
        "The following is temporary placeholder content. Technical details will be added soon. " +
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    sides: [
      {
        header: "Additional Details",
        content:
          "The following is temporary placeholder content. Technical details will be added soon. " +
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
};

export const BEST_PRACTICE_CATEGORIES: BestPracticeCategory[] = [
  {
    id: "forward-resolution",
    slug: "forward-resolution",
    name: "Forward Resolution",
    description:
      "Lookup social records, the contenthash of decentralized websites, avatar images, multichain deposit addresses, and more.",
    status: CategoryStatus.Updated,
    bestPractices: [recognizeAllENSNames],
  },
  {
    id: "contract-naming",
    slug: "contract-naming",
    name: "Contract naming",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    status: CategoryStatus.Updated,
    bestPractices: [nameYourSmartContracts, displayNamedSmartContracts],
  },
  {
    id: "reverse-resolution",
    slug: "reverse-resolution",
    name: "Reverse Resolution",
    description:
      "Reverse records, primary names, default primary names, L2 primary names, and more.",
    status: CategoryStatus.ComingSoon,
    bestPractices: [],
  },
  {
    id: "display-profiles",
    slug: "display-profiles",
    name: "Displaying Profiles",
    description:
      "Avatar images, social records, address records, and more. Ensure each ENS profile is displayed optimally.",
    status: CategoryStatus.ComingSoon,
    bestPractices: [],
  },
  {
    id: "register-names",
    slug: "register-names",
    name: "Registering Names",
    description:
      "Provide smooth onboarding when supporting users to find and register their own names.",
    status: CategoryStatus.ComingSoon,
    bestPractices: [],
  },
  {
    id: "renew-names",
    slug: "renew-names",
    name: "Renewing Names",
    description:
      "Help your users avoid unintentionally losing the names they love. Renewal reminders and name renewal best practices.",
    status: CategoryStatus.ComingSoon,
    bestPractices: [],
  },
  {
    id: "manage-names",
    slug: "manage-names",
    name: "Managing Names",
    description:
      "Updating profiles, transferring ownership, configuring resolvers, and more. There's a lot to managing ENS names!",
    status: CategoryStatus.ComingSoon,
    bestPractices: [],
  },
];
