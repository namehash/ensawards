import { ENSDaoOrg, UniswapDaoOrg } from "@/data/organizations.ts";
import { type Contract, ContractResolutionStatusIds } from "@/types/contracts.ts";
import { mainnet } from "viem/chains";

export const CONTRACTS_TEST_DATA: Contract[] = [
  {
    org: ENSDaoOrg,
    type: "DeFi",
    subtype: "DeFi App",
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0000000000000000000000000000000000000000",
        chain: mainnet,
        codeName: "Project 1 - Unnamed Contract 1",
      },
    },
  },
  {
    org: ENSDaoOrg,
    type: "DeFi",
    subtype: "DeFi App",
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0000000000000000000000000000000000000001",
        chain: mainnet,
        codeName: "Project 1 - Unnamed Contract 2",
      },
    },
  },
  {
    org: ENSDaoOrg,
    type: "DeFi",
    subtype: "DeFi App",
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000002",
        chain: mainnet,
        codeName: "Project 1 - Named Contract 1",
      },
      name: "name.p1c1.eth",
    },
  },
  {
    org: ENSDaoOrg,
    type: "DeFi",
    subtype: "DeFi App",
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000003",
        chain: mainnet,
        codeName: "Project 1 - Named Contract 2",
      },
      name: "name.p1c2.eth",
    },
  },
  {
    org: ENSDaoOrg,
    type: "DAO",
    subtype: "Governance",
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000004",
        chain: mainnet,
        codeName: "Project 1 - Named Contract 3",
      },
      name: "name.p1c3.eth",
    },
  },
  {
    org: ENSDaoOrg,
    type: "DAO",
    subtype: "Governance",
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000005",
        chain: mainnet,
        codeName: "Project 1 - Named Contract 4",
      },
      name: "name.p1c4.eth",
    },
  },
  {
    org: ENSDaoOrg,
    type: "DAO",
    subtype: "Governance",
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000006",
        chain: mainnet,
        codeName: "Project 1 - Named Contract 5",
      },
      name: "name.p1c5.eth",
    },
  },
  {
    org: ENSDaoOrg,
    type: "DAO",
    subtype: "Utility",
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000007",
        chain: mainnet,
        codeName: "Project 1 - Named Contract 6",
      },
      name: "name.p1c6.eth",
    },
  },
  {
    org: ENSDaoOrg,
    type: "DAO",
    subtype: "Utility",
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000008",
        chain: mainnet,
        codeName: "Project 1 - Named Contract 7",
      },
      name: "name.p1c7.eth",
    },
  },
  {
    org: ENSDaoOrg,
    type: "DAO",
    subtype: "Utility",
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000009",
        chain: mainnet,
        codeName: "Project 1 - Forward Named Contract 1",
      },
      name: "forward.name.p1c1.eth",
    },
  },
  {
    org: UniswapDaoOrg,
    type: "DeFi",
    subtype: "DeFi App",
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0000000000000000000000000000000000000010",
        chain: mainnet,
        codeName: "Project 2 - Unnamed Contract 1",
      },
    },
  },
  {
    org: UniswapDaoOrg,
    type: "DeFi",
    subtype: "DeFi App",
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0000000000000000000000000000000000000011",
        chain: mainnet,
        codeName: "Project 2 - Unnamed Contract 2",
      },
    },
  },
  {
    org: UniswapDaoOrg,
    type: "DeFi",
    subtype: "DeFi App",
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0000000000000000000000000000000000000012",
        chain: mainnet,
        codeName: "Project 2 - Unnamed Contract 3",
      },
    },
  },
  {
    org: UniswapDaoOrg,
    type: "DeFi",
    subtype: "DeFi App",
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0000000000000000000000000000000000000013",
        chain: mainnet,
        codeName: "Project 2 - Unnamed Contract 4",
      },
    },
  },
  {
    org: UniswapDaoOrg,
    type: "DAO",
    subtype: "Utility",
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0000000000000000000000000000000000000014",
        chain: mainnet,
        codeName: "Project 2 - Unnamed Contract 5",
      },
    },
  },
  {
    org: UniswapDaoOrg,
    type: "DAO",
    subtype: "Utility",
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0000000000000000000000000000000000000015",
        chain: mainnet,
        codeName: "Project 2 - Unnamed Contract 6",
      },
    },
  },
  {
    org: UniswapDaoOrg,
    type: "DAO",
    subtype: "Utility",
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0000000000000000000000000000000000000016",
        chain: mainnet,
        codeName: "Project 2 - Unnamed Contract 7",
      },
    },
  },
  {
    org: UniswapDaoOrg,
    type: "DAO",
    subtype: "Governance",
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000017",
        chain: mainnet,
        codeName: "Project 2 - Named Contract 1",
      },
      name: "name.p2c1.eth",
    },
  },
  {
    org: UniswapDaoOrg,
    type: "DAO",
    subtype: "Governance",
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000018",
        chain: mainnet,
        codeName: "Project 2 - Named Contract 2",
      },
      name: "name.p2c2.eth",
    },
  },
  {
    org: UniswapDaoOrg,
    type: "DAO",
    subtype: "Governance",
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x0000000000000000000000000000000000000019",
        chain: mainnet,
        codeName: "Project 2 - Forward Named Contract 1",
      },
      name: "forward.name.p2c1.eth",
    },
  },
];
