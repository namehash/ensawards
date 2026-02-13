import { displayNamedSmartContractsL2 } from "@/data/ens-best-practices/categories/contract-naming/best-practices/displayNamedSmartContractsL2.ts";
import { displayNamedSmartContractsMainnet } from "@/data/ens-best-practices/categories/contract-naming/best-practices/displayNamedSmartContractsMainnet.ts";
import { nameYourSmartContracts } from "@/data/ens-best-practices/categories/contract-naming/best-practices/nameYourSmartContracts.ts";
import { type BestPractice } from "@/types/bestPractices.ts";

export const ENS_BEST_PRACTICES: BestPractice[] = [
  nameYourSmartContracts,
  displayNamedSmartContractsMainnet,
  displayNamedSmartContractsL2,
];
