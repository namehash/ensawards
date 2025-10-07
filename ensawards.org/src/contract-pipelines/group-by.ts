import type { SupportedGroupByCategory } from "@/contract-pipelines/index.ts";
import type { Contract } from "@/types/contracts.ts";

export function groupByProject(
  contracts: Contract[],
): Record<SupportedGroupByCategory, Contract[]> {
  const groupedContracts = {} as Record<SupportedGroupByCategory, Contract[]>;

  contracts.forEach((contract) => {
    if (contract.project in groupedContracts) {
      groupedContracts[contract.project].push(contract);
    } else {
      groupedContracts[contract.project] = [contract];
    }
  });

  return groupedContracts;
}
