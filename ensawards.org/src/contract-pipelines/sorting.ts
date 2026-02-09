import type { SupportedGroupByCategory } from "@/contract-pipelines/group-by.ts";
import type { Contract } from "@/types/contracts.ts";
import { ContractResolutionStatusIds } from "@/types/contracts.ts";
import type { ProtocolId } from "@/types/protocols.ts";
import { getProtocolById } from "@/utils/dataAccess.ts";

/**
 * Sorts contracts by their resolution status in priority order.
 *
 * The sort order prioritizes contracts with better ENS naming integration:
 * 1. PrimaryNamed - Contracts with primary ENS names (highest priority)
 * 2. ForwardNamed - Contracts with forward-resolved ENS names
 * 3. Unnamed - Contracts without ENS names
 * 4. Unresolved - Contracts that couldn't be resolved
 *
 * This is useful for displaying contracts in a way that highlights
 * protocols with better ENS adoption at the top of the list.
 *
 * @param contracts - Array of contracts to sort
 * @returns A new array of contracts sorted by resolution status
 */
export function sortByResolutionStatus(contracts: Contract[]): Contract[] {
  const sortOrder = {
    [ContractResolutionStatusIds.PrimaryNamed]: 1,
    [ContractResolutionStatusIds.ForwardNamed]: 2,
    [ContractResolutionStatusIds.Unnamed]: 3,
    [ContractResolutionStatusIds.Unresolved]: 4,
  };

  return [...contracts].sort((a, b) => {
    const orderA = sortOrder[a.cachedIdentity.resolutionStatus] || 999;
    const orderB = sortOrder[b.cachedIdentity.resolutionStatus] || 999;
    return orderA - orderB;
  });
}

/**
 * Sorts Protocol (DAO or DeFi) leaderboard entries with explicit tie-breaking rules.
 *
 * Sort order:
 * 1. Primary: By ENS Awards score (descending)
 * 2. Tie-breaker 1: By number of protocol contracts (descending)
 * 3. Tie-breaker 2: By protocol display name (alphabetically)
 *
 * This ensures that when two protocols have the same score, the one with more
 * contracts ranks higher. If they also have the same number of contracts,
 * they are sorted alphabetically by name.
 *
 * @param scores - The calculated scores for each protocol
 * @param groupedContracts - The grouped contracts used to calculate scores
 * @returns An array of [protocolId, score] tuples in the desired sort order
 */
export function sortProtocolLeaderboard(
  scores: Record<SupportedGroupByCategory, number>,
  groupedContracts: Record<SupportedGroupByCategory, Contract[]>,
): [SupportedGroupByCategory, number][] {
  return Object.entries(scores)
    .map(
      ([protocolId, score]) =>
        [protocolId as SupportedGroupByCategory, score] as [SupportedGroupByCategory, number],
    )
    .sort(([protocolIdA, scoreA], [protocolIdB, scoreB]) => {
      // Primary sort: by score (descending)
      if (scoreA !== scoreB) {
        return scoreB - scoreA;
      }

      // Tie-breaker 1: by number of contracts (descending)
      const contractCountA = groupedContracts[protocolIdA]?.length || 0;
      const contractCountB = groupedContracts[protocolIdB]?.length || 0;

      if (contractCountA !== contractCountB) {
        return contractCountB - contractCountA;
      }

      // Tie-breaker 2: by display name (alphabetically)
      const protocolA = getProtocolById(protocolIdA as ProtocolId);
      const protocolB = getProtocolById(protocolIdB as ProtocolId);

      return protocolA.name.localeCompare(protocolB.name);
    });
}
