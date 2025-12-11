import { useEffect, useMemo, useState } from "react";

import { ErrorInfo } from "@/components/atoms/ErrorInfo.tsx";
import {
  DisplayPagination,
  DisplaySimplePagination,
} from "@/components/molecules/Pagination.tsx";
import { DisplayReferrerLeaderboardPage } from "@/components/referral-awards-program/referrers/DisplayReferrerLeaderboardPage.tsx";
import { ReferrerLeaderboardLastUpdateTime } from "@/components/referral-awards-program/referrers/utils.tsx";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { getENSNodeUrl } from "@/utils/env";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import { ENSNodeProvider, createConfig } from "@ensnode/ensnode-react";
import { ENSNodeClient, ReferrerLeaderboardPageResponseCodes } from "@ensnode/ensnode-sdk";
import type { ReferrerLeaderboardPage } from "@namehash/ens-referrals";

export interface ReferrerLeaderboardProps {
  itemsPerPage?: number;
}
/**
 * Fetches Referrer Leaderboard through ENSNode and displays a single page of the leaderboard and pagination.
 */
export function ReferrerLeaderboard({ itemsPerPage = 25 }: ReferrerLeaderboardProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItemsPerPage, setCurrentItemsPerPage] = useState(itemsPerPage);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
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
    try {
      const response = await client.getReferrerLeaderboard({
        page: currentPage,
        itemsPerPage: currentItemsPerPage,
      });

      if (response.responseCode !== ReferrerLeaderboardPageResponseCodes.Ok) {
        console.error(response.errorMessage);
        setFetchErrorMessage("An error has occurred while loading the leaderboard.");
        setIsLoading(false);
        return;
      }

      setLeaderboardData(response.data);
      setNumberOfPages(response.data.paginationContext.totalPages);
    } catch (error) {
      console.error(error);
      setLeaderboardData(null);
      setFetchErrorMessage("An error has occurred while loading the leaderboard.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchReferrerLeaderboard();
  }, [currentPage, currentItemsPerPage]);

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
            <h3 className="text-2xl leading-normal font-semibold">Leaderboard</h3>
            {isLoading ? (
              <Skeleton className="w-[225px] sm:w-[255px] h-[14px] sm:h-4 mt-[4px] mb-[3px] sm:my-1 bg-gray-200" />
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
          {leaderboardData !== null && leaderboardData.paginationContext.totalRecords > 0 && (
            <DisplaySimplePagination
              numberOfPages={numberOfPages}
              totalRecords={leaderboardData.paginationContext.totalRecords}
              paginationParams={{
                page: currentPage,
                itemsPerPage: currentItemsPerPage,
              }}
              onPrevious={() => {
                setCurrentPage((prev) => prev - 1);
              }}
              onNext={() => {
                setCurrentPage((prev) => prev + 1);
              }}
              onChosen={(newPage) => {
                setCurrentPage(newPage);
              }}
              quantityClassName="text-base text-black font-semibold"
            />
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
            leaderboardPageLoadingData={{
              page: currentPage,
              itemsPerPage: itemsPerPage,
            }}
          />
          {leaderboardData !== null && leaderboardData.paginationContext.totalRecords > 0 && (
            <DisplayPagination
              numberOfPages={numberOfPages}
              totalRecords={leaderboardData.paginationContext.totalRecords}
              paginationParams={{
                page: currentPage,
                itemsPerPage: currentItemsPerPage,
              }}
              onPrevious={() => {
                setCurrentPage((prev) => prev - 1);
              }}
              onNext={() => {
                setCurrentPage((prev) => prev + 1);
              }}
              onChosen={(newPage) => {
                setCurrentPage(newPage);
              }}
              onItemsPerPageChange={(newItemsPerPage) => setCurrentItemsPerPage(newItemsPerPage)}
              possibleItemsPerPageValues={[
                ...new Set([25, 50, itemsPerPage].sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))),
              ]}
              selectorDescription="Referrers per page"
              quantityClassName="text-muted-foreground hidden sm:block"
            />
          )}
        </div>
      </TooltipProvider>
    </ENSNodeProvider>
  );
}
