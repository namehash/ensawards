// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice on adding and modifying protocol's contracts

import { mainnet } from "viem/chains";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import contributors from "../../contributors";
import { defineContracts } from "../contracts-registry.ts";
import type { Contract } from "../contracts-types.ts";
import { ContractResolutionStatusIds } from "../contracts-types.ts";
import UniswapDeFi from ".";

const contracts: Contract[] = [
  {
    protocol: UniswapDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x000000000004444c5dc75cb358380d2e3de08a90",
        chain: mainnet,
        codeName: "PoolManager",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2025-10-14T11:30:00.000Z") },
      { from: contributors.nischal, updatedAt: parseTimestamp("2025-12-02T17:06:00.000Z") },
      { from: contributors.stevedylan, updatedAt: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: UniswapDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xd1428ba554f4c8450b763a0b2040a4935c63f06c",
        chain: mainnet,
        codeName: "TransparentUpgradeableProxy",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2025-10-14T11:30:00.000Z") },
      { from: contributors.y3drk, updatedAt: parseTimestamp("2025-11-03T11:25:00.000Z") },
      { from: contributors.nischal, updatedAt: parseTimestamp("2025-12-02T17:06:00.000Z") },
      { from: contributors.stevedylan, updatedAt: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: UniswapDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xbd216513d74c8cf14cf4747e6aaa6420ff64ee9e",
        chain: mainnet,
        codeName: "PositionManager",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2025-10-14T11:30:00.000Z") },
      { from: contributors.nischal, updatedAt: parseTimestamp("2025-12-02T17:06:00.000Z") },
      { from: contributors.stevedylan, updatedAt: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: UniswapDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x52f0e24d1c21c8a0cb1e5a5dd6198556bd9e1203",
        chain: mainnet,
        codeName: "V4Quoter",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2025-10-14T11:30:00.000Z") },
      { from: contributors.y3drk, updatedAt: parseTimestamp("2025-11-03T11:25:00.000Z") },
      { from: contributors.nischal, updatedAt: parseTimestamp("2025-12-02T17:06:00.000Z") },
      { from: contributors.stevedylan, updatedAt: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: UniswapDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x7ffe42c4a5deea5b0fec41c94c136cf115597227",
        chain: mainnet,
        codeName: "StateView",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2025-10-14T11:30:00.000Z") },
      { from: contributors.nischal, updatedAt: parseTimestamp("2025-12-02T17:06:00.000Z") },
      { from: contributors.stevedylan, updatedAt: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: UniswapDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x66a9893cc07d91d95644aedd05d03f95e1dba8af",
        chain: mainnet,
        codeName: "UniversalRouter",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2025-10-14T11:30:00.000Z") },
      { from: contributors.nischal, updatedAt: parseTimestamp("2025-12-02T17:06:00.000Z") },
      { from: contributors.stevedylan, updatedAt: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: UniswapDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x000000000022d473030f116ddee9f6b43ac78ba3",
        chain: mainnet,
        codeName: "Permit2",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2025-10-14T11:30:00.000Z") },
      { from: contributors.nischal, updatedAt: parseTimestamp("2025-12-02T17:06:00.000Z") },
      { from: contributors.stevedylan, updatedAt: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
];

defineContracts(contracts);

export default contracts;
