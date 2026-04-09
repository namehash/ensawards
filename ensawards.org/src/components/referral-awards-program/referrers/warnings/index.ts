import { type ReferralProgramEditionSlug } from "@namehash/ens-referrals/v1";
import { type Address } from "viem";

/**
 * The reason why the referrer received a warning.
 *
 * @invariant must be a non-empty string
 */
export type ReferralProgramWarning = string;

/**
 * A mapping containing all the warnings for referrers in the referral program, organized by referral program edition slug and then by referrer address.
 *
 * @invariant the referral program edition slug must be a valid slug corresponding to an actual referral program edition.
 * @invariant the referrer address must be a valid Ethereum address.
 *
 */
export const REFERRAL_PROGRAM_WARNINGS = new Map<
  ReferralProgramEditionSlug,
  Map<Address, ReferralProgramWarning>
>([
  [
    "2026-04",
    new Map<Address, ReferralProgramWarning>([
      [
        "0x7e491cde0fbf08e51f54c4fb6b9e24afbd18966d",
        "This is a warning message for testing purposes.",
      ],
      [
        "0xf919a96d2970380b87917b04f02e6d3d08368b10",
        "This is a warning message for testing purposes.",
      ],
      [
        "0x9c6aa5ce4903aad922ac4dde9b57817c1fc17d9b",
        "This is a warning message for testing purposes.",
      ],
    ]),
  ],
]);
