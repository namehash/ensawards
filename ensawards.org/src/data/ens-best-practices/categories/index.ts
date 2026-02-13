import { ContractNamingCategory } from "@/data/ens-best-practices/categories/contract-naming";
import { DisplayProfilesCategory } from "@/data/ens-best-practices/categories/display-profiles";
import { ForwardResolutionCategory } from "@/data/ens-best-practices/categories/forward-resolution";
import { ManageNamesCategory } from "@/data/ens-best-practices/categories/manage-names";
import { RegisterNamesCategory } from "@/data/ens-best-practices/categories/register-names";
import { RenewNamesCategory } from "@/data/ens-best-practices/categories/renew-names";
import { ReverseResolutionCategory } from "@/data/ens-best-practices/categories/reverse-resolution";
import type { BestPracticeCategory } from "@/types/bestPractices.ts";

export const BEST_PRACTICE_CATEGORIES: BestPracticeCategory[] = [
  ContractNamingCategory,
  ForwardResolutionCategory,
  ReverseResolutionCategory,
  DisplayProfilesCategory,
  RegisterNamesCategory,
  RenewNamesCategory,
  ManageNamesCategory,
];
