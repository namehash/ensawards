import type { AccountId, UnixTimestamp } from "@ensnode/ensnode-sdk";

export type Contributor = AccountId;

export type Contribution = {
  /** The contributor who made the contribution */
  from: Contributor;
  /** The Unix timestamp of when the contribution was last updated */
  lastUpdated: UnixTimestamp;
};
