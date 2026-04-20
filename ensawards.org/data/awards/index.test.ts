import { AwardedProjectTypes } from "data/awards/awarded-project-types";
import { AwardTypes } from "data/awards/types";
import { isNormalizedAddress, type NormalizedAddress } from "data/shared/normalizedAddress";
import { describe, expect, it } from "vitest";

import { AWARDS } from ".";

describe("Awards data", () => {
  const data = AWARDS;
  it("Should have valid and unique recipient addresses", () => {
    Object.values(data).forEach((awards) => {
      const addresses: Set<NormalizedAddress> = new Set();
      awards.forEach((award) => {
        expect(
          isNormalizedAddress(award.awardedTo),
          `Invalid address: ${award.awardedTo}`,
        ).toStrictEqual(true);
        expect(addresses.has(award.awardedTo), `Duplicate address found: ${award.awardedTo}`).toBe(
          false,
        );
        addresses.add(award.awardedTo);
      });
    });
  });

  it("Should have valid award amounts when `AwardType` is Payout", () => {
    Object.values(data)
      .flatMap((awards) => awards)
      .filter((award) => award.type === AwardTypes.MoneyPrize)
      .forEach((award) => {
        expect(award.award).toBeGreaterThan(0);
        expect(Number.isFinite(award.award)).toBeTruthy();
      });
  });

  it("Should have a non-empty custom project name if project information is provided", () => {
    Object.values(data)
      .flatMap((awards) => awards)
      .forEach((award) => {
        if (award.project && award.project.type === AwardedProjectTypes.Custom) {
          expect(
            award.project.name.trim().length,
            `Custom project name is empty for an award deposited to: ${award.awardedTo}`,
          ).toBeGreaterThan(0);
        }
      });
  });
});
