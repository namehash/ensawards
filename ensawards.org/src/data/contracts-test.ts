import { mainnet } from "viem/chains";

import { ENSDaoOrg, UniswapDaoOrg } from "@/data/organizations.ts";
import {
  type Contract,
  ContractResolutionStatusIds,
  ContractSubtypes,
  ContractTypes,
} from "@/types/contracts.ts";

export const CONTRACTS_TEST_DATA: Contract[] = [
  {
    org: ENSDaoOrg,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0000000000000000000000000000000000000000",
        chain: mainnet,
        codeName: "Project1UnnamedContract1",
      },
    },
  },
  {
    org: ENSDaoOrg,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0000000000000000000000000000000000000001",
        chain: mainnet,
        codeName: "Project1UnnamedContract2",
      },
    },
  },
  {
    org: ENSDaoOrg,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000002",
        chain: mainnet,
        codeName: "Project1NamedContract1",
      },
      name: "name.p1c1.eth",
    },
  },
  {
    org: ENSDaoOrg,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000003",
        chain: mainnet,
        codeName: "Project1NamedContract2",
      },
      name: "name.p1c2.eth",
    },
  },
  {
    org: ENSDaoOrg,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000004",
        chain: mainnet,
        codeName: "Project1NamedContract3",
      },
      name: "name.p1c3.eth",
    },
  },
  {
    org: ENSDaoOrg,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000005",
        chain: mainnet,
        codeName: "Project1NamedContract4",
      },
      name: "name.p1c4.eth",
    },
  },
  {
    org: ENSDaoOrg,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000006",
        chain: mainnet,
        codeName: "Project1NamedContract5",
      },
      name: "name.p1c5.eth",
    },
  },
  {
    org: ENSDaoOrg,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Utility,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000007",
        chain: mainnet,
        codeName: "Project1NamedContract6",
      },
      name: "name.p1c6.eth",
    },
  },
  {
    org: ENSDaoOrg,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Utility,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000008",
        chain: mainnet,
        codeName: "Project1NamedContract7",
      },
      name: "name.p1c7.eth",
    },
  },
  {
    org: ENSDaoOrg,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Utility,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000009",
        chain: mainnet,
        codeName: "Project1ForwardNamedContract1",
      },
      name: "forward.name.p1c1.eth",
    },
  },
  {
    org: UniswapDaoOrg,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0000000000000000000000000000000000000010",
        chain: mainnet,
        codeName: "Project2UnnamedContract1",
      },
    },
  },
  {
    org: UniswapDaoOrg,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0000000000000000000000000000000000000011",
        chain: mainnet,
        codeName: "Project2UnnamedContract2",
      },
    },
  },
  {
    org: UniswapDaoOrg,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0000000000000000000000000000000000000012",
        chain: mainnet,
        codeName: "Project2UnnamedContract3",
      },
    },
  },
  {
    org: UniswapDaoOrg,
    type: ContractTypes.Defi,
    subtype: ContractSubtypes.DefiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0000000000000000000000000000000000000013",
        chain: mainnet,
        codeName: "Project2UnnamedContract4",
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
        address: "0x0000000000000000000000000000000000000014",
        chain: mainnet,
        codeName: "Project2UnnamedContract5",
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
        address: "0x0000000000000000000000000000000000000015",
        chain: mainnet,
        codeName: "Project2UnnamedContract6",
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
        address: "0x0000000000000000000000000000000000000016",
        chain: mainnet,
        codeName: "Project2UnnamedContract7",
      },
    },
  },
  {
    org: UniswapDaoOrg,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000017",
        chain: mainnet,
        codeName: "Project2NamedContract1",
      },
      name: "name.p2c1.eth",
    },
  },
  {
    org: UniswapDaoOrg,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000018",
        chain: mainnet,
        codeName: "Project2NamedContract2",
      },
      name: "name.p2c2.eth",
    },
  },
  {
    org: UniswapDaoOrg,
    type: ContractTypes.Dao,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000019",
        chain: mainnet,
        codeName: "Project2ForwardNamedContract1",
      },
      name: "forward.name.p2c1.eth",
    },
  },
];
