// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying best practice categories

import contributors from "data/contributors/index.ts";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

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
  contributions: [
    { from: contributors.lightwalker, updatedAt: parseTimestamp("2025-11-03T11:25:00.000Z") },
  ],
};

defineBestPracticeCategory(DisplayProfilesCategory);

export default DisplayProfilesCategory;
