// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying best practice categories

import type { BestPracticeCategory } from "../types.ts";
import { CategoryStatus } from "../types.ts";

export const ContractNamingCategory: BestPracticeCategory = {
  id: "contract-naming",
  categorySlug: "contract-naming",
  name: "Contract naming",
  description: "Improve the UX and security of smart contract interactions.",
  status: CategoryStatus.Active,
};
