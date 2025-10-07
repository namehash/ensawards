import { groupByProject } from "@/contract-pipelines/group-by.ts";
import type { SupportedGroupByCategory } from "@/contract-pipelines/index.ts";
import type { Contract } from "@/types/contracts.ts";
import { describe, expect, it } from "vitest";
import testContractsData from "../data/contracts-test.json";

describe("group-by functions", () => {
  const testData = testContractsData as Array<Contract>;

  describe("groupByProject", () => {
    it("should group all contracts by their project", () => {
      const expectedLengthOfEachEntry = 10;

      const result = groupByProject(testData);

      expect(result["ENS"].length).toEqual(expectedLengthOfEachEntry);
      expect(result["Uniswap"].length).toEqual(expectedLengthOfEachEntry);

      for (const [key, values] of Object.entries(result) as [
        SupportedGroupByCategory,
        Contract[],
      ][]) {
        values.forEach((value) => expect(value.project).toEqual(key));
      }
    });
  });
});
