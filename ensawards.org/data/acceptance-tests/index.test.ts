import { ACCEPTANCE_TESTS } from "data/acceptance-tests";
import { isValidSlug } from "data/shared/slugs";
import { describe, expect, it } from "vitest";

import { areStringsUnique } from "@/utils";

describe("Acceptance test data", () => {
  it("Should have valid and unique slugs", () => {
    const slugArray: string[] = [];

    ACCEPTANCE_TESTS.forEach((acceptanceTest) => {
      expect(
        isValidSlug(acceptanceTest.acceptanceTestSlug),
        `Slug={${acceptanceTest.acceptanceTestSlug}} is not valid`,
      ).toEqual(true);

      slugArray.push(acceptanceTest.acceptanceTestSlug);
    });

    expect(areStringsUnique(slugArray), `Slugs for Acceptance Tests are not unique`).toEqual(true);
  });
});
