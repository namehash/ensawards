import type { IncentiveProgram, IncentiveProgramSlug } from "data/incentive-programs/types.ts";
import { type EnsTokens } from "data/shared/ensTokens.ts";
import type { NormalizedAddress } from "data/shared/normalizedAddress.ts";
import type { TransactionRef } from "data/shared/transactionRef.ts";

import type { AccountId, UnixTimestamp } from "@ensnode/ensnode-sdk";

import type { AwardedEntity } from "./awarded-entity-types.ts";

export const AwardTypes = {
  FinancialAward: "financial-award",
  RecognitionAward: "recognition-award",
} as const;

export type AwardType = (typeof AwardTypes)[keyof typeof AwardTypes];

export interface AwardAbstract<AwardTypeT extends AwardType> {
  type: AwardTypeT;

  /**
   * Identifies the {@link IncentiveProgram} associated with the award by its {@link IncentiveProgramSlug}.
   */
  associatedIncentiveProgramSlug: IncentiveProgramSlug;

  /** Address of the recipient of the award.
   *
   * @invariant Simplifying assumption: no address can receive more than one award.
   * TODO: The above is not technically true. When we have more time we should relax this constraint.
   * This action is planned in: https://github.com/namehash/ensawards/issues/191
   */
  awardedTo: NormalizedAddress;

  /** Entity associated with the award recipient.
   * Helps to identify the recipient in human-recognizable ways for cases
   * where `awardedTo` doesn't have an ENS primary name or
   * where its ENS primary name doesn't make it sufficiently intuitive
   * which app, protocol, or custom entity the recipient stands for.
   *
   * `undefined` award entity represents that `awardedTo` either is an individual
   * who is not affiliated with any known {@link App} or {@link Protocol},
   * or their {@link App} or {@link Protocol} affiliation is unknown.
   */
  awardedEntity?: AwardedEntity;

  /** When the award was distributed */
  awardedAt: UnixTimestamp;

  /**
   * The reason for granting the award.
   */
  reason?: string;
}

export interface AwardRecognition extends AwardAbstract<typeof AwardTypes.RecognitionAward> {}

export interface AwardFinancial extends AwardAbstract<typeof AwardTypes.FinancialAward> {
  /** Amount of the award in $ENS.
   *
   * @invariant Award amount must be finite and greater than 0.
   */
  price: EnsTokens; // should be replaced with `Price` from ensnode-sdk when Issue#1941 is completed.

  /**
   * Details of the transaction associated with the distribution of this award.
   */
  transaction: TransactionRef;
}

export type Award = AwardFinancial | AwardRecognition;

export interface AwardDistribution {
  timestamp: UnixTimestamp;
  transaction: TransactionRef;
}
