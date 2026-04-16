import { zeroAddress, zeroHash } from "viem";
import { describe, expect, it, vi } from "vitest";

import { type ContractNamingSeasonAward } from "./types.ts";
import { sortContractNamingSeasonAwards } from "./utils.ts";

describe("Contract naming season awards utils", () => {
  describe("sortContractNamingSeasonAwards", () => {
    it("should sort awards by award value in descending order", () => {
      const awards: ContractNamingSeasonAward[] = [
        { depositedTo: zeroAddress, award: 100, awardedAt: 0, transactionHash: zeroHash },
        { depositedTo: zeroAddress, award: 200, awardedAt: 0, transactionHash: zeroHash },
        { depositedTo: zeroAddress, award: 150, awardedAt: 0, transactionHash: zeroHash },
      ];

      const expectedSortedAwards: ContractNamingSeasonAward[] = [
        { depositedTo: zeroAddress, award: 200, awardedAt: 0, transactionHash: zeroHash },
        { depositedTo: zeroAddress, award: 150, awardedAt: 0, transactionHash: zeroHash },
        { depositedTo: zeroAddress, award: 100, awardedAt: 0, transactionHash: zeroHash },
      ];
      const sortedAwards = [...awards].sort(sortContractNamingSeasonAwards);

      sortedAwards.forEach((award, index) => {
        expect(award, "Should sort awards by award value in descending order").toEqual(
          expectedSortedAwards[index],
        );
      });
    });
  });
});
