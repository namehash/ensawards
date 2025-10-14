import { APPS, type AppData } from "@/data/appData.ts";
import {
  BEST_PRACTICE_CATEGORIES,
  type BestPractice,
  type BestPracticeCategory,
} from "@/data/bestPracticesData.ts";
import { ORGANIZATIONS } from "@/data/organizations.ts";
import type { OrgId, Organization } from "@/types/organizations.ts";

export const getOrgById = (orgId: OrgId): Organization => {
  //Because of invariant that ORGANIZATIONS array satisfies we are guaranteed to find corresponding org
  return ORGANIZATIONS.find((org) => org.id === orgId)!;
};

export const getOrgBySlug = (orgSlug: string): Organization | undefined => {
  return ORGANIZATIONS.find((org) => org.slug === orgSlug);
};

export const getAppBySlug = (appSlug: string): AppData | undefined => {
  return APPS.find((app) => app.slug === appSlug);
};

export const getAppById = (appId: string): AppData | undefined => {
  return APPS.find((app) => app.id === appId);
};

export const getCategoryBySlug = (categorySlug: string): BestPracticeCategory | undefined => {
  return BEST_PRACTICE_CATEGORIES.find((category) => category.slug === categorySlug);
};

export const getCategoryById = (categoryId: string): BestPracticeCategory | undefined => {
  return BEST_PRACTICE_CATEGORIES.find((category) => category.id === categoryId);
};

export const getBestPracticeByCategoryAndSlug = (
  categorySlug: string,
  bestPracticeSlug: string,
): BestPractice | undefined => {
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return undefined;
  }

  return category.bestPractices.find((bestPractice) => bestPractice.slug === bestPracticeSlug);
};

export const getBestPracticeByCategoryAndId = (
  categoryId: string,
  bestPracticeId: string,
): BestPractice | undefined => {
  const category = getCategoryById(categoryId);

  if (!category) {
    return undefined;
  }

  return category.bestPractices.find((bestPractice) => bestPractice.id === bestPracticeId);
};
