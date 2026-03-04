import { describe, expect, it } from "vitest";

import { formatAccountId } from "@ensnode/ensnode-sdk";

import type { Contributor } from "./types.ts";
import { countContributorAppearances } from "./utils.ts";

describe("Contributor utils", () => {
  describe("countContributorAppearances", () => {
    it("Should return an empty map for an empty list of contributors", () => {
      const result = countContributorAppearances([]);
      expect(result.size, "Expected an empty map for an empty list of contributors").toBe(0);
    });

    it("Should count appearances of contributors correctly", () => {
      const contributors: Contributor[] = [
        { chainId: 1, address: "0x123" },
        { chainId: 1, address: "0x123" },
        { chainId: 1, address: "0x456" },
        { chainId: 2, address: "0x789" },
      ];
      const result = countContributorAppearances(contributors);

      expect(
        result.get(formatAccountId(contributors[0]))?.count,
        "Expected 2 appearances for the first contributor",
      ).toBe(2);
      expect(
        result.get(formatAccountId(contributors[2]))?.count,
        "Expected 1 appearance for the second contributor",
      ).toBe(1);
      expect(
        result.get(formatAccountId(contributors[3]))?.count,
        "Expected 1 appearance for the third contributor",
      ).toBe(1);
    });

    it("Should treat contributors with the same address but different chain IDs as different contributors", () => {
      const contributors: Contributor[] = [
        { chainId: 1, address: "0x123" },
        { chainId: 2, address: "0x123" },
      ];
      const result = countContributorAppearances(contributors);

      expect(
        result.get(formatAccountId(contributors[0])),
        "Expected the first contributor to be defined",
      ).toBeDefined();
      expect(
        result.get(formatAccountId(contributors[1])),
        "Expected the second contributor to be defined",
      ).toBeDefined();
    });

    it("Should not add the same contributor multiple times", () => {
      const singleContributor: Contributor = { chainId: 1, address: "0x123" };
      const contributors: Contributor[] = [singleContributor, singleContributor, singleContributor];
      const result = countContributorAppearances(contributors);

      expect(result.size, "Expected only one unique contributor").toBe(1);
      expect(
        result.get(formatAccountId(singleContributor))?.count,
        "Expected 3 appearances for the contributor",
      ).toBe(3);
    });
  });
});
