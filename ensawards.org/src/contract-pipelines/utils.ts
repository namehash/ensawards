import type { EnsAwardsScore } from "data/shared/ens-awards-score.ts";

import { daoContractsOnly, defiContractsOnly } from "@/contract-pipelines/filters.ts";
import { contractPipeline } from "@/contract-pipelines/index.ts";
import { sortProtocolLeaderboard } from "@/contract-pipelines/sorting.ts";

import { CONTRACTS } from "../../data/protocols/contracts.ts";
import type { Contract } from "../../data/protocols/contracts-types.ts";
import type { ProtocolId } from "../../data/protocols/types.ts";
import { type ProtocolType, ProtocolTypes } from "../../data/protocols/types.ts";

const contractPipelineFilterByProtocolType = new Map<
  ProtocolType,
  (contracts: Contract[]) => Contract[]
>([
  [ProtocolTypes.DAO, daoContractsOnly],
  [ProtocolTypes.DeFi, defiContractsOnly],
]);

/**
 * Returns contract naming scores grouped by {@link ProtocolId}
 * for the specified {@link ProtocolType}.
 *
 * @throws Error if no contract pipeline filter is registered for the given ProtocolType.
 */
export const getContractNamingScoresByProtocolType = (
  protocolType: ProtocolType,
  data: Contract[] = CONTRACTS,
): Record<ProtocolId, EnsAwardsScore> => {
  const filter = contractPipelineFilterByProtocolType.get(protocolType);

  // if the filter for a given ProtocolType is undefined throw an error
  if (filter === undefined) {
    throw new Error(`No contract pipeline filter registered for ProtocolType: ${protocolType}`);
  }

  return contractPipeline({
    filter: filter,
    sort: sortProtocolLeaderboard,
    data: data,
  });
};
