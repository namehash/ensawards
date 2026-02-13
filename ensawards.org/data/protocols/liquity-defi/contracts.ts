import { arbitrum, base, mainnet, optimism, scroll } from "viem/chains";

import type { Contract } from "@/types/contracts.ts";
import { ContractResolutionStatusIds, ContractSubtypes, ContractTypes } from "@/types/contracts.ts";

import { LiquityDeFiProtocol } from ".";

export const LiquityDeFiProtocolContracts: Contract[] = [
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.Utility,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x6440f144b7e50D6a8439336510312d2F54beB01D",
        chain: mainnet,
        codeName: "boldToken",
      },
      name: "bold.token.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.Utility,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x03569CC076654F82679C4BA2124D64774781B01D",
        chain: base,
        codeName: "boldToken",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.Utility,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x03569CC076654F82679C4BA2124D64774781B01D",
        chain: arbitrum,
        codeName: "boldToken",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.Utility,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x03569CC076654F82679C4BA2124D64774781B01D",
        chain: optimism,
        codeName: "boldToken",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.Utility,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x03569CC076654F82679C4BA2124D64774781B01D",
        chain: scroll,
        codeName: "boldToken",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xf949982B91C8c61e952B3bA942cbbfaef5386684",
        chain: mainnet,
        codeName: "shared.collateralRegistry",
      },
      name: "redeem.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xF0caE19C96E572234398d6665cC1147A16cBe657",
        chain: mainnet,
        codeName: "shared.hintHelpers",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xFA61dB085510C64B83056Db3A7Acf3b6f631D235",
        chain: mainnet,
        codeName: "shared.multiTroveGetter",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x2f60bAb0072AbeC7058017f48D7256EC288c8686",
        chain: mainnet,
        codeName: "shared.exchangeHelpers",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        chain: mainnet,
        codeName: "ETHBranch.collToken",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x20F7C9ad66983F6523a0881d0f82406541417526",
        chain: mainnet,
        codeName: "ETHBranch.addressesRegistry",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xeB5A8C825582965f1d84606E078620a84ab16AfE",
        chain: mainnet,
        codeName: "ETHBranch.activePool",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x372ABD1810eAF23Cb9D941BbE7596DFb2c46BC65",
        chain: mainnet,
        codeName: "ETHBranch.borrowerOperations",
      },
      name: "borrower-ops.eth.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xedbE2509E502c0320D2e7f8b6746a49b4B50E2bF",
        chain: mainnet,
        codeName: "ETHBranch.collSurplusPool",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xD4558240d50C2E219a21c9d25afD513Bb6e5B1A0",
        chain: mainnet,
        codeName: "ETHBranch.defaultPool",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xA25269E41BD072513849F2E64Ad221e84f3063F4",
        chain: mainnet,
        codeName: "ETHBranch.sortedTroves",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x5721cbbd64fc7Ae3Ef44A0A3F9a790A9264Cf9BF",
        chain: mainnet,
        codeName: "ETHBranch.stabilityPool",
      },
      name: "stability-pool.eth.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x7bcb64B2c9206a5B699eD43363f6F98D4776Cf5A",
        chain: mainnet,
        codeName: "ETHBranch.troveManager",
      },
      name: "trove-manager.eth.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x1A0FC0b843aFD9140267D25d4E575Cb37a838013",
        chain: mainnet,
        codeName: "ETHBranch.troveNFT",
      },
      name: "trove.eth.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x9B36C3B16299D68c79F174df7e728E35b6AF4A12",
        chain: mainnet,
        codeName: "ETHBranch.metadataNFT",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xCC5F8102eb670c89a4a3c567C13851260303c24F",
        chain: mainnet,
        codeName: "ETHBranch.priceFeed",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x7b9ab3DE4036caE51F1fa4ec0a2C2fd606bCF921",
        chain: mainnet,
        codeName: "ETHBranch.gasPool",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x807DEf5E7d057DF05C796F4bc75C3Fe82Bd6EeE1",
        chain: mainnet,
        codeName: "ETHBranch.interestRouter",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x7022A4f4A2b9f0C30A5eB0B0073a8Bb4C8e70C1f",
        chain: mainnet,
        codeName: "ETHBranch.wethZapper",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xdCcBD7A365aeE086aa3b4EDe8afe895B20770AE3",
        chain: mainnet,
        codeName: "ETHBranch.leverageZapper",
      },
      name: "leverage-zapper.eth.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
        chain: mainnet,
        codeName: "wstETHBranch.collToken",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x8d733F7ea7c23Cbea7C613B6eBd845d46d3aAc54",
        chain: mainnet,
        codeName: "wstETHBranch.addressesRegistry",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x531a8f99c70D6A56A7CEe02d6B4281650d7919a0",
        chain: mainnet,
        codeName: "wstETHBranch.activePool",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xa741A32f9dcFe6aDBa088fD0f97e90742d7d5DA3",
        chain: mainnet,
        codeName: "wstETHBranch.borrowerOperations",
      },
      name: "borrower-ops.wsteth.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x36e6CBdf68f64CF00fC3a6c634A25be32Dd0A235",
        chain: mainnet,
        codeName: "wstETHBranch.collSurplusPool",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xD796e1648526400386CC4d12FA05E5F11e6a22A1",
        chain: mainnet,
        codeName: "wstETHBranch.defaultPool",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x84eb85a8C25049255614F0536Bea8F31682e86F1",
        chain: mainnet,
        codeName: "wstETHBranch.sortedTroves",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x9502b7c397E9aa22FE9dB7EF7DAF21cD2AEBe56B",
        chain: mainnet,
        codeName: "wstETHBranch.stabilityPool",
      },
      name: "stability-pool.wsteth.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xA2895d6A3bf110561Dfe4b71cA539d84e1928B22",
        chain: mainnet,
        codeName: "wstETHBranch.troveManager",
      },
      name: "trove-manager.wsteth.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x857aECeBF75f1012DC18E15020C97096aeA31b04",
        chain: mainnet,
        codeName: "wstETHBranch.troveNFT",
      },
      name: "trove.wsteth.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x362f822dF79790C8077e61110484Fffa48F682A1",
        chain: mainnet,
        codeName: "wstETHBranch.metadataNFT",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xe7Aa2Ba9E086A379d3beb224098bC634a46e314E",
        chain: mainnet,
        codeName: "wstETHBranch.priceFeed",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x8C44FBa379D8A8608C0e29B2729DeB75a981Db1f",
        chain: mainnet,
        codeName: "wstETHBranch.gasPool",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x807DEf5E7d057DF05C796F4bc75C3Fe82Bd6EeE1",
        chain: mainnet,
        codeName: "wstETHBranch.interestRouter",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xBD69D3e0eA967d146E925b7572B765c8E9C4127D",
        chain: mainnet,
        codeName: "wstETHBranch.gasCompZapper",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xe85230dE04147C4Ea363B21cdb801c1C19DF0A56",
        chain: mainnet,
        codeName: "wstETHBranch.leverageZapper",
      },
      name: "leverage-zapper.wsteth.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xae78736Cd615f374D3085123A210448E74Fc6393",
        chain: mainnet,
        codeName: "rETHBranch.collToken",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x6106046F031a22713697e04C08B330dDaf3e8789",
        chain: mainnet,
        codeName: "rETHBranch.addressesRegistry",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x9074D72cc82DaD1e13E454755Aa8f144c479532F",
        chain: mainnet,
        codeName: "rETHBranch.activePool",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xe8119fC02953B27a1b48D2573855738485A17329",
        chain: mainnet,
        codeName: "rETHBranch.borrowerOperations",
      },
      name: "borrower-ops.reth.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xba4A2bD8b76DF84CaC98eBa3f4b967D8423192bF",
        chain: mainnet,
        codeName: "rETHBranch.collSurplusPool",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x5cc5ceFD034Fdc4728D487a72Ca58A410CDdCD6b",
        chain: mainnet,
        codeName: "rETHBranch.defaultPool",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x14d8d8011dF2b396Ed2bbC4959bb73250324F386",
        chain: mainnet,
        codeName: "rETHBranch.sortedTroves",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xd442E41019B7F5C4dD78F50dc03726C446148695",
        chain: mainnet,
        codeName: "rETHBranch.stabilityPool",
      },
      name: "stability-pool.reth.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0xb2B2ABEb5C357a234363FF5D180912D319e3e19e",
        chain: mainnet,
        codeName: "rETHBranch.troveManager",
      },
      name: "trove-manager.reth.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x7ae430E25b67f19B431e1D1Dc048a5BCF24C0873",
        chain: mainnet,
        codeName: "rETHBranch.troveNFT",
      },
      name: "trove.reth.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x3400874305E1547020fb8e80eAF1308B757171Af",
        chain: mainnet,
        codeName: "rETHBranch.metadataNFT",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x34F1E9c7dcc279ec70d3c4488EB2D80FBa8B7b2B",
        chain: mainnet,
        codeName: "rETHBranch.priceFeed",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x45c81dcE308389e1Bee63ae30A04Fb1e148dad41",
        chain: mainnet,
        codeName: "rETHBranch.gasPool",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x807DEf5E7d057DF05C796F4bc75C3Fe82Bd6EeE1",
        chain: mainnet,
        codeName: "rETHBranch.interestRouter",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xbE8B230dCd12E246F5eDc5c103CC98be68ab636F",
        chain: mainnet,
        codeName: "rETHBranch.gasCompZapper",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x75036b1D6DE5665c60F5C33BB4a64e8E123211A2",
        chain: mainnet,
        codeName: "rETHBranch.leverageZapper",
      },
      name: "leverage-zapper.reth.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x807DEf5E7d057DF05C796F4bc75C3Fe82Bd6EeE1",
        chain: mainnet,
        codeName: "governance",
      },
      name: "governance.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xEFc6516323FbD28e80B85A497B65A86243a54B3E",
        chain: mainnet,
        codeName: "governance.curveUsdcBoldPool",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x07a01471fA544D9C6531B631E6A96A79a9AD05E9",
        chain: mainnet,
        codeName: "governance.curveUsdcBoldGauge",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xbA415Afa8fCD65196764B5E08cb4dBF90BEE33B4",
        chain: mainnet,
        codeName: "governance.curveUsdcBoldInitiative",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x7ED17e037B7d88A8270c89B3aFA9C38e5218F12b",
        chain: mainnet,
        codeName: "governance.curveLusdBoldPool",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xa37cdce0207127204682D3235EAd2c7a4C5D6C5C",
        chain: mainnet,
        codeName: "governance.curveLusdBoldGauge",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0c76eaE597AfA2Aa163A8C845F7E7e870256aC7E",
        chain: mainnet,
        codeName: "governance.curveLusdBoldInitiative",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xDc6f869d2D34E4aee3E89A51f2Af6D54F0F7f690",
        chain: mainnet,
        codeName: "governance.defiCollectiveInitiative",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x4f9Fbb3f1E99B56e0Fe2892e623Ed36A76Fc605d",
        chain: mainnet,
        codeName: "governance.stakingV1",
      },
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x6DEA81C8171D0bA574754EF6F8b412F2Ed88c54D",
        chain: mainnet,
        codeName: "governance.LQTYToken",
      },
      name: "lqty.token.liquity-protocol.eth",
    },
  },
  {
    protocol: LiquityDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.Governance,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.ForwardNamed,
      contract: {
        address: "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
        chain: mainnet,
        codeName: "governance.LUSDToken",
      },
      name: "lusd.token.liquity-protocol.eth",
    },
  },
];
