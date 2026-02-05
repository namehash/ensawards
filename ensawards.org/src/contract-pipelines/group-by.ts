import type { Contract, ContractSubtype, ContractType } from "@/types/contracts.ts";
import type { ProtocolId } from "@/types/protocols.ts";

export type SupportedGroupByCategory = ProtocolId | ContractType | ContractSubtype;

export function groupByProtocol(
  contracts: Contract[],
): Record<SupportedGroupByCategory, Contract[]> {
  const groupedContracts = {} as Record<SupportedGroupByCategory, Contract[]>;

  contracts.forEach((contract) => {
    if (contract.protocol.id in groupedContracts) {
      groupedContracts[contract.protocol.id].push(contract);
    } else {
      groupedContracts[contract.protocol.id] = [contract];
    }
  });

  return groupedContracts;
}
