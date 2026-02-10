import type { Contract, ContractType } from "@/types/contracts.ts";
import { ContractTypes } from "@/types/contracts.ts";

/**
 * Filters contracts by their type field.
 *
 * This is useful for creating category-specific leaderboards where we want to ensure
 * we're comparing apples to apples. For example, on the DAO leaderboard, we only want
 * to include contracts that are DAO-related (governance, treasury, etc.) and exclude
 * DeFi protocol contracts, even if they belong to the same project the DAO is associated with.
 *
 * @param contractType - The type of contracts to include (e.g., ContractTypes.DAO)
 * @returns A filter function that can be passed to contractPipeline
 */
export function filterByContractType(contractType: ContractType) {
  return (contracts: Contract[]): Contract[] => {
    return contracts.filter((contract) => contract.type === contractType);
  };
}

/**
 * Pre-configured filter for DAO contracts only.
 *
 * Use this filter when building DAO leaderboards to ensure only DAO governance
 * contracts are included in the scoring calculations.
 */
export const daoContractsOnly = filterByContractType(ContractTypes.DAO);

/**
 * Pre-configured filter for DeFi contracts only.
 *
 * Use this filter when building DeFi protocol leaderboards to ensure only
 * DeFi protocol contracts are included in the scoring calculations.
 */
export const defiContractsOnly = filterByContractType(ContractTypes.DeFi);
