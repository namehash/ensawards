import type { Name } from "@ensnode/ensnode-sdk";

export interface QuoteAuthorData {
  name: Name;
  role: string;
  ensProfile: URL;
}
export interface QuoteCardData {
  quote: string;
  author: QuoteAuthorData;
  avatarPath: string;
}

/** Score for the benchmarked entity ({@link App} or {@link Protocol}) in the ENS Awards.
 *
 * @invariant Must be an integer between 0 and 100.
 */
export type EnsAwardsScore = number;
