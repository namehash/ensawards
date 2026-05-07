// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying best practices

import { AppTypes } from "data/apps/types.ts";
import contributors from "data/contributors/index.ts";
import { defineBestPractice } from "data/ens-best-practices/registry.ts";
import { type BestPracticeApp, BestPracticeTypes } from "data/ens-best-practices/types.ts";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import ContractNamingCategory from "../index.ts";
import {
  desiredOutcome,
  implementationRecommendations,
  mainnetInteractionsDisplayNamedSmartContractsAt2Description,
  mainnetInteractionsDisplayNamedSmartContractsDescription,
  useCaseSummary,
} from "./technicalDetails.tsx";

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
    useCaseSummary: useCaseSummary,
    desiredOutcome: desiredOutcome,
    implementationRecommendations: implementationRecommendations,
    acceptanceTests: [
      {
        acceptanceTestSlug: "mainnet-interactions-display-named-smart-contracts",
        name: "Display ENS names for smart contracts on mainnet",
        description: mainnetInteractionsDisplayNamedSmartContractsDescription,
      },
      {
        acceptanceTestSlug: "mainnet-interactions-display-named-smart-contracts-at2",
        name: "Acceptance Test 2",
        description: mainnetInteractionsDisplayNamedSmartContractsAt2Description,
      },
    ],
  },
  contributions: [
    { from: contributors.lightwalker, lastUpdated: parseTimestamp("2025-11-03T11:25:00.000Z") },
    { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-12T14:51:00.000Z") },
  ],
};

defineBestPractice(displayNamedSmartContractsMainnet);

export default displayNamedSmartContractsMainnet;
