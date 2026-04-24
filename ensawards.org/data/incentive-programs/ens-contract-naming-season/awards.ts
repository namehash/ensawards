import BlockscoutExplorer from "data/apps/blockscout-explorer";
import { defineAwards } from "data/awards/registry";
import { type Award, type AwardDistribution, AwardTypes } from "data/awards/types";
import { EntityMetadataTypes } from "data/entity-metadata/types";
import CorkDeFi from "data/protocols/cork-defi";
import GivethDeFi from "data/protocols/giveth-defi";
import LiquityDeFi from "data/protocols/liquity-defi";
import NounsDao from "data/protocols/nouns-dao";
import { mainnet } from "viem/chains";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

const marchBulkDistribution = {
  timestamp: parseTimestamp("2026-03-06T11:21:23Z"),
  transaction: {
    chainId: mainnet.id,
    transactionHash: "0x97b1011ebe8253cc54876d79390b8927cfb72d0307b5c32009035f0fb656ff8f",
  },
} as const satisfies AwardDistribution;

const ensContractNamingSeasonAwards: Award[] = [
  {
    type: AwardTypes.FinancialAward,
    associatedIncentiveProgramSlug: "ens-contract-naming-season",
    awardedTo: {
      chainId: mainnet.id,
      address: "0xb1a32fc9f9d8b2cf86c068cae13108809547ef71",
    },
    awardedEntityMetadata: {
      type: EntityMetadataTypes.Protocol,
      protocol: NounsDao,
    },
    price: 500,
    awardedAt: marchBulkDistribution.timestamp,
    transaction: marchBulkDistribution.transaction,
    reason: "TODO: Define award reason",
  },
  {
    type: AwardTypes.FinancialAward,
    associatedIncentiveProgramSlug: "ens-contract-naming-season",
    awardedTo: {
      chainId: mainnet.id,
      address: "0xf06016d822943c42e3cb7fc3a6a3b1889c1045f8",
    },
    awardedEntityMetadata: {
      type: EntityMetadataTypes.Protocol,
      protocol: LiquityDeFi,
    },
    price: 500,
    awardedAt: marchBulkDistribution.timestamp,
    transaction: marchBulkDistribution.transaction,
    reason: "TODO: Define award reason",
  },
  {
    type: AwardTypes.FinancialAward,
    associatedIncentiveProgramSlug: "ens-contract-naming-season",
    awardedTo: {
      chainId: mainnet.id,
      address: "0xc70eb1486872909b3ad619546fa2afb8d5aaa373",
    },
    awardedEntityMetadata: {
      type: EntityMetadataTypes.Protocol,
      protocol: CorkDeFi,
    },
    price: 500,
    awardedAt: marchBulkDistribution.timestamp,
    transaction: marchBulkDistribution.transaction,
    reason: "TODO: Define award reason",
  },
  {
    type: AwardTypes.FinancialAward,
    associatedIncentiveProgramSlug: "ens-contract-naming-season",
    awardedTo: {
      chainId: mainnet.id,
      address: "0x4d9339dd97db55e3b9bcbe65de39ff9c04d1c2cd",
    },
    awardedEntityMetadata: {
      type: EntityMetadataTypes.Protocol,
      protocol: GivethDeFi,
    },
    price: 500,
    awardedAt: marchBulkDistribution.timestamp,
    transaction: marchBulkDistribution.transaction,
    reason: "TODO: Define award reason",
  },
  {
    type: AwardTypes.FinancialAward,
    associatedIncentiveProgramSlug: "ens-contract-naming-season",
    awardedTo: {
      chainId: mainnet.id,
      address: "0x75c83356987c8d813829d9fbb5de504b547750a6",
    },
    awardedEntityMetadata: {
      type: EntityMetadataTypes.Custom,
      name: "Based Nouns",
      link: new URL("https://nouns.build/"),
    },
    price: 100,
    awardedAt: marchBulkDistribution.timestamp,
    transaction: marchBulkDistribution.transaction,
    reason: "TODO: Define award reason",
  },
  {
    type: AwardTypes.FinancialAward,
    associatedIncentiveProgramSlug: "ens-contract-naming-season",
    awardedTo: {
      chainId: mainnet.id,
      address: "0x242ba6d68ffeb4a098b591b32d370f973ff882b7",
    },
    awardedEntityMetadata: {
      type: EntityMetadataTypes.App,
      app: BlockscoutExplorer,
    },
    price: 1195,
    awardedAt: parseTimestamp("2026-01-30T17:46:59Z"),
    transaction: {
      chainId: mainnet.id,
      transactionHash: "0xd43817d37e0db75a9f488959b8b839d2adde174b4ca0c80e9f5d20f8bbda122c",
    },
    reason: "TODO: Define award reason",
  },
  {
    type: AwardTypes.FinancialAward,
    associatedIncentiveProgramSlug: "ens-contract-naming-season",
    awardedTo: {
      chainId: mainnet.id,
      address: "0x883753beab357a2c29f3766c6ad158e72a78ce51",
    },
    price: 100,
    awardedAt: marchBulkDistribution.timestamp,
    transaction: marchBulkDistribution.transaction,
    reason: "TODO: Define award reason",
  },
  {
    type: AwardTypes.FinancialAward,
    associatedIncentiveProgramSlug: "ens-contract-naming-season",
    awardedTo: {
      chainId: mainnet.id,
      address: "0x843819e77947e2ca4f198dfa9c32cf49b598ef4b",
    },
    price: 10,
    awardedAt: marchBulkDistribution.timestamp,
    transaction: marchBulkDistribution.transaction,
    reason: "TODO: Define award reason",
  },
  {
    type: AwardTypes.FinancialAward,
    associatedIncentiveProgramSlug: "ens-contract-naming-season",
    awardedTo: {
      chainId: mainnet.id,
      address: "0xd1da830e7d175ec8a51103bcfbbbe32a9362a6b2",
    },
    price: 10,
    awardedAt: marchBulkDistribution.timestamp,
    transaction: marchBulkDistribution.transaction,
    reason: "TODO: Define award reason",
  },
  {
    type: AwardTypes.FinancialAward,
    associatedIncentiveProgramSlug: "ens-contract-naming-season",
    awardedTo: {
      chainId: mainnet.id,
      address: "0x1208a26faa0f4ac65b42098419eb4daa5e580ac6",
    },
    price: 10,
    awardedAt: marchBulkDistribution.timestamp,
    transaction: marchBulkDistribution.transaction,
    reason: "TODO: Define award reason",
  },
  {
    type: AwardTypes.FinancialAward,
    associatedIncentiveProgramSlug: "ens-contract-naming-season",
    awardedTo: {
      chainId: mainnet.id,
      address: "0x03abd529e8af2de9ed48cd92e57aa7b0c1b797dc",
    },
    price: 100,
    awardedAt: marchBulkDistribution.timestamp,
    transaction: marchBulkDistribution.transaction,
    reason: "TODO: Define award reason",
  },
  {
    type: AwardTypes.FinancialAward,
    associatedIncentiveProgramSlug: "ens-contract-naming-season",
    awardedTo: {
      chainId: mainnet.id,
      address: "0x42204dc2efcfcb0f148d94f97348edb11b1e3f85",
    },
    price: 10,
    awardedAt: marchBulkDistribution.timestamp,
    transaction: marchBulkDistribution.transaction,
    reason: "TODO: Define award reason",
  },
  {
    type: AwardTypes.FinancialAward,
    associatedIncentiveProgramSlug: "ens-contract-naming-season",
    awardedTo: {
      chainId: mainnet.id,
      address: "0x66a5699dc1882a9ca9e7270ff5e7b49d412c2f4f",
    },
    price: 10,
    awardedAt: marchBulkDistribution.timestamp,
    transaction: marchBulkDistribution.transaction,
    reason: "TODO: Define award reason",
  },
  {
    type: AwardTypes.FinancialAward,
    associatedIncentiveProgramSlug: "ens-contract-naming-season",
    awardedTo: {
      chainId: mainnet.id,
      address: "0xeb7fa4b15edbd75eb3c8d62e7f7bf8c059e97fe1",
    },
    price: 100,
    awardedAt: marchBulkDistribution.timestamp,
    transaction: marchBulkDistribution.transaction,
    reason: "TODO: Define award reason",
  },
  {
    type: AwardTypes.FinancialAward,
    associatedIncentiveProgramSlug: "ens-contract-naming-season",
    awardedTo: {
      chainId: mainnet.id,
      address: "0xc0d86456f6f2930b892f3dad007cdbe32c081fe6",
    },
    price: 10,
    awardedAt: marchBulkDistribution.timestamp,
    transaction: marchBulkDistribution.transaction,
    reason: "TODO: Define award reason",
  },
  {
    type: AwardTypes.FinancialAward,
    associatedIncentiveProgramSlug: "ens-contract-naming-season",
    awardedTo: {
      chainId: mainnet.id,
      address: "0x6fef965fe935ebe7c569176c857e1b5e5ee8c34b",
    },
    price: 10,
    awardedAt: marchBulkDistribution.timestamp,
    transaction: marchBulkDistribution.transaction,
    reason: "TODO: Define award reason",
  },
  {
    type: AwardTypes.FinancialAward,
    associatedIncentiveProgramSlug: "ens-contract-naming-season",
    awardedTo: {
      chainId: mainnet.id,
      address: "0xd804edb35d367b1a877b3544e85b16c96681a775",
    },
    price: 10,
    awardedAt: marchBulkDistribution.timestamp,
    transaction: marchBulkDistribution.transaction,
    reason: "TODO: Define award reason",
  },
  {
    type: AwardTypes.FinancialAward,
    associatedIncentiveProgramSlug: "ens-contract-naming-season",
    awardedTo: {
      chainId: mainnet.id,
      address: "0x364056980867d1655897299889bca4e7d465b395",
    },
    price: 10,
    awardedAt: marchBulkDistribution.timestamp,
    transaction: marchBulkDistribution.transaction,
    reason: "TODO: Define award reason",
  },
  {
    type: AwardTypes.FinancialAward,
    associatedIncentiveProgramSlug: "ens-contract-naming-season",
    awardedTo: {
      chainId: mainnet.id,
      address: "0xae7e2aa76f463ca04812906f9c8c3d870704bd8d",
    },
    price: 10,
    awardedAt: marchBulkDistribution.timestamp,
    transaction: marchBulkDistribution.transaction,
    reason: "TODO: Define award reason",
  },
  {
    type: AwardTypes.FinancialAward,
    associatedIncentiveProgramSlug: "ens-contract-naming-season",
    awardedTo: {
      chainId: mainnet.id,
      address: "0x5629aea7c12097bb4af9920577dcd5fc33d3f77e",
    },
    price: 10,
    awardedAt: marchBulkDistribution.timestamp,
    transaction: marchBulkDistribution.transaction,
    reason: "TODO: Define award reason",
  },
  {
    type: AwardTypes.FinancialAward,
    associatedIncentiveProgramSlug: "ens-contract-naming-season",
    awardedTo: {
      chainId: mainnet.id,
      address: "0xda064c4567fad2c9da7b6dd08b5c2b2607960340",
    },
    price: 100,
    awardedAt: marchBulkDistribution.timestamp,
    transaction: marchBulkDistribution.transaction,
    reason: "TODO: Define award reason",
  },
  {
    type: AwardTypes.FinancialAward,
    associatedIncentiveProgramSlug: "ens-contract-naming-season",
    awardedTo: {
      chainId: mainnet.id,
      address: "0x51050ec063d393217b436747617ad1c2285aeeee",
    },
    price: 10,
    awardedAt: marchBulkDistribution.timestamp,
    transaction: marchBulkDistribution.transaction,
    reason: "TODO: Define award reason",
  },
  {
    type: AwardTypes.FinancialAward,
    associatedIncentiveProgramSlug: "ens-contract-naming-season",
    awardedTo: {
      chainId: mainnet.id,
      address: "0x7e5a0b21cc3c606f8d488a194e705ed74c0acb95",
    },
    price: 10,
    awardedAt: marchBulkDistribution.timestamp,
    transaction: marchBulkDistribution.transaction,
    reason: "TODO: Define award reason",
  },
  {
    type: AwardTypes.FinancialAward,
    associatedIncentiveProgramSlug: "ens-contract-naming-season",
    awardedTo: {
      chainId: mainnet.id,
      address: "0xf1aa941d56041d47a9a18e99609a047707fe96c7",
    },
    price: 100,
    awardedAt: marchBulkDistribution.timestamp,
    transaction: marchBulkDistribution.transaction,
    reason: "TODO: Define award reason",
  },
  {
    type: AwardTypes.FinancialAward,
    associatedIncentiveProgramSlug: "ens-contract-naming-season",
    awardedTo: {
      chainId: mainnet.id,
      address: "0x995f47734ec1b19baad65944504d71362a502daa",
    },
    price: 10,
    awardedAt: marchBulkDistribution.timestamp,
    transaction: marchBulkDistribution.transaction,
    reason: "TODO: Define award reason",
  },
  {
    type: AwardTypes.FinancialAward,
    associatedIncentiveProgramSlug: "ens-contract-naming-season",
    awardedTo: {
      chainId: mainnet.id,
      address: "0xf1c7c037891525e360c59f708739ac09a7670c59",
    },
    price: 10,
    awardedAt: marchBulkDistribution.timestamp,
    transaction: marchBulkDistribution.transaction,
    reason: "TODO: Define award reason",
  },
  {
    type: AwardTypes.FinancialAward,
    associatedIncentiveProgramSlug: "ens-contract-naming-season",
    awardedTo: {
      chainId: mainnet.id,
      address: "0xcf42f35a7db4b37769b8519b323202a32520e673",
    },
    price: 10,
    awardedAt: marchBulkDistribution.timestamp,
    transaction: marchBulkDistribution.transaction,
    reason: "TODO: Define award reason",
  },
  {
    type: AwardTypes.FinancialAward,
    associatedIncentiveProgramSlug: "ens-contract-naming-season",
    awardedTo: {
      chainId: mainnet.id,
      address: "0xd1177f978a5535eba843bdd817e730df1c42c476",
    },
    price: 10,
    awardedAt: marchBulkDistribution.timestamp,
    transaction: marchBulkDistribution.transaction,
    reason: "TODO: Define award reason",
  },
  // This award was distributed over two separate transactions.
  // The second transaction Hash is: 0x526e83bce85a6921234b1f0d3921756ba8728c8f938d1b1241d70acee3550a8f
  // on chain with id: 1
  // TODO: Create a separate award for the second transaction once we unblock multiple awards per recipient.
  // For details see: https://github.com/namehash/ensawards/issues/191
  {
    type: AwardTypes.FinancialAward,
    associatedIncentiveProgramSlug: "ens-contract-naming-season",
    awardedTo: {
      chainId: mainnet.id,
      address: "0x2117bf88b4cb0186eaa87500a045fc998290e42a",
    },
    price: 100,
    awardedAt: marchBulkDistribution.timestamp,
    transaction: marchBulkDistribution.transaction,
    reason: "TODO: Define award reason",
  },
  {
    type: AwardTypes.FinancialAward,
    associatedIncentiveProgramSlug: "ens-contract-naming-season",
    awardedTo: {
      chainId: mainnet.id,
      address: "0xb2eb328c26de2d0a7f68198aa7813b287b3d06b4",
    },
    price: 500,
    awardedAt: marchBulkDistribution.timestamp,
    transaction: marchBulkDistribution.transaction,
    reason: "TODO: Define award reason",
  },
  {
    type: AwardTypes.FinancialAward,
    associatedIncentiveProgramSlug: "ens-contract-naming-season",
    awardedTo: {
      chainId: mainnet.id,
      address: "0x546457bbddf5e09929399768ab5a9d588cb0334d",
    },
    price: 100,
    awardedAt: marchBulkDistribution.timestamp,
    transaction: marchBulkDistribution.transaction,
    reason: "TODO: Define award reason",
  },
];

defineAwards(ensContractNamingSeasonAwards);

export default ensContractNamingSeasonAwards;
