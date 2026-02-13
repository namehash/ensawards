import type { BestPracticeCategory } from "@/types/bestPractices.ts";

import { ContractNamingCategory } from "./contract-naming";
import { DisplayProfilesCategory } from "./display-profiles";
import { ForwardResolutionCategory } from "./forward-resolution";
import { ManageNamesCategory } from "./manage-names";
import { RegisterNamesCategory } from "./register-names";
import { RenewNamesCategory } from "./renew-names";
import { ReverseResolutionCategory } from "./reverse-resolution";

export const BEST_PRACTICE_CATEGORIES: BestPracticeCategory[] = [
  ContractNamingCategory,
  ForwardResolutionCategory,
  ReverseResolutionCategory,
  DisplayProfilesCategory,
  RegisterNamesCategory,
  RenewNamesCategory,
  ManageNamesCategory,
];
