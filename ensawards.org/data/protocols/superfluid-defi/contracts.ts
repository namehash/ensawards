// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice on adding and modifying protocol's contracts

import { asNormalizedAddress } from "enssdk";
import { mainnet } from "viem/chains";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import contributors from "../../contributors";
import { defineContracts } from "../contracts-registry.ts";
import type { Contract } from "../contracts-types.ts";
import { ContractResolutionStatusIds } from "../contracts-types.ts";
import SuperfluidDeFi from ".";

const contracts: Contract[] = [
  // Template entry — replace the placeholder address/codeName with a real Superfluid contract.
  {
    protocol: SuperfluidDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: asNormalizedAddress("0x0000000000000000000000000000000000000001"),
        chain: mainnet,
        codeName: "Superfluid",
      },
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-05-29T00:00:00.000Z") },
    ],
  },
];

defineContracts(contracts);

export default contracts;
