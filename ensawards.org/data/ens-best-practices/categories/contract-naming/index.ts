import type { BestPracticeCategory } from "@/types/bestPractices.ts";
import { CategoryStatus } from "@/types/bestPractices.ts";

import { displayNamedSmartContractsL2 } from "./displayNamedSmartContractsL2.ts";
import { displayNamedSmartContractsMainnet } from "./displayNamedSmartContractsMainnet.ts";
import { nameYourSmartContracts } from "./nameYourSmartContracts.ts";

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
