import {useEffect, useMemo, useState} from "react";
import {
    type AggregatedReferrerMetricsContribution,
    getAggregatedReferrers,
    PaginatedAggregatedReferrersResponseCodes
} from "@/utils/referrals.ts";
import {ReferrerCard} from "@/components/atoms/cards/ReferrerCard.tsx";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {cn} from "@/utils/tailwindClassConcatenation.ts";

export interface ReferrersListProps {
    itemsPerPage?: number;
}

export function ReferrersList({itemsPerPage = 5}: ReferrersListProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [fetchErrorMessage, setFetchErrorMessage] = useState("");
    const [referrersData, setReferrersData] = useState<AggregatedReferrerMetricsContribution[]>([]);

    useEffect(() => {
        async function startFetching() {
            try {
                setIsLoading(true);
                const response = await getAggregatedReferrers({page: currentPage, itemsPerPage: itemsPerPage});

                if (response.responseCode !== PaginatedAggregatedReferrersResponseCodes.Ok){
                    setFetchErrorMessage(response.errorMessage);
                    setIsLoading(false);
                }
                else {
                    setReferrersData(response.data.referrers);
                    setNumberOfPages(Math.ceil(response.data.total / itemsPerPage));
                }
            } catch (error) {
                console.error(error);
                const errorMessage = error instanceof Error ? error.message : "Unknow error";
                setFetchErrorMessage(errorMessage);
            } finally {
                setIsLoading(false);
            }
        }

        let ignore = false;
        startFetching();
        return () => {
            ignore = true;
        }
    }, [currentPage]);


    return <div>
        {isLoading ? <p>LOADING</p> : <div>
            {fetchErrorMessage && <div>
                <h3>ERROR</h3>
                <p>{fetchErrorMessage}</p>
            </div>}
            {referrersData.length > 0 ?
                <div>
                    {referrersData.map((referrer, idx) => <ReferrerCard referrerData={referrer} position={idx + 1}/>)}
                    <div className="flex flex-row justify-center items-center gap-3">
                        <button disabled={currentPage === 1} onClick={() => {setCurrentPage((prev) => prev - 1)}}><ChevronLeft  className={cn(currentPage === 1 ? "text-black/40" : "text-black cursor-pointer")}/></button>
                        <p>{currentPage}</p>
                        <button disabled={currentPage === numberOfPages} onClick={() => {setCurrentPage((prev) => prev + 1)}}><ChevronRight className={cn(currentPage === numberOfPages ? "text-black/40" : "text-black cursor-pointer")} /></button>
                    </div>
                </div> : <p>No referrers</p>
            }
        </div>
        }
    </div>
}