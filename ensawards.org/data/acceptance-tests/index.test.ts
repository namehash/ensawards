import { ENS_BEST_PRACTICES } from "data/ens-best-practices";
import { isValidSlug } from "data/shared/slugs";
import { describe, expect, it } from "vitest";

import { areStringsUnique } from "@/utils";

describe("Acceptance test data", () => {
  it("Should have valid and unique slugs", () => {
    const slugArray: string[] = [];

    ENS_BEST_PRACTICES.forEach((bestPractice) => {
      bestPractice.technicalDetails.acceptanceTests.forEach((acceptanceTest) => {
        expect(
          isValidSlug(acceptanceTest.acceptanceTestSlug),
          `Slug={${acceptanceTest.acceptanceTestSlug}} is not valid`,
        ).toEqual(true);

        slugArray.push(acceptanceTest.acceptanceTestSlug);
      });

      expect(areStringsUnique(slugArray), `Slugs for Acceptance Tests are not unique`).toEqual(
        true,
      );
    });
  });

  // TODO: Any more immediate tests we should add here?
});
