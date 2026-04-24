// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying best practice categories

import { defineBestPracticeCategory } from "../registry.ts";
import type { BestPracticeCategory } from "../types.ts";
import { CategoryStatuses } from "../types.ts";

const ForwardResolutionCategory: BestPracticeCategory = {
  id: "forward-resolution",
  categorySlug: "forward-resolution",
  name: "Forward Resolution",
  description:
    "Lookup the details of an ENS name, such as its onchain addresses, avatar image, social records, and decentralized website.",
  status: CategoryStatuses.ComingSoon,
};

defineBestPracticeCategory(ForwardResolutionCategory);

export default ForwardResolutionCategory;
