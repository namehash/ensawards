import { GenericTooltip } from "@/components/atoms/GenericTooltip.tsx";
import { ResolveAndDisplayIdentity } from "@/components/atoms/identity";
import { getAppSupportColor } from "@/utils/styles.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import { ENSNamespaceIds } from "@ensnode/datasources";
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

export function ReferrerCard({ referrer, aggregatedMetrics }: ReferrerCardProps) {
  const namespaceId = ENSNamespaceIds.Mainnet;
  const referrerIdentity = buildUnresolvedIdentity(
    referrer.referrer,
    namespaceId,
    getENSRootChainId(namespaceId),
  );

  const numberFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="w-full h-fit min-h-[80px] box-border flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start sm:items-center gap-2 p-4 sm:p-6 sm:gap-y-8 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xs bg-white">
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
            <p className="text-muted-foreground text-sm leading-normal font-normal">Referrer</p>
            <ResolveAndDisplayIdentity
              identity={referrerIdentity}
              namespaceId={namespaceId}
              withIdentifier={true}
              withAvatar={false}
              withTooltip={false}
              className="font-medium"
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
        <p className="text-muted-foreground text-sm leading-normal font-normal">Referrer</p>
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
        <p className="text-muted-foreground text-sm leading-normal font-normal">Referral years</p>
        <p className="text-sm leading-normal font-medium text-black">{referrer.score.toFixed(2)}</p>
      </div>
      <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal">Rank boost</p>
        <p className="text-sm leading-normal font-medium text-black">
          {(referrer.finalScoreBoost * 100).toFixed(0)}%
        </p>
      </div>
      <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal">Final score</p>
        <p className="text-sm leading-normal font-medium text-black">
          {referrer.finalScore.toFixed(2)}
        </p>
      </div>
      <div className="sm:min-w-[180px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal">Award pool share</p>
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
              {(referrer.awardPoolShare * 100).toFixed(2)}%
            </p>
          </div>
        ) : (
          <p className="text-sm leading-normal font-semibold text-black max-sm:text-end">
            Requires{" "}
            {Math.max(0.01, aggregatedMetrics.minFinalScoreToQualify - referrer.finalScore).toFixed(
              2,
            )}{" "}
            more years
          </p>
        )}
      </div>
      <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start min-[1100px]:items-end gap-0 max-sm:self-stretch">
        <p className="text-muted-foreground text-sm leading-normal font-normal">Tentative awards</p>
        <p
          className={cn(
            "text-sm font-semibold",
            referrer.isQualified ? "text-emerald-600" : "text-black font-normal",
          )}
        >
          {referrer.isQualified ? (
            <>US {numberFormat.format(referrer.awardPoolApproxValue)}</>
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
    {rank <= 3 ? (
      <img alt={`${rank}-place`} src={placeIcons[rank - 1].src} className={className} />
    ) : (
      <span
        className={cn(
          "w-8 h-8 box-border flex justify-center items-center text-sm leading-normal font-semibold text-muted-foreground rounded-lg border",
          isQualified
            ? "text-emerald-600 bg-emerald-50 border-emerald-600"
            : "text-red-600 bg-red-50 border-red-600",
          className,
        )}
      >
        {rank}
      </span>
    )}
  </GenericTooltip>
);

const RankIconLoading = ({ rank, className }: Omit<RankProps, "isQualified">) => (
  <GenericTooltip content={<p>Loading the data. Please wait.</p>} tooltipOffset={4}>
    {rank <= 3 ? (
      <img alt={`${rank}-place`} src={placeIcons[rank - 1].src} className={className} />
    ) : (
      <span
        className={cn(
          "w-8 h-8 box-border flex justify-center items-center text-sm leading-normal font-semibold text-muted-foreground rounded-lg border",
          "text-gray-500 bg-gray-100 border-gray-500",
          className,
        )}
      >
        {rank}
      </span>
    )}
  </GenericTooltip>
);

export const ReferrerCardLoading = ({ rank }: Omit<RankProps, "className" | "isQualified">) => {
  const loadingStateStyles = "animate-pulse bg-gray-300 rounded-sm";
  return (
    <div className="w-full h-fit box-border flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start sm:items-center gap-2 p-4 sm:p-6 sm:gap-y-8 rounded-2xl border border-gray-200 bg-white">
      {/*Desktop Header*/}
      <div className="w-fit hidden sm:flex flex-nowrap flex-row justify-start items-center gap-4">
        <RankIconLoading rank={rank} />
        <div className="flex flex-row justify-start items-center gap-3">
          <div className="animate-pulse w-10 h-10 bg-gray-300 rounded-full" />
          <div className="sm:min-w-[170px] flex flex-col flex-nowrap justify-center items-start gap-0 max-sm:self-stretch">
            <p className="text-muted-foreground text-sm leading-normal font-normal">Referrer</p>
            <div className="animate-pulse bg-gray-300 rounded-sm w-[100px] h-[14px] mt-[4px] mb-[3px]" />
          </div>
        </div>
      </div>
      {/*Mobile Header*/}
      <div className="sm:hidden flex flex-row flex-nowrap justify-start items-start gap-4 self-stretch relative">
        <div className="animate-pulse w-10 h-10 bg-gray-300 rounded-full" />
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
