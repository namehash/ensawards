import type { ChainId } from "enssdk";
import { zeroAddress, zeroHash } from "viem";
import { describe, expect, it } from "vitest";

import { CurrencyIds, parseEnsTokens, parseUsdc } from "@ensnode/ensnode-sdk";

import { type AwardFinancial, AwardTypes } from "./types.ts";
import { isValidAwardValue, sortFinancialAwardsByPrice } from "./utils.ts";

describe("awards utils", () => {
  describe("isValidAwardValue", () => {
    it("should return true for valid award values", () => {
      expect(
        isValidAwardValue(parseUsdc("1000")),
        "Should return true for positive finite amounts",
      ).toBe(true);
    });

    it("should return false for invalid award values", () => {
      expect(isValidAwardValue(parseUsdc("0")), "Should return false for zero amount").toBe(false);

      // Not possible to have negative amounts with parseX function (it will throw instead),
      // but we want to ensure the validation function
      // behaves correctly if it receives such input
      expect(
        isValidAwardValue({ currency: CurrencyIds.USDC, amount: -10n }),
        "Should return false for negative amount",
      ).toBe(false);
    });
  });

  describe("sortFinancialAwardsByPrice", () => {
    const placeholderChainId: ChainId = 1;
    it("should sort awards by award value in descending order", () => {
      const awards: AwardFinancial[] = [
        {
          associatedIncentiveProgramSlug: "placeholder-incentive-program",
          type: AwardTypes.FinancialAward,
          awardedTo: {
            chainId: placeholderChainId,
            address: zeroAddress,
          },
          price: parseEnsTokens("100"),
          awardedAt: 1,
          transaction: {
            chainId: placeholderChainId,
            transactionHash: zeroHash,
          },
        },
        {
          associatedIncentiveProgramSlug: "placeholder-incentive-program",
          type: AwardTypes.FinancialAward,
          awardedTo: {
            chainId: placeholderChainId,
            address: zeroAddress,
          },
          price: parseEnsTokens("200"),
          awardedAt: 2,
          transaction: {
            chainId: placeholderChainId,
            transactionHash: zeroHash,
          },
        },
        {
          associatedIncentiveProgramSlug: "placeholder-incentive-program",
          type: AwardTypes.FinancialAward,
          awardedTo: {
            chainId: placeholderChainId,
            address: zeroAddress,
          },
          price: parseEnsTokens("150"),
          awardedAt: 0,
          transaction: {
            chainId: placeholderChainId,
            transactionHash: zeroHash,
          },
        },
      ];

      const expectedSortedAwards: AwardFinancial[] = [
        {
          associatedIncentiveProgramSlug: "placeholder-incentive-program",
          type: AwardTypes.FinancialAward,
          awardedTo: {
            chainId: placeholderChainId,
            address: zeroAddress,
          },
          price: parseEnsTokens("200"),
          awardedAt: 2,
          transaction: {
            chainId: placeholderChainId,
            transactionHash: zeroHash,
          },
        },
        {
          associatedIncentiveProgramSlug: "placeholder-incentive-program",
          type: AwardTypes.FinancialAward,
          awardedTo: {
            chainId: placeholderChainId,
            address: zeroAddress,
          },
          price: parseEnsTokens("150"),
          awardedAt: 0,
          transaction: {
            chainId: placeholderChainId,
            transactionHash: zeroHash,
          },
        },
        {
          associatedIncentiveProgramSlug: "placeholder-incentive-program",
          type: AwardTypes.FinancialAward,
          awardedTo: {
            chainId: placeholderChainId,
            address: zeroAddress,
          },
          price: parseEnsTokens("100"),
          awardedAt: 1,
          transaction: {
            chainId: placeholderChainId,
            transactionHash: zeroHash,
          },
        },
      ];
      const sortedAwards = [...awards].sort(sortFinancialAwardsByPrice);

      expect(sortedAwards, "Should sort awards by award value in descending order").toEqual(
        expectedSortedAwards,
      );
    });

    it("should correctly resolve tiebreakers", () => {
      const awards: AwardFinancial[] = [
        {
          associatedIncentiveProgramSlug: "placeholder-incentive-program",
          type: AwardTypes.FinancialAward,
          awardedTo: {
            chainId: placeholderChainId,
            address: zeroAddress,
          },
          price: parseEnsTokens("100"),
          awardedAt: 2,
          transaction: {
            chainId: placeholderChainId,
            transactionHash: zeroHash,
          },
        },
        {
          associatedIncentiveProgramSlug: "placeholder-incentive-program",
          type: AwardTypes.FinancialAward,
          awardedTo: {
            chainId: placeholderChainId,
            address: zeroAddress,
          },
          price: parseEnsTokens("100"),
          awardedAt: 1,
          transaction: {
            chainId: placeholderChainId,
            transactionHash: zeroHash,
          },
        },
        {
          associatedIncentiveProgramSlug: "placeholder-incentive-program",
          type: AwardTypes.FinancialAward,
          awardedTo: {
            chainId: placeholderChainId,
            address: zeroAddress,
          },
          price: parseEnsTokens("100"),
          awardedAt: 3,
          transaction: {
            chainId: placeholderChainId,
            transactionHash: zeroHash,
          },
        },
      ];

      const expectedSortedAwards: AwardFinancial[] = [
        {
          associatedIncentiveProgramSlug: "placeholder-incentive-program",
          type: AwardTypes.FinancialAward,
          awardedTo: {
            chainId: placeholderChainId,
            address: zeroAddress,
          },
          price: parseEnsTokens("100"),
          awardedAt: 1,
          transaction: {
            chainId: placeholderChainId,
            transactionHash: zeroHash,
          },
        },
        {
          associatedIncentiveProgramSlug: "placeholder-incentive-program",
          type: AwardTypes.FinancialAward,
          awardedTo: {
            chainId: placeholderChainId,
            address: zeroAddress,
          },
          price: parseEnsTokens("100"),
          awardedAt: 2,
          transaction: {
            chainId: placeholderChainId,
            transactionHash: zeroHash,
          },
        },
        {
          associatedIncentiveProgramSlug: "placeholder-incentive-program",
          type: AwardTypes.FinancialAward,
          awardedTo: {
            chainId: placeholderChainId,
            address: zeroAddress,
          },
          price: parseEnsTokens("100"),
          awardedAt: 3,
          transaction: {
            chainId: placeholderChainId,
            transactionHash: zeroHash,
          },
        },
      ];
      const sortedAwards = [...awards].sort(sortFinancialAwardsByPrice);

      expect(sortedAwards, "Should resolve tiebreaker from earliest to latest awardedAt").toEqual(
        expectedSortedAwards,
      );
    });
  });
});
