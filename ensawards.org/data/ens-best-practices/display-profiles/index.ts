// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying best practice categories

import { defineBestPracticeCategory } from "../registry.ts";
import type { BestPracticeCategory } from "../types.ts";
import { CategoryStatus } from "../types.ts";

const DisplayProfilesCategory: BestPracticeCategory = {
  id: "display-profiles",
  categorySlug: "display-profiles",
  name: "Displaying Profiles",
  description:
    "Avatar images, social records, address records, and more. Ensure each ENS profile is displayed optimally.",
  status: CategoryStatus.ComingSoon,
  contributors: [],
};

defineBestPracticeCategory(DisplayProfilesCategory);

export default DisplayProfilesCategory;
