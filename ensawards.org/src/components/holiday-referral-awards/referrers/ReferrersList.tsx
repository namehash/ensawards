import type {PaginatedAggregatedReferrers} from "@ensnode/ensnode-sdk";
import {ReferrerCard, ReferrerCardLoading} from "@/components/atoms/cards/ReferrerCard.tsx";
import type {ReactElement} from "react";
import {FetchingErrorInfo, NoReferrersInfo} from "@/components/holiday-referral-awards/referrers/utils.tsx";
import {ReferrersSnapshotTime} from "@/components/holiday-referral-awards/referrers/utils.tsx";
import {cn} from "@/utils/tailwindClassConcatenation.ts";

export interface ReferrersListProps {
    aggregatedReferrersData: PaginatedAggregatedReferrers | null;
    isLoading: boolean;
    generateLinkCTA: ReactElement;
    error?: ReactElement;
    header?: string;
    numberOfItemsToDisplay?: number;
    referrerPositionOffset?: number
}

export function ReferrersList({aggregatedReferrersData, isLoading, generateLinkCTA, error, header, referrerPositionOffset = 0, numberOfItemsToDisplay = 5}: ReferrersListProps) {
    if (error !== undefined){
        return error;
    }

    if (isLoading || aggregatedReferrersData === null){
        return (
            <div className="w-full h-fit flex flex-col flex-nowrap justify-start items-center gap-2 sm:gap-3">
                {[...Array(numberOfItemsToDisplay).keys()].map((elem) => <ReferrerCardLoading key={`Referrer-loading-${referrerPositionOffset + elem}`} position={referrerPositionOffset + elem + 1}/>)}
            </div>
        );
    }

    if (aggregatedReferrersData.total === 0){
        return <div className="w-full h-fit md:min-h-[305px] flex flex-col flex-nowrap justify-center items-center gap-3 sm:gap-4 md:bg-[url(/src/assets/emptyReferrersListBackgroundImage.png)] bg-no-repeat bg-contain bg-center">
            <NoReferrersInfo cta={generateLinkCTA}/>
            <ReferrersSnapshotTime lastUpdateTimestamp={aggregatedReferrersData.updatedAt} />
        </div>
    }

    return (
            <div className="w-full h-fit flex flex-col flex-nowrap justify-start items-start gap-2 sm:gap-3">
                <div className={cn("w-full h-fit flex flex-row flex-nowrap items-end", header ? "justify-between" : "justify-end")}>
                    {header && <div className="w-full h-fit flex flex-col justify-start items-start gap-0">
                        <h3 className="text-xl sm:text-2xl leading-normal font-semibold text-black">
                            {header}
                        </h3>
                        <p className="text-sm leading-normal font-normal text-muted-foreground">It may take a while for
                            the data to be actualized</p>
                    </div>
                    }
                    <ReferrersSnapshotTime lastUpdateTimestamp={aggregatedReferrersData.updatedAt}/>
                </div>
                {aggregatedReferrersData.referrers.map((referrer, idx) => <ReferrerCard key={`Referrer-${referrer.referrer}`} referrerData={referrer}
                                                                                        position={referrerPositionOffset + idx + 1}/>)}
            </div>
    );
}