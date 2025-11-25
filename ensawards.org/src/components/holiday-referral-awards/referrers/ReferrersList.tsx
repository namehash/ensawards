import type {PaginatedAggregatedReferrers} from "@/utils/referrals.ts";
import {ReferrerCard, ReferrerCardLoading} from "@/components/atoms/cards/ReferrerCard.tsx";
import type {ReactElement} from "react";
import {FetchingErrorInfo, NoReferrersInfo} from "@/components/holiday-referral-awards/referrers/utils.tsx";
import {ReferrersSnapshotTime} from "@/components/holiday-referral-awards/referrers/utils.tsx";

export interface ReferrersListProps {
    aggregatedReferrersData: PaginatedAggregatedReferrers | null;
    isLoading: boolean;
    generateLinkCTA: ReactElement;
    error?: ReactElement;
    numberOfItemsToDisplay?: number;
    referrerPositionOffset?: number
}

export function ReferrersList({aggregatedReferrersData, isLoading, generateLinkCTA, error, referrerPositionOffset = 0, numberOfItemsToDisplay = 5}: ReferrersListProps) {
    if (isLoading || aggregatedReferrersData === null){
        return (
            <div className="w-full h-fit flex flex-col flex-nowrap justify-start items-center gap-2 sm:gap-3">
                {[...Array(numberOfItemsToDisplay).keys()].map((elem) => <ReferrerCardLoading position={referrerPositionOffset + elem + 1}/>)}
            </div>
        );
    }

    if (error !== undefined){
        return error;
    }

    if (aggregatedReferrersData.total === 0){
        return <div className="w-full h-fit flex flex-col flex-nowrap justify-start items-center gap-3 sm:gap-5">
            <NoReferrersInfo cta={generateLinkCTA}/>
            <ReferrersSnapshotTime lastUpdateTimestamp={aggregatedReferrersData.updatedAt} />
        </div>
    }

    return (
            <div className="w-full h-fit flex flex-col flex-nowrap justify-start items-end gap-2 sm:gap-3">
                <ReferrersSnapshotTime lastUpdateTimestamp={aggregatedReferrersData.updatedAt} />
                {aggregatedReferrersData.referrers.map((referrer, idx) => <ReferrerCard referrerData={referrer}
                                                                                        position={referrerPositionOffset + idx + 1}/>)}
            </div>
    );
}