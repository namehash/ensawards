// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying best practice categories

import { defineBestPracticeCategory } from "../registry.ts";
import type { BestPracticeCategory } from "../types.ts";
import { CategoryStatuses } from "../types.ts";

const ReverseResolutionCategory: BestPracticeCategory = {
  id: "reverse-resolution",
  categorySlug: "reverse-resolution",
  name: "Reverse Resolution",
  description: "Reverse records, primary names, default primary names, L2 primary names, and more.",
  status: CategoryStatuses.ComingSoon,
};

defineBestPracticeCategory(ReverseResolutionCategory);

export default ReverseResolutionCategory;
