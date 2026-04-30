// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice on adding and modifying protocol's contracts

import { asInterpretedName } from "enssdk";
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
        address: "0x9cdf589c941ee81d75f34d3755671d614f7cf261",
        chain: mainnet,
        codeName: "TaikoDAO",
      },
      name: asInterpretedName("dao.taiko.eth"),
    },
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2025-11-28T14:30:00.000Z") },
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: TaikoDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x10dea67478c5f8c5e2d90e5e9b26dbe60c54d800",
        chain: mainnet,
        codeName: "TaikoToken",
      },
      name: asInterpretedName("token.taiko.eth"),
      profile: {
        avatar: new URL("https://euc.li/token.taiko.eth"),
      },
    },
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2025-11-28T14:30:00.000Z") },
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: TaikoDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x5c475bb14727833394b0704266f14157678a72b6",
        chain: mainnet,
        codeName: "TokenUnlock",
      },
    },
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2025-11-28T14:30:00.000Z") },
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: TaikoDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x75ba76403b13b26ad1bec70d6ee937314eeacd0a",
        chain: mainnet,
        codeName: "TaikoDAOController",
      },
      name: asInterpretedName("controller.taiko.eth"),
    },
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2025-11-28T14:30:00.000Z") },
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
];

defineContracts(contracts);

export default contracts;
