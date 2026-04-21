import { zeroAddress, zeroHash } from "viem";
import { describe, expect, it } from "vitest";

import { type AwardFinancial, AwardTypes } from "./types.ts";
import { sortFinancialAwards } from "./utils.ts";

describe("awards utils", () => {
  describe("sortFinancialAwards", () => {
    const placeholderChainId = 0;
    it("should sort awards by award value in descending order", () => {
      const awards: AwardFinancial[] = [
        {
          type: AwardTypes.FinancialAward,
          awardedTo: zeroAddress,
          award: 100,
          awardedAt: 1,
          chainId: placeholderChainId,
          transactionHash: zeroHash,
        },
        {
          type: AwardTypes.FinancialAward,
          awardedTo: zeroAddress,
          award: 200,
          awardedAt: 2,
          chainId: placeholderChainId,
          transactionHash: zeroHash,
        },
        {
          type: AwardTypes.FinancialAward,
          awardedTo: zeroAddress,
          award: 150,
          awardedAt: 0,
          chainId: placeholderChainId,
          transactionHash: zeroHash,
        },
      ];

      const expectedSortedAwards: AwardFinancial[] = [
        {
          type: AwardTypes.FinancialAward,
          awardedTo: zeroAddress,
          award: 200,
          awardedAt: 2,
          chainId: placeholderChainId,
          transactionHash: zeroHash,
        },
        {
          type: AwardTypes.FinancialAward,
          awardedTo: zeroAddress,
          award: 150,
          awardedAt: 0,
          chainId: placeholderChainId,
          transactionHash: zeroHash,
        },
        {
          type: AwardTypes.FinancialAward,
          awardedTo: zeroAddress,
          award: 100,
          awardedAt: 1,
          chainId: placeholderChainId,
          transactionHash: zeroHash,
        },
      ];
      const sortedAwards = [...awards].sort(sortFinancialAwards);

      expect(sortedAwards, "Should sort awards by award value in descending order").toEqual(
        expectedSortedAwards,
      );
    });

    it("should correctly resolve tiebreakers", () => {
      const awards: AwardFinancial[] = [
        {
          type: AwardTypes.FinancialAward,
          awardedTo: zeroAddress,
          award: 100,
          awardedAt: 2,
          transactionHash: zeroHash,
          chainId: placeholderChainId,
        },
        {
          type: AwardTypes.FinancialAward,
          awardedTo: zeroAddress,
          award: 100,
          awardedAt: 1,
          chainId: placeholderChainId,
          transactionHash: zeroHash,
        },
        {
          type: AwardTypes.FinancialAward,
          awardedTo: zeroAddress,
          award: 100,
          awardedAt: 3,
          chainId: placeholderChainId,
          transactionHash: zeroHash,
        },
      ];

      const expectedSortedAwards: AwardFinancial[] = [
        {
          type: AwardTypes.FinancialAward,
          awardedTo: zeroAddress,
          award: 100,
          awardedAt: 1,
          chainId: placeholderChainId,
          transactionHash: zeroHash,
        },
        {
          type: AwardTypes.FinancialAward,
          awardedTo: zeroAddress,
          award: 100,
          awardedAt: 2,
          chainId: placeholderChainId,
          transactionHash: zeroHash,
        },
        {
          type: AwardTypes.FinancialAward,
          awardedTo: zeroAddress,
          award: 100,
          awardedAt: 3,
          chainId: placeholderChainId,
          transactionHash: zeroHash,
        },
      ];
      const sortedAwards = [...awards].sort(sortFinancialAwards);

      expect(sortedAwards, "Should resolve tiebreaker from earliest to latest awardedAt").toEqual(
        expectedSortedAwards,
      );
    });
  });
});
