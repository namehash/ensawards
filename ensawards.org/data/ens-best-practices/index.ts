// Read CONTRIBUTING.md for additional advice on adding and modifying best practices

import { type BestPractice } from "@/types/bestPractices.ts";

import { displayNamedSmartContractsL2 } from "./categories/contract-naming/displayNamedSmartContractsL2.ts";
import { displayNamedSmartContractsMainnet } from "./categories/contract-naming/displayNamedSmartContractsMainnet.ts";
import { nameYourSmartContracts } from "./categories/contract-naming/nameYourSmartContracts.ts";

export const ENS_BEST_PRACTICES: BestPractice[] = [
  nameYourSmartContracts,
  displayNamedSmartContractsMainnet,
  displayNamedSmartContractsL2,
];
