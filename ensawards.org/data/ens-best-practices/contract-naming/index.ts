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
  status: CategoryStatuses.ComingSoon,
  // TODO: This category is temporarily hidden due to unfit content.
  // We aim to fix it as soon as we have the capacity.
  // See: https://github.com/namehash/ensawards/issues/222
};

defineBestPracticeCategory(ContractNamingCategory);

export default ContractNamingCategory;
