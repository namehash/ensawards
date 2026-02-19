import { DAOProtocolIds, DeFiProtocolIds, type ProtocolId } from "data/protocols/types.ts";
import { describe, expect, it } from "vitest";

import { CONTRACTS_TEST_DATA } from "@/contract-pipelines/contractsTestData.ts";
import { binaryWeights } from "@/contract-pipelines/weights.ts";

import type { Contract } from "../../data/protocols/contracts-types.ts";

describe("weight functions", () => {
  const mockGroupedTestData = {
    [DAOProtocolIds.EnsDao]: CONTRACTS_TEST_DATA.slice(0, 10),
    [DAOProtocolIds.UniswapDao]: CONTRACTS_TEST_DATA.slice(10, 20),
    [DeFiProtocolIds.Liquity]: CONTRACTS_TEST_DATA.slice(20),
  } as Record<ProtocolId, Contract[]>;

  describe("binaryWeights", () => {
    it("should give weight = 1 to all named (either with primary or forward name) contracts", () => {
      const expectedOutput = {
        [DAOProtocolIds.EnsDao]: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [DAOProtocolIds.UniswapDao]: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [DeFiProtocolIds.Liquity]: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
      } as Record<ProtocolId, number[]>;

      const result = binaryWeights(mockGroupedTestData);

      expect(result).toEqual(expectedOutput);
    });
  });
});
