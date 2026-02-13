import { AaveDao } from "@/data/protocols/aave-dao";
import { ArbitrumDao } from "@/data/protocols/arbitrum-dao";
import { ENSDao } from "@/data/protocols/ens-dao";
import { LiquityDeFiProtocol } from "@/data/protocols/liquity-defi";
import { NounsDao } from "@/data/protocols/nouns-dao";
import { TaikoDao } from "@/data/protocols/taiko-dao";
import { TaikoDeFiProtocol } from "@/data/protocols/taiko-defi";
import { UniswapDao } from "@/data/protocols/uniswap-dao";
import { UniswapDeFiProtocol } from "@/data/protocols/uniswap-defi";
import type { DAOProtocol, DeFiProtocol, Protocol } from "@/types/protocols.ts";

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
