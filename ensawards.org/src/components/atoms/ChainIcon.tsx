import type { ChainId } from "@ensnode/ensnode-sdk";
import { arbitrum, base, linea, mainnet, optimism, scroll } from "viem/chains";
import { ArbitrumIcon } from "./icons/chains/ArbitrumIcon";
import { BaseIcon } from "./icons/chains/BaseIcon";
import { EthereumIcon } from "./icons/chains/EthereumIcon";
import { LineaIcon } from "./icons/chains/LineaIcon";
import { OptimismIcon } from "./icons/chains/OptimismIcon";
import { ScrollIcon } from "./icons/chains/ScrollIcon";
import { UnrecognizedChainIcon } from "./icons/chains/UnrecognizedChainIcon";

export interface ChainIconProps {
  chainId: ChainId;
  width?: number;
  height?: number;
}

/**
 * Mapping of chain id to chain icon.
 * Chain id standards are organized by the Ethereum Community @ https://github.com/ethereum-lists/chains
 */
const chainIcons = new Map<ChainId, React.ComponentType<React.SVGProps<SVGSVGElement>>>([
  // mainnet
  [mainnet.id, EthereumIcon],
  [base.id, BaseIcon],
  [linea.id, LineaIcon],
  [optimism.id, OptimismIcon],
  [arbitrum.id, ArbitrumIcon],
  [scroll.id, ScrollIcon],
]);

/**
 * Renders an icon for the provided chain ID.
 */
export function ChainIcon({ chainId, width = 20, height = 20 }: ChainIconProps) {
  const Icon = chainIcons.get(chainId) || UnrecognizedChainIcon;
  return <Icon width={width} height={height} />;
}
