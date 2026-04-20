import type { Hash } from "viem";

import type { UnixTimestamp } from "@ensnode/ensnode-sdk";

import type { NormalizedAddress } from "../shared/normalizedAddress.ts";
import type { AwardedProject } from "./awarded-project-types.ts";

/** An amount in units of $ENS */
export type $ENS = number;
// TODO: Use an import from ensnode-sdk when the support for $ENS is implemented.
// See https://github.com/namehash/ensnode/issues/1941

export const $ENS_TO_USDC_CONVERSION_RATE = 5.72;

export const AwardTypes = {
  MoneyPrize: "money-prize",
  SocialRecognition: "social-recognition",
} as const;

export type AwardType = (typeof AwardTypes)[keyof typeof AwardTypes];

export interface AwardAbstract<AwardTypeT extends AwardType> {
  type: AwardTypeT;
  awardedTo: NormalizedAddress;
  project?: AwardedProject; // undefined project signals an individual recipient.
  awardedAt: UnixTimestamp;
}

export interface AwardSocialRecognition
  extends AwardAbstract<typeof AwardTypes.SocialRecognition> {}

export interface AwardMoneyPrize extends AwardAbstract<typeof AwardTypes.MoneyPrize> {
  award: $ENS; // should be replaced with `Price` from ensnode-sdk when Issue#1941 is completed.
  transactionHash: Hash;
}

export type Award = AwardMoneyPrize | AwardSocialRecognition;
