import type { Contract } from "@/types/contracts.ts";
import { ContractResolutionStatusIds } from "@/types/contracts.ts";

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
 * organizations with better ENS adoption at the top of the list.
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
