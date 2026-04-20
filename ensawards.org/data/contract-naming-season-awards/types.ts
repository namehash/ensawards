import type { Hash } from "viem";

import type { UnixTimestamp } from "@ensnode/ensnode-sdk";

import type { NormalizedAddress } from "../shared/normalizedAddress.ts";
import type { AwardedProject } from "./awarded-project-types.ts";

/** An amount in units of $ENS */
export type $ENS = number;
// TODO: Use an import from ensnode-sdk when the support for $ENS is implemented.
// See https://github.com/namehash/ensnode/issues/1941

/**
 * Award distributions for participation in ENS Contract Naming Season.
 */
export interface ContractNamingSeasonAward {
  /** Mainnet address of the recipient of the award.
   *
   * @invariant Simplifying assumption: no address can receive more than one award.
   * TODO: The above is not technically true. When we have more time we should relax this constraint.
   */
  depositedTo: NormalizedAddress;

  /** Project associated with the award recipient.
   * Helps to identify the recipient in human-recognizable ways for cases
   * where `depositedTo` doesn't have an ENS primary name or
   * where it's ENS primary name doesn't make it sufficiently intuitive who the backing project is.
   */
  project?: AwardedProject;

  /** Amount of the award in $ENS.
   *
   * @invariant Award amount must be greater than 0.
   */
  award: $ENS;

  /** When the award was distributed */
  awardedAt: UnixTimestamp;

  /** Transaction hash of the transaction on Ethereum mainnet
   * that took place on {@link awardedAt} to distribute the {@link award} */
  transactionHash: Hash;
}
