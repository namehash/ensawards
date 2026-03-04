// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice on adding and modifying protocol's contracts

import { mainnet } from "viem/chains";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import contributors from "../../contributors";
import { defineContracts } from "../contracts-registry.ts";
import type { Contract } from "../contracts-types.ts";
import { ContractResolutionStatusIds } from "../contracts-types.ts";
import TaikoDao from ".";

const contracts: Contract[] = [
  {
    protocol: TaikoDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x9CDf589C941ee81D75F34d3755671d614f7cf261",
        chain: mainnet,
        codeName: "TaikoDAO",
      },
      name: "dao.taiko.eth",
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2025-11-28T14:30:00.000Z") },
      { from: contributors.stevedylan, updatedAt: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: TaikoDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x10dea67478c5F8C5E2D90e5E9B26dBe60c54d800",
        chain: mainnet,
        codeName: "TaikoToken",
      },
      name: "token.taiko.eth",
      profile: {
        avatar: new URL("https://euc.li/token.taiko.eth"),
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2025-11-28T14:30:00.000Z") },
      { from: contributors.stevedylan, updatedAt: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: TaikoDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x5c475bB14727833394b0704266f14157678A72b6",
        chain: mainnet,
        codeName: "TokenUnlock",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2025-11-28T14:30:00.000Z") },
      { from: contributors.stevedylan, updatedAt: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: TaikoDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x75Ba76403b13b26AD1beC70D6eE937314eeaCD0a",
        chain: mainnet,
        codeName: "TaikoDAOController",
      },
      name: "controller.taiko.eth",
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2025-11-28T14:30:00.000Z") },
      { from: contributors.stevedylan, updatedAt: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
];

defineContracts(contracts);

export default contracts;
