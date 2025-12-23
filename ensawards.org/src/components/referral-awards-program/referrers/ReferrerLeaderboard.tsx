import { useEffect, useMemo, useState } from "react";

import { ErrorInfo } from "@/components/atoms/ErrorInfo.tsx";
import { DisplayPagination, DisplaySimplePagination } from "@/components/molecules/Pagination.tsx";
import { DisplayReferrerLeaderboardPage } from "@/components/referral-awards-program/referrers/DisplayReferrerLeaderboardPage.tsx";
import { ReferrerLeaderboardLastUpdateTime } from "@/components/referral-awards-program/referrers/utils.tsx";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { scrollWithOffset } from "@/utils/domActions.ts";
import { getENSNodeUrl } from "@/utils/env";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import { ENSNodeProvider, createConfig } from "@ensnode/ensnode-react";
import { ENSNodeClient, ReferrerLeaderboardPageResponseCodes } from "@ensnode/ensnode-sdk";
import type { ReferrerLeaderboardPage } from "@namehash/ens-referrals";

export interface ReferrerLeaderboardProps {
  recordsPerPage?: number;
}
/**
 * Fetches Referrer Leaderboard through ENSNode and displays a single page of the leaderboard and pagination.
 */
export function ReferrerLeaderboard({ recordsPerPage = 25 }: ReferrerLeaderboardProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentRecordsPerPage, setCurrentRecordsPerPage] = useState(recordsPerPage);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchErrorMessage, setFetchErrorMessage] = useState("");
  const [leaderboardData, setLeaderboardData] = useState<ReferrerLeaderboardPage | null>(null);
  const ensNodeUrl = getENSNodeUrl();
  const client = useMemo(() => new ENSNodeClient({ url: ensNodeUrl }), [ensNodeUrl]);
  const config = useMemo(() => createConfig({ url: ensNodeUrl }), [ensNodeUrl]);

  //TODO: Ideally that part could also be extracted (with useQuery or w/e)
  // so that we can do something similar like we do with ENSNodeConfigInfo in ENSAdmin
  // and reuse this fetch wherever we need
  async function fetchReferrerLeaderboard() {
    setFetchErrorMessage("");
    setIsLoading(true);
    scrollWithOffset("leaderboard-header", 75);
    try {
      const response = await client.getReferrerLeaderboardPage({
        page: currentPage,
        recordsPerPage: currentRecordsPerPage,
      });

      if (response.responseCode !== ReferrerLeaderboardPageResponseCodes.Ok) {
        console.error(response.errorMessage);
        setLeaderboardData(null);
        setFetchErrorMessage("An error occurred while loading the leaderboard.");
        setIsLoading(false);
        return;
      }

      setLeaderboardData(response.data);
      setTotalPages(response.data.pageContext.totalPages);
    } catch (error) {
      console.error(error);
      setLeaderboardData(null);
      setFetchErrorMessage("An error occurred while loading the leaderboard.");
    } finally {
      setIsLoading(false);

      // Scrolling twice due to browser's scroll showing & hiding being unpredictable.
      // If the last page has few enough items the scroll will hide (for a large enough amount it won't)
      // and that affects the auto-scroll behavior when going back to a "full" page
      scrollWithOffset("leaderboard-header", 75);
    }
  }

  useEffect(() => {
    fetchReferrerLeaderboard();
  }, [currentPage, currentRecordsPerPage]);

  return (
    <ENSNodeProvider
      config={config}
      queryClientOptions={{
        defaultOptions: { queries: { staleTime: 30 * 1000 } },
      }}
    >
      <TooltipProvider delayDuration={200} skipDelayDuration={0}>
        <div className="w-full max-w-[1216px] box-border h-fit flex flex-col flex-nowrap justify-start items-center gap-6 sm:gap-4">
          <div className="w-full flex flex-col sm:flex-row sm:flex-wrap justify-start sm:justify-between items-start sm:items-center gap-y-2">
            <h3 id="leaderboard-header" className="text-2xl leading-normal font-semibold">
              Leaderboard
            </h3>
            {isLoading ? (
              <Skeleton className="w-[225px] sm:w-[255px] sm:h-[14px] h-4 mt-1 mb-1 sm:mb-[3px] bg-gray-200" />
            ) : (
              leaderboardData !== null &&
              !fetchErrorMessage && (
                <ReferrerLeaderboardLastUpdateTime
                  timestamp={leaderboardData.accurateAsOf}
                  className="text-base sm:text-sm"
                />
              )
            )}
          </div>
          {isLoading ? (
            <div className="w-full  h-9 flex flex-row justify-start items-center">
              <Skeleton className="w-[205px] h-4 mt-1 mb-1 bg-gray-200" />
            </div>
          ) : (
            leaderboardData !== null &&
            leaderboardData.pageContext.totalRecords > 0 && (
              <DisplaySimplePagination
                totalPages={totalPages}
                totalRecords={leaderboardData.pageContext.totalRecords}
                paginationParams={{
                  page: currentPage,
                  recordsPerPage: currentRecordsPerPage,
                }}
                onPrevious={() => {
                  setCurrentPage((prev) => prev - 1);
                }}
                onNext={() => {
                  setCurrentPage((prev) => prev + 1);
                }}
                recordAlias={{ singular: "referrer", plural: "referrers" }}
                quantityInfoPrefix="Rank"
                quantityClassName="text-base text-black font-semibold"
              />
            )
          )}
          <DisplayReferrerLeaderboardPage
            leaderboardPageData={leaderboardData}
            isLoading={isLoading}
            leaderboardPageFetchError={
              fetchErrorMessage ? (
                <ErrorInfo
                  title="Error loading referrer data"
                  description={[`${fetchErrorMessage} Please try again later.`]}
                >
                  <button
                    className={cn(
                      shadcnButtonVariants({
                        variant: "outline",
                        size: "default",
                        className: "rounded-full cursor-pointer",
                      }),
                    )}
                    onClick={() => fetchReferrerLeaderboard()}
                  >
                    Try again
                  </button>
                </ErrorInfo>
              ) : undefined
            }
            paginationParams={{
              page: currentPage,
              recordsPerPage: recordsPerPage,
            }}
          />
          {isLoading ? (
            <div className="w-full flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-center gap-y-3">
              <Skeleton className="w-[185px] h-[14px] mt-1 mb-[3px] bg-gray-200" />
              <Skeleton className="w-[330px] h-9 bg-gray-200" />
              <div className="flex flex-row flex-nowrap justify-center items-center gap-3">
                <Skeleton className="w-[125px] h-[14px] mt-1 mb-[3px] bg-gray-200" />
                <Skeleton className="w-[75px] h-9 bg-gray-200" />
              </div>
            </div>
          ) : (
            leaderboardData !== null &&
            leaderboardData.pageContext.totalRecords > 0 && (
              <DisplayPagination
                totalPages={totalPages}
                totalRecords={leaderboardData.pageContext.totalRecords}
                paginationParams={{
                  page: currentPage,
                  recordsPerPage: currentRecordsPerPage,
                }}
                onPrevious={() => {
                  setCurrentPage((prev) => prev - 1);
                }}
                onNext={() => {
                  setCurrentPage((prev) => prev + 1);
                }}
                onSelectPage={(newPage) => {
                  setCurrentPage(newPage);
                }}
                onSelectRecordsPerPage={(newItemsPerPage) => {
                  if (newItemsPerPage !== currentRecordsPerPage) {
                    setCurrentPage(1);
                    setCurrentRecordsPerPage(newItemsPerPage);
                  }
                }}
                recordsPerPageOptions={[25, 50, recordsPerPage]}
                recordAlias={{ singular: "referrer", plural: "referrers" }}
                quantityInfoPrefix="Rank"
                quantityClassName="text-muted-foreground hidden sm:block"
              />
            )
          )}
        </div>
      </TooltipProvider>
    </ENSNodeProvider>
  );
}
