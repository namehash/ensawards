// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying best practice categories

import { defineBestPracticeCategory } from "../registry.ts";
import type { BestPracticeCategory } from "../types.ts";
import { CategoryStatuses } from "../types.ts";

const ENSv2ReadinessCategory: BestPracticeCategory = {
  id: "ensv2-readiness",
  categorySlug: "ensv2-readiness",
  name: "ENSv2 Readiness",
  description: "Ensure your project is ready for the next generation of ENS.",
  status: CategoryStatuses.Active,
};

defineBestPracticeCategory(ENSv2ReadinessCategory);

export default ENSv2ReadinessCategory;
