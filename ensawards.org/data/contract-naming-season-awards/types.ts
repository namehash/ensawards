import type { Address, Hash } from "viem";

import type { UnixTimestamp } from "@ensnode/ensnode-sdk";

/**
 * Defines project that has been awarded for the active participation
 * in the Contract Naming Season.
 */
export interface AwardedProject {
  /** The name of the project, derived from the ENS name of the award recipient. */
  name: string;
  /** Optional link to the project's website or relevant page. */
  link?: URL;
}

/** An amount in units of $ENS */
export type $ENS = number;
//TODO: $ENS is not defined in packages/ensnode-sdk/src/shared/currencies.ts,
// we should consider defining it there and importing it here instead of defining it here.

/**
 * Award distributed for the active participation in the Contract Naming Season.
 */
export interface ContractNamingSeasonAward {
  /** Mainnet address of the recipient of the award.
   *
   * @invariant No address can receive more than one award.
   */
  depositedTo: Address;

  /** Project associated with the award recipient */
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
