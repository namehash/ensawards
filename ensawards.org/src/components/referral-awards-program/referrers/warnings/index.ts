import { type ReferralProgramEditionSlug } from "@namehash/ens-referrals";
import { type Address } from "enssdk";

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
 * @invariant the referrer address must be a valid, fully lowercase Ethereum address.
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
        "0x02fa71cbb4b1b990a475deb370d0aa42aa43503b",
        "A number of referrals for April 2026 are self-referrals. Continued self-referrals will violate rule 1 of the Code of Conduct and result in disqualification for April 2026.",
      ],
    ]),
  ],
]);
