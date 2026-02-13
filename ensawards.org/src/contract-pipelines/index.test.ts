import { describe, expect, it } from "vitest";

import { CONTRACTS_TEST_DATA } from "@/contract-pipelines/contractsTestData.ts";
import { groupByProtocol, type SupportedGroupByCategory } from "@/contract-pipelines/group-by.ts";
import { contractPipeline, type LeaderboardSortFn } from "@/contract-pipelines/index.ts";
import { binaryWeights } from "@/contract-pipelines/weights.ts";
import type { Contract } from "@/types/contracts.ts";

describe("contract pipelines", () => {
  describe("default pipeline", () => {
    it("should return correct scores for both projects", () => {
      const expectedResult = {
        "protocol-ens-dao": 80,
        "protocol-uniswap-dao": 30,
      } as Record<SupportedGroupByCategory, number>;

      const result = contractPipeline({
        groupBy: groupByProtocol,
        weights: binaryWeights,
        data: CONTRACTS_TEST_DATA,
      });

      for (const [key, values] of Object.entries(result) as [SupportedGroupByCategory, number][]) {
        expect(result[key]).toEqual(expectedResult[key]);
      }
    });

    it("should sort by score descending by default", () => {
      const result = contractPipeline({
        groupBy: groupByProtocol,
        weights: binaryWeights,
        data: CONTRACTS_TEST_DATA,
      });
      const keys = Object.keys(result);

      // ENS DAO (80%) should be first, Uniswap DAO (30%) should be second
      expect(keys[0]).toBe("protocol-ens-dao");
      expect(keys[1]).toBe("protocol-uniswap-dao");
    });
  });

  describe("custom sort function", () => {
    it("should use custom sort function when provided", () => {
      // Custom sort that reverses alphabetical order
      const customSort: LeaderboardSortFn = (
        scores: Record<SupportedGroupByCategory, number>,
        _groupedContracts: Record<SupportedGroupByCategory, Contract[]>,
      ) => {
        return Object.entries(scores)
          .map(
            ([key, value]) =>
              [key as SupportedGroupByCategory, value] as [SupportedGroupByCategory, number],
          )
          .sort(([keyA], [keyB]) => keyB.localeCompare(keyA));
      };

      const result = contractPipeline({
        groupBy: groupByProtocol,
        weights: binaryWeights,
        data: CONTRACTS_TEST_DATA,
        sort: customSort,
      });
      const keys = Object.keys(result);

      // With reverse alphabetical sort, "protocol-uniswap-dao" should come before "protocol-ens-dao"
      expect(keys[0]).toBe("protocol-uniswap-dao");
      expect(keys[1]).toBe("protocol-ens-dao");
    });

    it("should pass scores and grouped contracts to custom sort function", () => {
      let receivedScores: Record<SupportedGroupByCategory, number> | null = null;
      let receivedGroupedContracts: Record<SupportedGroupByCategory, Contract[]> | null = null;

      const customSort: LeaderboardSortFn = (scores, groupedContracts) => {
        receivedScores = scores;
        receivedGroupedContracts = groupedContracts;
        return Object.entries(scores).map(
          ([key, value]) =>
            [key as SupportedGroupByCategory, value] as [SupportedGroupByCategory, number],
        );
      };

      contractPipeline({
        groupBy: groupByProtocol,
        weights: binaryWeights,
        data: CONTRACTS_TEST_DATA,
        sort: customSort,
      });

      // Verify the sort function received the expected data
      expect(receivedScores).not.toBeNull();
      expect(receivedGroupedContracts).not.toBeNull();
      expect(receivedScores?.["protocol-ens-dao"]).toBe(80);
      expect(receivedScores?.["protocol-uniswap-dao"]).toBe(30);
      expect(receivedGroupedContracts?.["protocol-ens-dao"]).toHaveLength(10);
      expect(receivedGroupedContracts?.["protocol-uniswap-dao"]).toHaveLength(10);
    });
  });
});
