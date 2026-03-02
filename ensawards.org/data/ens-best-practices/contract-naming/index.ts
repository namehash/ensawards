// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying best practice categories

import contributors from "data/contributors/index.ts";

import { defineBestPracticeCategory } from "../registry.ts";
import type { BestPracticeCategory } from "../types.ts";
import { CategoryStatus } from "../types.ts";

const ContractNamingCategory: BestPracticeCategory = {
  id: "contract-naming",
  categorySlug: "contract-naming",
  name: "Contract naming",
  description: "Improve the UX and security of smart contract interactions.",
  status: CategoryStatus.Active,
  contributors: [contributors.lightwalker, contributors.stevedylan],
};

defineBestPracticeCategory(ContractNamingCategory);

export default ContractNamingCategory;
