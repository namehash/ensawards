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

export interface Breadcrumb {
  text: string;
  linkHref?: string;
}

/**
 * Contribution targets that can be surfaced by the {@link SuggestionCard}.
 *
 * Each literal value identifies a kind of ENS Awards entity that users can be
 * encouraged to suggest updates for.
 */
export type PossibleSuggestions =
  | "app"
  | "best practice"
  | "benchmark result"
  | "protocol"
  | "contract";

/**
 * Score for a benchmarked entity ({@link App} or {@link Protocol}) in the ENS Awards.
 *
 * Can also be used to identify how well a {@link BestPractice} or
 * {@link BestPracticeCategory} follows established best practices
 * (see {@link calculateAppSupport} or {@link calcCategoryScore}).
 *
 * @invariant Must be an integer between 0 and 100.
 */
export type EnsAwardsScore = number;
