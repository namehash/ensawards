import {
    ENS_HOLIDAY_REFERRAL_AWARDS_PRIZE_POOL_IN_USD,
    REFERRER_PROGRAM_QUALIFICATION_THRESHOLD
} from "@/utils/referrals.ts";
import {cn} from "@/utils/tailwindClassConcatenation.ts";
import {getAppSupportColor} from "@/utils/styles.ts";
import firstPlaceIcon from "../../../assets/firstPlaceAward.svg";
import secondPlaceIcon from "../../../assets/secondPlaceAward.svg";
import thirdPlaceIcon from "../../../assets/thirdPlaceAward.svg";
import type {Address} from "viem";
import {Check, Cross} from "lucide-react";
import {truncateAddress} from "@/utils";
import {
    type AggregatedReferrerMetricsContribution,
    buildUnresolvedIdentity,
    getENSRootChainId
} from "@ensnode/ensnode-sdk";
import {ENSNamespaceIds} from "@ensnode/datasources";
import {ResolveAndDisplayIdentity} from "@/components/atoms/identity";
import type * as React from "react";

export interface ReferrerCardProps {
    referrerData: AggregatedReferrerMetricsContribution;
    position: number;
}

export function ReferrerCard({referrerData, position}: ReferrerCardProps) {
    const qualifiedContribution = referrerData.totalIncrementalDurationContribution * 100;
    const namespaceId = ENSNamespaceIds.Sepolia; //TODO: change to mainnet for production
    const referrerIdentity = buildUnresolvedIdentity(referrerData.referrer, namespaceId, getENSRootChainId(namespaceId));
    return (
        <div
            className="w-full h-fit box-border flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start sm:items-center gap-3 p-4 sm:p-6 sm:gap-y-3 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xs">
            {/*Desktop Header*/}
            <div
                className="w-fit hidden sm:flex flex-nowrap flex-row justify-start items-center gap-5">
                <PlaceIcon place={position}/>
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
            <div
                className="sm:hidden flex flex-col flex-nowrap justify-start items-start gap-4 self-stretch">
                <div
                    className="w-full h-fit flex flex-row flex-nowrap justify-between items-center">
                    <PlaceIcon place={position}/>
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
            <div
                className="flex flex-nowrap flex-col sm:flex-row justify-start sm:justify-end items-center gap-2 sm:gap-10 max-sm:self-stretch">
                <div
                    className="min-md:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
                    <p className="text-muted-foreground text-sm leading-normal font-normal">
                        Referrals
                    </p>
                    <p className="text-sm">{referrerData.totalReferrals}</p>
                </div>
                <div
                    className="min-md:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
                    <p className="text-muted-foreground text-sm leading-normal font-normal">
                        Points
                    </p>
                    <p className="text-sm">{5.72}</p>
                </div>
                <div
                    className="min-md:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
                    <p className="text-muted-foreground text-sm leading-normal font-normal">
                        Qualified
                    </p>
                    <span
                        className={cn(
                            "w-fit flex flex-row flex-nowrap justify-center items-center gap-[6px] pl-[10px] pr-3 py-1 rounded-full text-sm leading-normal font-medium cursor-default",
                            true ? "text-emerald-600 bg-[#0596691A]" : "text-red-600 bg-[#DC26261A]"
                        )}>
  {
      true ? (
              <Check/>
          ) :
          <Cross/>
  }
                        {"Yes"}
</span>
                </div>
                <div
                    className="min-md:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
                    <p className="text-muted-foreground text-sm leading-normal font-normal">
                        Qualified Contribution
                    </p>
                    {qualifiedContribution > REFERRER_PROGRAM_QUALIFICATION_THRESHOLD ?
                        <div
                            className="flex flex-row flex-nowrap justify-start items-center gap-2 self-stretch">
                            <div
                                className="max-sm:hidden flex relative w-20 h-[7px] rounded-[20px] bg-gray-200 z-0">
                                <div
                                    className={cn(
                                        "absolute h-full self-stretch rounded-[20px] z-10",
                                        `bg-${getAppSupportColor(qualifiedContribution)}`,
                                    )}
                                    style={{width: `calc(${qualifiedContribution}%)`}}>
                                </div>
                            </div>
                            <p
                                className={cn(
                                    "text-sm leading-normal font-medium sm:font-semibold",
                                    `text-${getAppSupportColor(qualifiedContribution)}`,
                                )}>
                                {qualifiedContribution.toFixed(2)}%
                            </p>
                        </div>
                        :
                        <p className="text-sm">requires {(REFERRER_PROGRAM_QUALIFICATION_THRESHOLD - qualifiedContribution).toFixed(2)} more
                            points</p>
                    }
                </div>
                <div
                    className="min-md:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
                    <p className="text-muted-foreground text-sm leading-normal font-normal">
                        Tentative awards
                    </p>
                    {qualifiedContribution > REFERRER_PROGRAM_QUALIFICATION_THRESHOLD ?
                        <p className="text-sm font-semibold text-green-600">US ${(ENS_HOLIDAY_REFERRAL_AWARDS_PRIZE_POOL_IN_USD * referrerData.totalIncrementalDurationContribution).toFixed(2)}</p> : <p>-</p>}
                </div>
            </div>
        </div>
    )
}

const placeIcons = [
    firstPlaceIcon,
    secondPlaceIcon,
    thirdPlaceIcon
];

interface PlaceProps {
    /**
     * Represents the position in the list
     * @invariant must be a positive integer (>= 1)
     */
    place: number;
}

const FurtherPlaceIcon = ({place}: PlaceProps) => <p
    className="w-8 pt-[7px] px-[11px] pb-[5px] text-sm leading-normal font-semibold text-muted-foreground">
    {place}
</p>

const PlaceIcon = ({place}: PlaceProps) => place <= 3 ? <img alt={`${place}-place`} src={placeIcons[place - 1].src}/> :
    <FurtherPlaceIcon place={place}/>

export const ReferrerCardLoading = ({position}: Omit<ReferrerCardProps, "referrerData">) => {
    const loadingStateStyles = "animate-pulse bg-gray-300 rounded-sm";
    return (
        <div
            className="w-full h-fit box-border flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start sm:items-center gap-3 p-4 sm:p-6 sm:gap-y-3 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xs">
            {/*Desktop Header*/}
            <div
                className="w-fit hidden sm:flex flex-nowrap flex-row justify-start items-center gap-5">
                <PlaceIcon place={position} />
                <div className="flex flex-row justify-start items-center gap-3">
                    <div className="animate-pulse w-10 h-10 bg-gray-300 rounded-full"/>
                    <div
                        className="min-md:min-w-[120px] flex flex-col flex-nowrap justify-center items-start gap-0 max-sm:self-stretch">
                        <p className="text-muted-foreground text-sm leading-normal font-normal">Referrer</p>
                        <div className="animate-pulse bg-gray-300 rounded-sm w-[100px] h-4"/>
                    </div>
                </div>
            </div>
            {/*Mobile Header*/}
            <div
                className="sm:hidden flex flex-col flex-nowrap justify-start items-start gap-4 self-stretch">
                <div
                    className="w-full h-fit flex flex-row flex-nowrap justify-between items-center">
                    <PlaceIcon place={position}/>
                </div>
                <div className="flex flex-row justify-start items-center gap-3">
                    <div className="animate-pulse w-10 h-10 bg-gray-300 rounded-full"/>
                    <div
                        className="min-md:min-w-[120px] flex flex-col flex-nowrap justify-center items-start gap-0 max-sm:self-stretch">
                        <p className="text-muted-foreground text-sm leading-normal font-normal">Referrer</p>
                        <div className="animate-pulse bg-gray-300 rounded-sm w-[100px] h-4"/>
                    </div>
                </div>
            </div>
            {/*------------*/}
            <div
                className="flex flex-nowrap flex-col sm:flex-row justify-start sm:justify-end items-center gap-2 sm:gap-10 max-sm:self-stretch">
                <div
                    className="min-md:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
                    <p className="text-muted-foreground text-sm leading-normal font-normal">
                        Referrals
                    </p>
                    <div className={cn(loadingStateStyles, "w-11 h-4")}/>
                </div>
                <div
                    className="min-md:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
                    <p className="text-muted-foreground text-sm leading-normal font-normal">
                        Points
                    </p>
                    <div className={cn(loadingStateStyles, "w-[68px] h-4")}/>
                </div>
                <div
                    className="min-md:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
                    <p className="text-muted-foreground text-sm leading-normal font-normal">
                        Qualified
                    </p>
                    <div className="flex flex-row flex-nowrap justify-start items-center gap-2">
                        <div className={cn(loadingStateStyles, "w-4 h-4 rounded-full")}/>
                        <div className={cn(loadingStateStyles, "w-[52px] h-4")}/>
                    </div>
                </div>
                <div
                    className="min-md:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
                    <p className="text-muted-foreground text-sm leading-normal font-normal">
                        Qualified Contribution
                    </p>
                    <div className={cn(loadingStateStyles, "w-[120px] h-4")}/>
                </div>
                <div
                    className="min-md:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
                    <p className="text-muted-foreground text-sm leading-normal font-normal">
                        Tentative awards
                    </p>
                    <div className={cn(loadingStateStyles, "w-[88px] h-4")}/>
                </div>
            </div>
        </div>
    )
}