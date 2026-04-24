// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice on adding and modifying protocol's contracts

import { mainnet } from "viem/chains";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import contributors from "../../contributors";
import { defineContracts } from "../contracts-registry.ts";
import type { Contract } from "../contracts-types.ts";
import { ContractResolutionStatusIds } from "../contracts-types.ts";
import TaikoDeFi from ".";

const contracts: Contract[] = [
  {
    protocol: TaikoDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x8efa01564425692d0a0838dc10e300bd310cb43e",
        chain: mainnet,
        codeName: "SharedResolver",
      },
    },
    contributions: [
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: TaikoDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x9e0a24964e5397b566c1ed39258e21ab5e35c77c",
        chain: mainnet,
        codeName: "SignalService",
      },
      name: "signals.based.taiko.eth",
    },
    contributions: [
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: TaikoDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0xd60247c6848b7ca29eddf63aa924e53db6ddd8ec",
        chain: mainnet,
        codeName: "Bridge",
      },
      name: "bridge.based.taiko.eth",
    },
    contributions: [
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: TaikoDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x91f67118dd47d502b1f0c354d0611997b022f29e",
        chain: mainnet,
        codeName: "QuotaManager",
      },
    },
    contributions: [
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: TaikoDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x996282ca11e5deb6b5d122cc3b9a1fcaad4415ab",
        chain: mainnet,
        codeName: "ERC20Vault",
      },
      name: "v20.based.taiko.eth",
    },
    contributions: [
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: TaikoDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x0b470dd3a0e1c41228856fb319649e7c08f419aa",
        chain: mainnet,
        codeName: "ERC721Vault",
      },
      name: "v721.based.taiko.eth",
    },
    contributions: [
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: TaikoDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0xaf145913ea4a56be22e120ed9c24589659881702",
        chain: mainnet,
        codeName: "ERC1155Vault",
      },
      name: "v1155.based.taiko.eth",
    },
    contributions: [
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: TaikoDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x65666141a541423606365123ed280ab16a09a2e1",
        chain: mainnet,
        codeName: "BridgedERC20",
      },
    },
    contributions: [
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: TaikoDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xc3310905e2bc9cfb198695b75ef3e5b69c6a1bf7",
        chain: mainnet,
        codeName: "BridgedERC721",
      },
    },
    contributions: [
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: TaikoDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x3c90963cfba436400b0f9c46aa9224cb379c2c40",
        chain: mainnet,
        codeName: "BridgedERC1155",
      },
    },
    contributions: [
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: TaikoDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x06a9ab27c7e2255df1815e6cc0168d7755feb19a",
        chain: mainnet,
        codeName: "TaikoInbox",
      },
      name: "inbox.based.taiko.eth",
    },
    contributions: [
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: TaikoDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x9f9d2fc7abe74c79f86f0d1212107692430eef72",
        chain: mainnet,
        codeName: "TaikoWrapper",
      },
    },
    contributions: [
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: TaikoDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xb16931e78d0ce3c9298bbeef3b5e2276d34b8da1",
        chain: mainnet,
        codeName: "ComposeVerifier",
      },
    },
    contributions: [
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: TaikoDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x9e322fc59b8f4a29e6b25c3a166ac1892aa30136",
        chain: mainnet,
        codeName: "SgxRethVerifier",
      },
    },
    contributions: [
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: TaikoDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x7e6409e9b6c5e2064064a6cc994f9a2e95680782",
        chain: mainnet,
        codeName: "SgxGethVerifier",
      },
    },
    contributions: [
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: TaikoDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x73ee496da20e5c65340c040b0d8c3c891c1f74ae",
        chain: mainnet,
        codeName: "Risc0RethVerifier",
      },
    },
    contributions: [
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: TaikoDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xbee1040d0aab17ae19454384904525ae4a3602b9",
        chain: mainnet,
        codeName: "SP1RethVerifier",
      },
    },
    contributions: [
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: TaikoDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xff5adab685362dc4c33536a65af5873738d1216b",
        chain: mainnet,
        codeName: "SP1RemoteVerifier",
      },
    },
    contributions: [
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: TaikoDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x68d30f47f19c07bccef4ac7fae2dc12fca3e0dc9",
        chain: mainnet,
        codeName: "labprover",
      },
    },
    contributions: [
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: TaikoDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x05d88855361808fa1d7fc28084ef3fca191c4e03",
        chain: mainnet,
        codeName: "ForcedInclusionStore",
      },
    },
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: TaikoDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x5a982fb1818c22744f5d7d36d0c4c9f61937b33a",
        chain: mainnet,
        codeName: "RollupAddressResolver",
      },
    },
    contributions: [
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: TaikoDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xfb3ca570a5348fd101e65303eecdb5bf43c5548a",
        chain: mainnet,
        codeName: "Risc0Groth16Verifier",
      },
    },
    contributions: [
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: TaikoDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x8d7c954960a36a7596d7ea4945ddf891967ca8a3",
        chain: mainnet,
        codeName: "AutomataDcapAttestation",
      },
    },
    contributions: [
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: TaikoDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0ffa4a625ed9db32b70f99180fd00759fc3e9261",
        chain: mainnet,
        codeName: "SgxGethAutomata",
      },
    },
    contributions: [
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: TaikoDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x02772b7b3a5bea0141c993dbb8d0733c19f46169",
        chain: mainnet,
        codeName: "PemCertChainLib",
      },
    },
    contributions: [
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: TaikoDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x11a9eba17ebf92b40fcf9a640ebbc47db6fbeab0",
        chain: mainnet,
        codeName: "P256Verifier",
      },
    },
    contributions: [
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
  {
    protocol: TaikoDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x47bb416ee947fe4a4b655011af7d6e3a1b80e6e9",
        chain: mainnet,
        codeName: "SigVerifyLib",
      },
    },
    contributions: [
      { from: contributors.lightwalker, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
      { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-04T15:25:00.000Z") },
    ],
  },
];

defineContracts(contracts);

export default contracts;
