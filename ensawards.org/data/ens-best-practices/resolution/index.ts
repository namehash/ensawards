// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying best practice categories

import { defineBestPracticeCategory } from "../registry.ts";
import type { BestPracticeCategory } from "../types.ts";
import { CategoryStatuses } from "../types.ts";

const ENSResolutionCategory: BestPracticeCategory = {
  id: "resolution",
  categorySlug: "resolution",
  name: "ENS Resolution",
  description: "Correctly resolve the profiles of ENS names.",
  status: CategoryStatuses.Active,
  order: 0,
};

defineBestPracticeCategory(ENSResolutionCategory);

export default ENSResolutionCategory;
