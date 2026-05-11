// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying best practices

import contributors from "data/contributors/index.ts";
import { defineBestPractice } from "data/ens-best-practices/registry.ts";
import { type BestPracticeProtocol, BestPracticeTypes } from "data/ens-best-practices/types.ts";
import { ProtocolTypes } from "data/protocols/types.ts";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import ContractNamingCategory from "../index.ts";
import technicalDetails from "./technicalDetails.tsx";

const nameYourSmartContracts: BestPracticeProtocol = {
  type: BestPracticeTypes.Protocol,
  id: "name-your-smart-contracts",
  bestPracticeSlug: "name-your-smart-contracts",
  name: "Name your smart contracts",
  description: "Upgrade security and UX when users interact with your smart contracts.",
  category: ContractNamingCategory,
  appliesTo: [ProtocolTypes.DAO, ProtocolTypes.DeFi],
  technicalDetails: technicalDetails,
  contributions: [
    { from: contributors.lightwalker, lastUpdated: parseTimestamp("2025-11-03T11:25:00.000Z") },
    { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-12T14:51:00.000Z") },
  ],
};

defineBestPractice(nameYourSmartContracts);

export default nameYourSmartContracts;
