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
    <div className="w-full h-fit box-border flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start sm:items-center gap-3 p-4 sm:p-6 sm:gap-y-3 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xs">
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
      <div className="sm:hidden flex flex-col flex-nowrap justify-start items-start gap-4 self-stretch">
        <div className="w-full h-fit flex flex-row flex-nowrap justify-between items-center">
          <PlaceIcon rank={referrer.rank} />
        </div>
        <ResolveAndDisplayIdentity
          identity={referrerIdentity}
          namespaceId={namespaceId}
          prefix="Referrer"
          withAvatar={true}
          withTooltip={false}
        />
      </div>
      {/*------------*/}
      <div className="flex flex-nowrap flex-col sm:flex-row justify-start sm:justify-end items-center gap-2 sm:gap-10 max-sm:self-stretch">
        <div className="min-md:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
          <p className="text-muted-foreground text-sm leading-normal font-normal">Referrals</p>
          <p className="text-sm">{referrer.totalReferrals}</p>
        </div>
        <div className="min-md:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
          <p className="text-muted-foreground text-sm leading-normal font-normal">Points</p>
          <p className="text-sm">{referrer.score.toFixed(2)}</p>
        </div>
        <div className="min-md:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
          <p className="text-muted-foreground text-sm leading-normal font-normal">Qualified</p>
          <span
            className={cn(
              "w-fit flex flex-row flex-nowrap justify-center items-center gap-[6px] pl-[10px] pr-3 py-1 rounded-full text-sm leading-normal font-medium cursor-default",
              referrer.isQualified ? "text-emerald-600 bg-[#0596691A]" : "text-red-600 bg-[#DC26261A]",
            )}
          >
            {referrer.isQualified ? <Check /> : <XIcon />}
            {referrer.isQualified ? "Yes" : "Not yet"}
          </span>
        </div>
        <div className="min-md:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
          <p className="text-muted-foreground text-sm leading-normal font-normal">
            Final score
          </p>
          {referrer.isQualified ? (
            <div className="flex flex-row flex-nowrap justify-start items-center gap-2 self-stretch">
              <p
                className={cn(
                  "text-sm leading-normal font-medium sm:font-semibold text-black",
                )}
              >
                {referrer.finalScore.toFixed(2)}
              </p>
            </div>
          ) : (
            <p className="text-sm">
              requires{" "}
              {(aggregatedMetrics.minFinalScoreToQualify - referrer.finalScore).toFixed(2)} more
              points
            </p>
          )}
        </div>
        <div className="min-md:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
          <p className="text-muted-foreground text-sm leading-normal font-normal">
            Tentative awards
          </p>
            <p className={cn("text-sm font-semibold", referrer.isQualified ? "text-green-600" : "text-red-600")}>
              US $
              {referrer.awardPoolApproxValue.toFixed(2)}
            </p>
        </div>
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
}

const PlaceIcon = ({ rank }: RankProps) =>
  rank <= 3 ? (
    <img alt={`${rank}-place`} src={placeIcons[rank - 1].src} />
  ) : (
      <p className="w-8 pt-[7px] px-[11px] pb-[5px] text-sm leading-normal font-semibold text-muted-foreground">
        {rank}
      </p>
  );
export const ReferrerCardLoading = ({rank}: RankProps) => {
  const loadingStateStyles = "animate-pulse bg-gray-300 rounded-sm";
  return (
    <div className="w-full h-fit box-border flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start sm:items-center gap-3 p-4 sm:p-6 sm:gap-y-3 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xs">
      {/*Desktop Header*/}
      <div className="w-fit hidden sm:flex flex-nowrap flex-row justify-start items-center gap-5">
        <PlaceIcon rank={rank} />
        <div className="flex flex-row justify-start items-center gap-3">
          <div className="animate-pulse w-10 h-10 bg-gray-300 rounded-full" />
          <div className="min-md:min-w-[120px] flex flex-col flex-nowrap justify-center items-start gap-0 max-sm:self-stretch">
            <p className="text-muted-foreground text-sm leading-normal font-normal">Referrer</p>
            <div className="animate-pulse bg-gray-300 rounded-sm w-[100px] h-4" />
          </div>
        </div>
      </div>
      {/*Mobile Header*/}
      <div className="sm:hidden flex flex-col flex-nowrap justify-start items-start gap-4 self-stretch">
        <div className="w-full h-fit flex flex-row flex-nowrap justify-between items-center">
          <PlaceIcon rank={rank} />
        </div>
        <div className="flex flex-row justify-start items-center gap-3">
          <div className="animate-pulse w-10 h-10 bg-gray-300 rounded-full" />
          <div className="min-md:min-w-[120px] flex flex-col flex-nowrap justify-center items-start gap-0 max-sm:self-stretch">
            <p className="text-muted-foreground text-sm leading-normal font-normal">Referrer</p>
            <div className="animate-pulse bg-gray-300 rounded-sm w-[100px] h-4" />
          </div>
        </div>
      </div>
      {/*------------*/}
      <div className="flex flex-nowrap flex-col sm:flex-row justify-start sm:justify-end items-center gap-2 sm:gap-10 max-sm:self-stretch">
        <div className="min-md:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
          <p className="text-muted-foreground text-sm leading-normal font-normal">Referrals</p>
          <div className={cn(loadingStateStyles, "w-11 h-4")} />
        </div>
        <div className="min-md:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
          <p className="text-muted-foreground text-sm leading-normal font-normal">Points</p>
          <div className={cn(loadingStateStyles, "w-[68px] h-4")} />
        </div>
        <div className="min-md:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
          <p className="text-muted-foreground text-sm leading-normal font-normal">Qualified</p>
          <div className="flex flex-row flex-nowrap justify-start items-center gap-2">
            <div className={cn(loadingStateStyles, "w-4 h-4 rounded-full")} />
            <div className={cn(loadingStateStyles, "w-[52px] h-4")} />
          </div>
        </div>
        <div className="min-md:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
          <p className="text-muted-foreground text-sm leading-normal font-normal">
            Qualified Contribution
          </p>
          <div className={cn(loadingStateStyles, "w-[120px] h-4")} />
        </div>
        <div className="min-md:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
          <p className="text-muted-foreground text-sm leading-normal font-normal">
            Tentative awards
          </p>
          <div className={cn(loadingStateStyles, "w-[88px] h-4")} />
        </div>
      </div>
    </div>
  );
};
