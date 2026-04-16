import { parseTimestamp } from "@ensnode/ensnode-sdk";

import type { ContractNamingSeasonAward } from "./types";

export const $ENS_TO_USDC_CONVERSION_RATE = 5.72;

const bulkDistributionTransactionHash =
  "0x97b1011ebe8253cc54876d79390b8927cfb72d0307b5c32009035f0fb656ff8f";

const bulkDistributionTimestamp = parseTimestamp("2026-03-06T11:21:23Z");

export const CONTRACT_NAMING_SEASON_DISTRIBUTED_AWARDS: ContractNamingSeasonAward[] = [
  {
    depositedTo: "0xb1a32fc9f9d8b2cf86c068cae13108809547ef71",
    project: {
      name: "Nouns DAO",
      link: new URL("https://nouns.wtf"),
    },
    award: 500,
    awardedAt: bulkDistributionTimestamp,
    transactionHash: bulkDistributionTransactionHash,
  },
  {
    depositedTo: "0xf06016d822943c42e3cb7fc3a6a3b1889c1045f8",
    project: {
      name: "Liquity",
      link: new URL("https://www.liquity.org"),
    },
    award: 500,
    awardedAt: bulkDistributionTimestamp,
    transactionHash: bulkDistributionTransactionHash,
  },
  {
    depositedTo: "0xc70eb1486872909b3ad619546fa2afb8d5aaa373",
    project: {
      name: "Cork",
      link: new URL("https://www.cork.tech"),
    },
    award: 500,
    awardedAt: bulkDistributionTimestamp,
    transactionHash: bulkDistributionTransactionHash,
  },
  {
    depositedTo: "0x4d9339dd97db55e3b9bcbe65de39ff9c04d1c2cd",
    project: {
      name: "Giveth",
      link: new URL("https://giveth.io"),
    },
    award: 500,
    awardedAt: bulkDistributionTimestamp,
    transactionHash: bulkDistributionTransactionHash,
  },
  {
    depositedTo: "0x75c83356987c8d813829d9fbb5de504b547750a6",
    project: {
      name: "Based Nouns",
      link: new URL("https://nouns.build/"),
    },
    award: 100,
    awardedAt: bulkDistributionTimestamp,
    transactionHash: bulkDistributionTransactionHash,
  },
  {
    depositedTo: "0x242ba6d68ffeb4a098b591b32d370f973ff882b7",
    project: {
      name: "Blockscout",
      link: new URL("https://blockscout.com/"),
    },
    award: 1195,
    awardedAt: parseTimestamp("2026-01-30T17:46:59Z"),
    transactionHash: "0xd43817d37e0db75a9f488959b8b839d2adde174b4ca0c80e9f5d20f8bbda122c",
  },
  {
    depositedTo: "0x883753beab357a2c29f3766c6ad158e72a78ce51",
    award: 100,
    awardedAt: bulkDistributionTimestamp,
    transactionHash: bulkDistributionTransactionHash,
  },
  {
    depositedTo: "0x843819e77947e2ca4f198dfa9c32cf49b598ef4b",
    award: 10,
    awardedAt: bulkDistributionTimestamp,
    transactionHash: bulkDistributionTransactionHash,
  },
  {
    depositedTo: "0xd1da830e7d175ec8a51103bcfbbbe32a9362a6b2",
    award: 10,
    awardedAt: bulkDistributionTimestamp,
    transactionHash: bulkDistributionTransactionHash,
  },
  {
    depositedTo: "0x1208a26faa0f4ac65b42098419eb4daa5e580ac6",
    award: 10,
    awardedAt: bulkDistributionTimestamp,
    transactionHash: bulkDistributionTransactionHash,
  },
  {
    depositedTo: "0x03abd529e8af2de9ed48cd92e57aa7b0c1b797dc",
    award: 100,
    awardedAt: bulkDistributionTimestamp,
    transactionHash: bulkDistributionTransactionHash,
  },
  {
    depositedTo: "0x42204dc2efcfcb0f148d94f97348edb11b1e3f85",
    award: 10,
    awardedAt: bulkDistributionTimestamp,
    transactionHash: bulkDistributionTransactionHash,
  },
  {
    depositedTo: "0x66a5699dc1882a9ca9e7270ff5e7b49d412c2f4f",
    award: 10,
    awardedAt: bulkDistributionTimestamp,
    transactionHash: bulkDistributionTransactionHash,
  },
  {
    depositedTo: "0xeb7fa4b15edbd75eb3c8d62e7f7bf8c059e97fe1",
    award: 100,
    awardedAt: bulkDistributionTimestamp,
    transactionHash: bulkDistributionTransactionHash,
  },
  {
    depositedTo: "0xc0d86456f6f2930b892f3dad007cdbe32c081fe6",
    award: 10,
    awardedAt: bulkDistributionTimestamp,
    transactionHash: bulkDistributionTransactionHash,
  },
  {
    depositedTo: "0x6fef965fe935ebe7c569176c857e1b5e5ee8c34b",
    award: 10,
    awardedAt: bulkDistributionTimestamp,
    transactionHash: bulkDistributionTransactionHash,
  },
  {
    depositedTo: "0xd804edb35d367b1a877b3544e85b16c96681a775",
    award: 10,
    awardedAt: bulkDistributionTimestamp,
    transactionHash: bulkDistributionTransactionHash,
  },
  {
    depositedTo: "0x364056980867d1655897299889bca4e7d465b395",
    award: 10,
    awardedAt: bulkDistributionTimestamp,
    transactionHash: bulkDistributionTransactionHash,
  },
  {
    depositedTo: "0xae7e2aa76f463ca04812906f9c8c3d870704bd8d",
    award: 10,
    awardedAt: bulkDistributionTimestamp,
    transactionHash: bulkDistributionTransactionHash,
  },
  {
    depositedTo: "0x5629aea7c12097bb4af9920577dcd5fc33d3f77e",
    award: 10,
    awardedAt: bulkDistributionTimestamp,
    transactionHash: bulkDistributionTransactionHash,
  },
  {
    depositedTo: "0xda064c4567fad2c9da7b6dd08b5c2b2607960340",
    award: 100,
    awardedAt: bulkDistributionTimestamp,
    transactionHash: bulkDistributionTransactionHash,
  },
  {
    depositedTo: "0x51050ec063d393217b436747617ad1c2285aeeee",
    award: 10,
    awardedAt: bulkDistributionTimestamp,
    transactionHash: bulkDistributionTransactionHash,
  },
  {
    depositedTo: "0x7e5a0b21cc3c606f8d488a194e705ed74c0acb95",
    award: 10,
    awardedAt: bulkDistributionTimestamp,
    transactionHash: bulkDistributionTransactionHash,
  },
  {
    depositedTo: "0xf1aa941d56041d47a9a18e99609a047707fe96c7",
    award: 100,
    awardedAt: bulkDistributionTimestamp,
    transactionHash: bulkDistributionTransactionHash,
  },
  {
    depositedTo: "0x995f47734ec1b19baad65944504d71362a502daa",
    award: 10,
    awardedAt: bulkDistributionTimestamp,
    transactionHash: bulkDistributionTransactionHash,
  },
  {
    depositedTo: "0xf1c7c037891525e360c59f708739ac09a7670c59",
    award: 10,
    awardedAt: bulkDistributionTimestamp,
    transactionHash: bulkDistributionTransactionHash,
  },
  {
    depositedTo: "0xcf42f35a7db4b37769b8519b323202a32520e673",
    award: 10,
    awardedAt: bulkDistributionTimestamp,
    transactionHash: bulkDistributionTransactionHash,
  },
  {
    depositedTo: "0xd1177f978a5535eba843bdd817e730df1c42c476",
    award: 10,
    awardedAt: bulkDistributionTimestamp,
    transactionHash: bulkDistributionTransactionHash,
  },
  // NOTE: The following awards data is a high-level representation of the awards distribution and might not capture full technical details of the distribution process.
  // In such cases we will post additional notes here to provide more context.
  //
  // This award was distributed over two separate transactions.
  // The second transaction Hash is: 0x526e83bce85a6921234b1f0d3921756ba8728c8f938d1b1241d70acee3550a8f
  {
    depositedTo: "0x2117bf88b4cb0186eaa87500a045fc998290e42a",
    award: 100,
    awardedAt: bulkDistributionTimestamp,
    transactionHash: bulkDistributionTransactionHash,
  },
  {
    depositedTo: "0xb2eb328c26de2d0a7f68198aa7813b287b3d06b4",
    award: 500,
    awardedAt: bulkDistributionTimestamp,
    transactionHash: bulkDistributionTransactionHash,
  },
  {
    depositedTo: "0x546457bbddf5e09929399768ab5a9d588cb0334d",
    award: 100,
    awardedAt: bulkDistributionTimestamp,
    transactionHash: bulkDistributionTransactionHash,
  },
];
