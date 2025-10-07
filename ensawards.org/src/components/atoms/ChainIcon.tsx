import { ArbitrumIcon } from "./icons/chains/ArbitrumIcon";
import { ArbitrumTestnetIcon } from "./icons/chains/ArbitrumTestnetIcon";
import { BaseIcon } from "./icons/chains/BaseIcon";
import { BaseTestnetIcon } from "./icons/chains/BaseTestnetIcon";
import { EthereumIcon } from "./icons/chains/EthereumIcon";
import { EthereumLocalIcon } from "./icons/chains/EthereumLocalIcon";
import { EthereumTestnetIcon } from "./icons/chains/EthereumTestnetIcon";
import { LineaIcon } from "./icons/chains/LineaIcon";
import { LineaTestnetIcon } from "./icons/chains/LineaTestnetIcon";
import { OptimismIcon } from "./icons/chains/OptimismIcon";
import { OptimismTestnetIcon } from "./icons/chains/OptimismTestnetIcon";
import { ScrollIcon } from "./icons/chains/ScrollIcon";
import { ScrollTestnetIcon } from "./icons/chains/ScrollTestnetIcon";
import { UnrecognizedChainIcon } from "./icons/chains/UnrecognizedChainIcon";
// import { ensTestEnvL1Chain } from "@ensnode/datasources";
import {
  arbitrum,
  arbitrumSepolia,
  base,
  baseSepolia,
  holesky,
  linea,
  lineaSepolia,
  mainnet,
  optimism,
  optimismSepolia,
  scroll,
  scrollSepolia,
  sepolia,
} from "viem/chains";

export interface ChainIconProps {
  chainId: number;
  width?: number;
  height?: number;
}

/**
 * Mapping of chain id to chain icon.
 * Chain id standards are organized by the Ethereum Community @ https://github.com/ethereum-lists/chains
 */
const chainIcons = new Map<number, React.ComponentType<React.SVGProps<SVGSVGElement>>>([
  // mainnet
  [mainnet.id, EthereumIcon],
  [base.id, BaseIcon],
  [linea.id, LineaIcon],
  [optimism.id, OptimismIcon],
  [arbitrum.id, ArbitrumIcon],
  [scroll.id, ScrollIcon],

  // sepolia
  [sepolia.id, EthereumTestnetIcon],
  [baseSepolia.id, BaseTestnetIcon],
  [lineaSepolia.id, LineaTestnetIcon],
  [optimismSepolia.id, OptimismTestnetIcon],
  [arbitrumSepolia.id, ArbitrumTestnetIcon],
  [scrollSepolia.id, ScrollTestnetIcon],

  // holesky
  [holesky.id, EthereumTestnetIcon],

  // ens-test-env
  // TODO: Had to get rid of it due to the following error: TS2305: Module "@ensnode/datasources" has no exported member ensTestEnvL1Chain
  // [ensTestEnvL1Chain.id, EthereumLocalIcon],
]);

/**
 * Renders an icon for the provided chain ID.
 */
export function ChainIcon({ chainId, width = 20, height = 20 }: ChainIconProps) {
  const Icon = chainIcons.get(chainId) || UnrecognizedChainIcon;
  return <Icon width={width} height={height} />;
}
