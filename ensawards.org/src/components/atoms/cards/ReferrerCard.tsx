import { ResolveAndDisplayIdentity } from "@/components/atoms/identity";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import { ENSNamespaceIds } from "@ensnode/datasources";
import {
  buildUnresolvedIdentity,
  getENSRootChainId,
} from "@ensnode/ensnode-sdk";
import { Check, X as XIcon } from "lucide-react";
import type * as React from "react";
import firstPlaceIcon from "../../../assets/firstPlaceAward.svg";
import secondPlaceIcon from "../../../assets/secondPlaceAward.svg";
import thirdPlaceIcon from "../../../assets/thirdPlaceAward.svg";
import type {AggregatedReferrerMetrics, AwardedReferrerMetrics, ReferrerRank} from "@namehash/ens-referrals";
import {getAppSupportColor} from "@/utils/styles.ts";

export interface ReferrerCardProps {
    referrer: AwardedReferrerMetrics;
    aggregatedMetrics: AggregatedReferrerMetrics;
}

export function ReferrerCard({ referrer, aggregatedMetrics }: ReferrerCardProps) {
  const namespaceId = ENSNamespaceIds.Sepolia; //TODO: change to mainnet for production
  const referrerIdentity = buildUnresolvedIdentity(
    referrer.referrer,
    namespaceId,
    getENSRootChainId(namespaceId),
  );
  return (
    <div className="w-full h-fit min-h-[80px] box-border flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start sm:items-center gap-2 p-4 sm:p-6 sm:gap-y-3 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xs">
      {/*Desktop Header*/}
      <div className="w-fit hidden sm:flex flex-nowrap flex-row justify-start items-center gap-5">
        <PlaceIcon rank={referrer.rank} />
        <ResolveAndDisplayIdentity
          identity={referrerIdentity}
          namespaceId={namespaceId}
          prefix="Referrer"
          withAvatar={true}
          withTooltip={false}
          className="font-medium"
        />
      </div>
      {/*Mobile Header*/}
      <div className="sm:hidden flex flex-row-reverse flex-nowrap justify-end items-start gap-4 self-stretch relative">
        <PlaceIcon rank={referrer.rank} className="absolute top-0 right-0" />
        <ResolveAndDisplayIdentity
          identity={referrerIdentity}
          namespaceId={namespaceId}
          prefix="Referrer"
          withAvatar={true}
          withTooltip={false}
        />
      </div>
      {/*------------*/}
        <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
          <p className="text-muted-foreground text-sm leading-normal font-normal">Referrals</p>
          <p className="text-sm leading-normal font-medium text-black">{referrer.totalReferrals}</p>
        </div>
        <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
          <p className="text-muted-foreground text-sm leading-normal font-normal">Points</p>
          <p className="text-sm leading-normal font-medium text-black">{referrer.score.toFixed(2)}</p>
        </div>
        <div className="sm:min-w-[100px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
          <p className="text-muted-foreground text-sm leading-normal font-normal">Qualified</p>
          <span
            className={cn(
              "w-fit flex flex-row flex-nowrap justify-center items-center gap-2 text-sm leading-normal font-medium text-black"
            )}
          >
            {referrer.isQualified ? <><Check size={20} className="text-emerald-600" /> Yes</> : <><XIcon size={20} className="text-red-600" /> Not yet</>}
          </span>
        </div>
        <div className="sm:min-w-[180px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
          <p className="text-muted-foreground text-sm leading-normal font-normal">
            Qualified contribution
          </p>
          {referrer.isQualified ? (
              <div className="flex flex-row flex-nowrap justify-start items-center gap-2 self-stretch">
                <div className="max-sm:hidden flex relative w-20 h-[7px] rounded-[20px] bg-gray-200 z-0">
                  <div
                      className={cn(
                          "absolute h-full self-stretch rounded-[20px] z-10",
                          `bg-${getAppSupportColor(referrer.awardPoolShare * 100)}`,
                      )}
                      style={{width: `calc(${referrer.awardPoolShare * 100}%)`}}
                  ></div>
                </div>
                <p
                    className={cn(
                        "text-sm leading-normal font-medium sm:font-semibold",
                        `text-${getAppSupportColor(referrer.awardPoolShare * 100)}`,
                    )}
                >
                  {(referrer.awardPoolShare * 100).toFixed(2)}%
                </p>
              </div>
          ) : (
              <p className="text-sm leading-normal font-medium text-black">
                requires{" "}
                {(aggregatedMetrics.minFinalScoreToQualify - referrer.finalScore).toFixed(2)} more
                points
              </p>
          )}
        </div>
        <div
            className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start sm:items-end gap-0 max-sm:self-stretch">
          <p className="text-muted-foreground text-sm leading-normal font-normal">
            Tentative awards
          </p>
          <p className={cn("text-sm font-semibold", referrer.isQualified ? "text-emerald-600" : "text-black font-normal")}>
            {referrer.isQualified ? <>US $
              {referrer.awardPoolApproxValue.toFixed(2)}</> : "-"}
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
  className?: string;
}

const PlaceIcon = ({ rank, className }: RankProps) =>
  rank <= 3 ? (
    <img alt={`${rank}-place`} src={placeIcons[rank - 1].src} className={className} />
  ) : (
      <p className={cn("w-8 pt-[7px] px-[11px] pb-[5px] text-sm leading-normal font-semibold text-muted-foreground", className)}>
        {rank}
      </p>
  );
export const ReferrerCardLoading = ({rank}: Omit<RankProps, "className">) => {
  const loadingStateStyles = "animate-pulse bg-gray-300 rounded-sm";
  return (
    <div className="w-full h-fit box-border flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start sm:items-center gap-2 p-4 sm:p-6 sm:gap-y-3 rounded-2xl border border-gray-200">
      {/*Desktop Header*/}
      <div className="w-fit hidden sm:flex flex-nowrap flex-row justify-start items-center gap-5">
        <PlaceIcon rank={rank} />
        <div className="flex flex-row justify-start items-center gap-3">
          <div className="animate-pulse w-10 h-10 bg-gray-300 rounded-full" />
          <div className="sm:min-w-[170px] flex flex-col flex-nowrap justify-center items-start gap-0 max-sm:self-stretch">
            <p className="text-muted-foreground text-sm leading-normal font-normal">Referrer</p>
            <div className="animate-pulse bg-gray-300 rounded-sm w-[100px] h-[21px]" />
          </div>
        </div>
      </div>
      {/*Mobile Header*/}
      <div className="sm:hidden flex flex-row flex-nowrap justify-start items-start gap-4 self-stretch relative">
          <PlaceIcon rank={rank} className="absolute top-0 right-0"/>
        <div className="flex flex-col justify-start items-start gap-2 w-full">
          <div className="animate-pulse w-10 h-10 bg-gray-300 rounded-full" />
          <div className="sm:min-w-[170px] flex flex-row flex-nowrap justify-between items-center gap-0 max-sm:self-stretch">
            <p className="text-muted-foreground text-sm leading-normal font-normal">Referrer</p>
            <div className="animate-pulse bg-gray-300 rounded-sm w-[100px] h-[21px]" />
          </div>
        </div>
      </div>
      {/*------------*/}
        <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
          <p className="text-muted-foreground text-sm leading-normal font-normal">Referrals</p>
          <div className={cn(loadingStateStyles, "w-11 h-[21px]")} />
        </div>
        <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
          <p className="text-muted-foreground text-sm leading-normal font-normal">Points</p>
          <div className={cn(loadingStateStyles, "w-[68px] h-[21px]")} />
        </div>
        <div className="sm:min-w-[100px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
          <p className="text-muted-foreground text-sm leading-normal font-normal">Qualified</p>
          <div className="flex flex-row flex-nowrap justify-start items-center gap-2">
            <div className={cn(loadingStateStyles, "w-[21px] h-[21px] rounded-full")} />
            <div className={cn(loadingStateStyles, "w-[52px] h-[21px]")} />
          </div>
        </div>
        <div className="sm:min-w-[180px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
          <p className="text-muted-foreground text-sm leading-normal font-normal">
            Qualified Contribution
          </p>
          <div className={cn(loadingStateStyles, "w-[120px] h-[21px]")} />
        </div>
        <div className="sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start sm:items-end gap-0 max-sm:self-stretch">
          <p className="text-muted-foreground text-sm leading-normal font-normal">
            Tentative awards
          </p>
          <div className={cn(loadingStateStyles, "w-[88px] h-[21px]")} />
        </div>
      </div>
  );
};
