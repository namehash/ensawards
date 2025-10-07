import { groupByProject } from "@/contract-pipelines/group-by.ts";
import { type SupportedGroupByCategory, contractPipeline } from "@/contract-pipelines/index.ts";
import { binaryWeights } from "@/contract-pipelines/weights.ts";
import type { Contract } from "@/types/contracts.ts";
import { describe, expect, it } from "vitest";
import testContractsData from "../data/contracts-test.json";

describe("contract pipelines", () => {
  const testData = testContractsData as Array<Contract>;

  describe("default pipeline", () => {
    it("should return correct scores for both projects", () => {
      const expectedResult = {
        ENS: 80,
        Uniswap: 30,
      } as Record<SupportedGroupByCategory, number>;

      const result = contractPipeline(groupByProject, binaryWeights, undefined, testData);

      for (const [key, values] of Object.entries(result) as [SupportedGroupByCategory, number][]) {
        expect(result[key]).toEqual(expectedResult[key]);
      }
    });
  });
});
