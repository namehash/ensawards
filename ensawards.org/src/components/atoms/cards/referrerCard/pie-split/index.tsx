import type {
  AggregatedReferrerMetricsPieSplit,
  AwardedReferrerMetricsPieSplit,
} from "@namehash/ens-referrals/v1";
import { memo } from "react";

import { GenericTooltip } from "@/components/atoms/GenericTooltip.tsx";
import { parseReferralProgramCurrency } from "@/utils/referralProgram.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import { currencyFormatter } from "@/utils/textModifications.ts";

import { numberFormatter, ReferralYearsField, ReferrerCardHeader } from "../shared.tsx";

export interface ReferrerCardPieSplitProps {
  referrer: AwardedReferrerMetricsPieSplit;
  aggregatedMetrics: AggregatedReferrerMetricsPieSplit;
}

/**
 * Display a single Referrer on the {@link ReferrerLeaderboardPage}.
 *
 * This component is specifically designed for the {@link ReferralProgramAwardModels.PieSplit} award model.
 */
function ReferrerCardPieSplit({ referrer, aggregatedMetrics }: ReferrerCardPieSplitProps) {
  const yearsRequiredToBeQualified = numberFormatter.format(
    Math.max(0.01, aggregatedMetrics.minFinalScoreToQualify - referrer.finalScore),
  );

  return (
    <div className="w-full h-fit min-h-[80px] box-border flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-2 p-4 sm:p-6 sm:gap-y-5 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xs bg-white">
      <ReferrerCardHeader
        referrer={referrer.referrer}
        rank={referrer.rank}
        isQualified={referrer.isQualified}
        rankTooltipText={
          referrer.isQualified
            ? `Rank ${referrer.rank} is qualified for awards.`
            : `Rank ${referrer.rank} does not qualify for awards.`
        }
      />
      <ReferralYearsField referralYears={referrer.score} />
      <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <GenericTooltip
          tooltipOffset={0}
          content={
            <p className="max-w-[140px]">Leaderboard rank multiplier boost to final score</p>
          }
        >
          <p className="text-muted-foreground text-sm leading-normal font-normal">Rank boost</p>
        </GenericTooltip>
        <p className="text-sm leading-normal font-medium text-black">
          {Math.round(referrer.finalScoreBoost * 100)}%
        </p>
      </div>
      <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <GenericTooltip
          tooltipOffset={0}
          content={
            <p className="max-w-[140px]">One point per referral year with added rank boost</p>
          }
        >
          <p className="text-muted-foreground text-sm leading-normal font-normal">Final score</p>
        </GenericTooltip>
        <p className="text-sm leading-normal font-medium text-black">
          {numberFormatter.format(referrer.finalScore)}
        </p>
      </div>
      <div className="sm:min-w-[190px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <GenericTooltip
          tooltipOffset={0}
          content={
            <p className="max-w-[200px]">
              Tentative share of total award pool based on final scores of all qualified referrers
            </p>
          }
        >
          <p className="text-muted-foreground text-sm leading-normal font-normal">Budget share</p>
        </GenericTooltip>
        {referrer.isQualified ? (
          <div className="flex flex-row flex-nowrap justify-start items-center gap-2 self-stretch">
            <div className="max-sm:hidden flex relative w-20 h-[7px] rounded-[20px] bg-gray-200 z-0">
              <div
                className="absolute h-full self-stretch rounded-[20px] z-10 bg-emerald-600"
                style={{
                  width: `calc(${referrer.awardPoolShare * 100}%)`,
                }}
              ></div>
            </div>
            <p className="text-sm leading-normal font-medium sm:font-semibold text-emerald-600">
              {numberFormatter.format(referrer.awardPoolShare * 100)}%
            </p>
          </div>
        ) : (
          <p className="text-sm leading-normal font-semibold text-black max-sm:text-end">
            Requires{" "}
            {yearsRequiredToBeQualified === "1.00"
              ? "1 more year"
              : `${yearsRequiredToBeQualified} more years`}
          </p>
        )}
      </div>
      <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start min-[1100px]:items-end gap-0 max-sm:self-stretch">
        <GenericTooltip
          tooltipOffset={0}
          content={<p className="max-w-[140px]">Estimated value of $ENS awards in USD</p>}
        >
          <p className="text-muted-foreground text-sm leading-normal font-normal">Awards</p>
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

export const ReferrerCardPieSplitMemo = memo(ReferrerCardPieSplit);
