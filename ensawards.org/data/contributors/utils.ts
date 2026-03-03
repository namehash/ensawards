import { type Contributor } from "./types.ts";

/**
 * Returns a unique identifier for a {@link Contributor} based on their {@link ChainId} and {@link Address}.
 */
export const getContributorIdentifier = (contributor: Contributor): string => {
  // TODO: Pretty sure that such a function is not defined anywhere already. Happy to move it to ensnode-sdk
  // if suggested or replace it with an already existing function if I missed it somehow.
  return `${contributor.chainId}-${contributor.address}`;
};

/**
 * Returns a map of contributors to the number of times they appear in the provided list of contributors.
 */
export const countContributorAppearances = (
  contributors: Contributor[],
): Map<Contributor, number> => {
  const appearancesMap = new Map<string, { contributor: Contributor; count: number }>();

  for (const contributor of contributors) {
    const identifier = getContributorIdentifier(contributor);
    const currentCount = appearancesMap.get(identifier)?.count || 0;
    appearancesMap.set(identifier, { contributor, count: currentCount + 1 });
  }

  return new Map(
    Array.from(appearancesMap.values()).map(({ contributor, count }) => [contributor, count]),
  );
};
