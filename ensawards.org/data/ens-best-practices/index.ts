// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying best practices and best practice categories

import { getDefinedBestPracticeCategories, getDefinedBestPractices } from "./registry.ts";
import { type BestPractice, type BestPracticeCategory, CategoryStatuses } from "./types.ts";

import.meta.glob("./*/index.ts", { eager: true });
import.meta.glob("./*/*/index.ts", { eager: true });

export const ENS_BEST_PRACTICES: BestPractice[] = [
  ...getDefinedBestPractices().sort((a, b) => a.name.localeCompare(b.name)),
];

export const BEST_PRACTICE_CATEGORIES: BestPracticeCategory[] = [
  ...getDefinedBestPracticeCategories().sort((a, b) => {
    if (a.status !== b.status) {
      return a.status === CategoryStatuses.Active ? -1 : 1;
    }

    const aOrder = a.order ?? Number.POSITIVE_INFINITY;
    const bOrder = b.order ?? Number.POSITIVE_INFINITY;
    if (aOrder !== bOrder) return aOrder - bOrder;

    return a.name.localeCompare(b.name);
  }),
];
