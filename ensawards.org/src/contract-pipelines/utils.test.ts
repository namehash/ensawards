import { describe, expect, it } from "vitest";

import { CONTRACTS_TEST_DATA } from "@/contract-pipelines/contractsTestData.ts";
import type { SupportedGroupByCategory } from "@/contract-pipelines/group-by.ts";
import { getContractNamingScoresByProtocolType } from "@/contract-pipelines/utils.ts";

import { type ProtocolType, ProtocolTypes } from "../../data/ens-best-practices/types.ts";

describe("getContractNamingScoresByProtocolType", () => {
  const data = CONTRACTS_TEST_DATA;

  it("Returns correct scores for all protocol types", () => {
    const expectedResultForDeFi = {
      "protocol-ens-dao": 50,
      "protocol-uniswap-dao": 0,
    } as Record<SupportedGroupByCategory, number>;

    const expectedResultForDAO = {
      "protocol-ens-dao": 100,
      "protocol-uniswap-dao": 50,
    } as Record<SupportedGroupByCategory, number>;

    const expectedResultMapping = new Map<ProtocolType, Record<SupportedGroupByCategory, number>>([
      [ProtocolTypes.DeFi, expectedResultForDeFi],
      [ProtocolTypes.DAO, expectedResultForDAO],
    ]);

    for (const protocolType of Object.values(ProtocolTypes)) {
      const expectedResult = expectedResultMapping.get(protocolType)!;
      const result = getContractNamingScoresByProtocolType(protocolType, data);

      expect(result, `Result is not valid for ProtocolType={${protocolType}}`).toEqual(
        expectedResult,
      );
    }
  });
});
