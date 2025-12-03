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
  appliesTo: [BestPracticeApplications.App],
  technicalDetails: {
    main: {
      header: "Technical Details",
      content:
        "One of the most common misconceptions is that all ENS names end in `.eth` when in reality they can be `.nft`, `.box`, even classic [top level domains](https://docs.ens.domains/learn/dns)! " +
        "Since there is such a variety of names possible with ENS it's crucial that apps can recognize and account for any kind that might appear in the search bar or in a transaction list." +
        "The best way to detect for any name is to detect a period in the input with a simple check: `string.includes('.')`. " +
        "From there you can use a library like [Viem](https://viem.sh/docs/ens/actions/getEnsAddress) or [ensjs](https://github.com/ensdomains/ensjs/blob/main/docs/public/function.getRecords.md) to resolve the records. See a full list of library [here](https://docs.ens.domains/web/libraries)",
    },
    sides: [
      {
        header: "Additional Details",
        content:
          "Once you have figured out how to detect all ENS names, consider adding more details and records to your app." +
          "For example, using the [getRecords()](https://github.com/ensdomains/ensjs/blob/main/docs/public/function.getRecords.md) in combination with [ENSNode](https://ensnode.io/docs/#using-ensnode-with-ensjs) you can easily fetch a full profile of data." +
          "This could include avatars, social media profiles, links, really anything the user wants to add!",
      },
    ],
  },
};

export const nameYourSmartContracts: BestPractice = {
  id: "name-your-smart-contracts",
  slug: "name-your-smart-contracts",
  name: "Name your smart contracts",
  description:
    "Assign ENS names to your smart contracts to help users easily identify what they're interacting with and enhance transaction security.",
  categoryName: "Contract naming",
  categorySlug: "contract-naming",
  appliesTo: [BestPracticeApplications.Dao],
  technicalDetails: {
    main: {
      header: "Technical Details",
      content:
        "Naming your contract can provide an incredible UX boost for your users, whether they're sending a transaction or confirming the one they're initiating is legitimate. " +
        "There are two ways you can name your contract. " +
        "The first is to name it during deployment, in which case we would recommend [these resources](https://www.enscribe.xyz/docs/introduction/naming-contracts) to learn more on how you can implement that into your developer workflow." +
        "The second approach is to name it after it has been deployed, which you can do through the [Enscribe App](https://app.enscribe.xyz/).",
    },
    sides: [
      {
        header: "Additional Details",
        content:
          "As you go through some of the positions on the leaderboard you will see that some contracts are fully named (green), while others are only partly names (yellow)." +
          "This is because some contract names will have forward resolution, such as `mycontract.eth -> 0xSomeAddress`, but not have reverse resolution `0xSomeAddress -> mycontract.eth`. " +
          "If you have just forward resolution your contract will be marked as partly named, however if you also have reverse resolution then your contract will be labeled as fully named.",
      },
    ],
  },
};

export const displayNamedSmartContracts: BestPractice = {
  id: "display-named-smart-contracts",
  slug: "display-named-smart-contracts",
  name: "Display named smart contracts",
  description:
    "Display ENS names instead of contract addresses when users interact with smart contracts that have been assigned ENS names.",
  categoryName: "Contract naming",
  categorySlug: "contract-naming",
  appliesTo: [BestPracticeApplications.App],
  technicalDetails: {
    main: {
      header: "Technical Details",
      content:
        "If a contract has an ENS name assigned to it then resolving it can be relatively simple depending on your stack." +
        "One of the more common ways is to use a library like [Viem](https://viem.sh) using the [`getEnsAddress()`](https://viem.sh/docs/ens/actions/getEnsName) method." +
        "Another great option is using the [`ensjs`](https://github.com/ensdomains/ensjs/blob/main/docs/public/function.getName.md) library, especially if combined with [ENSNode](https://ensnode.io/docs/#using-ensnode-with-ensjs)",
    },
    sides: [
      {
        header: "Additional Details",
        content:
          "Since your app is primarily dealing with contract addresses you will be doing a reverse resolution." +
          "This only works if the contract has a name with the reverse record set, so a forward resolution will not work and should be accounted for." +
          "If you are aware of DAOs or dApps that haven't named their contract consider sending them this site!",
      },
    ],
  },
};

export const BEST_PRACTICES: BestPractice[] = [
  recognizeAllENSNames,
  nameYourSmartContracts,
  displayNamedSmartContracts,
];

export const BEST_PRACTICE_CATEGORIES: BestPracticeCategory[] = [
  {
    id: "contract-naming",
    slug: "contract-naming",
    name: "Contract naming",
    description: "Assign and display contract ENS names for higher quality user experiences.",
    status: CategoryStatus.Updated,
    bestPractices: [nameYourSmartContracts, displayNamedSmartContracts],
  },
  {
    id: "forward-resolution",
    slug: "forward-resolution",
    name: "Forward Resolution",
    description:
      "Lookup social records, the contenthash of decentralized websites, avatar images, multichain deposit addresses, and more.",
    status: CategoryStatus.ComingSoon,
    bestPractices: [recognizeAllENSNames],
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
