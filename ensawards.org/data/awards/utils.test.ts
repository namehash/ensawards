import { zeroAddress, zeroHash } from "viem";
import { describe, expect, it } from "vitest";

import { type AwardMoneyPrize, AwardTypes } from "./types.ts";
import { sortMoneyPrizeAwards } from "./utils.ts";

describe("awards utils", () => {
  describe("sortMoneyPrizeAwards", () => {
    it("should sort awards by award value in descending order", () => {
      const awards: AwardMoneyPrize[] = [
        {
          type: AwardTypes.MoneyPrize,
          awardedTo: zeroAddress,
          award: 100,
          awardedAt: 1,
          transactionHash: zeroHash,
        },
        {
          type: AwardTypes.MoneyPrize,
          awardedTo: zeroAddress,
          award: 200,
          awardedAt: 2,
          transactionHash: zeroHash,
        },
        {
          type: AwardTypes.MoneyPrize,
          awardedTo: zeroAddress,
          award: 150,
          awardedAt: 0,
          transactionHash: zeroHash,
        },
      ];

      const expectedSortedAwards: AwardMoneyPrize[] = [
        {
          type: AwardTypes.MoneyPrize,
          awardedTo: zeroAddress,
          award: 200,
          awardedAt: 2,
          transactionHash: zeroHash,
        },
        {
          type: AwardTypes.MoneyPrize,
          awardedTo: zeroAddress,
          award: 150,
          awardedAt: 0,
          transactionHash: zeroHash,
        },
        {
          type: AwardTypes.MoneyPrize,
          awardedTo: zeroAddress,
          award: 100,
          awardedAt: 1,
          transactionHash: zeroHash,
        },
      ];
      const sortedAwards = [...awards].sort(sortMoneyPrizeAwards);

      expect(sortedAwards, "Should sort awards by award value in descending order").toEqual(
        expectedSortedAwards,
      );
    });

    it("should correctly resolve tiebreakers", () => {
      const awards: AwardMoneyPrize[] = [
        {
          type: AwardTypes.MoneyPrize,
          awardedTo: zeroAddress,
          award: 100,
          awardedAt: 2,
          transactionHash: zeroHash,
        },
        {
          type: AwardTypes.MoneyPrize,
          awardedTo: zeroAddress,
          award: 100,
          awardedAt: 1,
          transactionHash: zeroHash,
        },
        {
          type: AwardTypes.MoneyPrize,
          awardedTo: zeroAddress,
          award: 100,
          awardedAt: 3,
          transactionHash: zeroHash,
        },
      ];

      const expectedSortedAwards: AwardMoneyPrize[] = [
        {
          type: AwardTypes.MoneyPrize,
          awardedTo: zeroAddress,
          award: 100,
          awardedAt: 1,
          transactionHash: zeroHash,
        },
        {
          type: AwardTypes.MoneyPrize,
          awardedTo: zeroAddress,
          award: 100,
          awardedAt: 2,
          transactionHash: zeroHash,
        },
        {
          type: AwardTypes.MoneyPrize,
          awardedTo: zeroAddress,
          award: 100,
          awardedAt: 3,
          transactionHash: zeroHash,
        },
      ];
      const sortedAwards = [...awards].sort(sortMoneyPrizeAwards);

      expect(sortedAwards, "Should resolve tiebreaker from earliest to latest awardedAt").toEqual(
        expectedSortedAwards,
      );
    });
  });
});
