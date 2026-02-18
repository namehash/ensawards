import { BEST_PRACTICE_CATEGORIES, ENS_BEST_PRACTICES } from "./index.ts";
import type { BestPractice, BestPracticeCategory } from "./types.ts";

/**
 * Returns a {@link BestPracticeCategory} by {@link BestPracticeCategory.categorySlug}.
 */
export const getCategoryBySlug = (categorySlug: string): BestPracticeCategory | undefined => {
  return BEST_PRACTICE_CATEGORIES.find((category) => category.categorySlug === categorySlug);
};

/**
 * Returns a {@link BestPracticeCategory} by {@link BestPracticeCategory.id}.
 */
export const getCategoryById = (categoryId: string): BestPracticeCategory | undefined => {
  return BEST_PRACTICE_CATEGORIES.find((category) => category.id === categoryId);
};

/**
 * Returns an ENS {@link BestPractice} by {@link BestPractice.bestPracticeSlug}.
 */
export const getBestPracticeBySlug = (bestPracticeSlug: string): BestPractice | undefined => {
  return ENS_BEST_PRACTICES.find(
    (bestPractice) => bestPractice.bestPracticeSlug === bestPracticeSlug,
  );
};

/**
 * Returns an ENS {@link BestPractice} by {@link BestPractice.id}.
 */
export const getBestPracticeById = (bestPracticeId: string): BestPractice | undefined =>
  ENS_BEST_PRACTICES.find((bestPractice) => bestPractice.id === bestPracticeId);
