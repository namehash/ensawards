// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying best practice categories

import contributors from "data/contributors/index.ts";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { defineBestPracticeCategory } from "../registry.ts";
import type { BestPracticeCategory } from "../types.ts";
import { CategoryStatus } from "../types.ts";

const ManageNamesCategory: BestPracticeCategory = {
  id: "manage-names",
  categorySlug: "manage-names",
  name: "Managing Names",
  description:
    "Updating profiles, transferring ownership, configuring resolvers, and more. There's a lot to managing ENS names!",
  status: CategoryStatus.ComingSoon,
  contributions: [
    { from: contributors.lightwalker, updatedAt: parseTimestamp("2025-11-03T11:25:00.000Z") },
  ],
};

defineBestPracticeCategory(ManageNamesCategory);

export default ManageNamesCategory;
