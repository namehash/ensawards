import { mainnet } from "viem/chains";

import { ENSDao, UniswapDao } from "@/data/protocols.ts";
import {
  type Contract,
  ContractResolutionStatusIds,
  ContractSubtypes,
  ContractTypes,
} from "@/types/contracts.ts";

export const CONTRACTS_TEST_DATA: Contract[] = [
  {
    protocol: ENSDao,
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
    protocol: ENSDao,
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
    protocol: ENSDao,
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
    protocol: ENSDao,
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
    protocol: ENSDao,
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
    protocol: ENSDao,
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
    protocol: ENSDao,
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
    protocol: ENSDao,
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
    protocol: ENSDao,
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
    protocol: ENSDao,
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
    protocol: UniswapDao,
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
    protocol: UniswapDao,
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
    protocol: UniswapDao,
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
    protocol: UniswapDao,
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
    protocol: UniswapDao,
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
    protocol: UniswapDao,
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
    protocol: UniswapDao,
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
    protocol: UniswapDao,
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
    protocol: UniswapDao,
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
    protocol: UniswapDao,
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
