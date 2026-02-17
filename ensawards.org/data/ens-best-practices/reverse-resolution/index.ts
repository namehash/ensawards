import type { BestPracticeCategory } from "@/types/bestPractices.ts";
import { CategoryStatus } from "@/types/bestPractices.ts";

export const ReverseResolutionCategory: BestPracticeCategory = {
  id: "reverse-resolution",
  slug: "reverse-resolution",
  name: "Reverse Resolution",
  description: "Reverse records, primary names, default primary names, L2 primary names, and more.",
  status: CategoryStatus.ComingSoon,
  bestPractices: [],
};
