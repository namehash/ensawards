import { mainnet } from "viem/chains";

import { UniswapDao } from "@/data/protocols/uniswap-dao";
import type { Contract } from "@/types/contracts.ts";
import { ContractResolutionStatusIds, ContractSubtypes, ContractTypes } from "@/types/contracts.ts";

export const UniswapDaoContracts: Contract[] = [
  {
    protocol: UniswapDao,
    type: ContractTypes.DAO,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      name: "uni.uniswap.eth",
      contract: {
        address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
        chain: mainnet,
        codeName: "UNIToken",
      },
    },
  },
  {
    protocol: UniswapDao,
    type: ContractTypes.DAO,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x1a9C8182C09F50C8318d769245beA52c32BE35BC",
        chain: mainnet,
        codeName: "Timelock",
      },
      name: "uniswap.eth",
    },
  },
  {
    protocol: UniswapDao,
    type: ContractTypes.DAO,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      name: "governance.uniswap.eth",
      contract: {
        address: "0x5e4be8bc9637f0eaa1a755019e06a68ce081d58f",
        chain: mainnet,
        codeName: "GovernerAlpha",
      },
    },
  },
  {
    protocol: UniswapDao,
    type: ContractTypes.DAO,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x408ED6354d4973f66138C91495F2f2FCbd8724C3",
        chain: mainnet,
        codeName: "GovernorBravo",
      },
    },
  },
  {
    protocol: UniswapDao,
    type: ContractTypes.DAO,
    subtype: ContractSubtypes.Utility,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x090D4613473dEE047c3f2706764f49E0821D256e",
        chain: mainnet,
        codeName: "UniMerkleDistributor",
      },
    },
  },
  {
    protocol: UniswapDao,
    type: ContractTypes.DAO,
    subtype: ContractSubtypes.Utility,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x3032Ab3Fa8C01d786D29dAdE018d7f2017918e12",
        chain: mainnet,
        codeName: "StakingRewardsFactory",
      },
    },
  },
  {
    protocol: UniswapDao,
    type: ContractTypes.DAO,
    subtype: ContractSubtypes.Utility,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x6c3e4cb2e96b01f4b866965a91ed4437839a121a",
        chain: mainnet,
        codeName: "StakingRewards1",
      },
    },
  },
  {
    protocol: UniswapDao,
    type: ContractTypes.DAO,
    subtype: ContractSubtypes.Utility,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x7fba4b8dc5e7616e59622806932dbea72537a56b",
        chain: mainnet,
        codeName: "StakingRewards2",
      },
    },
  },
  {
    protocol: UniswapDao,
    type: ContractTypes.DAO,
    subtype: ContractSubtypes.Utility,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xa1484c3aa22a66c62b77e0ae78e15258bd0cb711",
        chain: mainnet,
        codeName: "StakingRewards3",
      },
    },
  },
  {
    protocol: UniswapDao,
    type: ContractTypes.DAO,
    subtype: ContractSubtypes.Utility,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xca35e32e7926b96a9988f61d510e038108d8068e",
        chain: mainnet,
        codeName: "StakingRewards4",
      },
    },
  },
];
