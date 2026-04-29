import type { App } from "data/apps/types.ts";
import type { EntityMetadata } from "data/entity-metadata/types.ts";
import type { IncentiveProgram, IncentiveProgramSlug } from "data/incentive-programs/types.ts";
import type { Protocol } from "data/protocols/types.ts";
import { type EnsTokens } from "data/shared/ensTokens.ts";
import type { TransactionRef } from "data/shared/transactionRef.ts";
import type { AccountId, UnixTimestamp } from "enssdk";

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

  /** {@link AccountId} of the recipient of the award.
   *
   * @invariant Simplifying assumption: no recipient (AccountId) can receive more than one award.
   * TODO: The above is not technically true. When we have more time we should relax this constraint.
   * This action is planned in: https://github.com/namehash/ensawards/issues/191
   */
  awardedTo: AccountId;

  /** Metadata of the entity associated with the award recipient.
   * Helps to identify the recipient in human-recognizable ways for cases
   * where `awardedTo` doesn't have an ENS primary name or
   * where its ENS primary name doesn't make it sufficiently intuitive
   * which app, protocol, or custom entity the recipient stands for.
   *
   * `undefined` awarded entity metadata represents that `awardedTo` either is an individual
   * who is not affiliated with any known {@link App} or {@link Protocol},
   * or their {@link App} or {@link Protocol} affiliation is unknown.
   */
  awardedEntityMetadata?: EntityMetadata;

  /** When the award was distributed */
  awardedAt: UnixTimestamp;

  /**
   * A short reason for granting the award; optional.
   */
  reason?: string;
}

export interface AwardRecognition extends AwardAbstract<typeof AwardTypes.RecognitionAward> {}

export interface AwardFinancial extends AwardAbstract<typeof AwardTypes.FinancialAward> {
  /** Amount of the award in $ENS.
   *
   * @invariant Award amount must be finite and greater than 0.
   */
  price: EnsTokens; // should be replaced with `Price` from enssdk when Issue#1941 is completed.

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
