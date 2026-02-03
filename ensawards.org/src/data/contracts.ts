import { arbitrum, mainnet } from "viem/chains";

import {
  AaveDaoProtocol,
  ArbitrumDaoProtocol,
  ENSDaoProtocol,
  NounsDaoProtocol,
  TaikoDaoProtocol,
  UniswapDaoProtocol,
} from "@/data/protocols.ts";
import {
  type Contract,
  ContractResolutionStatusIds,
  ContractSubtypes,
  ContractTypes,
} from "@/types/contracts.ts";

export const CONTRACTS: Contract[] = [
  {
    protocol: ENSDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72",
        chain: mainnet,
        codeName: "ENSToken",
      },
      name: "token.ensdao.eth",
    },
  },
  {
    protocol: ENSDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xd7A029Db2585553978190dB5E85eC724Aa4dF23f",
        chain: mainnet,
        codeName: "TokenLock",
      },
      name: "tokenlock.ensdao.eth",
    },
  },
  {
    protocol: ENSDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x323A76393544d5ecca80cd6ef2A560C6a395b7E3",
        chain: mainnet,
        codeName: "ENSGovernor",
      },
      name: "governor.ensdao.eth",
    },
  },
  {
    protocol: ENSDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0xFe89cc7aBB2C4183683ab71653C4cdc9B02D44b7",
        chain: mainnet,
        codeName: "TimelockController",
      },
      name: "wallet.ensdao.eth",
    },
  },
  {
    protocol: ENSDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x02D61347e5c6EA5604f3f814C5b5498421cEBdEB",
        chain: mainnet,
        codeName: "SafeProxy",
      },
      name: "twap.ensdao.eth",
    },
  },
  {
    protocol: ENSDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x552DF471a4c7Fea11Ea8d7a7b0Acc6989b902a95",
        chain: mainnet,
        codeName: "Veto",
      },
      name: "veto.ensdao.eth",
    },
  },
  {
    protocol: ENSDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x4F2083f5fBede34C2714aFfb3105539775f7FE64",
        chain: mainnet,
        codeName: "GnosisSafeProxy",
      },
      name: "endowment.ensdao.eth",
    },
  },
  {
    protocol: UniswapDaoProtocol,
    type: ContractTypes.Dao,
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
    protocol: UniswapDaoProtocol,
    type: ContractTypes.Dao,
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
    protocol: UniswapDaoProtocol,
    type: ContractTypes.Dao,
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
    protocol: UniswapDaoProtocol,
    type: ContractTypes.Dao,
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
    protocol: UniswapDaoProtocol,
    type: ContractTypes.Dao,
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
    protocol: UniswapDaoProtocol,
    type: ContractTypes.Dao,
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
    protocol: UniswapDaoProtocol,
    type: ContractTypes.Dao,
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
    protocol: UniswapDaoProtocol,
    type: ContractTypes.Dao,
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
    protocol: UniswapDaoProtocol,
    type: ContractTypes.Dao,
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
    protocol: UniswapDaoProtocol,
    type: ContractTypes.Dao,
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
  {
    protocol: UniswapDaoProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x000000000004444c5dc75cB358380D2e3dE08A90",
        chain: mainnet,
        codeName: "PoolManager",
      },
    },
  },
  {
    protocol: UniswapDaoProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xd1428ba554f4c8450b763a0b2040a4935c63f06c",
        chain: mainnet,
        codeName: "TransparentUpgradeableProxy",
      },
    },
  },
  {
    protocol: UniswapDaoProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xbd216513d74c8cf14cf4747e6aaa6420ff64ee9e",
        chain: mainnet,
        codeName: "PositionManager",
      },
    },
  },
  {
    protocol: UniswapDaoProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x52f0e24d1c21c8a0cb1e5a5dd6198556bd9e1203",
        chain: mainnet,
        codeName: "V4Quoter",
      },
    },
  },
  {
    protocol: UniswapDaoProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x7ffe42c4a5deea5b0fec41c94c136cf115597227",
        chain: mainnet,
        codeName: "StateView",
      },
    },
  },
  {
    protocol: UniswapDaoProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x66a9893cc07d91d95644aedd05d03f95e1dba8af",
        chain: mainnet,
        codeName: "UniversalRouter",
      },
    },
  },
  {
    protocol: UniswapDaoProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x000000000022D473030F116dDEE9F6B43aC78BA3",
        chain: mainnet,
        codeName: "Permit2",
      },
    },
  },
  {
    protocol: NounsDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.DefiApp,
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
    protocol: NounsDaoProtocol,
    type: ContractTypes.Dao,
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
    protocol: NounsDaoProtocol,
    type: ContractTypes.Dao,
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
    protocol: NounsDaoProtocol,
    type: ContractTypes.Dao,
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
    protocol: NounsDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.DefiApp,
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
    protocol: NounsDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.DefiApp,
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
    protocol: NounsDaoProtocol,
    type: ContractTypes.Dao,
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
    protocol: NounsDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.DefiApp,
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
  {
    protocol: ArbitrumDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xF3FC178157fb3c87548bAA86F9d24BA38E649B58",
        chain: arbitrum,
        codeName: "ArbitrumDaoTreasury",
      },
    },
  },
  {
    protocol: ArbitrumDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xbbcE8aA77782F13D4202a230d978F361B011dB27",
        chain: mainnet,
        codeName: "ARBGatewayL1",
      },
    },
  },
  {
    protocol: ArbitrumDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xCaD7828a19b363A2B44717AFB1786B5196974D8E",
        chain: arbitrum,
        codeName: "ARBGatewayL2",
      },
    },
  },
  {
    protocol: ArbitrumDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x3ffFbAdAF827559da092217e474760E2b2c3CeDd",
        chain: mainnet,
        codeName: "L1UpgradeExecutor",
      },
    },
  },
  {
    protocol: ArbitrumDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xE6841D92B0C345144506576eC13ECf5103aC7f49",
        chain: mainnet,
        codeName: "L1Timelock",
      },
    },
  },
  {
    protocol: ArbitrumDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xf07DeD9dC292157749B6Fd268E37DF6EA38395B9",
        chain: arbitrum,
        codeName: "CoreGovernor",
      },
    },
  },
  {
    protocol: ArbitrumDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x789fC99093B09aD01C34DC7251D0C89ce743e5a4",
        chain: arbitrum,
        codeName: "TreasuryGovernor",
      },
    },
  },
  {
    protocol: ArbitrumDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xCF57572261c7c2BCF21ffD220ea7d1a27D40A827",
        chain: arbitrum,
        codeName: "ArbOneUpgradeExecutor",
      },
    },
  },
  {
    protocol: ArbitrumDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x34d45e99f7D8c45ed05B5cA72D54bbD1fb3F98f0",
        chain: arbitrum,
        codeName: "L2CoreTimelock",
      },
    },
  },
  {
    protocol: ArbitrumDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xbFc1FECa8B09A5c5D3EFfE7429eBE24b9c09EF58",
        chain: arbitrum,
        codeName: "L2TreasuryTimelock",
      },
    },
  },
  {
    protocol: ArbitrumDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xF06E95eF589D9c38af242a8AAee8375f14023F85",
        chain: mainnet,
        codeName: "SecurityCouncilL1Emergency",
      },
    },
  },
  {
    protocol: ArbitrumDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x423552c0F05baCCac5Bfa91C6dCF1dc53a0A1641",
        chain: arbitrum,
        codeName: "SecurityCouncilL2Emergency",
      },
    },
  },
  {
    protocol: ArbitrumDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x8a1cDA8dee421cD06023470608605934c16A05a0",
        chain: arbitrum,
        codeName: "NomineeElectionGovernor",
      },
    },
  },
  {
    protocol: ArbitrumDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x467923B9AE90BDB36BA88eCA11604D45F13b712C",
        chain: arbitrum,
        codeName: "MemberElectionGovernor",
      },
    },
  },
  {
    protocol: ArbitrumDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xD509E5f5aEe2A205F554f36E8a7d56094494eDFC",
        chain: arbitrum,
        codeName: "Manager",
      },
    },
  },
  {
    protocol: ArbitrumDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x7481716f05E315Fc4C4a64E56DcD9bc1D6F24C0a",
        chain: arbitrum,
        codeName: "UpgradeExecRouteBuilder",
      },
    },
  },
  {
    protocol: ArbitrumDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x6f3a242cA91A119F872f0073BC14BC8a74a315Ad",
        chain: arbitrum,
        codeName: "MemberRemovalGovernor",
      },
    },
  },
  {
    protocol: ArbitrumDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x9BF7b8884Fa381a45f8CB2525905fb36C996297a",
        chain: arbitrum,
        codeName: "MemberSyncActionL2",
      },
    },
  },
  {
    protocol: ArbitrumDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x9BF7b8884Fa381a45f8CB2525905fb36C996297a",
        chain: mainnet,
        codeName: "MemberSyncActionL1",
      },
    },
  },
  {
    protocol: ArbitrumDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x1D62fFeB72e4c360CcBbacf7c965153b00260417",
        chain: arbitrum,
        codeName: "ConstitutionHash",
      },
    },
  },
  {
    protocol: ArbitrumDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x5613AF0474EB9c528A34701A5b1662E3C8FA0678",
        chain: mainnet,
        codeName: "L1ProxyAdmin",
      },
    },
  },
  {
    protocol: ArbitrumDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xdb216562328215E010F819B5aBe947bad4ca961e",
        chain: arbitrum,
        codeName: "ArbOneProxyAdmin",
      },
    },
  },
  {
    protocol: AaveDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x9AEE0B04504CeF83A65AC3f0e838D0593BCb2BC7",
        chain: mainnet,
        codeName: "AaveGovernance",
      },
    },
  },
  {
    protocol: AaveDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xa198Fac58E02A5C5F8F7e877895d50cFa9ad1E04",
        chain: mainnet,
        codeName: "GovernancePowerStrategy",
      },
    },
  },
  {
    protocol: AaveDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x6ACe1Bf22D57a33863161bFDC851316Fb0442690",
        chain: mainnet,
        codeName: "VotingPortalEth",
      },
    },
  },
  {
    protocol: AaveDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x06a1795a88b82700896583e123F46BE43877bFb6",
        chain: mainnet,
        codeName: "VotingMachine",
      },
    },
  },
  {
    protocol: AaveDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xA16044F268d84599e58E851b25f4DBA061DC6088",
        chain: mainnet,
        codeName: "VotingStrategy",
      },
    },
  },
  {
    protocol: AaveDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xa638c14525CAEE8e498A67b409CCb1B7b34c3981",
        chain: mainnet,
        codeName: "DataWarehouse",
      },
    },
  },
  {
    protocol: AaveDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x5300A1a15135EA4dc7aD5a167152C01EFc9b192A",
        chain: mainnet,
        codeName: "ExecutorLvl1",
      },
    },
  },
  {
    protocol: AaveDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x17Dd33Ed0e3dD2a80E37489B8A63063161BE6957",
        chain: mainnet,
        codeName: "ExecutorLvl2",
      },
    },
  },
  {
    protocol: AaveDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xdAbad81aF85554E9ae636395611C58F7eC1aAEc5",
        chain: mainnet,
        codeName: "PayloadsController",
      },
    },
  },
  {
    protocol: TaikoDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x9CDf589C941ee81D75F34d3755671d614f7cf261",
        chain: mainnet,
        codeName: "TaikoDAO",
      },
      name: "dao.taiko.eth",
    },
  },
  {
    protocol: TaikoDaoProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x8Efa01564425692d0a0838DC10E300BD310Cb43e",
        chain: mainnet,
        codeName: "SharedResolver",
      },
    },
  },
  {
    protocol: TaikoDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
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
  },
  {
    protocol: TaikoDaoProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x9e0a24964e5397B566c1ed39258e21aB5E35C77C",
        chain: mainnet,
        codeName: "SignalService",
      },
      name: "signals.based.taiko.eth",
    },
  },
  {
    protocol: TaikoDaoProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0xd60247c6848B7Ca29eDdF63AA924E53dB6Ddd8EC",
        chain: mainnet,
        codeName: "Bridge",
      },
      name: "bridge.based.taiko.eth",
    },
  },
  {
    protocol: TaikoDaoProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x91f67118DD47d502B1f0C354D0611997B022f29E",
        chain: mainnet,
        codeName: "QuotaManager",
      },
    },
  },
  {
    protocol: TaikoDaoProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x996282cA11E5DEb6B5D122CC3B9A1FcAAD4415Ab",
        chain: mainnet,
        codeName: "ERC20Vault",
      },
      name: "v20.based.taiko.eth",
    },
  },
  {
    protocol: TaikoDaoProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x0b470dd3A0e1C41228856Fb319649E7c08f419Aa",
        chain: mainnet,
        codeName: "ERC721Vault",
      },
      name: "v721.based.taiko.eth",
    },
  },
  {
    protocol: TaikoDaoProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0xaf145913EA4a56BE22E120ED9C24589659881702",
        chain: mainnet,
        codeName: "ERC1155Vault",
      },
      name: "v1155.based.taiko.eth",
    },
  },
  {
    protocol: TaikoDaoProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x65666141a541423606365123Ed280AB16a09A2e1",
        chain: mainnet,
        codeName: "BridgedERC20",
      },
    },
  },
  {
    protocol: TaikoDaoProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xC3310905E2BC9Cfb198695B75EF3e5B69C6A1Bf7",
        chain: mainnet,
        codeName: "BridgedERC721",
      },
    },
  },
  {
    protocol: TaikoDaoProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x3c90963cFBa436400B0F9C46Aa9224cB379c2c40",
        chain: mainnet,
        codeName: "BridgedERC1155",
      },
    },
  },
  {
    protocol: TaikoDaoProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x06a9Ab27c7e2255df1815E6CC0168d7755Feb19a",
        chain: mainnet,
        codeName: "TaikoInbox",
      },
      name: "inbox.based.taiko.eth",
    },
  },
  {
    protocol: TaikoDaoProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x9F9D2fC7abe74C79f86F0D1212107692430eef72",
        chain: mainnet,
        codeName: "TaikoWrapper",
      },
    },
  },
  {
    protocol: TaikoDaoProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xB16931e78d0cE3c9298bbEEf3b5e2276D34b8da1",
        chain: mainnet,
        codeName: "ComposeVerifier",
      },
    },
  },
  {
    protocol: TaikoDaoProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x9e322fC59b8f4A29e6b25c3a166ac1892AA30136",
        chain: mainnet,
        codeName: "SgxRethVerifier",
      },
    },
  },
  {
    protocol: TaikoDaoProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x7e6409e9b6c5e2064064a6cC994f9a2e95680782",
        chain: mainnet,
        codeName: "SgxGethVerifier",
      },
    },
  },
  {
    protocol: TaikoDaoProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x73Ee496dA20e5C65340c040B0D8c3C891C1f74AE",
        chain: mainnet,
        codeName: "Risc0RethVerifier",
      },
    },
  },
  {
    protocol: TaikoDaoProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xbee1040D0Aab17AE19454384904525aE4A3602B9",
        chain: mainnet,
        codeName: "SP1RethVerifier",
      },
    },
  },
  {
    protocol: TaikoDaoProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xff5adab685362dc4c33536a65af5873738d1216b",
        chain: mainnet,
        codeName: "SP1RemoteVerifier",
      },
    },
  },
  {
    protocol: TaikoDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x5c475bB14727833394b0704266f14157678A72b6",
        chain: mainnet,
        codeName: "TokenUnlock",
      },
    },
  },
  {
    protocol: TaikoDaoProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.Utility,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x68d30f47F19c07bCCEf4Ac7FAE2Dc12FCa3e0dC9",
        chain: mainnet,
        codeName: "labprover",
      },
    },
  },
  {
    protocol: TaikoDaoProtocol,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x75Ba76403b13b26AD1beC70D6eE937314eeaCD0a",
        chain: mainnet,
        codeName: "TaikoDAOController",
      },
      name: "controller.taiko.eth",
    },
  },
  {
    protocol: TaikoDaoProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x05d88855361808fA1d7fc28084Ef3fCa191c4e03",
        chain: mainnet,
        codeName: "ForcedInclusionStore",
      },
    },
  },
  {
    protocol: TaikoDaoProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x5A982Fb1818c22744f5d7D36D0C4c9f61937b33a",
        chain: mainnet,
        codeName: "RollupAddressResolver",
      },
    },
  },
  {
    protocol: TaikoDaoProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xfB3Ca570A5348FD101e65303eECdB5Bf43C5548a",
        chain: mainnet,
        codeName: "Risc0Groth16Verifier",
      },
    },
  },
  {
    protocol: TaikoDaoProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x8d7C954960a36a7596d7eA4945dDf891967ca8A3",
        chain: mainnet,
        codeName: "AutomataDcapAttestation",
      },
    },
  },
  {
    protocol: TaikoDaoProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0ffa4A625ED9DB32B70F99180FD00759fc3e9261",
        chain: mainnet,
        codeName: "SgxGethAutomata",
      },
    },
  },
  {
    protocol: TaikoDaoProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x02772b7B3a5Bea0141C993Dbb8D0733C19F46169",
        chain: mainnet,
        codeName: "PemCertChainLib",
      },
    },
  },
  {
    protocol: TaikoDaoProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x11A9ebA17EbF92b40fcf9a640Ebbc47Db6fBeab0",
        chain: mainnet,
        codeName: "P256Verifier",
      },
    },
  },
  {
    protocol: TaikoDaoProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.Utility,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x47bB416ee947fE4a4b655011aF7d6E3A1B80E6e9",
        chain: mainnet,
        codeName: "SigVerifyLib",
      },
    },
  },
];
