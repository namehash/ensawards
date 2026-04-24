import type { AppBenchmark } from "data/benchmarks/types.ts";
import { getAppBenchmarks } from "data/benchmarks/utils.ts";

import { formatAccountId } from "@ensnode/ensnode-sdk";

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
  Object.values(getAppBenchmarks(app.appSlug))
    .filter((benchmark) => benchmark !== undefined)
    .flatMap((benchmark) => benchmark.contributions);

export const getProtocolContributions = (protocol: Protocol): Contribution[] =>
  getAllProtocolContracts(protocol.id).flatMap((contract) => contract.contributions);
