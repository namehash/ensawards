import { describe, expect, it } from "vitest";

import { areStringsUnique, isValidSlug } from "@/utils";

import { BEST_PRACTICE_CATEGORIES, ENS_BEST_PRACTICES } from ".";

describe("Best Practices data", () => {
  const categoriesData = BEST_PRACTICE_CATEGORIES;
  const bestPracticesData = ENS_BEST_PRACTICES;
  describe("Category data", () => {
    it("Should have valid and unique slugs", () => {
      const slugArray: string[] = [];

      categoriesData.forEach((category) => {
        expect(
          isValidSlug(category.categorySlug),
          `Slug={${category.categorySlug}} is not valid`,
        ).toEqual(true);

        slugArray.push(category.categorySlug);
      });

      expect(
        areStringsUnique(slugArray),
        `Slugs for best practice categories are not unique`,
      ).toEqual(true);
    });
  });

  describe("Best Practice data", () => {
    it("Should have valid and unique slugs", () => {
      const slugArray: string[] = [];
      bestPracticesData.forEach((bestPractice) => {
        expect(
          isValidSlug(bestPractice.bestPracticeSlug),
          `Slug={${bestPractice.bestPracticeSlug}} is not valid`,
        ).toEqual(true);

        slugArray.push(bestPractice.bestPracticeSlug);
      });

      expect(areStringsUnique(slugArray), `Slugs for best practices are not unique`).toEqual(true);
    });
  });
});
