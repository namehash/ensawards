// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying best practice categories

import { defineBestPracticeCategory } from "../registry.ts";
import type { BestPracticeCategory } from "../types.ts";
import { CategoryStatuses } from "../types.ts";

const ManageNamesCategory: BestPracticeCategory = {
  id: "manage-names",
  categorySlug: "manage-names",
  name: "Managing Names",
  description:
    "Updating profiles, transferring ownership, configuring resolvers, and more. There's a lot to managing ENS names!",
  status: CategoryStatuses.ComingSoon,
};

defineBestPracticeCategory(ManageNamesCategory);

export default ManageNamesCategory;
