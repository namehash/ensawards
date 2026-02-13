import { mainnet } from "viem/chains";

import type { Contract } from "@/types/contracts.ts";
import { ContractResolutionStatusIds, ContractSubtypes, ContractTypes } from "@/types/contracts.ts";

import { ENSDao } from ".";

export const ENSDaoContracts: Contract[] = [
  {
    protocol: ENSDao,
    type: ContractTypes.DAO,
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
    type: ContractTypes.DAO,
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
    type: ContractTypes.DAO,
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
    type: ContractTypes.DAO,
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
    type: ContractTypes.DAO,
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
    type: ContractTypes.DAO,
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
    type: ContractTypes.DAO,
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
];
