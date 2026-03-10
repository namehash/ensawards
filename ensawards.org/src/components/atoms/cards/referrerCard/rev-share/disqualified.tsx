import { SECONDS_PER_YEAR } from "@namehash/ens-referrals/v1";
import { TriangleAlert as DisqualifiedIcon } from "lucide-react";
import { memo } from "react";

import {
  BaseRevenueContributionField,
  type ReferrerCardRevShareLimitProps,
  UncappedAwardValueField,
} from "@/components/atoms/cards/referrerCard/rev-share";
import {
  ReferralYearsField,
  ReferrerCardHeader,
} from "@/components/atoms/cards/referrerCard/shared";
import { GenericTooltip } from "@/components/atoms/GenericTooltip.tsx";

//TODO: I know that this code currently duplicates a lot of the normal RevShareLimit card,
// but I wanted to extract it in case the designs evolving further, to make future changes easier.
// Let me know if that's alright with you

/**
 * Display a single Referrer on the {@link ReferrerLeaderboardPage}.
 *
 * This component is specifically designed for the disqualified participant
 * of an edition with {@link ReferralProgramAwardModels.RevShareLimit} award model.
 */
const ReferrerCardRevShareLimitDisqualified = ({
  referrer,
}: Omit<ReferrerCardRevShareLimitProps, "editionRules">) => (
  // TODO: the red border is experimental, will remove it if it feels like too much
  <div className="w-full h-fit min-h-[80px] box-border flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-2 p-4 sm:p-6 sm:gap-y-5 rounded-2xl border border-red-200 hover:border-red-300 hover:shadow-xs bg-white">
    <ReferrerCardHeader
      referrer={referrer.referrer}
      rank={referrer.rank}
      isQualified={referrer.isQualified}
    />
    <ReferralYearsField referralYears={referrer.totalIncrementalDuration / SECONDS_PER_YEAR} />
    <BaseRevenueContributionField referrer={referrer} />
    <UncappedAwardValueField referrer={referrer} />
    <div className="sm:min-w-[200px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start min-[1100px]:items-end gap-0 max-sm:self-stretch">
      <GenericTooltip
        tooltipOffset={0}
        content={
          <p className="max-w-[200px]">
            The amount actually claimed from the pool by this referrer, capped by the remaining pool
            at the time of their qualifying events.
          </p>
        }
      >
        <p className="text-muted-foreground text-sm leading-normal font-normal text-left">
          Award pool approximate value
        </p>
      </GenericTooltip>
      <div className="flex flex-row justify-start items-center gap-2">
        <p className="text-sm font-semibold leading-normal text-red-600 text-right">DISQUALIFIED</p>
        <GenericTooltip
          tooltipOffset={0}
          // `referrer.adminDisqualificationReason` will never be null (see DisplayReferrerLeaderboardPage.tsx:101-107).
          // This fallback is introduced for type-safety
          content={
            <p className="max-w-[200px]">
              {referrer.adminDisqualificationReason ??
                "User disqualified due to the breach of the edition's rules"}
            </p>
          }
        >
          <DisqualifiedIcon size={18} className="text-red-600" />
        </GenericTooltip>
      </div>
    </div>
  </div>
);

export const ReferrerCardRevShareLimitDisqualifiedMemo = memo(
  ReferrerCardRevShareLimitDisqualified,
);
