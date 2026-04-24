// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice on adding and modifying protocol's contracts

import { mainnet } from "viem/chains";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import contributors from "../../contributors";
import { defineContracts } from "../contracts-registry.ts";
import type { Contract } from "../contracts-types.ts";
import { ContractResolutionStatusIds } from "../contracts-types.ts";
import AaveDao from ".";

const contracts: Contract[] = [
  {
    protocol: AaveDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x9aee0b04504cef83a65ac3f0e838d0593bcb2bc7",
        chain: mainnet,
        codeName: "AaveGovernance",
      },
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2025-12-02T17:06:00.000Z") },
    ],
  },
  {
    protocol: AaveDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xa198fac58e02a5c5f8f7e877895d50cfa9ad1e04",
        chain: mainnet,
        codeName: "GovernancePowerStrategy",
      },
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2025-12-02T17:06:00.000Z") },
    ],
  },
  {
    protocol: AaveDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x6ace1bf22d57a33863161bfdc851316fb0442690",
        chain: mainnet,
        codeName: "VotingPortalEth",
      },
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2025-12-02T17:06:00.000Z") },
    ],
  },
  {
    protocol: AaveDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x06a1795a88b82700896583e123f46be43877bfb6",
        chain: mainnet,
        codeName: "VotingMachine",
      },
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2025-12-02T17:06:00.000Z") },
    ],
  },
  {
    protocol: AaveDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xa16044f268d84599e58e851b25f4dba061dc6088",
        chain: mainnet,
        codeName: "VotingStrategy",
      },
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2025-12-02T17:06:00.000Z") },
    ],
  },
  {
    protocol: AaveDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xa638c14525caee8e498a67b409ccb1b7b34c3981",
        chain: mainnet,
        codeName: "DataWarehouse",
      },
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2025-12-02T17:06:00.000Z") },
    ],
  },
  {
    protocol: AaveDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x5300a1a15135ea4dc7ad5a167152c01efc9b192a",
        chain: mainnet,
        codeName: "ExecutorLvl1",
      },
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2025-12-02T17:06:00.000Z") },
    ],
  },
  {
    protocol: AaveDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x17dd33ed0e3dd2a80e37489b8a63063161be6957",
        chain: mainnet,
        codeName: "ExecutorLvl2",
      },
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2025-12-02T17:06:00.000Z") },
    ],
  },
  {
    protocol: AaveDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xdabad81af85554e9ae636395611c58f7ec1aaec5",
        chain: mainnet,
        codeName: "PayloadsController",
      },
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2025-12-02T17:06:00.000Z") },
    ],
  },
];

defineContracts(contracts);

export default contracts;
