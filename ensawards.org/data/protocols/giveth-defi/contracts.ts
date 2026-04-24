// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice on adding and modifying protocol's contracts

import { mainnet, optimism } from "viem/chains";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import contributors from "../../contributors";
import { defineContracts } from "../contracts-registry.ts";
import type { Contract } from "../contracts-types.ts";
import { ContractResolutionStatusIds } from "../contracts-types.ts";
import GivethDeFi from ".";

const contracts: Contract[] = [
  {
    protocol: GivethDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x900db999074d9277c5da2a43f252d74366230da0",
        chain: mainnet,
        codeName: "GIV",
      },
      name: "givtoken.giv.eth",
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-02-27T18:25:20.000Z") },
    ],
  },
  {
    protocol: GivethDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x87de995f6744b75bbe0255a973081142adb61f4d",
        chain: mainnet,
        codeName: "TokenDistro",
      },
      name: "distro.giv.eth",
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-02-27T18:25:20.000Z") },
    ],
  },
  {
    protocol: GivethDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x93e79499b00a2fdaac38e6005b0ad8e88b177346",
        chain: mainnet,
        codeName: "DevouchMultisig",
      },
      name: "vouch.giv.eth",
      profile: {
        avatar: new URL("https://euc.li/vouch.giv.eth"),
      },
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-02-27T18:25:20.000Z") },
    ],
  },
  {
    protocol: GivethDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x528cdc92eab044e1e39fe43b9514bfdab4412b98",
        chain: optimism,
        codeName: "GIV",
      },
      name: "givtoken.giv.eth",
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-02-27T18:25:20.000Z") },
    ],
  },
  {
    protocol: GivethDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xe3ac7b3e6b4065f4765d76fdc215606483bf3bd1",
        chain: optimism,
        codeName: "TokenDistro",
      },
      name: "distro.giv.eth",
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-02-27T18:25:20.000Z") },
    ],
  },
  {
    protocol: GivethDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x93e79499b00a2fdaac38e6005b0ad8e88b177346",
        chain: optimism,
        codeName: "DevouchMultisig",
      },
      name: "vouch.giv.eth",
      profile: {
        avatar: new URL("https://euc.li/vouch.giv.eth"),
      },
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-02-27T18:25:20.000Z") },
    ],
  },
  {
    protocol: GivethDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x301c739cf6bfb6b47a74878bdeb13f92f13ae5e7",
        chain: optimism,
        codeName: "UnipoolGIVpower",
      },
      name: "givpower.giv.eth",
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-02-27T18:25:20.000Z") },
    ],
  },
  {
    protocol: GivethDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x4f9368ddd665d5652f9786cd57f1b7d7469d95f7",
        chain: optimism,
        codeName: "DeVouchResolverUpgradeable",
      },
      name: "devouch.giv.eth",
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-02-27T18:25:20.000Z") },
    ],
  },
];

defineContracts(contracts);

export default contracts;
