import type { IncentiveProgramSlug } from "data/incentive-programs/types";
import { isValidSlug } from "data/shared/slugs";
import { describe, expect, it } from "vitest";

import { areStringsUnique } from "@/utils";

import { INCENTIVE_PROGRAMS } from ".";

describe("Incentive Program data", () => {
  const data = INCENTIVE_PROGRAMS;

  it("Should have valid and unique slugs", () => {
    const slugArray: IncentiveProgramSlug[] = [];

    data.forEach((incentiveProgram) => {
      expect(
        isValidSlug(incentiveProgram.incentiveProgramSlug),
        `Slug={${incentiveProgram.incentiveProgramSlug}} is not valid`,
      ).toEqual(true);

      slugArray.push(incentiveProgram.incentiveProgramSlug);
    });

    expect(areStringsUnique(slugArray), `Slugs for Incentive Programs are not unique.`).toEqual(
      true,
    );
  });
});
