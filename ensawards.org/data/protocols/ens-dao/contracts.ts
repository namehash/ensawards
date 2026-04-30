// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice on adding and modifying protocol's contracts

import { asInterpretedName } from "enssdk";
import { mainnet } from "viem/chains";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import contributors from "../../contributors";
import { defineContracts } from "../contracts-registry.ts";
import type { Contract } from "../contracts-types.ts";
import { ContractResolutionStatusIds } from "../contracts-types.ts";
import ENSDao from ".";

const contracts: Contract[] = [
  {
    protocol: ENSDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0xc18360217d8f7ab5e7c516566761ea12ce7f9d72",
        chain: mainnet,
        codeName: "ENSToken",
      },
      name: asInterpretedName("token.ensdao.eth"),
    },
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2025-10-14T11:30:00.000Z") },
    ],
  },
  {
    protocol: ENSDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xd7a029db2585553978190db5e85ec724aa4df23f",
        chain: mainnet,
        codeName: "TokenLock",
      },
      name: asInterpretedName("tokenlock.ensdao.eth"),
    },
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2025-10-14T11:30:00.000Z") },
    ],
  },
  {
    protocol: ENSDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x323a76393544d5ecca80cd6ef2a560c6a395b7e3",
        chain: mainnet,
        codeName: "ENSGovernor",
      },
      name: asInterpretedName("governor.ensdao.eth"),
    },
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2025-10-14T11:30:00.000Z") },
    ],
  },
  {
    protocol: ENSDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0xfe89cc7abb2c4183683ab71653c4cdc9b02d44b7",
        chain: mainnet,
        codeName: "TimelockController",
      },
      name: asInterpretedName("wallet.ensdao.eth"),
    },
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2025-10-14T11:30:00.000Z") },
    ],
  },
  {
    protocol: ENSDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x02d61347e5c6ea5604f3f814c5b5498421cebdeb",
        chain: mainnet,
        codeName: "SafeProxy",
      },
      name: asInterpretedName("twap.ensdao.eth"),
    },
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2025-10-14T11:30:00.000Z") },
    ],
  },
  {
    protocol: ENSDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x552df471a4c7fea11ea8d7a7b0acc6989b902a95",
        chain: mainnet,
        codeName: "Veto",
      },
      name: asInterpretedName("veto.ensdao.eth"),
    },
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2025-10-14T11:30:00.000Z") },
    ],
  },
  {
    protocol: ENSDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x4f2083f5fbede34c2714affb3105539775f7fe64",
        chain: mainnet,
        codeName: "GnosisSafeProxy",
      },
      name: asInterpretedName("endowment.ensdao.eth"),
    },
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2025-10-14T11:30:00.000Z") },
    ],
  },
];

defineContracts(contracts);

export default contracts;
