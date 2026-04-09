// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice on adding and modifying protocol's contracts

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
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xDD9BC35aE942eF0cFa76930954a156B3fF30a4E1",
        chain: mainnet,
        codeName: "SSVNetwork",
      },
      name: "ssvnetwork.eth",
    },
    contributions: [
      { from: contributors.spooky, updatedAt: parseTimestamp("2026-04-08T16:30:00.000Z") },
    ],
  },
  {
    protocol: SSVNetworkDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xafE830B6Ee262ba11cce5F32fDCd760FFE6a66e4",
        chain: mainnet,
        codeName: "SSVNetworkViews",
      },
      name: "views.ssvnetwork.eth",
    },
    contributions: [
      { from: contributors.spooky, updatedAt: parseTimestamp("2026-04-08T16:30:00.000Z") },
    ],
  },
  {
    protocol: SSVNetworkDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x9D65fF81a3c488d585bBfb0Bfe3c7707c7917f54",
        chain: mainnet,
        codeName: "SSVToken",
      },
      name: "ssv.ssvnetwork.eth",
    },
    contributions: [
      { from: contributors.spooky, updatedAt: parseTimestamp("2026-04-08T16:30:00.000Z") },
    ],
  },
  {
    protocol: SSVNetworkDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xe018D31F120A637828F46aFD6c64EC099d960546",
        chain: mainnet,
        codeName: "CSSVToken",
      },
      name: "cssv.ssvnetwork.eth",
    },
    contributions: [
      { from: contributors.spooky, updatedAt: parseTimestamp("2026-04-08T16:30:00.000Z") },
    ],
  },
  {
    protocol: SSVNetworkDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xb35096b074fdb9bBac63E3AdaE0Bbde512B2E6b6",
        chain: mainnet,
        codeName: "DAOTreasury",
      },
      name: "treasury.ssvnetwork.eth",
    },
    contributions: [
      { from: contributors.spooky, updatedAt: parseTimestamp("2026-04-08T16:30:00.000Z") },
    ],
  },
  {
    protocol: SSVNetworkDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0xeC29418bc30FED20dE85706F32c7D77Da0be7afB",
        chain: mainnet,
        codeName: "SSVFoundation",
      },
      name: "foundation.ssvnetwork.eth",
    },
    contributions: [
      { from: contributors.spooky, updatedAt: parseTimestamp("2026-04-08T16:30:00.000Z") },
    ],
  },
  {
    protocol: SSVNetworkDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xe16d6138B1D2aD4fD6603ACdb329ad1A6cD26D9f",
        chain: mainnet,
        codeName: "IMP1",
      },
      name: "v1-imp.ssvnetwork.eth",
    },
    contributions: [
      { from: contributors.spooky, updatedAt: parseTimestamp("2026-04-08T16:30:00.000Z") },
    ],
  },
  {
    protocol: SSVNetworkDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x13006e447608bB62383D1d59bb11a93e957Be7cF",
        chain: mainnet,
        codeName: "IMPLido",
      },
      name: "v1-imp-lido.ssvnetwork.eth",
    },
    contributions: [
      { from: contributors.spooky, updatedAt: parseTimestamp("2026-04-08T16:30:00.000Z") },
    ],
  },
];

defineContracts(contracts);

export default contracts;
