import type { Contract, ContractType } from "../../data/protocols/contracts-types.ts";
import type { ProtocolId } from "../../data/protocols/types.ts";

export type SupportedGroupByCategory = ProtocolId | ContractType;

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
