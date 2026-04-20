import { AwardedProjectTypes } from "data/contract-naming-season-awards/awarded-project-types";
import { isNormalizedAddress, type NormalizedAddress } from "data/shared/normalizedAddress";
import { describe, expect, it } from "vitest";

import { CONTRACT_NAMING_SEASON_DISTRIBUTED_AWARDS } from ".";

describe("Contract Naming Season Awards data", () => {
  const data = CONTRACT_NAMING_SEASON_DISTRIBUTED_AWARDS;
  it("Should have valid and unique recipient addresses", () => {
    const addresses: Set<NormalizedAddress> = new Set();

    data.forEach((award) => {
      expect(
        isNormalizedAddress(award.depositedTo),
        `Invalid address: ${award.depositedTo}`,
      ).toStrictEqual(true);
      expect(
        addresses.has(award.depositedTo),
        `Duplicate address found: ${award.depositedTo}`,
      ).toBe(false);
      addresses.add(award.depositedTo);
    });
  });

  it("Should have valid award amounts", () => {
    data.forEach((award) => {
      expect(award.award).toBeGreaterThan(0);
      expect(Number.isFinite(award.award)).toBeTruthy();
    });
  });

  it("Should have a non-empty custom project name if project information is provided", () => {
    data.forEach((award) => {
      if (award.project && award.project.type === AwardedProjectTypes.Custom) {
        expect(
          award.project.name.trim().length,
          `Custom project name is empty for an award deposited to: ${award.depositedTo}`,
        ).toBeGreaterThan(0);
      }
    });
  });
});
