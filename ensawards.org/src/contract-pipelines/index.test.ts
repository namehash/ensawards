import { describe, expect, it } from "vitest";

import { CONTRACTS_TEST_DATA } from "@/contract-pipelines/contractsTestData.ts";
import { groupByProtocol } from "@/contract-pipelines/group-by.ts";
import { contractPipeline, type LeaderboardSortFn } from "@/contract-pipelines/index.ts";
import { binaryWeights } from "@/contract-pipelines/weights.ts";

import type { Contract } from "../../data/protocols/contracts-types.ts";
import { DAOProtocolIds, DeFiProtocolIds, type ProtocolId } from "../../data/protocols/types.ts";

describe("contract pipelines", () => {
  describe("default pipeline", () => {
    it("should return correct scores for both projects", () => {
      const expectedResult = {
        [DAOProtocolIds.EnsDao]: 80,
        [DeFiProtocolIds.Liquity]: 60,
        [DAOProtocolIds.UniswapDao]: 30,
      } as Record<ProtocolId, number>;

      const result = contractPipeline({
        groupBy: groupByProtocol,
        weights: binaryWeights,
        data: CONTRACTS_TEST_DATA,
      });

      for (const key of Object.keys(result) as ProtocolId[]) {
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

      // ENS DAO (80%) should be first,
      // Liquity DeFi Protocol (60%) should be second,
      // and Uniswap DAO (30%) should be third
      expect(keys[0]).toBe(DAOProtocolIds.EnsDao);
      expect(keys[1]).toBe(DeFiProtocolIds.Liquity);
      expect(keys[2]).toBe(DAOProtocolIds.UniswapDao);
    });
  });

  describe("custom sort function", () => {
    it("should use custom sort function when provided", () => {
      // Custom sort that reverses alphabetical order
      const customSort: LeaderboardSortFn = (
        scores: Record<ProtocolId, number>,
        _groupedContracts: Record<ProtocolId, Contract[]>,
      ) => {
        return Object.entries(scores)
          .map(([key, value]) => [key as ProtocolId, value] as [ProtocolId, number])
          .sort(([keyA], [keyB]) => keyB.localeCompare(keyA));
      };

      const result = contractPipeline({
        groupBy: groupByProtocol,
        weights: binaryWeights,
        data: CONTRACTS_TEST_DATA,
        sort: customSort,
      });
      const keys = Object.keys(result);

      // With reverse alphabetical sort, DAOProtocolIds.UniswapDao should come before
      // DeFiProtocolIds.Liquity and DAOProtocolIds.EnsDao
      expect(keys[0]).toBe(DAOProtocolIds.UniswapDao);
      expect(keys[1]).toBe(DeFiProtocolIds.Liquity);
      expect(keys[2]).toBe(DAOProtocolIds.EnsDao);
    });

    it("should pass scores and grouped contracts to custom sort function", () => {
      let receivedScores: Record<ProtocolId, number> | null = null;
      let receivedGroupedContracts: Record<ProtocolId, Contract[]> | null = null;

      const customSort: LeaderboardSortFn = (scores, groupedContracts) => {
        receivedScores = scores;
        receivedGroupedContracts = groupedContracts;
        return Object.entries(scores).map(
          ([key, value]) => [key as ProtocolId, value] as [ProtocolId, number],
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
      expect(receivedScores?.[DAOProtocolIds.EnsDao]).toBe(80);
      expect(receivedScores?.[DeFiProtocolIds.Liquity]).toBe(60);
      expect(receivedScores?.[DAOProtocolIds.UniswapDao]).toBe(30);
      expect(receivedGroupedContracts?.[DAOProtocolIds.EnsDao]).toHaveLength(10);
      expect(receivedGroupedContracts?.[DeFiProtocolIds.Liquity]).toHaveLength(10);
      expect(receivedGroupedContracts?.[DAOProtocolIds.UniswapDao]).toHaveLength(10);
    });
  });
});
