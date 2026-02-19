import type { Contract } from "../../data/protocols/contracts-types.ts";
import type { ProtocolId } from "../../data/protocols/types.ts";

export function groupByProtocol(contracts: Contract[]): Record<ProtocolId, Contract[]> {
  const groupedContracts = {} as Record<ProtocolId, Contract[]>;

  contracts.forEach((contract) => {
    if (contract.protocol.id in groupedContracts) {
      groupedContracts[contract.protocol.id].push(contract);
    } else {
      groupedContracts[contract.protocol.id] = [contract];
    }
  });

  return groupedContracts;
}
