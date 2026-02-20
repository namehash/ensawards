// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying best practices and best practice categories

import { getDefinedBestPracticeCategories, getDefinedBestPractices } from "./registry.ts";
import { type BestPractice, type BestPracticeCategory } from "./types.ts";

import.meta.glob("./*/index.ts", { eager: true });
import.meta.glob("./*/*.ts", { eager: true });

export const ENS_BEST_PRACTICES: BestPractice[] = [...getDefinedBestPractices()];

export const BEST_PRACTICE_CATEGORIES: BestPracticeCategory[] = [
  ...getDefinedBestPracticeCategories(),
];
