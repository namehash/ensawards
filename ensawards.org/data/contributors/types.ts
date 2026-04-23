import type { AccountId, UnixTimestamp } from "@ensnode/ensnode-sdk";

export type Contributor = AccountId;

export type Contribution = {
  /** The contributor who made the contribution to the related entity. */
  from: Contributor;
  /** The Unix timestamp of when the contributor
   * last updated their contribution to the related entity. */
  lastUpdated: UnixTimestamp;
};
