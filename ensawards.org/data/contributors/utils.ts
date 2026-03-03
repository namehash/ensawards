import { formatAccountId } from "@ensnode/ensnode-sdk";

import { type Contributor } from "./types.ts";

/**
 * Returns a map of contributors to the number of times they appear in the provided list of contributors.
 */
export const countContributorAppearances = (
  contributors: Contributor[],
): Map<string, { contributor: Contributor; count: number }> => {
  const appearancesMap = new Map<string, { contributor: Contributor; count: number }>();

  for (const contributor of contributors) {
    const identifier = formatAccountId(contributor);
    const currentCount = appearancesMap.get(identifier)?.count || 0;
    appearancesMap.set(identifier, { contributor, count: currentCount + 1 });
  }

  return appearancesMap;
};
