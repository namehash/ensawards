import { ContractResolutionStatusIds } from "data/protocols/contracts-types.ts";
import { getAllProtocolContracts } from "data/protocols/utils.ts";
import type { EnsAwardsScore } from "data/shared/ens-awards-score.ts";

import { type ProtocolId } from "../../data/protocols/types.ts";

export const getScoreColor = (score: EnsAwardsScore): string =>
  score > 75 ? "emerald-600" : score > 35 ? "amber-600" : "red-600";

/**
 * Adaptive styling for `ENS name` field based on
 * the longest contract name among the protocol's contracts.
 */
export const getENSNameFieldStyles = (protocolId: ProtocolId): string => {
  // We need to discretize the width due to Tailwind's limitations with dynamic class names
  const getFieldWidthBuckets = (maxLength: number): string => {
    if (maxLength <= 20) return "sm:min-w-[225px]";
    if (maxLength <= 30) return "sm:min-w-[250px]";
    if (maxLength <= 40) return "sm:min-w-[275px]";
    return "sm:min-w-[325px]";
  };
  const protocolContractNames = getAllProtocolContracts(protocolId)
    .map((contract) => contract.cachedIdentity)
    .filter(
      (cachedIdentity) => cachedIdentity.resolutionStatus !== ContractResolutionStatusIds.Unnamed,
    )
    .map((cachedIdentity) => cachedIdentity.name);

  const longestContractNameLength = Math.max(
    ...protocolContractNames.map((name) => name.length),
    0,
  );

  return getFieldWidthBuckets(longestContractNameLength);
};
