import { type Contract } from "@/types/contracts.ts";

import { AaveDaoContracts } from "./aave-dao/contracts.ts";
import { ArbitrumDaoContracts } from "./arbitrum-dao/contracts.ts";
import { ENSDaoContracts } from "./ens-dao/contracts.ts";
import { LiquityDeFiProtocolContracts } from "./liquity-defi/contracts.ts";
import { NounsDaoContracts } from "./nouns-dao/contracts.ts";
import { TaikoDaoContracts } from "./taiko-dao/contracts.ts";
import { TaikoDeFiProtocolContracts } from "./taiko-defi/contracts.ts";
import { UniswapDaoContracts } from "./uniswap-dao/contracts.ts";
import { UniswapDeFiProtocolContracts } from "./uniswap-defi/contracts.ts";

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
