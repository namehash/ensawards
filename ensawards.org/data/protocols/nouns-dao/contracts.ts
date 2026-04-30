// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice on adding and modifying protocol's contracts

import { asInterpretedName } from "enssdk";
import { mainnet } from "viem/chains";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import contributors from "../../contributors";
import { defineContracts } from "../contracts-registry.ts";
import type { Contract } from "../contracts-types.ts";
import { ContractResolutionStatusIds } from "../contracts-types.ts";
import NounsDao from ".";

const contracts: Contract[] = [
  {
    protocol: NounsDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      name: asInterpretedName("auction.nouns.eth"),
      contract: {
        address: "0x830bd73e4184cef73443c15111a1df14e495c706",
        chain: mainnet,
        codeName: "NounsAuctionHouseProxy",
      },
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2025-12-02T17:06:00.000Z") },
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2025-12-29T10:45:00.000Z") },
    ],
  },
  {
    protocol: NounsDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      name: asInterpretedName("candidates.nouns.eth"),
      contract: {
        address: "0xf790a5f59678dd733fb3de93493a91f472ca1365",
        chain: mainnet,
        codeName: "NounsDataDaoProxy",
      },
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2025-12-02T17:06:00.000Z") },
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2025-12-29T10:45:00.000Z") },
    ],
  },
  {
    protocol: NounsDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      name: asInterpretedName("delegations.nouns.eth"),
      contract: {
        address: "0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03",
        chain: mainnet,
        codeName: "NounsToken",
      },
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2025-12-02T17:06:00.000Z") },
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2025-12-29T10:45:00.000Z") },
    ],
  },
  {
    protocol: NounsDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      name: asInterpretedName("proposals.nouns.eth"),
      contract: {
        address: "0x6f3e6272a167e8accb32072d08e0957f9c79223d",
        chain: mainnet,
        codeName: "NounsDaoProxy",
      },
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2025-12-02T17:06:00.000Z") },
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: NounsDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      name: asInterpretedName("rewards.nouns.eth"),
      contract: {
        address: "0x883860178f95d0c82413edc1d6de530cb4771d55",
        chain: mainnet,
        codeName: "NounsRewardsProxy",
      },
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2025-12-02T17:06:00.000Z") },
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2025-12-29T10:45:00.000Z") },
    ],
  },
  {
    protocol: NounsDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      name: asInterpretedName("traits.nouns.eth"),
      contract: {
        address: "0x33a9c445fb4fb21f2c030a6b2d3e2f12d017bfac",
        chain: mainnet,
        codeName: "NounsDescriptorV3",
      },
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2025-12-02T17:06:00.000Z") },
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2025-12-29T10:45:00.000Z") },
    ],
  },
  {
    protocol: NounsDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0xb1a32fc9f9d8b2cf86c068cae13108809547ef71",
        chain: mainnet,
        codeName: "NounsDAOExecutorProxy",
      },
      name: asInterpretedName("nouns.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2025-12-02T17:06:00.000Z") },
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: NounsDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      name: asInterpretedName("streams.nouns.eth"),
      contract: {
        address: "0x0fd206fc7a7dbcd5661157edcb1ffdd0d02a61ff",
        chain: mainnet,
        codeName: "NounsStreamFactory",
      },
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2025-12-02T17:06:00.000Z") },
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
];

defineContracts(contracts);

export default contracts;
