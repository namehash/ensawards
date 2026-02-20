import type { BestPractice, BestPracticeCategory } from "./types.ts";

const definedBestPractices = new Map<string, BestPractice>();
const definedBestPracticeCategories = new Map<string, BestPracticeCategory>();

export function defineBestPractice(bestPractice: BestPractice): void {
  definedBestPractices.set(bestPractice.id, bestPractice);
}

export function defineBestPracticeCategory(category: BestPracticeCategory): void {
  definedBestPracticeCategories.set(category.id, category);
}

export function getDefinedBestPractices(): BestPractice[] {
  return [...definedBestPractices.values()];
}

export function getDefinedBestPracticeCategories(): BestPracticeCategory[] {
  return [...definedBestPracticeCategories.values()];
}
