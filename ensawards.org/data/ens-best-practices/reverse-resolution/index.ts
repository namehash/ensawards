// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying best practice categories

import contributors from "data/contributors/index.ts";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { defineBestPracticeCategory } from "../registry.ts";
import type { BestPracticeCategory } from "../types.ts";
import { CategoryStatus } from "../types.ts";

const ReverseResolutionCategory: BestPracticeCategory = {
  id: "reverse-resolution",
  categorySlug: "reverse-resolution",
  name: "Reverse Resolution",
  description: "Reverse records, primary names, default primary names, L2 primary names, and more.",
  status: CategoryStatus.ComingSoon,
};

defineBestPracticeCategory(ReverseResolutionCategory);

export default ReverseResolutionCategory;
