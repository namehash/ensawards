import {
  type Contract,
  ContractResolutionStatusIds,
} from "../../data/protocols/contracts-types.ts";
import type { ProtocolId } from "../../data/protocols/types.ts";

export function binaryWeights(
  groupedContracts: Record<ProtocolId, Contract[]>,
): Record<ProtocolId, number[]> {
  const weightedContracts = {} as Record<ProtocolId, number[]>;

  for (const [key, values] of Object.entries(groupedContracts) as [ProtocolId, Contract[]][]) {
    // Verification of the `cachedIdentity.resolutionStatus` field is enough because then
    // the `name` field has to be defined and valid
    weightedContracts[key] = values.map((contract) =>
      contract.cachedIdentity.resolutionStatus === ContractResolutionStatusIds.PrimaryNamed ||
      contract.cachedIdentity.resolutionStatus === ContractResolutionStatusIds.ForwardNamed
        ? 1
        : 0,
    );
  }

  return weightedContracts;
}
