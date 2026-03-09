import type {
  AwardedReferrerMetricsRevShareLimit,
  ReferralProgramRulesRevShareLimit,
} from "@namehash/ens-referrals/v1";
import { BASE_REVENUE_CONTRIBUTION_PER_YEAR, SECONDS_PER_YEAR } from "@namehash/ens-referrals/v1";
import { memo } from "react";

import {
  currencyFormatter,
  numberFormatter,
  ReferrerCardHeader,
} from "@/components/atoms/cards/referrerCard/shared";
import { GenericTooltip } from "@/components/atoms/GenericTooltip.tsx";
import { parseReferralProgramCurrency } from "@/utils/referralProgram.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";

interface RevShareLimitReferrerCardProps {
  referrer: AwardedReferrerMetricsRevShareLimit;
  editionRules: ReferralProgramRulesRevShareLimit;
}

/**
 * Display a single Referrer on the {@link ReferrerLeaderboardPage}.
 *
 * This component is specifically designed for the {@link ReferralProgramAwardModels.RevShareLimit} award model.
 */
function ReferrerCardRevShareLimit({ referrer, editionRules }: RevShareLimitReferrerCardProps) {
  const yearsRequiredToBeQualified = numberFormatter.format(
    Math.max(
      0.01,
      parseReferralProgramCurrency({
        currency: editionRules.minQualifiedRevenueContribution.currency,
        amount:
          editionRules.minQualifiedRevenueContribution.amount -
          referrer.totalBaseRevenueContribution.amount,
      }) /
        parseReferralProgramCurrency({
          currency: editionRules.minQualifiedRevenueContribution.currency,
          amount: BASE_REVENUE_CONTRIBUTION_PER_YEAR.amount,
        }),
    ),
  );

  return (
    <div className="w-full h-fit min-h-[80px] box-border flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-2 p-4 sm:p-6 sm:gap-y-5 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xs bg-white">
      <ReferrerCardHeader
        referrer={referrer.referrer}
        rank={referrer.rank}
        isQualified={referrer.isQualified}
      />
      <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <GenericTooltip
          tooltipOffset={0}
          content={
            <p className="max-w-[140px]">
              Total duration of all referred registrations and renewals
            </p>
          }
        >
          <p className="text-muted-foreground text-sm leading-normal font-normal">Referral years</p>
        </GenericTooltip>
        <p className="text-sm leading-normal font-medium text-black">
          {numberFormatter.format(referrer.totalIncrementalDuration / SECONDS_PER_YEAR)}
        </p>
      </div>
      <div className="sm:min-w-[175px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <GenericTooltip tooltipOffset={0} content={<p className="max-w-[140px]">X</p>}>
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
      <div className="sm:min-w-[200px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <GenericTooltip tooltipOffset={0} content={<p className="max-w-[200px]">X</p>}>
          <p className="text-muted-foreground text-sm leading-normal font-normal text-left">
            Uncapped award value
          </p>
        </GenericTooltip>
        <p
          className={cn(
            "text-sm font-semibold leading-normal max-sm:text-right",
            referrer.isQualified ? "text-emerald-600" : "text-black font-normal",
          )}
        >
          {referrer.isQualified ? (
            <>
              US{" "}
              {currencyFormatter.format(parseReferralProgramCurrency(referrer.standardAwardValue))}
            </>
          ) : (
            <span className="text-sm leading-normal font-semibold text-black max-sm:text-end">
              Requires{" "}
              {yearsRequiredToBeQualified === "1.00"
                ? "1 more year"
                : `${yearsRequiredToBeQualified} more years`}
            </span>
          )}
        </p>
      </div>
      <div className="sm:min-w-[200px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start min-[1100px]:items-end gap-0 max-sm:self-stretch">
        <GenericTooltip tooltipOffset={0} content={<p className="max-w-[140px]">x</p>}>
          <p className="text-muted-foreground text-sm leading-normal font-normal">
            Award pool approximate value
          </p>
        </GenericTooltip>
        <p
          className={cn(
            "text-sm font-semibold leading-normal",
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
            "-"
          )}
        </p>
      </div>
    </div>
  );
}

export const ReferrerCardRevShareLimitMemo = memo(ReferrerCardRevShareLimit);
