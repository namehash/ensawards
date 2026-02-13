import { type BestPractice } from "@/types/bestPractices.ts";

import { displayNamedSmartContractsL2 } from "./categories/contract-naming/best-practices/displayNamedSmartContractsL2.ts";
import { displayNamedSmartContractsMainnet } from "./categories/contract-naming/best-practices/displayNamedSmartContractsMainnet.ts";
import { nameYourSmartContracts } from "./categories/contract-naming/best-practices/nameYourSmartContracts.ts";

export const ENS_BEST_PRACTICES: BestPractice[] = [
  nameYourSmartContracts,
  displayNamedSmartContractsMainnet,
  displayNamedSmartContractsL2,
];
