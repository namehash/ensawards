import type { BestPracticeCategory } from "@/types/bestPractices.ts";
import { CategoryStatus } from "@/types/bestPractices.ts";

export const ManageNamesCategory: BestPracticeCategory = {
  id: "manage-names",
  slug: "manage-names",
  name: "Managing Names",
  description:
    "Updating profiles, transferring ownership, configuring resolvers, and more. There's a lot to managing ENS names!",
  status: CategoryStatus.ComingSoon,
  bestPractices: [],
};
