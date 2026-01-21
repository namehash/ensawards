import { describe, expect, it } from "vitest";

import type { SupportedGroupByCategory } from "@/contract-pipelines/group-by.ts";
import { binaryWeights } from "@/contract-pipelines/weights.ts";
import { CONTRACTS_TEST_DATA } from "@/data/contracts-test.ts";
import type { Contract } from "@/types/contracts.ts";

describe("weight functions", () => {
  const mockGroupedTestData = {
    "org-ens-dao": CONTRACTS_TEST_DATA.slice(0, 10),
    "org-uniswap-dao": CONTRACTS_TEST_DATA.slice(10),
  } as Record<SupportedGroupByCategory, Contract[]>;

  describe("binaryWeights", () => {
    it("should give weight = 1 to all named (either with primary or forward name) contracts", () => {
      const expectedOutput = {
        "org-ens-dao": [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        "org-uniswap-dao": [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      } as Record<SupportedGroupByCategory, number[]>;

      const result = binaryWeights(mockGroupedTestData);

      expect(result).toEqual(expectedOutput);
    });
  });
});
