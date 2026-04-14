import { formatAccountId } from "@ensnode/ensnode-sdk";

import { type AppBenchmarkCompleted, BenchmarkStatuses } from "../apps/benchmarks-types.ts";
import { APPS } from "../apps/index.ts";
import { type App } from "../apps/types.ts";
import { type Protocol } from "../protocols/types.ts";
import { getAllProtocolContracts } from "../protocols/utils.ts";
import { type Contribution, type Contributor } from "./types.ts";

/**
 * Returns a map of contributors to the number of times they appear in the provided list of contributors.
 */
export const countContributorAppearances = (
  contributors: Contributor[],
): Map<string, { contributor: Contributor; count: number }> => {
  const appearancesMap = new Map<string, { contributor: Contributor; count: number }>();

  for (const contributor of contributors) {
    const identifier = formatAccountId(contributor);
    const currentCount = appearancesMap.get(identifier)?.count ?? 0;
    appearancesMap.set(identifier, { contributor, count: currentCount + 1 });
  }

  return appearancesMap;
};

export const getAppContributions = (app: App): Contribution[] =>
  app.benchmarks
    .filter(
      (benchmark): benchmark is AppBenchmarkCompleted =>
        benchmark.status === BenchmarkStatuses.Completed,
    )
    .flatMap((benchmark) => benchmark.contributions);

export const getProtocolContributions = (protocol: Protocol): Contribution[] =>
  getAllProtocolContracts(protocol.id).flatMap((contract) => contract.contributions);
