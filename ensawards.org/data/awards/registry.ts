import type { Award } from "data/awards/types.ts";
import type {
  BestPracticeCategory,
  BestPracticeCategoryAwards,
} from "data/ens-best-practices/types";

const awardsRegistry: BestPracticeCategoryAwards = {};

export function defineAwards(bestPracticeCategory: BestPracticeCategory, awards: Award[]): void {
  // For now, allow overwriting awards on call, might change
  awardsRegistry[bestPracticeCategory.categorySlug] = awards;
}

export const getAwards = () => awardsRegistry;
