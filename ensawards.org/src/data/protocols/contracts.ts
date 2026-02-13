import { AaveDaoContracts } from "@/data/protocols/aave-dao/contracts.ts";
import { ArbitrumDaoContracts } from "@/data/protocols/arbitrum-dao/contracts.ts";
import { ENSDaoContracts } from "@/data/protocols/ens-dao/contracts.ts";
import { LiquityDeFiProtocolContracts } from "@/data/protocols/liquity-defi/contracts.ts";
import { NounsDaoContracts } from "@/data/protocols/nouns-dao/contracts.ts";
import { TaikoDaoContracts } from "@/data/protocols/taiko-dao/contracts.ts";
import { TaikoDeFiProtocolContracts } from "@/data/protocols/taiko-defi/contracts.ts";
import { UniswapDaoContracts } from "@/data/protocols/uniswap-dao/contracts.ts";
import { UniswapDeFiProtocolContracts } from "@/data/protocols/uniswap-defi/contracts.ts";
import { type Contract } from "@/types/contracts.ts";

/**
 * Array of all benchmarked contracts.
 * Combines contracts of all supported protocols, both {@link DAOProtocol}s and {@link DeFiProtocol}s
 */
export const CONTRACTS: Contract[] = [
  ...UniswapDaoContracts,
  ...UniswapDeFiProtocolContracts,
  ...ENSDaoContracts,
  ...NounsDaoContracts,
  ...ArbitrumDaoContracts,
  ...AaveDaoContracts,
  ...TaikoDaoContracts,
  ...TaikoDeFiProtocolContracts,
  ...LiquityDeFiProtocolContracts,
];
