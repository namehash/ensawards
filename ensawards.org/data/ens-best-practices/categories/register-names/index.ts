import type { BestPracticeCategory } from "@/types/bestPractices.ts";
import { CategoryStatus } from "@/types/bestPractices.ts";

export const RegisterNamesCategory: BestPracticeCategory = {
  id: "register-names",
  slug: "register-names",
  name: "Registering Names",
  description:
    "Provide smooth onboarding when supporting users to find and register their own names.",
  status: CategoryStatus.ComingSoon,
  bestPractices: [],
};
