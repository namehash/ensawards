import { arbitrum, base, mainnet, optimism, scroll } from "viem/chains";

import {
  AaveDao,
  ArbitrumDao,
  ENSDao,
  LiquityDefiProtocol,
  NounsDao,
  TaikoDao,
  TaikoDefiProtocol,
  UniswapDao,
  UniswapDefiProtocol,
} from "@/data/protocols.ts";
import {
  type Contract,
  ContractResolutionStatusIds,
  ContractSubtypes,
  ContractTypes,
} from "@/types/contracts.ts";

export const CONTRACTS: Contract[] = [
  {
    protocol: ENSDao,
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
    protocol: ENSDao,
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
    protocol: ENSDao,
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
    protocol: ENSDao,
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
    protocol: ENSDao,
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
    protocol: ENSDao,
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
    protocol: ENSDao,
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
    protocol: UniswapDao,
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
    protocol: UniswapDao,
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
    protocol: UniswapDao,
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
    protocol: UniswapDao,
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
    protocol: UniswapDao,
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
    protocol: UniswapDao,
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
    protocol: UniswapDao,
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
    protocol: UniswapDao,
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
    protocol: UniswapDao,
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
    protocol: UniswapDao,
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
    protocol: UniswapDefiProtocol,
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
    protocol: UniswapDefiProtocol,
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
    protocol: UniswapDefiProtocol,
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
    protocol: UniswapDefiProtocol,
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
    protocol: UniswapDefiProtocol,
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
    protocol: UniswapDefiProtocol,
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
    protocol: UniswapDefiProtocol,
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
    protocol: NounsDao,
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
    protocol: NounsDao,
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
    protocol: NounsDao,
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
    protocol: NounsDao,
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
    protocol: NounsDao,
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
    protocol: NounsDao,
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
    protocol: NounsDao,
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
    protocol: NounsDao,
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
    protocol: ArbitrumDao,
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
    protocol: ArbitrumDao,
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
    protocol: ArbitrumDao,
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
    protocol: ArbitrumDao,
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
    protocol: ArbitrumDao,
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
    protocol: ArbitrumDao,
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
    protocol: ArbitrumDao,
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
    protocol: ArbitrumDao,
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
    protocol: ArbitrumDao,
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
    protocol: ArbitrumDao,
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
    protocol: ArbitrumDao,
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
    protocol: ArbitrumDao,
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
    protocol: ArbitrumDao,
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
    protocol: ArbitrumDao,
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
    protocol: ArbitrumDao,
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
    protocol: ArbitrumDao,
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
    protocol: ArbitrumDao,
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
    protocol: ArbitrumDao,
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
    protocol: ArbitrumDao,
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
    protocol: ArbitrumDao,
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
    protocol: ArbitrumDao,
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
    protocol: ArbitrumDao,
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
    protocol: AaveDao,
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
    protocol: AaveDao,
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
    protocol: AaveDao,
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
    protocol: AaveDao,
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
    protocol: AaveDao,
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
    protocol: AaveDao,
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
    protocol: AaveDao,
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
    protocol: AaveDao,
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
    protocol: AaveDao,
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
    protocol: TaikoDao,
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
    protocol: TaikoDefiProtocol,
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
    protocol: TaikoDao,
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
    protocol: TaikoDefiProtocol,
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
    protocol: TaikoDefiProtocol,
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
    protocol: TaikoDefiProtocol,
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
    protocol: TaikoDefiProtocol,
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
    protocol: TaikoDefiProtocol,
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
    protocol: TaikoDefiProtocol,
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
    protocol: TaikoDefiProtocol,
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
    protocol: TaikoDefiProtocol,
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
    protocol: TaikoDefiProtocol,
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
    protocol: TaikoDefiProtocol,
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
    protocol: TaikoDefiProtocol,
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
    protocol: TaikoDefiProtocol,
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
    protocol: TaikoDefiProtocol,
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
    protocol: TaikoDefiProtocol,
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
    protocol: TaikoDefiProtocol,
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
    protocol: TaikoDefiProtocol,
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
    protocol: TaikoDefiProtocol,
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
    protocol: TaikoDao,
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
    protocol: TaikoDefiProtocol,
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
    protocol: TaikoDao,
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
    protocol: TaikoDefiProtocol,
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
    protocol: TaikoDefiProtocol,
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
    protocol: TaikoDefiProtocol,
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
    protocol: TaikoDefiProtocol,
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
    protocol: TaikoDefiProtocol,
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
    protocol: TaikoDefiProtocol,
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
    protocol: TaikoDefiProtocol,
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
    protocol: TaikoDefiProtocol,
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
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.Utility,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x6440f144b7e50D6a8439336510312d2F54beB01D",
        chain: mainnet,
        codeName: "boldToken",
      },
      name: "bold.token.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.Utility,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x03569CC076654F82679C4BA2124D64774781B01D",
        chain: base,
        codeName: "boldToken",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.Utility,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x03569CC076654F82679C4BA2124D64774781B01D",
        chain: arbitrum,
        codeName: "boldToken",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.Utility,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x03569CC076654F82679C4BA2124D64774781B01D",
        chain: optimism,
        codeName: "boldToken",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.Utility,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x03569CC076654F82679C4BA2124D64774781B01D",
        chain: scroll,
        codeName: "boldToken",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xf949982B91C8c61e952B3bA942cbbfaef5386684",
        chain: mainnet,
        codeName: "shared.collateralRegistry",
      },
      name: "redeem.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xF0caE19C96E572234398d6665cC1147A16cBe657",
        chain: mainnet,
        codeName: "shared.hintHelpers",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xFA61dB085510C64B83056Db3A7Acf3b6f631D235",
        chain: mainnet,
        codeName: "shared.multiTroveGetter",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x2f60bAb0072AbeC7058017f48D7256EC288c8686",
        chain: mainnet,
        codeName: "shared.exchangeHelpers",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        chain: mainnet,
        codeName: "ETHBranch.collToken",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x20F7C9ad66983F6523a0881d0f82406541417526",
        chain: mainnet,
        codeName: "ETHBranch.addressesRegistry",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xeB5A8C825582965f1d84606E078620a84ab16AfE",
        chain: mainnet,
        codeName: "ETHBranch.activePool",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x372ABD1810eAF23Cb9D941BbE7596DFb2c46BC65",
        chain: mainnet,
        codeName: "ETHBranch.borrowerOperations",
      },
      name: "borrower-ops.eth.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xedbE2509E502c0320D2e7f8b6746a49b4B50E2bF",
        chain: mainnet,
        codeName: "ETHBranch.collSurplusPool",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xD4558240d50C2E219a21c9d25afD513Bb6e5B1A0",
        chain: mainnet,
        codeName: "ETHBranch.defaultPool",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xA25269E41BD072513849F2E64Ad221e84f3063F4",
        chain: mainnet,
        codeName: "ETHBranch.sortedTroves",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x5721cbbd64fc7Ae3Ef44A0A3F9a790A9264Cf9BF",
        chain: mainnet,
        codeName: "ETHBranch.stabilityPool",
      },
      name: "stability-pool.eth.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x7bcb64B2c9206a5B699eD43363f6F98D4776Cf5A",
        chain: mainnet,
        codeName: "ETHBranch.troveManager",
      },
      name: "trove-manager.eth.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x1A0FC0b843aFD9140267D25d4E575Cb37a838013",
        chain: mainnet,
        codeName: "ETHBranch.troveNFT",
      },
      name: "trove.eth.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x9B36C3B16299D68c79F174df7e728E35b6AF4A12",
        chain: mainnet,
        codeName: "ETHBranch.metadataNFT",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xCC5F8102eb670c89a4a3c567C13851260303c24F",
        chain: mainnet,
        codeName: "ETHBranch.priceFeed",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x7b9ab3DE4036caE51F1fa4ec0a2C2fd606bCF921",
        chain: mainnet,
        codeName: "ETHBranch.gasPool",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x807DEf5E7d057DF05C796F4bc75C3Fe82Bd6EeE1",
        chain: mainnet,
        codeName: "ETHBranch.interestRouter",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x7022A4f4A2b9f0C30A5eB0B0073a8Bb4C8e70C1f",
        chain: mainnet,
        codeName: "ETHBranch.wethZapper",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xdCcBD7A365aeE086aa3b4EDe8afe895B20770AE3",
        chain: mainnet,
        codeName: "ETHBranch.leverageZapper",
      },
      name: "leverage-zapper.eth.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
        chain: mainnet,
        codeName: "wstETHBranch.collToken",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x8d733F7ea7c23Cbea7C613B6eBd845d46d3aAc54",
        chain: mainnet,
        codeName: "wstETHBranch.addressesRegistry",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x531a8f99c70D6A56A7CEe02d6B4281650d7919a0",
        chain: mainnet,
        codeName: "wstETHBranch.activePool",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xa741A32f9dcFe6aDBa088fD0f97e90742d7d5DA3",
        chain: mainnet,
        codeName: "wstETHBranch.borrowerOperations",
      },
      name: "borrower-ops.wsteth.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x36e6CBdf68f64CF00fC3a6c634A25be32Dd0A235",
        chain: mainnet,
        codeName: "wstETHBranch.collSurplusPool",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xD796e1648526400386CC4d12FA05E5F11e6a22A1",
        chain: mainnet,
        codeName: "wstETHBranch.defaultPool",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x84eb85a8C25049255614F0536Bea8F31682e86F1",
        chain: mainnet,
        codeName: "wstETHBranch.sortedTroves",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x9502b7c397E9aa22FE9dB7EF7DAF21cD2AEBe56B",
        chain: mainnet,
        codeName: "wstETHBranch.stabilityPool",
      },
      name: "stability-pool.wsteth.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xA2895d6A3bf110561Dfe4b71cA539d84e1928B22",
        chain: mainnet,
        codeName: "wstETHBranch.troveManager",
      },
      name: "trove-manager.wsteth.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x857aECeBF75f1012DC18E15020C97096aeA31b04",
        chain: mainnet,
        codeName: "wstETHBranch.troveNFT",
      },
      name: "trove.wsteth.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x362f822dF79790C8077e61110484Fffa48F682A1",
        chain: mainnet,
        codeName: "wstETHBranch.metadataNFT",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xe7Aa2Ba9E086A379d3beb224098bC634a46e314E",
        chain: mainnet,
        codeName: "wstETHBranch.priceFeed",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x8C44FBa379D8A8608C0e29B2729DeB75a981Db1f",
        chain: mainnet,
        codeName: "wstETHBranch.gasPool",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x807DEf5E7d057DF05C796F4bc75C3Fe82Bd6EeE1",
        chain: mainnet,
        codeName: "wstETHBranch.interestRouter",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xBD69D3e0eA967d146E925b7572B765c8E9C4127D",
        chain: mainnet,
        codeName: "wstETHBranch.gasCompZapper",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xe85230dE04147C4Ea363B21cdb801c1C19DF0A56",
        chain: mainnet,
        codeName: "wstETHBranch.leverageZapper",
      },
      name: "leverage-zapper.wsteth.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xae78736Cd615f374D3085123A210448E74Fc6393",
        chain: mainnet,
        codeName: "rETHBranch.collToken",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x6106046F031a22713697e04C08B330dDaf3e8789",
        chain: mainnet,
        codeName: "rETHBranch.addressesRegistry",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x9074D72cc82DaD1e13E454755Aa8f144c479532F",
        chain: mainnet,
        codeName: "rETHBranch.activePool",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xe8119fC02953B27a1b48D2573855738485A17329",
        chain: mainnet,
        codeName: "rETHBranch.borrowerOperations",
      },
      name: "borrower-ops.reth.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xba4A2bD8b76DF84CaC98eBa3f4b967D8423192bF",
        chain: mainnet,
        codeName: "rETHBranch.collSurplusPool",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x5cc5ceFD034Fdc4728D487a72Ca58A410CDdCD6b",
        chain: mainnet,
        codeName: "rETHBranch.defaultPool",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x14d8d8011dF2b396Ed2bbC4959bb73250324F386",
        chain: mainnet,
        codeName: "rETHBranch.sortedTroves",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xd442E41019B7F5C4dD78F50dc03726C446148695",
        chain: mainnet,
        codeName: "rETHBranch.stabilityPool",
      },
      name: "stability-pool.reth.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xb2B2ABEb5C357a234363FF5D180912D319e3e19e",
        chain: mainnet,
        codeName: "rETHBranch.troveManager",
      },
      name: "trove-manager.reth.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x7ae430E25b67f19B431e1D1Dc048a5BCF24C0873",
        chain: mainnet,
        codeName: "rETHBranch.troveNFT",
      },
      name: "trove.reth.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x3400874305E1547020fb8e80eAF1308B757171Af",
        chain: mainnet,
        codeName: "rETHBranch.metadataNFT",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x34F1E9c7dcc279ec70d3c4488EB2D80FBa8B7b2B",
        chain: mainnet,
        codeName: "rETHBranch.priceFeed",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x45c81dcE308389e1Bee63ae30A04Fb1e148dad41",
        chain: mainnet,
        codeName: "rETHBranch.gasPool",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x807DEf5E7d057DF05C796F4bc75C3Fe82Bd6EeE1",
        chain: mainnet,
        codeName: "rETHBranch.interestRouter",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xbE8B230dCd12E246F5eDc5c103CC98be68ab636F",
        chain: mainnet,
        codeName: "rETHBranch.gasCompZapper",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x75036b1D6DE5665c60F5C33BB4a64e8E123211A2",
        chain: mainnet,
        codeName: "rETHBranch.leverageZapper",
      },
      name: "leverage-zapper.reth.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x807DEf5E7d057DF05C796F4bc75C3Fe82Bd6EeE1",
        chain: mainnet,
        codeName: "governance",
      },
      name: "governance.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xEFc6516323FbD28e80B85A497B65A86243a54B3E",
        chain: mainnet,
        codeName: "governance.curveUsdcBoldPool",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x07a01471fA544D9C6531B631E6A96A79a9AD05E9",
        chain: mainnet,
        codeName: "governance.curveUsdcBoldGauge",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xbA415Afa8fCD65196764B5E08cb4dBF90BEE33B4",
        chain: mainnet,
        codeName: "governance.curveUsdcBoldInitiative",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x7ED17e037B7d88A8270c89B3aFA9C38e5218F12b",
        chain: mainnet,
        codeName: "governance.curveLusdBoldPool",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xa37cdce0207127204682D3235EAd2c7a4C5D6C5C",
        chain: mainnet,
        codeName: "governance.curveLusdBoldGauge",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0c76eaE597AfA2Aa163A8C845F7E7e870256aC7E",
        chain: mainnet,
        codeName: "governance.curveLusdBoldInitiative",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xDc6f869d2D34E4aee3E89A51f2Af6D54F0F7f690",
        chain: mainnet,
        codeName: "governance.defiCollectiveInitiative",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x4f9Fbb3f1E99B56e0Fe2892e623Ed36A76Fc605d",
        chain: mainnet,
        codeName: "governance.stakingV1",
      },
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x6DEA81C8171D0bA574754EF6F8b412F2Ed88c54D",
        chain: mainnet,
        codeName: "governance.LQTYToken",
      },
      name: "lqty.token.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDefiProtocol,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
        chain: mainnet,
        codeName: "governance.LUSDToken",
      },
      name: "lusd.token.liquity-protocol.eth",
    },
  },
];
