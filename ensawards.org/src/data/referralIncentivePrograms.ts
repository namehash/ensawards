import type { ReferralIncentiveProgram } from "@/types/referralIncentivePrograms.ts";
import { ENSNamespaceIds } from "@ensnode/datasources";
import { getEthnamesSubregistryId } from "@ensnode/ensnode-sdk";
import {
  ENS_HOLIDAY_AWARDS_END_DATE,
  ENS_HOLIDAY_AWARDS_MAX_QUALIFIED_REFERRERS,
  ENS_HOLIDAY_AWARDS_START_DATE,
  ENS_HOLIDAY_AWARDS_TOTAL_AWARD_POOL_VALUE,
} from "@namehash/ens-referrals";

//TODO: Once, again, not sure about the name... Assume it should be shorter...
// Maybe just `ENSHolidayAwardsProgram` would suffice? Appreciate advice
export const ENSHolidayAwardsReferralIncentiveProgram: ReferralIncentiveProgram = {
  name: "ENS Holiday Awards",
  rules: {
    totalAwardPoolValue: ENS_HOLIDAY_AWARDS_TOTAL_AWARD_POOL_VALUE,
    maxQualifiedReferrers: ENS_HOLIDAY_AWARDS_MAX_QUALIFIED_REFERRERS,
    startTime: ENS_HOLIDAY_AWARDS_START_DATE,
    endTime: ENS_HOLIDAY_AWARDS_END_DATE,
    subregistryId: {
      chainId: getEthnamesSubregistryId(ENSNamespaceIds.Mainnet).chainId,
      address: getEthnamesSubregistryId(ENSNamespaceIds.Mainnet).address,
    },
  },
};
