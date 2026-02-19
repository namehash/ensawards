import { describe, expect, it } from "vitest";

import { CONTRACTS_TEST_DATA } from "@/contract-pipelines/contractsTestData.ts";
import { groupByProtocol } from "@/contract-pipelines/group-by.ts";

import type { Contract } from "../../data/protocols/contracts-types.ts";
import { type ProtocolId, ProtocolIds } from "../../data/protocols/types.ts";

describe("group-by functions", () => {
  describe("groupByProtocol", () => {
    it("should group all contracts by their protocol", () => {
      const expectedLengthOfEachEntry = 10;

      const result = groupByProtocol(CONTRACTS_TEST_DATA);

      expect(result[ProtocolIds.EnsDao].length).toEqual(expectedLengthOfEachEntry);
      expect(result[ProtocolIds.UniswapDao].length).toEqual(expectedLengthOfEachEntry);
      expect(result[ProtocolIds.Liquity].length).toEqual(expectedLengthOfEachEntry);

      for (const [key, values] of Object.entries(result) as [ProtocolId, Contract[]][]) {
        values.forEach((value) => expect(value.protocol.id).toEqual(key));
      }
    });
  });
});
