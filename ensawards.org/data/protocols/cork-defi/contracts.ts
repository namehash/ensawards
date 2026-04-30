// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice on adding and modifying protocol's contracts

import { asInterpretedName } from "enssdk";
import { mainnet } from "viem/chains";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import contributors from "../../contributors";
import { defineContracts } from "../contracts-registry.ts";
import type { Contract } from "../contracts-types.ts";
import { ContractResolutionStatusIds } from "../contracts-types.ts";
import CorkDeFi from ".";

const contracts: Contract[] = [
  {
    protocol: CorkDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x7cccccccccc0b4c00d01f321035b8e4523ef8448",
        chain: mainnet,
        codeName: "TimelockUpgrade",
      },
      name: asInterpretedName("timelock-upgrade.phoenix.cork.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-01-27T15:15:05.000Z") },
    ],
  },
  {
    protocol: CorkDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x7ccccccccccce566cdaffa9ef2cb245ad5575c3b",
        chain: mainnet,
        codeName: "TimelockControllerAdmin",
      },
      name: asInterpretedName("timelock-admin.phoenix.cork.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-01-27T15:15:05.000Z") },
    ],
  },
  {
    protocol: CorkDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x7cccccccccccc1d856f2994a66faa7011f1a89d9",
        chain: mainnet,
        codeName: "TimelockOperational",
      },
      name: asInterpretedName("timelock-operational.phoenix.cork.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-01-27T15:15:05.000Z") },
    ],
  },
  {
    protocol: CorkDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xccccccccccccef378949d1a61ed2283c831af03a",
        chain: mainnet,
        codeName: "ConstraintRateAdapterProxy",
      },
      name: asInterpretedName("constraint-rate-adapter.phoenix.cork.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-01-27T15:15:05.000Z") },
    ],
  },
  {
    protocol: CorkDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x1cccccccccca9cc3446b235af1c4cb8e2b01236e",
        chain: mainnet,
        codeName: "ConstraintRateAdapter",
      },
      name: asInterpretedName("constraint-rate-adapter-impl.phoenix.cork.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-01-27T15:15:05.000Z") },
    ],
  },
  {
    protocol: CorkDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xccccccccccc6e38a2772eb42d2f408eeb89cb0ee",
        chain: mainnet,
        codeName: "WhitelistManagerProxy",
      },
      name: asInterpretedName("whitelist.phoenix.cork.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-01-27T15:15:05.000Z") },
    ],
  },
  {
    protocol: CorkDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x1ccccccccccbf45e2516caee86cef63da120cdad",
        chain: mainnet,
        codeName: "WhitelistManager",
      },
      name: asInterpretedName("whitelist-impl.phoenix.cork.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-01-27T15:15:05.000Z") },
    ],
  },
  {
    protocol: CorkDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xcccccccccccbc06627f8aad7aaf13fe3a457f779",
        chain: mainnet,
        codeName: "DefaultCorkController",
      },
      name: asInterpretedName("controller.phoenix.cork.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-01-27T15:15:05.000Z") },
    ],
  },
  {
    protocol: CorkDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xccccccccccccfae2ee43f0e727a8c2969d74b9ec",
        chain: mainnet,
        codeName: "CorkPoolManagerProxy",
      },
      name: asInterpretedName("pool-manager.phoenix.cork.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-01-27T15:15:05.000Z") },
    ],
  },
  {
    protocol: CorkDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x1ccccccccccf9a60fe57cd7cef504d1daaa78244",
        chain: mainnet,
        codeName: "CorkPoolManager",
      },
      name: asInterpretedName("pool-manager-impl.phoenix.cork.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-01-27T15:15:05.000Z") },
    ],
  },
  {
    protocol: CorkDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xcccccccccccc1782617fe14a386ac910a20d4324",
        chain: mainnet,
        codeName: "SharesFactory",
      },
      name: asInterpretedName("shares-factory.phoenix.cork.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-01-27T15:15:05.000Z") },
    ],
  },
  {
    protocol: CorkDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xccccccccccccbad6f772a511b337d9ccc9570407",
        chain: mainnet,
        codeName: "CorkAdapter",
      },
      name: asInterpretedName("adapter.phoenix.cork.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-01-27T15:15:05.000Z") },
    ],
  },
];

defineContracts(contracts);

export default contracts;
