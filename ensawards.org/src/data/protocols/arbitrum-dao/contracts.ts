import { arbitrum, mainnet } from "viem/chains";

import { ArbitrumDao } from "@/data/protocols/arbitrum-dao";
import type { Contract } from "@/types/contracts.ts";
import { ContractResolutionStatusIds, ContractSubtypes, ContractTypes } from "@/types/contracts.ts";

export const ArbitrumDaoContracts: Contract[] = [
  {
    protocol: ArbitrumDao,
    type: ContractTypes.DAO,
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
    type: ContractTypes.DAO,
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
    type: ContractTypes.DAO,
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
    type: ContractTypes.DAO,
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
    type: ContractTypes.DAO,
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
    type: ContractTypes.DAO,
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
    type: ContractTypes.DAO,
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
    type: ContractTypes.DAO,
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
    type: ContractTypes.DAO,
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
    type: ContractTypes.DAO,
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
    type: ContractTypes.DAO,
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
    type: ContractTypes.DAO,
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
    type: ContractTypes.DAO,
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
    type: ContractTypes.DAO,
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
    type: ContractTypes.DAO,
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
    type: ContractTypes.DAO,
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
    type: ContractTypes.DAO,
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
    type: ContractTypes.DAO,
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
    type: ContractTypes.DAO,
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
    type: ContractTypes.DAO,
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
    type: ContractTypes.DAO,
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
    type: ContractTypes.DAO,
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
];
