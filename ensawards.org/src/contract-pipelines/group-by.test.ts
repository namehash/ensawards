import { describe, expect, it } from "vitest";

import { groupByOrg, type SupportedGroupByCategory } from "@/contract-pipelines/group-by.ts";
import { CONTRACTS_TEST_DATA } from "@/data/contracts-test.ts";
import type { Contract } from "@/types/contracts.ts";
import { OrgIds } from "@/types/organizations.ts";

describe("group-by functions", () => {
  describe("groupByOrg", () => {
    it("should group all contracts by their org", () => {
      const expectedLengthOfEachEntry = 10;

      const result = groupByOrg(CONTRACTS_TEST_DATA);

      expect(result[OrgIds.Ens].length).toEqual(expectedLengthOfEachEntry);
      expect(result[OrgIds.Uniswap].length).toEqual(expectedLengthOfEachEntry);

      for (const [key, values] of Object.entries(result) as [
        SupportedGroupByCategory,
        Contract[],
      ][]) {
        values.forEach((value) => expect(value.org.id).toEqual(key));
      }
    });
  });
});
