import { zeroAddress, zeroHash } from "viem";
import { describe, expect, it } from "vitest";

import type { ChainId } from "@ensnode/ensnode-sdk";

import { type AwardFinancial, AwardTypes } from "./types.ts";
import { sortFinancialAwardsByPrice } from "./utils.ts";

describe("awards utils", () => {
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
          price: 100,
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
          price: 200,
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
          price: 150,
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
          price: 200,
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
          price: 150,
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
          price: 100,
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
          price: 100,
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
          price: 100,
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
          price: 100,
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
          price: 100,
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
          price: 100,
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
          price: 100,
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
