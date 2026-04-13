import { type Address, isAddress } from "viem";
import { describe, expect, it } from "vitest";

import { CONTRACT_NAMING_SEASON_DISTRIBUTED_AWARDS } from ".";

describe("Contract Naming Season Awards data", () => {
  const data = CONTRACT_NAMING_SEASON_DISTRIBUTED_AWARDS;
  it("Should have valid and unique recipient addresses", () => {
    const addresses: Set<Address> = new Set();

    data.forEach((award) => {
      expect(isAddress(award.depositedTo), `Invalid address: ${award.depositedTo}`).toStrictEqual(
        true,
      );
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
    });
  });

  it("Should have a non-empty project name if project information is provided", () => {
    data.forEach((award) => {
      if (award.project) {
        expect(
          award.project.name.trim().length,
          `Project name is empty for an award deposited to: ${award.depositedTo}`,
        ).toBeGreaterThan(0);
      }
    });
  });
});
