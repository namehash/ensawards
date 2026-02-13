import type { BestPracticeCategory } from "@/types/bestPractices.ts";
import { CategoryStatus } from "@/types/bestPractices.ts";

import { displayNamedSmartContractsL2 } from "./best-practices/displayNamedSmartContractsL2.ts";
import { displayNamedSmartContractsMainnet } from "./best-practices/displayNamedSmartContractsMainnet.ts";
import { nameYourSmartContracts } from "./best-practices/nameYourSmartContracts.ts";

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
