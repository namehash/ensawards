import { GenericTooltip } from "@/components/atoms/GenericTooltip.tsx";
import { ResolveAndDisplayIdentity } from "@/components/atoms/identity";
import { DEFAULT_ENS_NAMESPACE } from "@/utils/namespace.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import { buildUnresolvedIdentity, getENSRootChainId } from "@ensnode/ensnode-sdk";
import type {
  AggregatedReferrerMetrics,
  AwardedReferrerMetrics,
  ReferrerRank,
} from "@namehash/ens-referrals";
import type * as React from "react";
import firstPlaceIcon from "../../../assets/firstPlaceAward.svg";
import secondPlaceIcon from "../../../assets/secondPlaceAward.svg";
import thirdPlaceIcon from "../../../assets/thirdPlaceAward.svg";

export interface ReferrerCardProps {
  referrer: AwardedReferrerMetrics;
  aggregatedMetrics: AggregatedReferrerMetrics;
}

/**
 * Display a single Referrer on the {@link ReferrerLeaderboardPage}.
 */
export function ReferrerCard({ referrer, aggregatedMetrics }: ReferrerCardProps) {
  const namespaceId = DEFAULT_ENS_NAMESPACE;
  const referrerIdentity = buildUnresolvedIdentity(
    referrer.referrer,
    namespaceId,
    getENSRootChainId(namespaceId),
  );

  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const numberFormatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const yearsRequiredToBeQualified = numberFormatter.format(
    Math.max(0.01, aggregatedMetrics.minFinalScoreToQualify - referrer.finalScore),
  );

  return (
    <div className="w-full h-fit min-h-[80px] box-border flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-2 p-4 sm:p-6 sm:gap-y-5 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xs bg-white">
      {/*Desktop Header*/}
      <div className="w-fit hidden sm:flex flex-nowrap flex-row justify-start items-center gap-4">
        <RankIcon rank={referrer.rank} isQualified={referrer.isQualified} />
        <div className="flex flex-nowrap flex-row justify-start items-center gap-3">
          <ResolveAndDisplayIdentity
            identity={referrerIdentity}
            namespaceId={namespaceId}
            withIdentifier={false}
            withAvatar={true}
            withTooltip={false}
          />
          <div className="sm:min-w-[170px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
            <p className="text-muted-foreground text-sm leading-normal font-normal cursor-default">
              Referrer
            </p>
            <ResolveAndDisplayIdentity
              identity={referrerIdentity}
              namespaceId={namespaceId}
              withIdentifier={true}
              withAvatar={false}
              withTooltip={false}
              className="font-medium sm:max-w-[170px] sm:overflow-x-auto"
            />
          </div>
        </div>
      </div>
      {/*Mobile Header*/}
      <div className="sm:hidden flex flex-row-reverse flex-nowrap justify-end items-start gap-4 w-full relative">
        <RankIcon
          rank={referrer.rank}
          isQualified={referrer.isQualified}
          className="absolute top-0 right-0"
        />
        <ResolveAndDisplayIdentity
          identity={referrerIdentity}
          namespaceId={namespaceId}
          withIdentifier={false}
          withAvatar={true}
          withTooltip={false}
        />
      </div>
      <div className="min-w-[120px] sm:hidden flex flex-row flex-nowrap justify-between items-start self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal cursor-default">
          Referrer
        </p>
        <ResolveAndDisplayIdentity
          identity={referrerIdentity}
          namespaceId={namespaceId}
          withIdentifier={true}
          withAvatar={false}
          withTooltip={false}
          className="font-medium"
        />
      </div>
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
          {numberFormatter.format(referrer.score)}
        </p>
      </div>
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
      <div className="sm:min-w-[180px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <GenericTooltip
          tooltipOffset={0}
          content={
            <p className="max-w-[200px]">
              Tentative share of total award pool based on final scores of all qualified referrers
            </p>
          }
        >
          <p className="text-muted-foreground text-sm leading-normal font-normal">
            Award pool share
          </p>
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
          content={<p className="max-w-[140px]">Value of tentative award pool share</p>}
        >
          <p className="text-muted-foreground text-sm leading-normal font-normal">
            Tentative awards
          </p>
        </GenericTooltip>
        <p
          className={cn(
            "text-sm font-semibold leading-normal",
            referrer.isQualified ? "text-emerald-600" : "text-black font-normal",
          )}
        >
          {referrer.isQualified ? (
            <>US {currencyFormatter.format(referrer.awardPoolApproxValue)}</>
          ) : (
            "-"
          )}
        </p>
      </div>
    </div>
  );
}

const placeIcons = [firstPlaceIcon, secondPlaceIcon, thirdPlaceIcon];

interface RankProps {
  /**
   * Represents the position in the list
   * @invariant must be a positive integer (>= 1)
   */
  rank: ReferrerRank;

  /**
   * Identifies if the referrer meets the qualifications of the referral program rules.
   * For more details see {@link AwardedReferrerMetrics.isQualified}
   */
  isQualified: boolean;
  className?: string;
}

/**
 * Display {@link RankedReferrerMetrics.referrerRank}.
 */
const RankIcon = ({ rank, isQualified, className }: RankProps) => (
  <GenericTooltip
    content={
      <p>
        {isQualified
          ? `Rank ${rank} is qualified for awards.`
          : `Rank ${rank} does not qualify for awards.`}
      </p>
    }
    tooltipOffset={4}
  >
    <div className="w-8 h-8 box-border flex justify-center items-center">
      {rank <= 3 ? (
        <img alt={`${rank}-place`} src={placeIcons[rank - 1].src} className={className} />
      ) : (
        <span
          className={cn(
            "w-fit h-6 box-border flex justify-center items-center text-xs leading-5 font-semibold rounded-full border px-2",
            isQualified
              ? "text-emerald-700 bg-[#10B9811A] border-[#0596691A]"
              : "text-red-600 bg-[#EF44441A] border-[#DC26261A]",
            rank < 10 && "w-6",
            className,
          )}
        >
          {rank}
        </span>
      )}
    </div>
  </GenericTooltip>
);

const RankIconLoading = ({ rank, className }: Omit<RankProps, "isQualified">) => (
  <GenericTooltip content={<p>Loading the data. Please wait.</p>} tooltipOffset={4}>
    <div className="w-8 h-8 box-border flex justify-center items-center">
      {rank <= 3 ? (
        <img alt={`${rank}-place`} src={placeIcons[rank - 1].src} className={className} />
      ) : (
        <span
          className={cn(
            "w-fit h-6 box-border flex justify-center items-center text-xs leading-5 font-semibold text-muted-foreground rounded-full border px-2",
            "text-gray-600 bg-gray-100 border-gray-200",
            rank < 10 && "w-6",
            className,
          )}
        >
          {rank}
        </span>
      )}
    </div>
  </GenericTooltip>
);

/**
 * Display Referrer Card loading state
 */
export const ReferrerCardLoading = ({ rank }: Omit<RankProps, "className" | "isQualified">) => {
  const loadingStateStyles = "animate-pulse bg-gray-200 rounded-sm";
  return (
    <div className="w-full h-fit box-border flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start sm:items-center gap-2 p-4 sm:p-6 sm:gap-y-5 rounded-2xl border border-gray-200 bg-white">
      {/*Desktop Header*/}
      <div className="w-fit hidden sm:flex flex-nowrap flex-row justify-start items-center gap-4">
        <RankIconLoading rank={rank} />
        <div className="flex flex-row justify-start items-center gap-3">
          <div className="animate-pulse w-10 h-10 bg-gray-200 rounded-full" />
          <div className="sm:min-w-[170px] flex flex-col flex-nowrap justify-center items-start gap-0 max-sm:self-stretch">
            <p className="text-muted-foreground text-sm leading-normal font-normal">Referrer</p>
            <div className="animate-pulse bg-gray-300 rounded-sm w-[100px] h-[14px] mt-[4px] mb-[3px]" />
          </div>
        </div>
      </div>
      {/*Mobile Header*/}
      <div className="sm:hidden flex flex-row flex-nowrap justify-start items-start gap-4 self-stretch relative">
        <div className="animate-pulse w-10 h-10 bg-gray-200 rounded-full" />
        <RankIconLoading rank={rank} className="absolute top-0 right-0" />
      </div>
      {/*------------*/}
      <div className="min-w-[120px] sm:hidden flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal">Referrer</p>
        <div className={cn(loadingStateStyles, "w-[100px] h-[14px] mt-[4px] mb-[3px]")} />
      </div>
      <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal">Referral years</p>
        <div className={cn(loadingStateStyles, "w-[48px] h-[14px] mt-[4px] mb-[3px]")} />
      </div>
      <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal">Rank boost</p>
        <div className={cn(loadingStateStyles, "w-10 h-[14px] mt-[4px] mb-[3px]")} />
      </div>
      <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal">Final score</p>
        <div className={cn(loadingStateStyles, "w-[48px] h-[14px] mt-[4px] mb-[3px]")} />
      </div>
      <div className="sm:min-w-[180px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal">Award pool share</p>
        <div
          className={cn(loadingStateStyles, "w-[48px] sm:w-[130px] h-[14px] mt-[4px] mb-[3px]")}
        />
      </div>
      <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start min-[1100px]:items-end gap-0 max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal">Tentative awards</p>
        <div className={cn(loadingStateStyles, "w-[88px] h-[14px] mt-[4px] mb-[3px]")} />
      </div>
    </div>
  );
};
