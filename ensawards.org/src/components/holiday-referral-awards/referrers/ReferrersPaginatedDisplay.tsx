import {useEffect, useState} from "react";

import {ChevronLeft, ChevronRight} from "lucide-react";
import {cn} from "@/utils/tailwindClassConcatenation.ts";
import {FetchingErrorInfo} from "@/components/holiday-referral-awards/referrers/utils.tsx";
import {ReferrersList} from "@/components/holiday-referral-awards/referrers/ReferrersList.tsx";
import {getENSNodeUrl} from "@/utils/env";
import {
    ENSNodeClient,
    type PaginatedAggregatedReferrers,
    PaginatedAggregatedReferrersResponseCodes
} from "@ensnode/ensnode-sdk";

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
        try {
            setIsLoading(true);
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
                       generateLinkCTA={<a onClick={() => console.log("placeholder")}>Generate your referral link</a>}
                       error={fetchErrorMessage ?
                           <FetchingErrorInfo errorMessage={fetchErrorMessage} retryFunction={() => {startFetching()}} /> : undefined}
                       referrerPositionOffset={(currentPage - 1) * itemsPerPage}
                       numberOfItemsToDisplay={itemsPerPage}
        />
        {aggregatedReferrersData !== null && aggregatedReferrersData.referrers.length > 0 && <div className="flex flex-row justify-center items-center gap-3">
            <button disabled={currentPage === 1} onClick={() => {
                setCurrentPage((prev) => prev - 1)
            }}><ChevronLeft className={cn(currentPage === 1 ? "text-black/40" : "text-black cursor-pointer")}/></button>
            <p>{currentPage}</p>
            <button disabled={currentPage === numberOfPages} onClick={() => {
                setCurrentPage((prev) => prev + 1)
            }}><ChevronRight
                className={cn(currentPage === numberOfPages ? "text-black/40" : "text-black cursor-pointer")}/></button>
        </div>}
    </div>
}