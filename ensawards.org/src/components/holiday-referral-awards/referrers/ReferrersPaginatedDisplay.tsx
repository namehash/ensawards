import {useEffect, useState} from "react";

import {cn} from "@/utils/tailwindClassConcatenation.ts";
import {FetchingErrorInfo} from "@/components/holiday-referral-awards/referrers/utils.tsx";
import {ReferrersList} from "@/components/holiday-referral-awards/referrers/ReferrersList.tsx";
import {getENSNodeUrl} from "@/utils/env";
import {
    ENSNodeClient,
    type PaginatedAggregatedReferrers,
    PaginatedAggregatedReferrersResponseCodes
} from "@ensnode/ensnode-sdk";
import {shadcnButtonVariants} from "@/components/ui/shadcnButtonStyles.ts";
import {Pagination} from "@/components/molecules/Pagination.tsx";

export interface ReferrersPaginatedDisplayProps {
    itemsPerPage?: number
}

//TODO: think about additional props that this component could / should take
export function ReferrersPaginatedDisplay({itemsPerPage = 5}: ReferrersPaginatedDisplayProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [fetchErrorMessage, setFetchErrorMessage] = useState("");
    const [aggregatedReferrersData, setAggregatedReferrersData] = useState<PaginatedAggregatedReferrers | null>(null);
    const client = new ENSNodeClient({
        url: new URL("https://api.alpha-sepolia.yellow.ensnode.io/"), //TODO: replace with the line below later on
        // url: getENSNodeUrl(),
    });

    //TODO: Ideally that part could also be extracted (with useQuery or w/e)
    // so that we can do something similar like we do with ENSNodeConfigInfo in ENSAdmin
    // and reuse this fetch wherever we need
    async function startFetching() {
        setFetchErrorMessage("");
        setIsLoading(true);
        try {
            const response = await client.getAggregatedReferrers({page: currentPage, itemsPerPage: itemsPerPage});

            if (response.responseCode !== PaginatedAggregatedReferrersResponseCodes.Ok){
                setFetchErrorMessage(response.errorMessage);
                setIsLoading(false);
                return;
            }

            setAggregatedReferrersData(response.data);
            setNumberOfPages(Math.ceil(response.data.total / itemsPerPage));

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
    }, [currentPage]);


    return <div className="w-full max-w-[1216px] box-border h-fit flex flex-col flex-nowrap justify-start items-center gap-3 sm:gap-5">
        <ReferrersList aggregatedReferrersData={aggregatedReferrersData}
                       isLoading={isLoading}
                       generateLinkCTA={<a className={cn(shadcnButtonVariants({
                           variant: "outline",
                           size: "default",
                           className:
                               "cursor-pointer rounded-full",
                       }))} href="/ens-referral-awards">Generate your
                           referral
                           link</a>}
                       error={fetchErrorMessage ?
                           <FetchingErrorInfo errorMessage={fetchErrorMessage} retryFunction={startFetching} /> : undefined}
                       referrerPositionOffset={(currentPage - 1) * itemsPerPage}
                       numberOfItemsToDisplay={itemsPerPage}
        />
        {aggregatedReferrersData !== null && aggregatedReferrersData.referrers.length > 0 && numberOfPages > 1 && <Pagination numberOfPages={numberOfPages} currentPage={currentPage} onPrevious={() => {
            setCurrentPage((prev) => prev - 1)
        }} onNext={() => {
            setCurrentPage((prev) => prev + 1)
        }} onChosen={(newPage) => {setCurrentPage(newPage)}}/>}
    </div>
}