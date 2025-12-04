import { type SupportedGroupByCategory, groupByOrg } from "@/contract-pipelines/group-by.ts";
import { type LeaderboardSortFn, contractPipeline } from "@/contract-pipelines/index.ts";
import { binaryWeights } from "@/contract-pipelines/weights.ts";
import { CONTRACTS_TEST_DATA } from "@/data/contracts-test.ts";
import type { Contract } from "@/types/contracts.ts";
import { describe, expect, it } from "vitest";

describe("contract pipelines", () => {
  describe("default pipeline", () => {
    it("should return correct scores for both projects", () => {
      const expectedResult = {
        "org-ens-dao": 80,
        "org-uniswap-dao": 30,
      } as Record<SupportedGroupByCategory, number>;

      const result = contractPipeline({
        groupBy: groupByOrg,
        weights: binaryWeights,
        data: CONTRACTS_TEST_DATA,
      });

      for (const [key, values] of Object.entries(result) as [SupportedGroupByCategory, number][]) {
        expect(result[key]).toEqual(expectedResult[key]);
      }
    });

    it("should sort by score descending by default", () => {
      const result = contractPipeline({
        groupBy: groupByOrg,
        weights: binaryWeights,
        data: CONTRACTS_TEST_DATA,
      });
      const keys = Object.keys(result);

      // ENS DAO (80%) should be first, Uniswap DAO (30%) should be second
      expect(keys[0]).toBe("org-ens-dao");
      expect(keys[1]).toBe("org-uniswap-dao");
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
        groupBy: groupByOrg,
        weights: binaryWeights,
        data: CONTRACTS_TEST_DATA,
        sort: customSort,
      });
      const keys = Object.keys(result);

      // With reverse alphabetical sort, "org-uniswap-dao" should come before "org-ens-dao"
      expect(keys[0]).toBe("org-uniswap-dao");
      expect(keys[1]).toBe("org-ens-dao");
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
        groupBy: groupByOrg,
        weights: binaryWeights,
        data: CONTRACTS_TEST_DATA,
        sort: customSort,
      });

      // Verify the sort function received the expected data
      expect(receivedScores).not.toBeNull();
      expect(receivedGroupedContracts).not.toBeNull();
      expect(receivedScores?.["org-ens-dao"]).toBe(80);
      expect(receivedScores?.["org-uniswap-dao"]).toBe(30);
      expect(receivedGroupedContracts?.["org-ens-dao"]).toHaveLength(10);
      expect(receivedGroupedContracts?.["org-uniswap-dao"]).toHaveLength(10);
    });
  });
});
