import { isValidSlug } from "data/shared/slugs";
import { describe, expect, it } from "vitest";

import { formatAccountId } from "@ensnode/ensnode-sdk";

import { areStringsUnique } from "@/utils";

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

    it("Should have valid and unique ids", () => {
      const idArray: string[] = [];

      categoriesData.forEach((category) => {
        expect(category.id.length > 0, `ID={${category.id}} is empty`).toEqual(true);
        idArray.push(category.id);
      });

      expect(areStringsUnique(idArray), `IDs for Best Practice categories are not unique`).toEqual(
        true,
      );
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

    it("Should have valid and unique ids", () => {
      const idArray: string[] = [];

      bestPracticesData.forEach((bestPractice) => {
        expect(bestPractice.id.length > 0, `ID={${bestPractice.id}} is empty`).toEqual(true);
        idArray.push(bestPractice.id);
      });

      expect(areStringsUnique(idArray), `IDs for Best Practices are not unique`).toEqual(true);
    });

    it("Should have unique contributor entries", () => {
      bestPracticesData.forEach((bestPractice) => {
        const contributorsList = bestPractice.contributions.map((contribution) =>
          formatAccountId(contribution.from),
        );
        const uniqueContributors = new Set(contributorsList);
        expect(
          uniqueContributors.size,
          `Best practice ${bestPractice.bestPracticeSlug} has duplicate contributors`,
        ).toEqual(contributorsList.length);
      });
    });
  });
});
