import { getDefinedContracts } from "./contracts-registry.ts";
import { type Contract } from "./contracts-types.ts";

import.meta.glob("./*/contracts.ts", { eager: true });

/**
 * Array of all benchmarked contracts.
 * Combines contracts of all supported protocols, both {@link DAOProtocol}s and {@link DeFiProtocol}s
 */
export const CONTRACTS: Contract[] = [...getDefinedContracts()];
