import {useEffect, useState} from "react";
import {
    getAggregatedReferrers,
    type PaginatedAggregatedReferrers,
    PaginatedAggregatedReferrersResponseCodes
} from "@/utils/referrals.ts";
import {ReferrersList} from "@/components/holiday-referral-awards/referrers/ReferrersList.tsx";
import {FetchingErrorInfo} from "@/components/holiday-referral-awards/referrers/utils.tsx";
import {cn} from "@/utils/tailwindClassConcatenation.ts";
import {shadcnButtonVariants} from "@/components/ui/shadcnButtonStyles.ts";

export interface TopReferrersProps {
    snippetSize?: number;
}

export function TopReferrers({snippetSize = 3}:TopReferrersProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [fetchErrorMessage, setFetchErrorMessage] = useState("");
    const [aggregatedReferrersData, setAggregatedReferrersData] = useState<PaginatedAggregatedReferrers | null>(null);

    //TODO: Ideally that part could also be extracted (with useQuery or w/e)
    // so that we can do something similar like we do with ENSNodeConfigInfo in ENSAdmin
    // and reuse this fetch wherever we need
    async function startFetching() {
        try {
            setIsLoading(true);
            const response = await getAggregatedReferrers({page: 1, itemsPerPage: snippetSize});

            if (response.responseCode !== PaginatedAggregatedReferrersResponseCodes.Ok){
                setFetchErrorMessage(response.errorMessage);
                setIsLoading(false);
                return;
            }

            setAggregatedReferrersData(response.data);

        } catch (error) {
            console.error(error);
            const errorMessage = error instanceof Error ? error.message : "Unknown error";
            setAggregatedReferrersData(null);
            setFetchErrorMessage(errorMessage);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        startFetching();
    }, []);


    return <div
        className="w-full max-w-[1216px] box-border h-fit flex flex-col flex-nowrap justify-start items-start gap-2 sm:gap-3">
        <div className="w-full h-fit flex flex-col justify-start items-center gap-3">
            <h3 className="text-3xl leading-normal font-semibold text-black">
                Top referrers
            </h3>
            <p className="text-sm leading-normal font-normal text-muted-foreground">It may take a while for the data to be actualized</p>
        </div>
        <ReferrersList aggregatedReferrersData={aggregatedReferrersData}
                       isLoading={isLoading}
                       generateLinkCTA={<a onClick={() => console.log("placeholder")}>Generate your referral link</a>}
                       error={fetchErrorMessage ?
                           <FetchingErrorInfo errorMessage={fetchErrorMessage} retryFunction={() => {
                               startFetching()
                           }}/> : undefined}
                       numberOfItemsToDisplay={snippetSize}
        />
        <a
            href="/leaderboards/referrer"
            className={cn(
                shadcnButtonVariants({
                    variant: "ghost",
                    size: "default",
                    className: "cursor-pointer rounded-full text-sm max-sm:w-full",
                }),
            )}>
            View full referrer leaderboard
        </a>
    </div>
}