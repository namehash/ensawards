import { mainnet } from "viem/chains";

import { UniswapDeFiProtocol } from "@/data/protocols/uniswap-defi";
import type { Contract } from "@/types/contracts.ts";
import { ContractResolutionStatusIds, ContractSubtypes, ContractTypes } from "@/types/contracts.ts";

export const UniswapDeFiProtocolContracts: Contract[] = [
  {
    protocol: UniswapDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x000000000004444c5dc75cB358380D2e3dE08A90",
        chain: mainnet,
        codeName: "PoolManager",
      },
    },
  },
  {
    protocol: UniswapDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xd1428ba554f4c8450b763a0b2040a4935c63f06c",
        chain: mainnet,
        codeName: "TransparentUpgradeableProxy",
      },
    },
  },
  {
    protocol: UniswapDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0xbd216513d74c8cf14cf4747e6aaa6420ff64ee9e",
        chain: mainnet,
        codeName: "PositionManager",
      },
    },
  },
  {
    protocol: UniswapDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x52f0e24d1c21c8a0cb1e5a5dd6198556bd9e1203",
        chain: mainnet,
        codeName: "V4Quoter",
      },
    },
  },
  {
    protocol: UniswapDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x7ffe42c4a5deea5b0fec41c94c136cf115597227",
        chain: mainnet,
        codeName: "StateView",
      },
    },
  },
  {
    protocol: UniswapDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x66a9893cc07d91d95644aedd05d03f95e1dba8af",
        chain: mainnet,
        codeName: "UniversalRouter",
      },
    },
  },
  {
    protocol: UniswapDeFiProtocol,
    type: ContractTypes.DeFi,
    subtype: ContractSubtypes.DeFiApp,
    cachedIdentity: {
      resolutionStatus: ContractResolutionStatusIds.Unnamed,
      contract: {
        address: "0x000000000022D473030F116dDEE9F6B43aC78BA3",
        chain: mainnet,
        codeName: "Permit2",
      },
    },
  },
];
