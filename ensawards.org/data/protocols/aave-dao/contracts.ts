import { mainnet } from "viem/chains";

import type { Contract } from "@/types/contracts.ts";
import { ContractResolutionStatusIds, ContractSubtypes, ContractTypes } from "@/types/contracts.ts";

import { AaveDao } from ".";

export const AaveDaoContracts: Contract[] = [
  {
    protocol: AaveDao,
    type: ContractTypes.DAO,
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
    type: ContractTypes.DAO,
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
    type: ContractTypes.DAO,
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
    type: ContractTypes.DAO,
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
    type: ContractTypes.DAO,
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
    type: ContractTypes.DAO,
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
    type: ContractTypes.DAO,
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
    type: ContractTypes.DAO,
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
    type: ContractTypes.DAO,
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
