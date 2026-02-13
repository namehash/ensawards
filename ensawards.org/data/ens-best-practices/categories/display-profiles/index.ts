import type { BestPracticeCategory } from "@/types/bestPractices.ts";
import { CategoryStatus } from "@/types/bestPractices.ts";

export const DisplayProfilesCategory: BestPracticeCategory = {
  id: "display-profiles",
  slug: "display-profiles",
  name: "Displaying Profiles",
  description:
    "Avatar images, social records, address records, and more. Ensure each ENS profile is displayed optimally.",
  status: CategoryStatus.ComingSoon,
  bestPractices: [],
};
