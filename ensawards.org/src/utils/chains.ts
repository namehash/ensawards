import {
  arbitrum,
  base,
  linea,
  mainnet,
  optimism,
  scroll,
} from "viem/chains";
import type {ChainId} from "@ensnode/ensnode-sdk";

export const SUPPORTED_CHAINS = [
  mainnet,
  base,
  linea,
  optimism,
  arbitrum,
  scroll,
];

/**
 * Mapping of chain id to prettified chain name.
 *
 * NOTE: We prefer our custom names here, rather than those provided by default in `Chain#name`.
 */
const CUSTOM_CHAIN_NAMES = new Map<ChainId, string>([
  [mainnet.id, "Ethereum"],
  [base.id, "Base"],
  [linea.id, "Linea"],
  [optimism.id, "Optimism"],
  [arbitrum.id, "Arbitrum"],
  [scroll.id, "Scroll"],
]);

/**
 * Returns a prettified chain name for the provided chain id.
 */
export function getChainName(chainId: ChainId): string {
  const name = CUSTOM_CHAIN_NAMES.get(chainId);
  return name || `Unknown Chain (${chainId})`;
}
