import { type SupportedGroupByCategory, groupByOrg } from "@/contract-pipelines/group-by.ts";
import { contractPipeline } from "@/contract-pipelines/index.ts";
import { binaryWeights } from "@/contract-pipelines/weights.ts";
import { CONTRACTS_TEST_DATA } from "@/data/contracts-test.ts";
import { describe, expect, it } from "vitest";

describe("contract pipelines", () => {
  describe("default pipeline", () => {
    it("should return correct scores for both projects", () => {
      const expectedResult = {
        "org-ens-dao": 80,
        "org-uniswap-dao": 30,
      } as Record<SupportedGroupByCategory, number>;

      const result = contractPipeline(groupByOrg, binaryWeights, undefined, CONTRACTS_TEST_DATA);

      for (const [key, values] of Object.entries(result) as [SupportedGroupByCategory, number][]) {
        expect(result[key]).toEqual(expectedResult[key]);
      }
    });
  });
});
