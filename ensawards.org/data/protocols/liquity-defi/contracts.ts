// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice on adding and modifying protocol's contracts

import { arbitrum, base, mainnet, optimism, scroll } from "viem/chains";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import contributors from "../../contributors";
import { defineContracts } from "../contracts-registry.ts";
import type { Contract } from "../contracts-types.ts";
import { ContractResolutionStatusIds } from "../contracts-types.ts";
import LiquityDeFi from ".";

const contracts: Contract[] = [
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x6440f144b7e50d6a8439336510312d2f54beb01d",
        chain: mainnet,
        codeName: "boldToken",
      },
      name: "bold.token.liquity-protocol.eth",
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x03569cc076654f82679c4ba2124d64774781b01d",
        chain: base,
        codeName: "boldToken",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x03569cc076654f82679c4ba2124d64774781b01d",
        chain: arbitrum,
        codeName: "boldToken",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x03569cc076654f82679c4ba2124d64774781b01d",
        chain: optimism,
        codeName: "boldToken",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x03569cc076654f82679c4ba2124d64774781b01d",
        chain: scroll,
        codeName: "boldToken",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xf949982b91c8c61e952b3ba942cbbfaef5386684",
        chain: mainnet,
        codeName: "shared.collateralRegistry",
      },
      name: "redeem.liquity-protocol.eth",
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xf0cae19c96e572234398d6665cc1147a16cbe657",
        chain: mainnet,
        codeName: "shared.hintHelpers",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xfa61db085510c64b83056db3a7acf3b6f631d235",
        chain: mainnet,
        codeName: "shared.multiTroveGetter",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x2f60bab0072abec7058017f48d7256ec288c8686",
        chain: mainnet,
        codeName: "shared.exchangeHelpers",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        chain: mainnet,
        codeName: "ETHBranch.collToken",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x20f7c9ad66983f6523a0881d0f82406541417526",
        chain: mainnet,
        codeName: "ETHBranch.addressesRegistry",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xeb5a8c825582965f1d84606e078620a84ab16afe",
        chain: mainnet,
        codeName: "ETHBranch.activePool",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x372abd1810eaf23cb9d941bbe7596dfb2c46bc65",
        chain: mainnet,
        codeName: "ETHBranch.borrowerOperations",
      },
      name: "borrower-ops.eth.liquity-protocol.eth",
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xedbe2509e502c0320d2e7f8b6746a49b4b50e2bf",
        chain: mainnet,
        codeName: "ETHBranch.collSurplusPool",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xd4558240d50c2e219a21c9d25afd513bb6e5b1a0",
        chain: mainnet,
        codeName: "ETHBranch.defaultPool",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xa25269e41bd072513849f2e64ad221e84f3063f4",
        chain: mainnet,
        codeName: "ETHBranch.sortedTroves",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x5721cbbd64fc7ae3ef44a0a3f9a790a9264cf9bf",
        chain: mainnet,
        codeName: "ETHBranch.stabilityPool",
      },
      name: "stability-pool.eth.liquity-protocol.eth",
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x7bcb64b2c9206a5b699ed43363f6f98d4776cf5a",
        chain: mainnet,
        codeName: "ETHBranch.troveManager",
      },
      name: "trove-manager.eth.liquity-protocol.eth",
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x1a0fc0b843afd9140267d25d4e575cb37a838013",
        chain: mainnet,
        codeName: "ETHBranch.troveNFT",
      },
      name: "trove.eth.liquity-protocol.eth",
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x9b36c3b16299d68c79f174df7e728e35b6af4a12",
        chain: mainnet,
        codeName: "ETHBranch.metadataNFT",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xcc5f8102eb670c89a4a3c567c13851260303c24f",
        chain: mainnet,
        codeName: "ETHBranch.priceFeed",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x7b9ab3de4036cae51f1fa4ec0a2c2fd606bcf921",
        chain: mainnet,
        codeName: "ETHBranch.gasPool",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x7022a4f4a2b9f0c30a5eb0b0073a8bb4c8e70c1f",
        chain: mainnet,
        codeName: "ETHBranch.wethZapper",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xdccbd7a365aee086aa3b4ede8afe895b20770ae3",
        chain: mainnet,
        codeName: "ETHBranch.leverageZapper",
      },
      name: "leverage-zapper.eth.liquity-protocol.eth",
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
        chain: mainnet,
        codeName: "wstETHBranch.collToken",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x8d733f7ea7c23cbea7c613b6ebd845d46d3aac54",
        chain: mainnet,
        codeName: "wstETHBranch.addressesRegistry",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x531a8f99c70d6a56a7cee02d6b4281650d7919a0",
        chain: mainnet,
        codeName: "wstETHBranch.activePool",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xa741a32f9dcfe6adba088fd0f97e90742d7d5da3",
        chain: mainnet,
        codeName: "wstETHBranch.borrowerOperations",
      },
      name: "borrower-ops.wsteth.liquity-protocol.eth",
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x36e6cbdf68f64cf00fc3a6c634a25be32dd0a235",
        chain: mainnet,
        codeName: "wstETHBranch.collSurplusPool",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xd796e1648526400386cc4d12fa05e5f11e6a22a1",
        chain: mainnet,
        codeName: "wstETHBranch.defaultPool",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x84eb85a8c25049255614f0536bea8f31682e86f1",
        chain: mainnet,
        codeName: "wstETHBranch.sortedTroves",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x9502b7c397e9aa22fe9db7ef7daf21cd2aebe56b",
        chain: mainnet,
        codeName: "wstETHBranch.stabilityPool",
      },
      name: "stability-pool.wsteth.liquity-protocol.eth",
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xa2895d6a3bf110561dfe4b71ca539d84e1928b22",
        chain: mainnet,
        codeName: "wstETHBranch.troveManager",
      },
      name: "trove-manager.wsteth.liquity-protocol.eth",
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x857aecebf75f1012dc18e15020c97096aea31b04",
        chain: mainnet,
        codeName: "wstETHBranch.troveNFT",
      },
      name: "trove.wsteth.liquity-protocol.eth",
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x362f822df79790c8077e61110484fffa48f682a1",
        chain: mainnet,
        codeName: "wstETHBranch.metadataNFT",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xe7aa2ba9e086a379d3beb224098bc634a46e314e",
        chain: mainnet,
        codeName: "wstETHBranch.priceFeed",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x8c44fba379d8a8608c0e29b2729deb75a981db1f",
        chain: mainnet,
        codeName: "wstETHBranch.gasPool",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xbd69d3e0ea967d146e925b7572b765c8e9c4127d",
        chain: mainnet,
        codeName: "wstETHBranch.gasCompZapper",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xe85230de04147c4ea363b21cdb801c1c19df0a56",
        chain: mainnet,
        codeName: "wstETHBranch.leverageZapper",
      },
      name: "leverage-zapper.wsteth.liquity-protocol.eth",
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xae78736cd615f374d3085123a210448e74fc6393",
        chain: mainnet,
        codeName: "rETHBranch.collToken",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x6106046f031a22713697e04c08b330ddaf3e8789",
        chain: mainnet,
        codeName: "rETHBranch.addressesRegistry",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x9074d72cc82dad1e13e454755aa8f144c479532f",
        chain: mainnet,
        codeName: "rETHBranch.activePool",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xe8119fc02953b27a1b48d2573855738485a17329",
        chain: mainnet,
        codeName: "rETHBranch.borrowerOperations",
      },
      name: "borrower-ops.reth.liquity-protocol.eth",
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xba4a2bd8b76df84cac98eba3f4b967d8423192bf",
        chain: mainnet,
        codeName: "rETHBranch.collSurplusPool",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x5cc5cefd034fdc4728d487a72ca58a410cddcd6b",
        chain: mainnet,
        codeName: "rETHBranch.defaultPool",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x14d8d8011df2b396ed2bbc4959bb73250324f386",
        chain: mainnet,
        codeName: "rETHBranch.sortedTroves",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xd442e41019b7f5c4dd78f50dc03726c446148695",
        chain: mainnet,
        codeName: "rETHBranch.stabilityPool",
      },
      name: "stability-pool.reth.liquity-protocol.eth",
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xb2b2abeb5c357a234363ff5d180912d319e3e19e",
        chain: mainnet,
        codeName: "rETHBranch.troveManager",
      },
      name: "trove-manager.reth.liquity-protocol.eth",
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x7ae430e25b67f19b431e1d1dc048a5bcf24c0873",
        chain: mainnet,
        codeName: "rETHBranch.troveNFT",
      },
      name: "trove.reth.liquity-protocol.eth",
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x3400874305e1547020fb8e80eaf1308b757171af",
        chain: mainnet,
        codeName: "rETHBranch.metadataNFT",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x34f1e9c7dcc279ec70d3c4488eb2d80fba8b7b2b",
        chain: mainnet,
        codeName: "rETHBranch.priceFeed",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x45c81dce308389e1bee63ae30a04fb1e148dad41",
        chain: mainnet,
        codeName: "rETHBranch.gasPool",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xbe8b230dcd12e246f5edc5c103cc98be68ab636f",
        chain: mainnet,
        codeName: "rETHBranch.gasCompZapper",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x75036b1d6de5665c60f5c33bb4a64e8e123211a2",
        chain: mainnet,
        codeName: "rETHBranch.leverageZapper",
      },
      name: "leverage-zapper.reth.liquity-protocol.eth",
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x807def5e7d057df05c796f4bc75c3fe82bd6eee1",
        chain: mainnet,
        codeName: "governance",
      },
      name: "governance.liquity-protocol.eth",
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xefc6516323fbd28e80b85a497b65a86243a54b3e",
        chain: mainnet,
        codeName: "governance.curveUsdcBoldPool",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x07a01471fa544d9c6531b631e6a96a79a9ad05e9",
        chain: mainnet,
        codeName: "governance.curveUsdcBoldGauge",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xba415afa8fcd65196764b5e08cb4dbf90bee33b4",
        chain: mainnet,
        codeName: "governance.curveUsdcBoldInitiative",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x7ed17e037b7d88a8270c89b3afa9c38e5218f12b",
        chain: mainnet,
        codeName: "governance.curveLusdBoldPool",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xa37cdce0207127204682d3235ead2c7a4c5d6c5c",
        chain: mainnet,
        codeName: "governance.curveLusdBoldGauge",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0c76eae597afa2aa163a8c845f7e7e870256ac7e",
        chain: mainnet,
        codeName: "governance.curveLusdBoldInitiative",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x4f9fbb3f1e99b56e0fe2892e623ed36a76fc605d",
        chain: mainnet,
        codeName: "governance.stakingV1",
      },
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x6dea81c8171d0ba574754ef6f8b412f2ed88c54d",
        chain: mainnet,
        codeName: "governance.LQTYToken",
      },
      name: "lqty.token.liquity-protocol.eth",
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
  {
    protocol: LiquityDeFi,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x5f98805a4e8be255a32880fdec7f6728c6568ba0",
        chain: mainnet,
        codeName: "governance.LUSDToken",
      },
      name: "lusd.token.liquity-protocol.eth",
    },
    contributions: [
      { from: contributors.lightwalker, updatedAt: parseTimestamp("2026-02-10T08:41:00.000Z") },
    ],
  },
];

defineContracts(contracts);

export default contracts;
