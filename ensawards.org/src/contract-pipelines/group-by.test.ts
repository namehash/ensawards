import {groupByOrg, type SupportedGroupByCategory} from "@/contract-pipelines/group-by.ts";
import type { Contract } from "@/types/contracts.ts";
import { describe, expect, it } from "vitest";
import {CONTRACTS_TEST_DATA} from "@/data/contracts-test.ts";
import {OrganizationNames} from "@/types/organizations.ts";

describe("group-by functions", () => {

  describe("groupByProject", () => {
    it("should group all contracts by their project", () => {
      const expectedLengthOfEachEntry = 10;

      const result = groupByOrg(CONTRACTS_TEST_DATA);

      expect(result[OrganizationNames.Ens].length).toEqual(expectedLengthOfEachEntry);
      expect(result[OrganizationNames.Uniswap].length).toEqual(expectedLengthOfEachEntry);

      for (const [key, values] of Object.entries(result) as [
        SupportedGroupByCategory,
        Contract[],
      ][]) {
        values.forEach((value) => expect(value.org).toEqual(key));
      }
    });
  });
});
