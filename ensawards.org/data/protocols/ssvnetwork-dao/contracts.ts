// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice on adding and modifying protocol's contracts

import { asInterpretedName } from "enssdk";
import { mainnet } from "viem/chains";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import contributors from "../../contributors";
import { defineContracts } from "../contracts-registry.ts";
import type { Contract } from "../contracts-types.ts";
import { ContractResolutionStatusIds } from "../contracts-types.ts";
import SSVNetworkDao from ".";

const contracts: Contract[] = [
  {
    protocol: SSVNetworkDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0xdd9bc35ae942ef0cfa76930954a156b3ff30a4e1",
        chain: mainnet,
        codeName: "SSVNetwork",
      },
      name: asInterpretedName("ssvnetwork.eth"),
      profile: {
        avatar: new URL("ipfs://bafkreier3kfqjrm6uj6gvncvk233f4x7vymlc2t53fbyfsoq7qafehbcla"),
        docs: new URL("https://docs.ssv.network/developers/smart-contracts/ssvnetwork"),
      },
    },
    contributions: [
      { from: contributors.spooky, lastUpdated: parseTimestamp("2026-04-13T22:30:00.000Z") },
    ],
  },
  {
    protocol: SSVNetworkDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0xafe830b6ee262ba11cce5f32fdcd760ffe6a66e4",
        chain: mainnet,
        codeName: "SSVNetworkViews",
      },
      name: asInterpretedName("views.ssvnetwork.eth"),
    },
    contributions: [
      { from: contributors.spooky, lastUpdated: parseTimestamp("2026-04-13T22:30:00.000Z") },
    ],
  },
  {
    protocol: SSVNetworkDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x9d65ff81a3c488d585bbfb0bfe3c7707c7917f54",
        chain: mainnet,
        codeName: "SSVToken",
      },
      name: asInterpretedName("ssv.ssvnetwork.eth"),
    },
    contributions: [
      { from: contributors.spooky, lastUpdated: parseTimestamp("2026-04-13T22:30:00.000Z") },
    ],
  },
  {
    protocol: SSVNetworkDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xe018d31f120a637828f46afd6c64ec099d960546",
        chain: mainnet,
        codeName: "CSSVToken",
      },
      name: asInterpretedName("cssv.ssvnetwork.eth"),
    },
    contributions: [
      { from: contributors.spooky, lastUpdated: parseTimestamp("2026-04-08T16:30:00.000Z") },
    ],
  },
  {
    protocol: SSVNetworkDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0xb35096b074fdb9bbac63e3adae0bbde512b2e6b6",
        chain: mainnet,
        codeName: "DAOTreasury",
      },
      name: asInterpretedName("treasury.ssvnetwork.eth"),
    },
    contributions: [
      { from: contributors.spooky, lastUpdated: parseTimestamp("2026-04-13T22:30:00.000Z") },
    ],
  },
  {
    protocol: SSVNetworkDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0xec29418bc30fed20de85706f32c7d77da0be7afb",
        chain: mainnet,
        codeName: "SSVFoundation",
      },
      name: asInterpretedName("foundation.ssvnetwork.eth"),
    },
    contributions: [
      { from: contributors.spooky, lastUpdated: parseTimestamp("2026-04-08T16:30:00.000Z") },
    ],
  },
  {
    protocol: SSVNetworkDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0xe16d6138b1d2ad4fd6603acdb329ad1a6cd26d9f",
        chain: mainnet,
        codeName: "IMP1",
      },
      name: asInterpretedName("v1-imp.ssvnetwork.eth"),
    },
    contributions: [
      { from: contributors.spooky, lastUpdated: parseTimestamp("2026-04-13T22:30:00.000Z") },
    ],
  },
  {
    protocol: SSVNetworkDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x13006e447608bb62383d1d59bb11a93e957be7cf",
        chain: mainnet,
        codeName: "IMPLido",
      },
      name: asInterpretedName("v1-imp-lido.ssvnetwork.eth"),
    },
    contributions: [
      { from: contributors.spooky, lastUpdated: parseTimestamp("2026-04-13T22:30:00.000Z") },
    ],
  },
];

defineContracts(contracts);

export default contracts;
