import { BEST_PRACTICE_CATEGORIES } from "@/data/bestPracticesData.ts";
import { areStringsUnique, isValidSlug } from "@/utils";
import { describe, expect, it } from "vitest";

describe("Best Practices data", () => {
  const data = BEST_PRACTICE_CATEGORIES;
  describe("Category data", () => {
    it("Should have valid and unique slugs", () => {
      const slugArray: string[] = [];

      data.forEach((category) => {
        expect(isValidSlug(category.slug), `Slug={${category.slug}} is not valid`).toEqual(true);

        slugArray.push(category.slug);
      });

      expect(
        areStringsUnique(slugArray),
        `Slugs for best practice categories are not unique`,
      ).toEqual(true);
    });
  });

  describe("Best Practice data", () => {
    it("Should have valid and unique slugs", () => {
      data.forEach((category) => {
        const slugArray: string[] = [];
        category.bestPractices.forEach((bestPractice) => {
          expect(
            isValidSlug(bestPractice.slug),
            `Slug={${bestPractice.slug}} is not valid`,
          ).toEqual(true);

          slugArray.push(bestPractice.slug);
        });

        expect(areStringsUnique(slugArray), `Slugs for best practices are not unique`).toEqual(
          true,
        );
      });
    });

    it("Should have valid and unique categorySlugs", () => {
      data.forEach((category) => {
        const slugArray: string[] = [];
        category.bestPractices.forEach((bestPractice) => {
          expect(
            isValidSlug(bestPractice.categorySlug),
            `Slug={${bestPractice.categorySlug}} is not valid`,
          ).toEqual(true);

          slugArray.push(bestPractice.categorySlug);
        });

        expect(
          areStringsUnique(slugArray),
          `CategorySlugs for best practices are not unique`,
        ).toEqual(true);
      });
    });
  });
});
