import type { Contract, ContractSubtype, ContractType } from "@/types/contracts.ts";
import type { OrgId } from "@/types/organizations.ts";

export type SupportedGroupByCategory = OrgId | ContractType | ContractSubtype;

export function groupByOrg(contracts: Contract[]): Record<SupportedGroupByCategory, Contract[]> {
  const groupedContracts = {} as Record<SupportedGroupByCategory, Contract[]>;

  contracts.forEach((contract) => {
    if (contract.org.id in groupedContracts) {
      groupedContracts[contract.org.id].push(contract);
    } else {
      groupedContracts[contract.org.id] = [contract];
    }
  });

  return groupedContracts;
}
