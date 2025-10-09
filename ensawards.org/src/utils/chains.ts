import {
  arbitrum,
  base,
  linea,
  mainnet,
  optimism,
  scroll,
} from "viem/chains";
import type {ChainId} from "@ensnode/ensnode-sdk";
import type {Address} from "viem";

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

/**
 * Gets the base block explorer URL for a given chainId
 *
 * @returns default block explorer URL for the chain with the provided id,
 * or null if the referenced chain doesn't have a known block explorer
 */
export function getChainBlockExplorerUrl(chainId: ChainId): URL | null {
  const chain = SUPPORTED_CHAINS.find((chain) => chain.id === chainId);
  // if ENSAwards doesn't support a chain with a given id
  // (theoretically should never happen)
  if (!chain) return null;

  // if a supported chain does not have a blockExplorer
  // (theoretically should never happen)
  if (!chain.blockExplorers) return null;

  return new URL(chain.blockExplorers.default.url);
}

/**
 * Gets the block explorer URL for a specific contract on a specific chainId
 *
 * @returns complete block explorer URL for a specific contract on a specific chainId,
 * or null if the referenced chain doesn't have a known block explorer
 */
export const getBlockExplorerUrlForContract = (chainId: ChainId, contractAddress: Address): URL | null => {
  const chainBlockExplorer = getChainBlockExplorerUrl(chainId);
  if (!chainBlockExplorer) return null;

  return new URL(contractAddress, chainBlockExplorer.toString());
};
