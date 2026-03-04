// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying protocols

import { ProtocolTypes } from "../ens-best-practices/types.ts";
import { getDefinedProtocols } from "./registry.ts";
import type { DAOProtocol, DeFiProtocol, Protocol } from "./types.ts";

import.meta.glob("./*/index.ts", { eager: true });

/**
 * Array of supported protocols.
 *
 * Invariant: This array should contain exactly one {@link Protocol} for each {@link ProtocolId}.
 */
export const PROTOCOLS: Protocol[] = [...getDefinedProtocols()];

/**
 * Array of supported DAO protocols.
 *
 * Invariant: This array should contain exactly one {@link DAOProtocol} for each DAO-related {@link ProtocolId}.
 */
export const DAO_PROTOCOLS: DAOProtocol[] = PROTOCOLS.filter(
  (protocol): protocol is DAOProtocol => protocol.protocolType === ProtocolTypes.DAO,
);

/**
 * Array of supported DeFi protocols.
 *
 * Invariant: This array should contain exactly one {@link DeFiProtocol} for each DeFi protocol-related {@link ProtocolId}.
 */
export const DEFI_PROTOCOLS: DeFiProtocol[] = PROTOCOLS.filter(
  (protocol): protocol is DeFiProtocol => protocol.protocolType === ProtocolTypes.DeFi,
);
