// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying best practice categories

import contributors from "data/contributors/index.ts";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { defineBestPracticeCategory } from "../registry.ts";
import type { BestPracticeCategory } from "../types.ts";
import { CategoryStatus } from "../types.ts";

const RegisterNamesCategory: BestPracticeCategory = {
  id: "register-names",
  categorySlug: "register-names",
  name: "Registering Names",
  description:
    "Provide smooth onboarding when supporting users to find and register their own names.",
  status: CategoryStatus.ComingSoon,
};

defineBestPracticeCategory(RegisterNamesCategory);

export default RegisterNamesCategory;
