// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying best practices and best practice categories

import { getDefinedBestPracticeCategories, getDefinedBestPractices } from "./registry.ts";
import { type BestPractice, type BestPracticeCategory, CategoryStatuses } from "./types.ts";

import.meta.glob("./*/*.ts", { eager: true });

export const ENS_BEST_PRACTICES: BestPractice[] = [
  ...getDefinedBestPractices().sort((a, b) => a.name.localeCompare(b.name)),
];

export const BEST_PRACTICE_CATEGORIES: BestPracticeCategory[] = [
  ...getDefinedBestPracticeCategories().sort((a, b) => {
    if (a.status === b.status) return a.name.localeCompare(b.name);

    if (a.status === CategoryStatuses.Active) return -1;

    return 1;
  }),
];
