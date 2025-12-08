import {
  type BestPractice,
  BestPracticeApplications,
  type BestPracticeCategory,
  CategoryStatus,
} from "@/types/bestPractices.ts";

// export const recognizeAllENSNames: BestPractice = {
//   id: "recognize-all-ens-names",
//   slug: "recognize-all-ens-names",
//   name: "Recognize all valid ENS names",
//   description: "Support user input of all valid ENS names (not only .eth names).",
//   categoryName: "Forward Resolution",
//   categorySlug: "forward-resolution",
//   appliesTo: [BestPracticeApplications.App],
//   technicalDetails: {
//     main: {
//       header: "Technical Details",
//       content:
//         // Using an approach of practical steps of how to implement with authoritative links with more details
//         "To properly support all valid ENS names, your application should implement a structured validation approach. " +
//         "Begin by handling empty input cases by prompting users to enter an ENS name or address. " +
//         "Then verify if the input represents an address format using a library such as [Viem](https://viem.sh/docs/utilities/isAddress), treating it as an address if valid. " +
//         "For non-address inputs, determine if the input can be normalized as an ENS name using `ens_normalize` from [ENSIP-15](https://docs.ens.domains/ensip/15). " +
//         "When `ens_normalize` executes without throwing an error, the input is considered normalizable (meaning normalization succeeds), which differs from being normalized (where input equals output). " +
//         "Then you should process the normalized result as the canonical ENS name representation. " +
//         "Libraries including [Viem](https://viem.sh/docs/ens/utilities/normalize), [ensjs](https://github.com/ensdomains/ensjs/blob/8b4c34840cdef8828961453554e12aea8c9bfe83/packages/ensjs/src/utils/normalise.ts#L34) and [ens-normalize.js](https://github.com/adraffy/ens-normalize.js) provide `ens_normalize` implementations, with additional options available in the [ENS Documentation](https://docs.ens.domains/web/libraries). " +
//         "Finally, display an appropriate error message when input fails validation as either a valid name or address. ",
//     },
//     sides: [
//       {
//         header: "Additional Details",
//         content:
//           "Once you have properly implemented ENS name detection, consider adding more details and records to your app. " +
//           // I'm using https://ensnode.io/docs/ as the main reference point for our docs since it will remain a static path no matter what we update in our docs. Ideally our quickstart will become more robust and be perfect for a callout like this.
//           "[ENSNode](https://ensnode.io/docs/) makes it simple and easy to fetch ENS profile data that can be used to enhance your user experience. " +
//           "This could include avatars, social media profiles, links to website, and much more listed in the official [ENS documentation](https://docs.ens.domains/web).",
//       },
//     ],
//   },
// };

export const nameYourSmartContracts: BestPractice = {
  id: "name-your-smart-contracts",
  slug: "name-your-smart-contracts",
  name: "Name your smart contracts",
  description: "Upgrade security and UX when users interact with your smart contracts.",
  categoryName: "Contract naming",
  categorySlug: "contract-naming",
  appliesTo: [BestPracticeApplications.Dao],
  technicalDetails: {
    main: {
      header: "Technical Details",
      content:
        "Contracts can be assigned ENS names during or after deployment. " +
        "For deployment-time naming, see the [Enscribe documentation](https://www.enscribe.xyz/docs/introduction/naming-contracts) which goes into greater detail on the process. " +
        "For post-deployment naming we recommend using the [Enscribe App](https://app.enscribe.xyz/). " +
        "Note that setting a [primary name](https://docs.ens.domains/web/reverse) (reverse resolution) requires the contract to implement [Ownable](https://docs.openzeppelin.com/contracts/5.x/access-control#ownership-and-ownable). " +
        "Contracts without Ownable can still have forward resolution configured (`name → address`) but cannot set a reverse record (`address → name`).",
    },
    sides: [
      {
        header: "Additional Details",
        content:
          "Assigning ENS names to contracts gives users confidence they're interacting with the correct contract. " +
          "This is particularly valuable for security, as users can confirm `uniswap.eth` instead of validating a long hexadecimal address. " +
          "If you've deployed contracts without Ownable, you can still improve UX by configuring forward resolution, though full naming (with reverse resolution) provides the best user experience.",
      },
    ],
  },
};

export const displayNamedSmartContracts: BestPractice = {
  id: "display-named-smart-contracts",
  slug: "display-named-smart-contracts",
  name: "Display named smart contracts",
  description:
    "Display ENS names instead of addresses when users interact with named smart contracts.",
  categoryName: "Contract naming",
  categorySlug: "contract-naming",
  appliesTo: [BestPracticeApplications.App],
  technicalDetails: {
    main: {
      header: "Technical Details",
      content:
        "Looking up the name of a smart contract uses the same process as looking up the name of any other account. " +
        "You can use a variety of libraries and tools such as [Viem](https://viem.sh/docs/ens/actions/getEnsName) or [ensjs](https://github.com/ensdomains/ensjs/blob/main/docs/public/function.getName.md) which can perform a reverse lookup of a [primary name](https://docs.ens.domains/web/reverse) using the contract address. " +
        "When users interact with a contract with a specific chain, be sure to use the [ENSIP-19](https://docs.ens.domains/ensip/19) standard to query the primary name for that chain, rather than defaulting to Ethereum mainnet. " +
        "[ENSNode](https://ensnode.io/docs) simplifies multichain primary lookups across all chains.",
    },
    sides: [
      {
        header: "Additional Details",
        content:
          "If a contract has an ENS name, you can use its ENS profile to power additional UX improvements such as avatars, metadata, audit information, and more. " +
          "More information can be found at the [ENSIP Proposal](https://discuss.ens.domains/t/ensip-proposal-contract-metadata-standard-and-text-records/21397).",
      },
    ],
  },
};

export const BEST_PRACTICES: BestPractice[] = [nameYourSmartContracts, displayNamedSmartContracts];

export const BEST_PRACTICE_CATEGORIES: BestPracticeCategory[] = [
  {
    id: "contract-naming",
    slug: "contract-naming",
    name: "Contract naming",
    description: "Improve the UX and security of smart contract interactions.",
    status: CategoryStatus.Updated,
    bestPractices: [nameYourSmartContracts, displayNamedSmartContracts],
  },
  {
    id: "forward-resolution",
    slug: "forward-resolution",
    name: "Forward Resolution",
    description:
      "Lookup the details of an ENS name, such as its onchain addresses, avatar image, social records, and decentralized website.",
    status: CategoryStatus.ComingSoon,
    bestPractices: [
      //   recognizeAllENSNames
    ],
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
