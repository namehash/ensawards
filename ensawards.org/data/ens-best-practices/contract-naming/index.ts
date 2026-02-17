import type { BestPracticeCategory } from "@/types/bestPractices.ts";
import { CategoryStatus } from "@/types/bestPractices.ts";

import { displayNamedSmartContractsL2 } from "./display-named-smart-contracts-l2-chains.ts";
import { displayNamedSmartContractsMainnet } from "./display-named-smart-contracts-mainnet.ts";
import { nameYourSmartContracts } from "./name-your-smart-contracts.ts";

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
