import { type SupportedGroupByCategory, groupByProtocol } from "@/contract-pipelines/group-by.ts";
import { CONTRACTS_TEST_DATA } from "@/data/contracts-test.ts";
import type { Contract } from "@/types/contracts.ts";
import { ProtocolIds } from "@/types/protocols.ts";
import { describe, expect, it } from "vitest";

describe("group-by functions", () => {
  describe("groupByProtocol", () => {
    it("should group all contracts by their protocol", () => {
      const expectedLengthOfEachEntry = 10;

      const result = groupByProtocol(CONTRACTS_TEST_DATA);

      expect(result[ProtocolIds.Ens].length).toEqual(expectedLengthOfEachEntry);
      expect(result[ProtocolIds.Uniswap].length).toEqual(expectedLengthOfEachEntry);

      for (const [key, values] of Object.entries(result) as [
        SupportedGroupByCategory,
        Contract[],
      ][]) {
        values.forEach((value) => expect(value.protocol.id).toEqual(key));
      }
    });
  });
});
