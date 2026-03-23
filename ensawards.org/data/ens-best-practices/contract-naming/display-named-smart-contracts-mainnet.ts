// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying best practices

import contributors from "data/contributors/index.ts";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { AppTypes } from "../../apps/types.ts";
import { defineBestPractice } from "../registry.ts";
import { type BestPracticeApp, BestPracticeTypes } from "../types.ts";
import ContractNamingCategory from ".";

const technicalDetailsMainContent = `Looking up the name of a smart contract on Ethereum mainnet uses the same process as looking up the name of any other account. 
There are a variety of libraries capable of looking up the [primary name](https://docs.ens.domains/web/reverse) of a contract address according to all ENS best practices:
- [ensnode-sdk](https://github.com/namehash/ensnode/blob/main/packages/ensnode-sdk/README.md) (v1.0.0+)
- [ensnode-react](https://github.com/namehash/ensnode/blob/main/packages/ensnode-react/README.md) (v1.0.0+)
- [Viem](https://viem.sh/docs/ens/actions/getEnsName#chain-specific-resolution) (v2.35.0+)
- [Wagmi](https://wagmi.sh/react/api/hooks/useEnsName#chainid) (v2.18.0+)
Libraries and tools for additional languages or frameworks can be found in the [ENS documentation](https://docs.ens.domains/web/libraries/).`;

const technicalDetailsAdditionalContent = `If a contract has an ENS name, you can use its ENS profile to power additional UX improvements 
such as avatars, metadata, audit information, and more. More information can be found at the 
[ENSIP Proposal](https://discuss.ens.domains/t/ensip-proposal-contract-metadata-standard-and-text-records/21397).`;

const displayNamedSmartContractsMainnet: BestPracticeApp = {
  type: BestPracticeTypes.App,
  id: "display-named-smart-contracts-mainnet",
  bestPracticeSlug: "display-named-smart-contracts-mainnet",
  name: "Display named smart contracts on Ethereum mainnet",
  description:
    "Display ENS names instead of addresses when users interact with named smart contracts on Ethereum mainnet.",
  category: ContractNamingCategory,
  appliesTo: [AppTypes.Wallet, AppTypes.Explorer],
  technicalDetails: {
    main: {
      header: "ENS best practice details",
      content: technicalDetailsMainContent,
    },
    sides: [
      {
        header: "Additional Details",
        content: technicalDetailsAdditionalContent,
      },
    ],
  },
  contributions: [
    { from: contributors.lightwalker, updatedAt: parseTimestamp("2025-11-03T11:25:00.000Z") },
    { from: contributors.stevedylan, updatedAt: parseTimestamp("2025-12-12T14:51:00.000Z") },
  ],
};

defineBestPractice(displayNamedSmartContractsMainnet);

export default displayNamedSmartContractsMainnet;
