// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying best practice categories

import { defineBestPracticeCategory } from "../registry.ts";
import type { BestPracticeCategory } from "../types.ts";
import { CategoryStatuses } from "../types.ts";

const ContractNamingCategory: BestPracticeCategory = {
  id: "contract-naming",
  categorySlug: "contract-naming",
  name: "Contract naming",
  description: "Improve the UX and security of smart contract interactions.",
  status: CategoryStatuses.Active,
};

defineBestPracticeCategory(ContractNamingCategory);

export default ContractNamingCategory;
