import type { SupportedGroupByCategory } from "@/contract-pipelines/index.ts";
import type { Contract } from "@/types/contracts.ts";

export function binaryWeights(
  groupedContracts: Record<SupportedGroupByCategory, Contract[]>,
): Record<SupportedGroupByCategory, number[]> {
  const weightedContracts = {} as Record<SupportedGroupByCategory, number[]>;

  for (const [key, values] of Object.entries(groupedContracts) as [
    SupportedGroupByCategory,
    Contract[],
  ][]) {
    weightedContracts[key] = values.map((contract) => (contract.name ? 1 : 0));
  }

  return weightedContracts;
}
