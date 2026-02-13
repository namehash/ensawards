import { groupByProtocol, type SupportedGroupByCategory } from "@/contract-pipelines/group-by.ts";
import { binaryWeights } from "@/contract-pipelines/weights.ts";
import type { Contract } from "@/types/contracts.ts";

import { CONTRACTS } from "../../data/protocols/contracts.ts";

/**
 * Custom sort function type for sorting leaderboard entries.
 *
 * @param scores - The calculated scores for each category
 * @param groupedContracts - The grouped contracts used to calculate scores
 * @returns An array of [category, score] tuples in the desired sort order
 */
export type LeaderboardSortFn = (
  scores: Record<SupportedGroupByCategory, number>,
  groupedContracts: Record<SupportedGroupByCategory, Contract[]>,
) => [SupportedGroupByCategory, number][];

/**
 * Options for configuring the contract pipeline.
 */
export interface ContractPipelineOptions {
  /**
   * Function to group contracts by category.
   * @default groupByProtocol
   */
  groupBy?: (contracts: Contract[]) => Record<SupportedGroupByCategory, Contract[]>;

  /**
   * Function to apply weights to grouped contracts.
   * @default binaryWeights
   */
  weights?: (
    groupedContracts: Record<SupportedGroupByCategory, Contract[]>,
  ) => Record<SupportedGroupByCategory, number[]>;

  /**
   * Function to filter contracts before processing.
   */
  filter?: (contracts: Contract[]) => Contract[];

  /**
   * Custom sort function for ordering the final results.
   */
  sort?: LeaderboardSortFn;

  /**
   * Contract data to process.
   * @default CONTRACTS
   */
  data?: Contract[];
}

/**
 * Takes optional filter, group-by and weights functions
 * and returns a score (in %) achieved by a group of contracts,
 * defined by the provided functions.
 *
 * By default, it operates on the data from /data/contracts.ts,
 * but can also take data from other sources
 */
export function contractPipeline(
  options: ContractPipelineOptions = {},
): Record<SupportedGroupByCategory, number> {
  const {
    groupBy = groupByProtocol,
    weights = binaryWeights,
    filter,
    sort,
    data = CONTRACTS,
  } = options;

  let contracts = data;

  if (filter) {
    // Filter contracts
    contracts = filter(contracts);
  }

  // Group & weight all remaining contracts
  const groupedContracts = groupBy(contracts);
  const weightedContracts = weights(groupedContracts);

  const scores = {} as Record<SupportedGroupByCategory, number>;

  // Count scores in % for weighted results
  for (const [key, values] of Object.entries(weightedContracts) as [
    SupportedGroupByCategory,
    number[],
  ][]) {
    scores[key] =
      values.length > 0
        ? Math.round((values.reduce((sum, v) => sum + v, 0) * 100) / values.length)
        : 0;
  }

  // Sort results
  const sortedScores = {} as Record<SupportedGroupByCategory, number>;

  let sortedEntries: [SupportedGroupByCategory, number][];
  if (sort) {
    // Use custom sort function if provided
    sortedEntries = sort(scores, groupedContracts);
  } else {
    // Default sort: descending by score only
    sortedEntries = Object.keys(scores)
      .sort((idA, idB) =>
        scores[idA as SupportedGroupByCategory] > scores[idB as SupportedGroupByCategory] ? -1 : 1,
      )
      .map((key) => [key as SupportedGroupByCategory, scores[key as SupportedGroupByCategory]]);
  }

  sortedEntries.forEach(([key, value]) => {
    sortedScores[key] = value;
  });

  return sortedScores;
}
