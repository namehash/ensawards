import type { AccountId, UnixTimestamp } from "@ensnode/ensnode-sdk";

export type Contributor = AccountId;

export type Contribution = {
  /** The contributor who made the contribution */
  from: Contributor;
  /** The Unix timestamp of when the contributor last updated this contribution */
  lastUpdated: UnixTimestamp;
};
