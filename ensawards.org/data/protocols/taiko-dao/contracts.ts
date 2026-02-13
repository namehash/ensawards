import { mainnet } from "viem/chains";

import type { Contract } from "@/types/contracts.ts";
import { ContractResolutionStatusIds, ContractSubtypes, ContractTypes } from "@/types/contracts.ts";

import { TaikoDao } from ".";

export const TaikoDaoContracts: Contract[] = [
  {
    protocol: TaikoDao,
    type: ContractTypes.DAO,
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
    protocol: TaikoDao,
    type: ContractTypes.DAO,
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
    protocol: TaikoDao,
    type: ContractTypes.DAO,
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
    protocol: TaikoDao,
    type: ContractTypes.DAO,
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
];
