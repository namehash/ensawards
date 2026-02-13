import { mainnet } from "viem/chains";

import { NounsDao } from "@/data/protocols/nouns-dao";
import type { Contract } from "@/types/contracts.ts";
import { ContractResolutionStatusIds, ContractSubtypes, ContractTypes } from "@/types/contracts.ts";

export const NounsDaoContracts: Contract[] = [
  {
    protocol: NounsDao,
    type: ContractTypes.DAO,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      name: "auction.nouns.eth",
      contract: {
        address: "0x830BD73E4184ceF73443C15111a1DF14e495C706",
        chain: mainnet,
        codeName: "NounsAuctionHouseProxy",
      },
    },
  },
  {
    protocol: NounsDao,
    type: ContractTypes.DAO,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      name: "candidates.nouns.eth",
      contract: {
        address: "0xf790A5f59678dd733fb3De93493A91f472ca1365",
        chain: mainnet,
        codeName: "NounsDataDaoProxy",
      },
    },
  },
  {
    protocol: NounsDao,
    type: ContractTypes.DAO,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      name: "delegations.nouns.eth",
      contract: {
        address: "0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03",
        chain: mainnet,
        codeName: "NounsToken",
      },
    },
  },
  {
    protocol: NounsDao,
    type: ContractTypes.DAO,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      name: "proposals.nouns.eth",
      contract: {
        address: "0x6f3E6272A167e8AcCb32072d08E0957F9c79223d",
        chain: mainnet,
        codeName: "NounsDaoProxy",
      },
    },
  },
  {
    protocol: NounsDao,
    type: ContractTypes.DAO,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      name: "rewards.nouns.eth",
      contract: {
        address: "0x883860178F95d0C82413eDc1D6De530cB4771d55",
        chain: mainnet,
        codeName: "NounsRewardsProxy",
      },
    },
  },
  {
    protocol: NounsDao,
    type: ContractTypes.DAO,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      name: "traits.nouns.eth",
      contract: {
        address: "0x33A9c445fb4FB21f2c030A6b2d3e2F12D017BFAC",
        chain: mainnet,
        codeName: "NounsDescriptorV3",
      },
    },
  },
  {
    protocol: NounsDao,
    type: ContractTypes.DAO,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0xb1a32FC9F9D8b2cf86C068Cae13108809547ef71",
        chain: mainnet,
        codeName: "NounsDAOExecutorProxy",
      },
      name: "nouns.eth",
    },
  },
  {
    protocol: NounsDao,
    type: ContractTypes.DAO,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      name: "streams.nouns.eth",
      contract: {
        address: "0x0fd206FC7A7dBcD5661157eDCb1FFDD0D02A61ff",
        chain: mainnet,
        codeName: "NounsStreamFactory",
      },
    },
  },
];
