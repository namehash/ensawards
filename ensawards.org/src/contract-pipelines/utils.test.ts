import { describe, expect, it } from "vitest";

import { CONTRACTS_TEST_DATA } from "@/contract-pipelines/contractsTestData.ts";
import type { SupportedGroupByCategory } from "@/contract-pipelines/group-by.ts";
import { getContractNamingScoresByProtocolType } from "@/contract-pipelines/utils.ts";

import { type ProtocolType, ProtocolTypes } from "../../data/ens-best-practices/types.ts";
import { DAOProtocolIds } from "../../data/protocols/types.ts";

describe("getContractNamingScoresByProtocolType", () => {
  const data = CONTRACTS_TEST_DATA;

  it("Returns correct scores for all protocol types", () => {
    const expectedResultForDeFi = {
      [DAOProtocolIds.EnsDao]: 50,
      [DAOProtocolIds.UniswapDao]: 0,
    } as Record<SupportedGroupByCategory, number>;

    const expectedResultForDAO = {
      [DAOProtocolIds.EnsDao]: 100,
      [DAOProtocolIds.UniswapDao]: 50,
    } as Record<SupportedGroupByCategory, number>;

    const expectedResultMapping = new Map<ProtocolType, Record<SupportedGroupByCategory, number>>([
      [ProtocolTypes.DeFi, expectedResultForDeFi],
      [ProtocolTypes.DAO, expectedResultForDAO],
    ]);

    for (const protocolType of Object.values(ProtocolTypes)) {
      const expectedResult = expectedResultMapping.get(protocolType);
      const result = getContractNamingScoresByProtocolType(protocolType, data);

      expect(
        expectedResult,
        `No expected result defined in the test for ProtocolType={${protocolType}}`,
      ).toBeDefined();

      expect(result, `Result is not valid for ProtocolType={${protocolType}}`).toEqual(
        expectedResult!,
      );
    }
  });

  it("Throws for an unregistered ProtocolType", () => {
    expect(() =>
      getContractNamingScoresByProtocolType("unregistered-type" as ProtocolType, data),
    ).toThrow("No contract pipeline filter registered for ProtocolType: unregistered-type");
  });
});
