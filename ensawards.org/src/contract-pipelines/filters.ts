import { type ProtocolType, ProtocolTypes } from "../../data/ens-best-practices/types.ts";
import { type Contract } from "../../data/protocols/contracts-types.ts";

/**
 * Filters contracts by their protocol's type.
 *
 * This is useful for creating category-specific leaderboards where we want to ensure
 * we're comparing apples to apples. For example, on the DAO leaderboard, we only want
 * to include contracts that are DAO-related (governance, treasury, etc.) and exclude
 * DeFi protocol contracts, even if they belong to the same project the DAO is associated with.
 *
 * @param protocolType - The type of protocols whose contracts we want to include (e.g., ProtocolTypes.DAO)
 * @returns A filter function that can be passed to contractPipeline
 */
export function filterByProtocolType(protocolType: ProtocolType) {
  return (contracts: Contract[]): Contract[] => {
    return contracts.filter((contract) => contract.protocol.protocolType === protocolType);
  };
}

/**
 * Pre-configured filter for DAO contracts only.
 *
 * Use this filter when building DAO leaderboards to ensure only the
 * contracts of DAO protocols are included in the scoring calculations.
 */
export const daoContractsOnly = filterByProtocolType(ProtocolTypes.DAO);

/**
 * Pre-configured filter for DeFi contracts only.
 *
 * Use this filter when building DeFi protocol leaderboards to ensure only the
 * contracts of DeFi protocols are included in the scoring calculations.
 */
export const defiContractsOnly = filterByProtocolType(ProtocolTypes.DeFi);
