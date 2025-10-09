import type { Contract, ContractSubtype, ContractType } from "@/types/contracts.ts";
import type { OrganizationName } from "@/types/organizations.ts";

export type SupportedGroupByCategory = OrganizationName | ContractType | ContractSubtype;

export function groupByOrg(contracts: Contract[]): Record<SupportedGroupByCategory, Contract[]> {
  const groupedContracts = {} as Record<SupportedGroupByCategory, Contract[]>;

  contracts.forEach((contract) => {
    if (contract.org.name in groupedContracts) {
      groupedContracts[contract.org.name].push(contract);
    } else {
      groupedContracts[contract.org.name] = [contract];
    }
  });

  return groupedContracts;
}
