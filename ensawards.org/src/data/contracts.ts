import {
  AaveDaoOrg,
  ArbitrumDaoOrg,
  ENSDaoOrg,
  NounsDaoOrg,
  UniswapDaoOrg,
} from "@/data/organizations.ts";
import {
  type Contract,
  ContractResolutionStatusIds,
  ContractSubtypes,
  ContractTypes,
} from "@/types/contracts.ts";
import { arbitrum, mainnet } from "viem/chains";

export const CONTRACTS: Contract[] = [
  {
    org: ENSDaoOrg,
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
    org: ENSDaoOrg,
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
    org: ENSDaoOrg,
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
    org: ENSDaoOrg,
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
    org: ENSDaoOrg,
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
    org: ENSDaoOrg,
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
    org: ENSDaoOrg,
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
    org: UniswapDaoOrg,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
        chain: mainnet,
        codeName: "UNIToken",
      },
    },
  },
  {
    org: UniswapDaoOrg,
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
    org: UniswapDaoOrg,
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
    org: UniswapDaoOrg,
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
    org: UniswapDaoOrg,
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
    org: UniswapDaoOrg,
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
    org: UniswapDaoOrg,
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
    org: UniswapDaoOrg,
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
    org: UniswapDaoOrg,
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
    org: UniswapDaoOrg,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.Protocol,
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
    org: UniswapDaoOrg,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.Protocol,
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
    org: UniswapDaoOrg,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.Protocol,
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
    org: UniswapDaoOrg,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.Protocol,
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
    org: UniswapDaoOrg,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.Protocol,
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
    org: UniswapDaoOrg,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.Protocol,
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
    org: UniswapDaoOrg,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.Protocol,
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
    org: NounsDaoOrg,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Token,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03",
        chain: mainnet,
        codeName: "NounsToken",
      },
    },
  },
  {
    org: NounsDaoOrg,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.UserFacing,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x830BD73E4184ceF73443C15111a1DF14e495C706",
        chain: mainnet,
        codeName: "NounsAuctionHouseProxy",
      },
    },
  },
  {
    org: NounsDaoOrg,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Protocol,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x1D835808ddCa38fbE14e560D8e25b3D256810aF0",
        chain: mainnet,
        codeName: "NounsAuctionHouseV3",
      },
    },
  },
  {
    org: NounsDaoOrg,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xf790A5f59678dd733fb3De93493A91f472ca1365",
        chain: mainnet,
        codeName: "NounsDataDaoProxy",
      },
    },
  },
  {
    org: NounsDaoOrg,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x513e9277192767eb4dc044A08da8228862828150",
        chain: mainnet,
        codeName: "NounsDataDao",
      },
    },
  },
  {
    org: NounsDaoOrg,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x6f3E6272A167e8AcCb32072d08E0957F9c79223d",
        chain: mainnet,
        codeName: "NounsDaoProxy",
      },
    },
  },
  {
    org: NounsDaoOrg,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xA23e8A919D29d74Ee24d909D80f4bC8778d656d1",
        chain: mainnet,
        codeName: "NounsDaoLogicV4",
      },
    },
  },
  {
    org: NounsDaoOrg,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.UserFacing,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x883860178F95d0C82413eDc1D6De530cB4771d55",
        chain: mainnet,
        codeName: "NounsRewardsProxy",
      },
    },
  },
  {
    org: NounsDaoOrg,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Protocol,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xaaF173E6b65aa4473C830EDB402D26B7A33c5E94",
        chain: mainnet,
        codeName: "NounsRewards",
      },
    },
  },
  {
    org: NounsDaoOrg,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xb1a32FC9F9D8b2cf86C068Cae13108809547ef71",
        chain: mainnet,
        codeName: "NounsDAOExecutorProxy",
      },
    },
  },
  {
    org: NounsDaoOrg,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0FB7CF84F171154cBC3F553aA9Df9b0e9076649D",
        chain: mainnet,
        codeName: "NounsDAOExecutorV2",
      },
    },
  },
  {
    org: NounsDaoOrg,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Protocol,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x33A9c445fb4FB21f2c030A6b2d3e2F12D017BFAC",
        chain: mainnet,
        codeName: "NounsDescriptorV3",
      },
    },
  },
  {
    org: NounsDaoOrg,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Utility,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0fd206FC7A7dBcD5661157eDCb1FFDD0D02A61ff",
        chain: mainnet,
        codeName: "NounsStreamFactory",
      },
    },
  },
  {
    org: ArbitrumDaoOrg,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Token,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xB50721BCf8d664c30412Cfbc6cf7a15145234ad1",
        chain: mainnet,
        codeName: "ARBTokenL1",
      },
    },
  },
  {
    org: ArbitrumDaoOrg,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x912CE59144191C1204E64559FE8253a0e49E6548",
        chain: arbitrum,
        codeName: "ARBTokenL2",
      },
    },
  },
  {
    org: ArbitrumDaoOrg,
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
    org: ArbitrumDaoOrg,
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
    org: ArbitrumDaoOrg,
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
    org: ArbitrumDaoOrg,
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
    org: ArbitrumDaoOrg,
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
    org: ArbitrumDaoOrg,
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
    org: ArbitrumDaoOrg,
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
    org: ArbitrumDaoOrg,
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
    org: ArbitrumDaoOrg,
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
    org: ArbitrumDaoOrg,
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
    org: ArbitrumDaoOrg,
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
    org: ArbitrumDaoOrg,
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
    org: ArbitrumDaoOrg,
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
    org: ArbitrumDaoOrg,
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
    org: ArbitrumDaoOrg,
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
    org: ArbitrumDaoOrg,
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
    org: ArbitrumDaoOrg,
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
    org: ArbitrumDaoOrg,
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
    org: ArbitrumDaoOrg,
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
    org: ArbitrumDaoOrg,
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
    org: ArbitrumDaoOrg,
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
    org: ArbitrumDaoOrg,
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
    org: AaveDaoOrg,
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
    org: AaveDaoOrg,
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
    org: AaveDaoOrg,
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
    org: AaveDaoOrg,
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
    org: AaveDaoOrg,
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
    org: AaveDaoOrg,
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
    org: AaveDaoOrg,
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
    org: AaveDaoOrg,
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
    org: AaveDaoOrg,
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
];
