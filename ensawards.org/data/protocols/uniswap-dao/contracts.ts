// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice on adding and modifying protocol's contracts

import { asInterpretedName } from "enssdk";
import { mainnet } from "viem/chains";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import contributors from "../../contributors";
import { defineContracts } from "../contracts-registry.ts";
import type { Contract } from "../contracts-types.ts";
import { ContractResolutionStatusIds } from "../contracts-types.ts";
import UniswapDao from ".";

const contracts: Contract[] = [
  {
    protocol: UniswapDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      name: asInterpretedName("uni.uniswap.eth"),
      contract: {
        address: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
        chain: mainnet,
        codeName: "UNIToken",
      },
    },
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2025-10-14T11:30:00.000Z") },
    ],
  },
  {
    protocol: UniswapDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x1a9c8182c09f50c8318d769245bea52c32be35bc",
        chain: mainnet,
        codeName: "Timelock",
      },
      name: asInterpretedName("uniswap.eth"),
    },
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2025-10-14T11:30:00.000Z") },
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2025-11-03T11:25:00.000Z") },
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: UniswapDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      name: asInterpretedName("governance.uniswap.eth"),
      contract: {
        address: "0x5e4be8bc9637f0eaa1a755019e06a68ce081d58f",
        chain: mainnet,
        codeName: "GovernorAlpha",
      },
    },
    contributions: [
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: UniswapDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x408ed6354d4973f66138c91495f2f2fcbd8724c3",
        chain: mainnet,
        codeName: "GovernorBravo",
      },
    },
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2025-10-14T11:30:00.000Z") },
    ],
  },
  {
    protocol: UniswapDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x090d4613473dee047c3f2706764f49e0821d256e",
        chain: mainnet,
        codeName: "UniMerkleDistributor",
      },
    },
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2025-10-14T11:30:00.000Z") },
    ],
  },
  {
    protocol: UniswapDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x3032ab3fa8c01d786d29dade018d7f2017918e12",
        chain: mainnet,
        codeName: "StakingRewardsFactory",
      },
    },
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2025-10-14T11:30:00.000Z") },
    ],
  },
  {
    protocol: UniswapDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x6c3e4cb2e96b01f4b866965a91ed4437839a121a",
        chain: mainnet,
        codeName: "StakingRewards1",
      },
    },
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2025-10-14T11:30:00.000Z") },
    ],
  },
  {
    protocol: UniswapDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x7fba4b8dc5e7616e59622806932dbea72537a56b",
        chain: mainnet,
        codeName: "StakingRewards2",
      },
    },
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2025-10-14T11:30:00.000Z") },
    ],
  },
  {
    protocol: UniswapDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xa1484c3aa22a66c62b77e0ae78e15258bd0cb711",
        chain: mainnet,
        codeName: "StakingRewards3",
      },
    },
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2025-10-14T11:30:00.000Z") },
    ],
  },
  {
    protocol: UniswapDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xca35e32e7926b96a9988f61d510e038108d8068e",
        chain: mainnet,
        codeName: "StakingRewards4",
      },
    },
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2025-10-14T11:30:00.000Z") },
    ],
  },
];

defineContracts(contracts);

export default contracts;
