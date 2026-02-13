import { displayNamedSmartContractsL2 } from "@/data/ens-best-practices/categories/contract-naming/best-practices/displayNamedSmartContractsL2.ts";
import { displayNamedSmartContractsMainnet } from "@/data/ens-best-practices/categories/contract-naming/best-practices/displayNamedSmartContractsMainnet.ts";
import { nameYourSmartContracts } from "@/data/ens-best-practices/categories/contract-naming/best-practices/nameYourSmartContracts.ts";
import type { BestPracticeCategory } from "@/types/bestPractices.ts";
import { CategoryStatus } from "@/types/bestPractices.ts";

export const ContractNamingCategory: BestPracticeCategory = {
  id: "contract-naming",
  slug: "contract-naming",
  name: "Contract naming",
  description: "Improve the UX and security of smart contract interactions.",
  status: CategoryStatus.Active,
  bestPractices: [
    nameYourSmartContracts,
    displayNamedSmartContractsMainnet,
    displayNamedSmartContractsL2,
  ],
};

// TODO: Appreciate advice about the structure and naming of the whole /best-practices directory
//  as I feel like currently it's too complicated
