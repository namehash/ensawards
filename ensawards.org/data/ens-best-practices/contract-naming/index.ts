// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying best practice categories

import type { BestPracticeCategory } from "../types.ts";
import { CategoryStatus } from "../types.ts";
import { displayNamedSmartContractsL2 } from "./display-named-smart-contracts-l2-chains.ts";
import { displayNamedSmartContractsMainnet } from "./display-named-smart-contracts-mainnet.ts";
import { nameYourSmartContracts } from "./name-your-smart-contracts.ts";

export const ContractNamingCategory: BestPracticeCategory = {
  id: "contract-naming",
  categorySlug: "contract-naming",
  name: "Contract naming",
  description: "Improve the UX and security of smart contract interactions.",
  status: CategoryStatus.Active,
  bestPractices: [
    nameYourSmartContracts,
    displayNamedSmartContractsMainnet,
    displayNamedSmartContractsL2,
  ],
};
