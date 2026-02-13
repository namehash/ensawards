import { mainnet } from "viem/chains";

import { TaikoDeFiProtocol } from "@/data/protocols/taiko-defi";
import type { Contract } from "@/types/contracts.ts";
import { ContractResolutionStatusIds, ContractSubtypes, ContractTypes } from "@/types/contracts.ts";

export const TaikoDeFiProtocolContracts: Contract[] = [
  {
    protocol: TaikoDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x8Efa01564425692d0a0838DC10E300BD310Cb43e",
        chain: mainnet,
        codeName: "SharedResolver",
      },
    },
  },
  {
    protocol: TaikoDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x9e0a24964e5397B566c1ed39258e21aB5E35C77C",
        chain: mainnet,
        codeName: "SignalService",
      },
      name: "signals.based.taiko.eth",
    },
  },
  {
    protocol: TaikoDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0xd60247c6848B7Ca29eDdF63AA924E53dB6Ddd8EC",
        chain: mainnet,
        codeName: "Bridge",
      },
      name: "bridge.based.taiko.eth",
    },
  },
  {
    protocol: TaikoDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x91f67118DD47d502B1f0C354D0611997B022f29E",
        chain: mainnet,
        codeName: "QuotaManager",
      },
    },
  },
  {
    protocol: TaikoDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x996282cA11E5DEb6B5D122CC3B9A1FcAAD4415Ab",
        chain: mainnet,
        codeName: "ERC20Vault",
      },
      name: "v20.based.taiko.eth",
    },
  },
  {
    protocol: TaikoDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x0b470dd3A0e1C41228856Fb319649E7c08f419Aa",
        chain: mainnet,
        codeName: "ERC721Vault",
      },
      name: "v721.based.taiko.eth",
    },
  },
  {
    protocol: TaikoDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0xaf145913EA4a56BE22E120ED9C24589659881702",
        chain: mainnet,
        codeName: "ERC1155Vault",
      },
      name: "v1155.based.taiko.eth",
    },
  },
  {
    protocol: TaikoDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x65666141a541423606365123Ed280AB16a09A2e1",
        chain: mainnet,
        codeName: "BridgedERC20",
      },
    },
  },
  {
    protocol: TaikoDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xC3310905E2BC9Cfb198695B75EF3e5B69C6A1Bf7",
        chain: mainnet,
        codeName: "BridgedERC721",
      },
    },
  },
  {
    protocol: TaikoDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x3c90963cFBa436400B0F9C46Aa9224cB379c2c40",
        chain: mainnet,
        codeName: "BridgedERC1155",
      },
    },
  },
  {
    protocol: TaikoDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.PrimaryNamed,
      contract: {
        address: "0x06a9Ab27c7e2255df1815E6CC0168d7755Feb19a",
        chain: mainnet,
        codeName: "TaikoInbox",
      },
      name: "inbox.based.taiko.eth",
    },
  },
  {
    protocol: TaikoDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x9F9D2fC7abe74C79f86F0D1212107692430eef72",
        chain: mainnet,
        codeName: "TaikoWrapper",
      },
    },
  },
  {
    protocol: TaikoDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xB16931e78d0cE3c9298bbEEf3b5e2276D34b8da1",
        chain: mainnet,
        codeName: "ComposeVerifier",
      },
    },
  },
  {
    protocol: TaikoDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x9e322fC59b8f4A29e6b25c3a166ac1892AA30136",
        chain: mainnet,
        codeName: "SgxRethVerifier",
      },
    },
  },
  {
    protocol: TaikoDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x7e6409e9b6c5e2064064a6cC994f9a2e95680782",
        chain: mainnet,
        codeName: "SgxGethVerifier",
      },
    },
  },
  {
    protocol: TaikoDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x73Ee496dA20e5C65340c040B0D8c3C891C1f74AE",
        chain: mainnet,
        codeName: "Risc0RethVerifier",
      },
    },
  },
  {
    protocol: TaikoDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xbee1040D0Aab17AE19454384904525aE4A3602B9",
        chain: mainnet,
        codeName: "SP1RethVerifier",
      },
    },
  },
  {
    protocol: TaikoDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xff5adab685362dc4c33536a65af5873738d1216b",
        chain: mainnet,
        codeName: "SP1RemoteVerifier",
      },
    },
  },
  {
    protocol: TaikoDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.Utility,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x68d30f47F19c07bCCEf4Ac7FAE2Dc12FCa3e0dC9",
        chain: mainnet,
        codeName: "labprover",
      },
    },
  },
  {
    protocol: TaikoDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x05d88855361808fA1d7fc28084Ef3fCa191c4e03",
        chain: mainnet,
        codeName: "ForcedInclusionStore",
      },
    },
  },
  {
    protocol: TaikoDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x5A982Fb1818c22744f5d7D36D0C4c9f61937b33a",
        chain: mainnet,
        codeName: "RollupAddressResolver",
      },
    },
  },
  {
    protocol: TaikoDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xfB3Ca570A5348FD101e65303eECdB5Bf43C5548a",
        chain: mainnet,
        codeName: "Risc0Groth16Verifier",
      },
    },
  },
  {
    protocol: TaikoDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x8d7C954960a36a7596d7eA4945dDf891967ca8A3",
        chain: mainnet,
        codeName: "AutomataDcapAttestation",
      },
    },
  },
  {
    protocol: TaikoDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x0ffa4A625ED9DB32B70F99180FD00759fc3e9261",
        chain: mainnet,
        codeName: "SgxGethAutomata",
      },
    },
  },
  {
    protocol: TaikoDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x02772b7B3a5Bea0141C993Dbb8D0733C19F46169",
        chain: mainnet,
        codeName: "PemCertChainLib",
      },
    },
  },
  {
    protocol: TaikoDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x11A9ebA17EbF92b40fcf9a640Ebbc47Db6fBeab0",
        chain: mainnet,
        codeName: "P256Verifier",
      },
    },
  },
  {
    protocol: TaikoDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.Utility,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x47bB416ee947fE4a4b655011aF7d6E3A1B80E6e9",
        chain: mainnet,
        codeName: "SigVerifyLib",
      },
    },
  },
];
