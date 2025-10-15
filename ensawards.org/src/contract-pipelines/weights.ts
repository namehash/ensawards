import type { SupportedGroupByCategory } from "@/contract-pipelines/group-by.ts";
import type { Contract } from "@/types/contracts.ts";

export function binaryWeights(
  groupedContracts: Record<SupportedGroupByCategory, Contract[]>,
): Record<SupportedGroupByCategory, number[]> {
  const weightedContracts = {} as Record<SupportedGroupByCategory, number[]>;

  for (const [key, values] of Object.entries(groupedContracts) as [
    SupportedGroupByCategory,
    Contract[],
  ][]) {
    // Verification of the cachedEnsProfile field is enough because then
    // either primaryName or forwardNames field has to be defined and not null
    weightedContracts[key] = values.map((contract) => (contract.cachedEnsProfile !== null ? 1 : 0));
  }

  return weightedContracts;
}
