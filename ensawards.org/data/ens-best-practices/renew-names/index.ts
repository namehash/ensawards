// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying best practice categories

import type { BestPracticeCategory } from "../types.ts";
import { CategoryStatus } from "../types.ts";

export const RenewNamesCategory: BestPracticeCategory = {
  id: "renew-names",
  categorySlug: "renew-names",
  name: "Renewing Names",
  description:
    "Help your users avoid unintentionally losing the names they love. Renewal reminders and name renewal best practices.",
  status: CategoryStatus.ComingSoon,
  bestPractices: [],
};
