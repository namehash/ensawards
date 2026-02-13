import {
  ENS_HOLIDAY_AWARDS_END_DATE,
  ENS_HOLIDAY_AWARDS_MAX_QUALIFIED_REFERRERS,
  ENS_HOLIDAY_AWARDS_START_DATE,
  ENS_HOLIDAY_AWARDS_TOTAL_AWARD_POOL_VALUE,
} from "@namehash/ens-referrals";

import { ENSNamespaceIds } from "@ensnode/datasources";
import { getEthnamesSubregistryId } from "@ensnode/ensnode-sdk";

import type { ReferralIncentiveProgram } from "@/types/referralIncentivePrograms.ts";

// TODO: Now that the `ReferralProgramEditionConfig` was created
//  should we remove this file and
//  use the `getDefaultReferralProgramEditionConfigSet()` to fetch the necessary data instead?

export const ENSHolidayAwards: ReferralIncentiveProgram = {
  name: "ENS Holiday Awards",
  rules: {
    totalAwardPoolValue: ENS_HOLIDAY_AWARDS_TOTAL_AWARD_POOL_VALUE,
    maxQualifiedReferrers: ENS_HOLIDAY_AWARDS_MAX_QUALIFIED_REFERRERS,
    startTime: ENS_HOLIDAY_AWARDS_START_DATE,
    endTime: ENS_HOLIDAY_AWARDS_END_DATE,
    subregistryId: getEthnamesSubregistryId(ENSNamespaceIds.Mainnet),
  },
};

export const REFERRAL_INCENTIVE_PROGRAMS: ReferralIncentiveProgram[] = [ENSHolidayAwards];
