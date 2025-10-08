import { groupByProject } from "@/contract-pipelines/group-by.ts";
import { binaryWeights } from "@/contract-pipelines/weights.ts";
import type { Contract, ContractSubtype, ContractType } from "@/types/contracts.ts";
import type { SupportedProject } from "@/types/projects.ts";
import contractsDataJson from "../data/contracts.json";

export type SupportedGroupByCategory = SupportedProject | ContractType | ContractSubtype;

/**
 * Takes optional filter, group-by and weights functions
 * and returns a score (in %) achieved by a group of contracts,
 * defined by the provided functions.
 *
 * By default, it operates on the data from /data/contracts.json,
 * but can also take data from other sources
 */
export function contractPipeline(
  groupBy: (contracts: Contract[]) => Record<SupportedGroupByCategory, Contract[]> = groupByProject,
  weights: (
    groupedContracts: Record<SupportedGroupByCategory, Contract[]>,
  ) => Record<SupportedGroupByCategory, number[]> = binaryWeights,
  filter?: (contracts: Contract[]) => Contract[],
  data: Contract[] = contractsDataJson as Array<Contract>,
): Record<SupportedGroupByCategory, number> {
  let contracts = data;

  if (filter) {
    contracts = filter(contracts);
  }

  const groupedContracts = groupBy(contracts);
  const weightedContracts = weights(groupedContracts);

  const scores = {} as Record<SupportedGroupByCategory, number>;

  for (const [key, values] of Object.entries(weightedContracts) as [
    SupportedGroupByCategory,
    number[],
  ][]) {
    scores[key] =
      values.length > 0
        ? Math.round((values.reduce((sum, v) => sum + v, 0) * 100) / values.length)
        : 0;
  }

  return scores;
}
