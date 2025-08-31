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

export const recognizeAllENSNames: BestPractice = {
  id: "recognize-all-ens-names",
  name: "Recognize all valid ENS names",
  description:
    "Support user input of all valid ENS names (not only .eth names).",
  category: "Forward Resolution",
  appsPassed: 3,
  appSupport: 100,
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

export const placeholderBestPractice1: BestPractice = {
  id: "placeholder-bp1",
  name: "Placeholder Forward Resolution Best Practice #1",
  description:
    "Temporary placeholder best practice.",
  category: "Forward Resolution",
  appsPassed: 2,
  appSupport: 66,
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

export const placeholderBestPractice2: BestPractice = {
  id: "placeholder-bp2",
  name: "Placeholder Forward Resolution Best Practice #2",
  description:
    "Temporary placeholder best practice.",
  category: "Forward Resolution",
  appsPassed: 1,
  appSupport: 33,
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

export const placeholderBestPractice3: BestPractice = {
  id: "placeholder-bp3",
  name: "Placeholder Forward Resolution Best Practice #3",
  description:
    "Temporary placeholder best practice.",
  category: "Forward Resolution",
  appsPassed: 2,
  appSupport: 66,
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

export const BestPracticeCategories: BestPracticeCategory[] = [
  {
    id: "forward-resolution",
    name: "Forward Resolution",
    description:
      "Lookup social records, the contenthash of decentralized websites, avatar images, multichain deposit addresses, and more.",
    status: CategoryStatus.Updated,
    bestPractices: [recognizeAllENSNames, placeholderBestPractice1, placeholderBestPractice2, placeholderBestPractice3],
  },
  {
    id: "reverse-resolution",
    name: "Reverse Resolution",
    description:
      "Reverse records, primary names, default primary names, L2 primary names, and more.",
    status: CategoryStatus.ComingSoon,
    bestPractices: [],
  },
  {
    id: "display-profiles",
    name: "Displaying Profiles",
    description:
      "Avatar images, social records, address records, and more. Ensure each ENS profile is displayed optimally.",
    status: CategoryStatus.ComingSoon,
    bestPractices: [],
  },
  {
    id: "register-names",
    name: "Registering Names",
    description:
      "Provide smooth onboarding when supporting users to find and register their own names.",
    status: CategoryStatus.ComingSoon,
    bestPractices: [],
  },
  {
    id: "renew-names",
    name: "Renewing Names",
    description:
      "Help your users avoid unintentionally losing the names they love. Renewal reminders and name renewal best practices.",
    status: CategoryStatus.ComingSoon,
    bestPractices: [],
  },
  {
    id: "manage-names",
    name: "Managing Names",
    description:
      "Updating profiles, transferring ownership, configuring resolvers, and more. There's a lot to managing ENS names!",
    status: CategoryStatus.ComingSoon,
    bestPractices: [],
  },
];
