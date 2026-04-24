import type { AccountId, UnixTimestamp } from "@ensnode/ensnode-sdk";

/**
 * Human-readable alias for a contributor, used to identify them in the {@link contributors} record
 * (see ensawards.org/data/contributors/index.ts ).
 *
 * @invariant Must match {@link ENSAWARDS_SLUG_PATTERN}.
 * @invariant Must be unique across all contributors.
 *
 * Should mimic their ENS name if they have one
 * (e.g. "lightwalker" for the contributor with ENS name "lightwalker.eth").
 */
export type ContributorAlias = string;

export type Contributor = AccountId;

export type Contribution = {
  /** The contributor who made the contribution */
  from: Contributor;
  /** The Unix timestamp of when the contribution was made */
  updatedAt: UnixTimestamp;
};
