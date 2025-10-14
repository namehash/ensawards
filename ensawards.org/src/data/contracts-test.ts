import {ENSDaoOrg, UniswapDaoOrg} from "@/data/organizations.ts";
import type { Contract } from "@/types/contracts.ts";
import { mainnet } from "viem/chains";

export const CONTRACTS_TEST_DATA: Contract[] = [
  {
    org: ENSDaoOrg,
    type: "DeFi",
    subtype: "DeFi App",
    contract: {
      address: "0x0000000000000000000000000000000000000000",
      chain: mainnet
    },
    codeName: "Project 1 - Unnamed Contract 1",
    cachedEnsProfile: null,
  },
  {
    org: ENSDaoOrg,
    type: "DeFi",
    subtype: "DeFi App",
    contract: {
      address: "0x0000000000000000000000000000000000000001",
      chain: mainnet
    },
    codeName: "Project 1 - Unnamed Contract 2",
    cachedEnsProfile: null,
  },
  {
    org: ENSDaoOrg,
    type: "DeFi",
    subtype: "DeFi App",
    contract: {
      address: "0x0000000000000000000000000000000000000002",
      chain: mainnet
    },
    codeName: "Project 1 - Named Contract 1",
    cachedEnsProfile: {
      ensName: "Name P1C1",
    },
  },
  {
    org: ENSDaoOrg,
    type: "DeFi",
    subtype: "DeFi App",
    contract: {
      address: "0x0000000000000000000000000000000000000003",
      chain: mainnet
    },
    codeName: "Project 1 - Named Contract 2",
    cachedEnsProfile: {
      ensName: "Name P1C2",
    },
  },
  {
    org: ENSDaoOrg,
    type: "DAO",
    subtype: "Governance",
    contract: {
      address: "0x0000000000000000000000000000000000000004",
      chain: mainnet
    },
    codeName: "Project 1 - Named Contract 3",
    cachedEnsProfile: {
      ensName: "Name P1C3",
    },
  },
  {
    org: ENSDaoOrg,
    type: "DAO",
    subtype: "Governance",
    contract: {
      address: "0x0000000000000000000000000000000000000005",
      chain: mainnet
    },
    codeName: "Project 1 - Named Contract 4",
    cachedEnsProfile: {
      ensName: "Name P1C4",
    },
  },
  {
    org: ENSDaoOrg,
    type: "DAO",
    subtype: "Governance",
    contract: {
      address: "0x0000000000000000000000000000000000000006",
      chain: mainnet
    },
    codeName: "Project 1 - Named Contract 5",
    cachedEnsProfile: {
      ensName: "Name P1C5",
    },
  },
  {
    org: ENSDaoOrg,
    type: "DAO",
    subtype: "Utility",
    contract: {
      address: "0x0000000000000000000000000000000000000007",
      chain: mainnet
    },
    codeName: "Project 1 - Named Contract 6",
    cachedEnsProfile: {
      ensName: "Name P1C6",
    },
  },
  {
    org: ENSDaoOrg,
    type: "DAO",
    subtype: "Utility",
    contract: {
      address: "0x0000000000000000000000000000000000000008",
      chain: mainnet
    },
    codeName: "Project 1 - Named Contract 7",
    cachedEnsProfile: {
      ensName: "Name P1C7",
    },
  },
  {
    org: ENSDaoOrg,
    type: "DAO",
    subtype: "Utility",
    contract: {
      address: "0x0000000000000000000000000000000000000009",
      chain: mainnet
    },
    codeName: "Project 1 - Named Contract 8",
    cachedEnsProfile: {
      ensName: "Name P1C8",
    },
  },
  {
    org: UniswapDaoOrg,
    type: "DeFi",
    subtype: "DeFi App",
    contract: {
      address: "0x0000000000000000000000000000000000000010",
      chain: mainnet
    },
    codeName: "Project 2 - Unnamed Contract 1",
    cachedEnsProfile: null,
  },
  {
    org: UniswapDaoOrg,
    type: "DeFi",
    subtype: "DeFi App",
    contract: {
      address: "0x0000000000000000000000000000000000000011",
      chain: mainnet
    },
    codeName: "Project 2 - Unnamed Contract 2",
    cachedEnsProfile: null,
  },
  {
    org: UniswapDaoOrg,
    type: "DeFi",
    subtype: "DeFi App",
    contract: {
      address: "0x0000000000000000000000000000000000000012",
      chain: mainnet
    },
    codeName: "Project 2 - Unnamed Contract 3",
    cachedEnsProfile: null,
  },
  {
    org: UniswapDaoOrg,
    type: "DeFi",
    subtype: "DeFi App",
    contract: {
      address: "0x0000000000000000000000000000000000000013",
      chain: mainnet
    },
    codeName: "Project 2 - Unnamed Contract 4",
    cachedEnsProfile: null,
  },
  {
    org: UniswapDaoOrg,
    type: "DAO",
    subtype: "Utility",
    contract: {
      address: "0x0000000000000000000000000000000000000014",
      chain: mainnet
    },
    codeName: "Project 2 - Unnamed Contract 5",
    cachedEnsProfile: null,
  },
  {
    org: UniswapDaoOrg,
    type: "DAO",
    subtype: "Utility",
    contract: {
      address: "0x0000000000000000000000000000000000000015",
      chain: mainnet
    },
    codeName: "Project 2 - Unnamed Contract 6",
    cachedEnsProfile: null,
  },
  {
    org: UniswapDaoOrg,
    type: "DAO",
    subtype: "Utility",
    contract: {
      address: "0x0000000000000000000000000000000000000016",
      chain: mainnet
    },
    codeName: "Project 2 - Unnamed Contract 7",
    cachedEnsProfile: null,
  },
  {
    org: UniswapDaoOrg,
    type: "DAO",
    subtype: "Governance",
    contract: {
      address: "0x0000000000000000000000000000000000000017",
      chain: mainnet
    },
    codeName: "Project 2 - Named Contract 1",
    cachedEnsProfile: {
      ensName: "Name P2C1",
    },
  },
  {
    org: UniswapDaoOrg,
    type: "DAO",
    subtype: "Governance",
    contract: {
      address: "0x0000000000000000000000000000000000000018",
      chain: mainnet
    },
    codeName: "Project 2 - Named Contract 2",
    cachedEnsProfile: {
      ensName: "Name P2C2",
    },
  },
  {
    org: UniswapDaoOrg,
    type: "DAO",
    subtype: "Governance",
    contract: {
      address: "0x0000000000000000000000000000000000000019",
      chain: mainnet
    },
    codeName: "Project 2 - Named Contract 3",
    cachedEnsProfile: {
      ensName: "Name P2C3",
    },
  },
];
