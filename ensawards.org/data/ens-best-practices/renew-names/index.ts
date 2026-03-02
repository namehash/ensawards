// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying best practice categories

import { defineBestPracticeCategory } from "../registry.ts";
import type { BestPracticeCategory } from "../types.ts";
import { CategoryStatus } from "../types.ts";

const RenewNamesCategory: BestPracticeCategory = {
  id: "renew-names",
  categorySlug: "renew-names",
  name: "Renewing Names",
  description:
    "Help your users avoid unintentionally losing the names they love. Renewal reminders and name renewal best practices.",
  status: CategoryStatus.ComingSoon,
  contributors: [],
};

defineBestPracticeCategory(RenewNamesCategory);

export default RenewNamesCategory;
