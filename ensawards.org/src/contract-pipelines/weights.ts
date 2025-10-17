import type { SupportedGroupByCategory } from "@/contract-pipelines/group-by.ts";
import {type Contract, ContractResolutionStatusIds} from "@/types/contracts.ts";

export function binaryWeights(
  groupedContracts: Record<SupportedGroupByCategory, Contract[]>,
): Record<SupportedGroupByCategory, number[]> {
  const weightedContracts = {} as Record<SupportedGroupByCategory, number[]>;

  for (const [key, values] of Object.entries(groupedContracts) as [
    SupportedGroupByCategory,
    Contract[],
  ][]) {
    // Verification of the `cachedIdentity.resolutionStatus` field is enough because then
    // the `name` field has to be defined and valid
    weightedContracts[key] = values.map((contract) => (contract.cachedIdentity.resolutionStatus === ContractResolutionStatusIds.PrimaryNamed || contract.cachedIdentity.resolutionStatus === ContractResolutionStatusIds.ForwardNamed ? 1 : 0));
  }

  return weightedContracts;
}
