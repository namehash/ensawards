import type { DAOProtocol, DeFiProtocol, Protocol } from "@/types/protocols.ts";

import { AaveDao } from "./aave-dao";
import { ArbitrumDao } from "./arbitrum-dao";
import { ENSDao } from "./ens-dao";
import { LiquityDeFiProtocol } from "./liquity-defi";
import { NounsDao } from "./nouns-dao";
import { TaikoDao } from "./taiko-dao";
import { TaikoDeFiProtocol } from "./taiko-defi";
import { UniswapDao } from "./uniswap-dao";
import { UniswapDeFiProtocol } from "./uniswap-defi";

/**
 * Array of supported DAO protocols.
 *
 * Invariant: This array should contain exactly one {@link DAOProtocol} for each DAO-related {@link ProtocolId}.
 */
export const DAO_PROTOCOLS: DAOProtocol[] = [
  ENSDao,
  UniswapDao,
  NounsDao,
  ArbitrumDao,
  AaveDao,
  TaikoDao,
];

/**
 * Array of supported DeFi protocols.
 *
 * Invariant: This array should contain exactly one {@link DeFiProtocol} for each DeFi protocol-related {@link ProtocolId}.
 */
export const DEFI_PROTOCOLS: DeFiProtocol[] = [
  LiquityDeFiProtocol,
  UniswapDeFiProtocol,
  TaikoDeFiProtocol,
];

/**
 * Array of supported protocols. Combines {@link DAO_PROTOCOLS} and {@link DEFI_PROTOCOLS}.
 *
 * Invariant: This array should contain exactly one {@link Protocol} for each {@link ProtocolId}.
 */
export const PROTOCOLS: Protocol[] = [...DAO_PROTOCOLS, ...DEFI_PROTOCOLS];
