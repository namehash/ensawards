import type { Hash } from "viem";

import type { ChainId, UnixTimestamp } from "@ensnode/ensnode-sdk";

import type { NormalizedAddress } from "../shared/normalizedAddress.ts";
import type { AwardedEntity } from "./awarded-entity-types.ts";

/** An amount in units of $ENS */
export type EnsTokens = number;
// TODO: Use an import from ensnode-sdk when the support for $ENS is implemented.
// See https://github.com/namehash/ensnode/issues/1941

export const ENS_TOKENS_TO_USDC_CONVERSION_RATE = 5.72;

export const AwardTypes = {
  FinancialAward: "financial-award",
  RecognitionAward: "recognition-award",
} as const;

export type AwardType = (typeof AwardTypes)[keyof typeof AwardTypes];

export interface AwardAbstract<AwardTypeT extends AwardType> {
  type: AwardTypeT;

  /** Mainnet address of the recipient of the award.
   *
   * @invariant Simplifying assumption: no address can receive more than one award.
   * TODO: The above is not technically true. When we have more time we should relax this constraint.
   */
  awardedTo: NormalizedAddress;

  /** Entity associated with the award recipient.
   * Helps to identify the recipient in human-recognizable ways for cases
   * where `awardedTo` doesn't have an ENS primary name or
   * where it's ENS primary name doesn't make it sufficiently intuitive
   * which app, protocol, or custom entity the recipient stands for.
   *
   * `undefined` award entity represents that `awardedTo` either is an individual
   * who is not affiliated with any known {@link App} or {@link Protocol},
   * or their {@link App} or {@link Protocol} affiliation is unknown.
   */
  awardedEntity?: AwardedEntity;

  /** When the award was distributed */
  awardedAt: UnixTimestamp;
}

export interface AwardRecognition extends AwardAbstract<typeof AwardTypes.RecognitionAward> {}

export interface AwardFinancial extends AwardAbstract<typeof AwardTypes.FinancialAward> {
  /** Amount of the award in $ENS.
   *
   * @invariant Award amount must be finite and greater than 0.
   */
  award: EnsTokens; // should be replaced with `Price` from ensnode-sdk when Issue#1941 is completed.

  /**
   * Chain ID of the blockchain where the award distribution transaction took place.
   *
   * Required to uniqely identify the transaction together with {@link transactionHash}.
   */
  chainId: ChainId;

  /** Transaction hash of the transaction on the chain identified by {@link chainId}.
   * that took place on {@link awardedAt} to distribute the {@link Award}
   */
  transactionHash: Hash;
}

export type Award = AwardFinancial | AwardRecognition;
