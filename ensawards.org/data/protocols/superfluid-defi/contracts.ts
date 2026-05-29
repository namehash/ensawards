// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice on adding and modifying protocol's contracts

import { asInterpretedName, asNormalizedAddress } from "enssdk";
import { base, mainnet } from "viem/chains";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import contributors from "../../contributors";
import { defineContracts } from "../contracts-registry.ts";
import type { Contract } from "../contracts-types.ts";
import { ContractResolutionStatusIds } from "../contracts-types.ts";
import SuperfluidDeFi from ".";

const contracts: Contract[] = [
  // Template entry — replace the placeholder address/codeName with a real Superfluid contract.
  {
    protocol: SuperfluidDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: asNormalizedAddress("0x642332562bc60a4bd9681e7bb1588f7456a497ac"),
        chain: base,
        codeName: "Superfluid",
      },
      name: asInterpretedName("existential-nft-clone-factory.contracts.superfluid.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-05-29T00:00:00.000Z") },
    ],
  },
  {
    protocol: SuperfluidDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: asNormalizedAddress("0xdf92d0e6bcb9385fde99ad21ff5e47fb47e3c6b2"),
        chain: base,
        codeName: "Superfluid",
      },
      name: asInterpretedName("vesting-scheduler.contracts.superfluid.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-05-29T00:00:00.000Z") },
    ],
  },
  {
    protocol: SuperfluidDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: asNormalizedAddress("0xfd0268e33111565de546af2675351a4b1587f89f"),
        chain: base,
        codeName: "Superfluid",
      },
      name: asInterpretedName("macro-forwarder.contracts.superfluid.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-05-29T00:00:00.000Z") },
    ],
  },
  {
    protocol: SuperfluidDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: asNormalizedAddress("0xe20b9a38e0c96f61d1ba6b42a61512d56fea1eb3"),
        chain: base,
        codeName: "Superfluid",
      },
      name: asInterpretedName("super-token-factory.contracts.superfluid.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-05-29T00:00:00.000Z") },
    ],
  },
  {
    protocol: SuperfluidDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: asNormalizedAddress("0x6b008bac0e5846cb5d9ca02ca0e801fcbf88b6f9"),
        chain: base,
        codeName: "Superfluid",
      },
      name: asInterpretedName("batch-liquidator.contracts.superfluid.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-05-29T00:00:00.000Z") },
    ],
  },
  {
    protocol: SuperfluidDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: asNormalizedAddress("0x7b77a34b8b76b66e97a5ae01ad052205d5cbe257"),
        chain: base,
        codeName: "Superfluid",
      },
      name: asInterpretedName("vesting-scheduler-v2.contracts.superfluid.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-05-29T00:00:00.000Z") },
    ],
  },
  {
    protocol: SuperfluidDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: asNormalizedAddress("0x19ba78b9cdb05a877718841c574325fdb53601bb"),
        chain: base,
        codeName: "Superfluid",
      },
      name: asInterpretedName("cfa-v1.contracts.superfluid.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-05-29T00:00:00.000Z") },
    ],
  },
  {
    protocol: SuperfluidDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: asNormalizedAddress("0xc72ced15204d02183c83febb918b183e400811ee"),
        chain: base,
        codeName: "Superfluid",
      },
      name: asInterpretedName("flow-scheduler.contracts.superfluid.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-05-29T00:00:00.000Z") },
    ],
  },
  {
    protocol: SuperfluidDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: asNormalizedAddress("0xfe6c87be05fedb2059d2ec41ba0a09826c9fd7aa"),
        chain: base,
        codeName: "Superfluid",
      },
      name: asInterpretedName("gda-v1.contracts.superfluid.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-05-29T00:00:00.000Z") },
    ],
  },
  {
    protocol: SuperfluidDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: asNormalizedAddress("0x6da13bde224a05a288748d857b9e7ddeffd1de08"),
        chain: base,
        codeName: "Superfluid",
      },
      name: asInterpretedName("gda-v1-forwarder.contracts.superfluid.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-05-29T00:00:00.000Z") },
    ],
  },
  {
    protocol: SuperfluidDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: asNormalizedAddress("0x9f9eed9bbc38e9e0514fd9dfcc0bca9869a9c534"),
        chain: base,
        codeName: "Superfluid",
      },
      name: asInterpretedName("superfluid-loader.contracts.superfluid.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-05-29T00:00:00.000Z") },
    ],
  },
  {
    protocol: SuperfluidDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: asNormalizedAddress("0x6bf35a170056edf9aeba159dce4a640cfcef9312"),
        chain: base,
        codeName: "Superfluid",
      },
      name: asInterpretedName("vesting-scheduler-v3.contracts.superfluid.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-05-29T00:00:00.000Z") },
    ],
  },
  {
    protocol: SuperfluidDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: asNormalizedAddress("0xcfa132e353cb4e398080b9700609bb008eceb125"),
        chain: base,
        codeName: "Superfluid",
      },
      name: asInterpretedName("cfa-v1-forwarder.contracts.superfluid.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-05-29T00:00:00.000Z") },
    ],
  },
  {
    protocol: SuperfluidDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: asNormalizedAddress("0x66df3f8e14cf870361378d8f61356d15d9f425c4"),
        chain: base,
        codeName: "Superfluid",
      },
      name: asInterpretedName("ida-v1.contracts.superfluid.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-05-29T00:00:00.000Z") },
    ],
  },
  {
    protocol: SuperfluidDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: asNormalizedAddress("0xa87f76e99f6c8ff8996d14f550cef47f193d9a09"),
        chain: base,
        codeName: "Superfluid",
      },
      name: asInterpretedName("toga.contracts.superfluid.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-05-29T00:00:00.000Z") },
    ],
  },
  {
    protocol: SuperfluidDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: asNormalizedAddress("0x6a214c324553f96f04efbdd66908685525da0e0d"),
        chain: base,
        codeName: "Superfluid",
      },
      name: asInterpretedName("resolver.contracts.superfluid.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-05-29T00:00:00.000Z") },
    ],
  },
  {
    protocol: SuperfluidDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: asNormalizedAddress("0x4c073b3bab6d8826b8c5b229f3cfdc1ec6e47e74"),
        chain: base,
        codeName: "Superfluid",
      },
      name: asInterpretedName("governance.contracts.superfluid.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-05-29T00:00:00.000Z") },
    ],
  },
  {
    protocol: SuperfluidDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: asNormalizedAddress("0x55f7758dd99d5e185f4cc08d4ad95b71f598264d"),
        chain: base,
        codeName: "Superfluid",
      },
      name: asInterpretedName("host.contracts.superfluid.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-05-29T00:00:00.000Z") },
    ],
  },
  
];

defineContracts(contracts);

export default contracts;
