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
import type {ChainId} from "@/types/contracts.ts";

//TODO: Maybe this list could be reduced (ex. by removing "test" chains like Sepolia?)
//TODO: If so, maybe we could get rid of ensTestEnvL1Chain (and so of @ensnode/datasources dependency) completely?
export const SUPPORTED_CHAINS = [
    // TODO: Had to get rid of it due to the following error: TS2305: Module "@ensnode/datasources" has no exported member ensTestEnvL1Chain
    // ensTestEnvL1Chain,
    mainnet,
    sepolia,
    holesky,
    base,
    baseSepolia,
    linea,
    lineaSepolia,
    optimism,
    optimismSepolia,
    arbitrum,
    arbitrumSepolia,
    scroll,
    scrollSepolia,
];

/**
 * Mapping of chain id to prettified chain name.
 *
 * NOTE: We prefer our custom names here, rather than those provided by default in `Chain#name`.
 */
const CUSTOM_CHAIN_NAMES = new Map<number, string>([
    // TODO: Had to get rid of it due to the following error: TS2305: Module "@ensnode/datasources" has no exported member ensTestEnvL1Chain
    // [ensTestEnvL1Chain.id, "Ethereum Local (ens-test-env)"],
    [mainnet.id, "Ethereum"],
    [sepolia.id, "Ethereum Sepolia"],
    [holesky.id, "Ethereum Holesky"],
    [base.id, "Base"],
    [baseSepolia.id, "Base Sepolia"],
    [linea.id, "Linea"],
    [lineaSepolia.id, "Linea Sepolia"],
    [optimism.id, "Optimism"],
    [optimismSepolia.id, "Optimism Sepolia"],
    [arbitrum.id, "Arbitrum"],
    [arbitrumSepolia.id, "Arbitrum Sepolia"],
    [scroll.id, "Scroll"],
    [scrollSepolia.id, "Scroll Sepolia"],
]);

/**
 * Returns a prettified chain name for the provided chain id.
 */
export function getChainName(chainId: ChainId): string {
    const name = CUSTOM_CHAIN_NAMES.get(chainId);
    return name || `Unknown Chain (${chainId})`;
}