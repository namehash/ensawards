import type {
  AwardedReferrerMetricsRevShareLimit,
  ReferralProgramRulesRevShareLimit,
} from "@namehash/ens-referrals/v1";
import { BASE_REVENUE_CONTRIBUTION_PER_YEAR, SECONDS_PER_YEAR } from "@namehash/ens-referrals/v1";
import { memo } from "react";

import {
  currencyFormatter,
  numberFormatter,
  ReferralYearsField,
  ReferrerCardHeader,
} from "@/components/atoms/cards/referrerCard/shared";
import { GenericTooltip } from "@/components/atoms/GenericTooltip.tsx";
import { parseReferralProgramCurrency } from "@/utils/referralProgram.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";

export interface ReferrerCardRevShareLimitProps {
  referrer: AwardedReferrerMetricsRevShareLimit;
  editionRules: ReferralProgramRulesRevShareLimit;
}

/**
 * Display a single Referrer on the {@link ReferrerLeaderboardPage}.
 *
 * This component is specifically designed for the {@link ReferralProgramAwardModels.RevShareLimit} award model.
 */
function ReferrerCardRevShareLimit({ referrer, editionRules }: ReferrerCardRevShareLimitProps) {
  const yearsRequiredToBeQualified = numberFormatter.format(
    Math.max(
      0.01,
      parseReferralProgramCurrency({
        currency: editionRules.minQualifiedRevenueContribution.currency,
        amount:
          editionRules.minQualifiedRevenueContribution.amount -
          referrer.totalBaseRevenueContribution.amount,
      }) / parseReferralProgramCurrency(BASE_REVENUE_CONTRIBUTION_PER_YEAR),
    ),
  );

  return (
    <div className="w-full h-fit min-h-[80px] box-border flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-2 p-4 sm:p-6 sm:gap-y-5 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xs bg-white">
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
              The amount actually claimed from the pool by this referrer, capped by the remaining
              pool at the time of their qualifying events.
            </p>
          }
        >
          <p className="text-muted-foreground text-sm leading-normal font-normal text-left">
            Award pool approximate value
          </p>
        </GenericTooltip>
        <p
          className={cn(
            "text-sm font-semibold leading-normal text-right",
            referrer.isQualified ? "text-emerald-600" : "text-black font-normal",
          )}
        >
          {referrer.isQualified ? (
            <>
              US{" "}
              {currencyFormatter.format(
                parseReferralProgramCurrency(referrer.awardPoolApproxValue),
              )}
            </>
          ) : (
            <span className="max-sm:text-right">
              Requires{" "}
              {yearsRequiredToBeQualified === "1.00"
                ? "1 more year"
                : `${yearsRequiredToBeQualified} more years`}
            </span>
          )}
        </p>
      </div>
    </div>
  );
}

export const BaseRevenueContributionField = ({
  referrer,
}: {
  referrer: AwardedReferrerMetricsRevShareLimit;
}) => (
  <div className="sm:min-w-[175px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
    <GenericTooltip
      tooltipOffset={0}
      content={
        <p className="max-w-[200px]">
          The referrer's base revenue contribution (base-fee-only: $5 × years of incremental
          duration).
        </p>
      }
    >
      <p className="text-muted-foreground text-sm leading-normal font-normal">
        Base revenue contribution
      </p>
    </GenericTooltip>
    <p className="text-sm leading-normal font-medium text-black">
      US{" "}
      {currencyFormatter.format(
        parseReferralProgramCurrency(referrer.totalBaseRevenueContribution),
      )}
    </p>
  </div>
);

export const UncappedAwardValueField = ({
  referrer,
}: {
  referrer: AwardedReferrerMetricsRevShareLimit;
}) => (
  <div className="sm:min-w-[200px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
    <GenericTooltip
      tooltipOffset={0}
      content={
        <p className="max-w-[200px]">
          Represents what the referrer would receive if the pool were unlimited and the referrer
          were qualified. Independent of the pool state and qualification status.
        </p>
      }
    >
      <p className="text-muted-foreground text-sm leading-normal font-normal text-left">
        Uncapped award value
      </p>
    </GenericTooltip>
    <p
      className={cn(
        "text-sm font-normal leading-normal max-sm:text-right",
        referrer.isQualified ? "text-emerald-600" : "text-black",
      )}
    >
      US {currencyFormatter.format(parseReferralProgramCurrency(referrer.standardAwardValue))}
    </p>
  </div>
);

export const ReferrerCardRevShareLimitMemo = memo(ReferrerCardRevShareLimit);
