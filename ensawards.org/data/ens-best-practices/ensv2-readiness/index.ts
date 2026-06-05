// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying best practice categories

import { defineBestPracticeCategory } from "../registry.ts";
import type { BestPracticeCategory } from "../types.ts";
import { CategoryStatuses } from "../types.ts";

const ENSv2ReadinessCategory: BestPracticeCategory = {
  id: "ensv2-readiness",
  categorySlug: "ensv2-readiness",
  name: "ENSv2 Readiness",
  description:
    "Be ready for ENSv2 — keep resolving and reading ENS data correctly through the upgrade and beyond.",
  status: CategoryStatuses.Active,
};

defineBestPracticeCategory(ENSv2ReadinessCategory);

export default ENSv2ReadinessCategory;
