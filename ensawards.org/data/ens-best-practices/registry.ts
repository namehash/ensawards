import type { BestPractice, BestPracticeCategory } from "./types.ts";

const definedBestPractices = new Map<string, BestPractice>();
const definedBestPracticeCategories = new Map<string, BestPracticeCategory>();

export function defineBestPractice(bestPractice: BestPractice): void {
  // enforce best practice's id uniqueness
  if (definedBestPractices.has(bestPractice.id)) {
    throw new Error(`Best Practice with id=${bestPractice.id} is already defined`);
  }

  definedBestPractices.set(bestPractice.id, bestPractice);
}

export function defineBestPracticeCategory(category: BestPracticeCategory): void {
  // enforce category's id uniqueness
  if (definedBestPracticeCategories.has(category.id)) {
    throw new Error(`Best Practice Category with id=${category.id} is already defined`);
  }

  definedBestPracticeCategories.set(category.id, category);
}

export function getDefinedBestPractices(): BestPractice[] {
  return [...definedBestPractices.values()];
}

export function getDefinedBestPracticeCategories(): BestPracticeCategory[] {
  return [...definedBestPracticeCategories.values()];
}
