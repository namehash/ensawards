// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice on adding and modifying protocol's contracts

import { asInterpretedName, asNormalizedAddress } from "enssdk";
import { arbitrum, mainnet } from "viem/chains";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import contributors from "../../contributors";
import { defineContracts } from "../contracts-registry.ts";
import type { Contract } from "../contracts-types.ts";
import { ContractResolutionStatusIds } from "../contracts-types.ts";
import KlerosDao from ".";

const contracts: Contract[] = [
  // Template entry — replace the placeholder address/codeName with a real Kleros contract.
  {
    protocol: KlerosDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: asNormalizedAddress("0xe5bcea6f87aaee4a81f64dfdb4d30d400e0e5cf4"),
        chain: mainnet,
        codeName: "Kleros",
      },
      name: asInterpretedName("governor.deployd.kleroslabs.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-05-29T00:00:00.000Z") },
    ],
  },
  {
    protocol: KlerosDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: asNormalizedAddress("0x2b562ea613ad2f58746935c842d09eb147e1e940"),
        chain: mainnet,
        codeName: "Kleros",
      },
      name: asInterpretedName("klerosliquidextraviews.deployd.kleroslabs.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-05-29T00:00:00.000Z") },
    ],
  },
  {
    protocol: KlerosDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: asNormalizedAddress("0xcf1f07713d5193fae5c1653c9f61953d048bece4"),
        chain: mainnet,
        codeName: "Kleros",
      },
      name: asInterpretedName("policyregistry.deployd.kleroslabs.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-05-29T00:00:00.000Z") },
    ],
  },
  {
    protocol: KlerosDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: asNormalizedAddress("0x82458d1c812d7c930bb3229c9e159cbabd9aa8cb"),
        chain: mainnet,
        codeName: "Kleros",
      },
      name: asInterpretedName("transactionbatcher.deployd.kleroslabs.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-05-29T00:00:00.000Z") },
    ],
  },
  {
    protocol: KlerosDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: asNormalizedAddress("0x90992fb4e15ce0c59aeffb376460fda4ee19c879"),
        chain: mainnet,
        codeName: "Kleros",
      },
      name: asInterpretedName("beaconrng.deployd.kleroslabs.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-05-29T00:00:00.000Z") },
    ],
  },
  {
    protocol: KlerosDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: asNormalizedAddress("0x988b3a538b618c7a603e1c11ab82cd16dbe28069"),
        chain: mainnet,
        codeName: "Kleros",
      },
      name: asInterpretedName("klerosliquid.deployd.kleroslabs.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-05-29T00:00:00.000Z") },
    ],
  },
  {
    protocol: KlerosDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: asNormalizedAddress("0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d"),
        chain: mainnet,
        codeName: "Kleros",
      },
      name: asInterpretedName("pnk.deployd.kleroslabs.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-05-29T00:00:00.000Z") },
    ],
  },
  {
    protocol: KlerosDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: asNormalizedAddress("0x897d83a7d5f23555efa15e1be297d5503522cba3"),
        chain: mainnet,
        codeName: "Kleros",
      },
      name: asInterpretedName("chainlink-vrf.deployd.kleroslabs.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-05-29T00:00:00.000Z") },
    ],
  },
  {
    protocol: KlerosDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: asNormalizedAddress("0x897d83a7d5f23555efa15e1be297d5503522cba3"),
        chain: arbitrum,
        codeName: "Kleros",
      },
      name: asInterpretedName("chainlink-vrf.deployd.kleroslabs.eth"),
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-05-29T00:00:00.000Z") },
    ],
  },
  {
    protocol: KlerosDao,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: asNormalizedAddress("0x180eba68d164c3f8c3f6dc354125ebccf4dfcb86"),
        chain: mainnet,
        codeName: "Kleros",
      },
    },
    contributions: [
      { from: contributors.nischal, lastUpdated: parseTimestamp("2026-05-29T00:00:00.000Z") },
    ],
  },
];

defineContracts(contracts);

export default contracts;
