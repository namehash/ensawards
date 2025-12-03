import { useEffect, useState } from "react";

import { ReferrerLeaderboardPage } from "@/components/holiday-referral-awards/referrers/ReferrerLeaderboardPage.tsx";
import { LeaderboardFetchErrorInfo } from "@/components/holiday-referral-awards/referrers/utils.tsx";
import { Pagination } from "@/components/molecules/Pagination.tsx";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { getENSNodeUrl } from "@/utils/env";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import { ENSNodeProvider, createConfig } from "@ensnode/ensnode-react";
import { ENSNodeClient, ReferrerLeaderboardPageResponseCodes } from "@ensnode/ensnode-sdk";
import type { ReferrerLeaderboardPage as ReferrerLeaderboardPageType } from "@namehash/ens-referrals";

export interface ReferrerLeaderboardProps {
  itemsPerPage?: number;
}

export function ReferrerLeaderboard({ itemsPerPage = 25 }: ReferrerLeaderboardProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchErrorMessage, setFetchErrorMessage] = useState("");
  const [leaderboardData, setLeaderboardData] = useState<ReferrerLeaderboardPageType | null>(null);
  const client = new ENSNodeClient({
    url: getENSNodeUrl(),
  });
  const ensNodeProviderConfig = createConfig({
    url: getENSNodeUrl(),
  });

  //TODO: Ideally that part could also be extracted (with useQuery or w/e)
  // so that we can do something similar like we do with ENSNodeConfigInfo in ENSAdmin
  // and reuse this fetch wherever we need
  async function fetchReferrerLeaderboard() {
    setFetchErrorMessage("");
    setIsLoading(true);
    try {
      const response = await client.getReferrerLeaderboard({
        page: currentPage,
        itemsPerPage: itemsPerPage,
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
  }, [currentPage]);

  return (
    <ENSNodeProvider config={ensNodeProviderConfig}>
      <TooltipProvider delayDuration={200} skipDelayDuration={0}>
        <div className="w-full max-w-[1216px] box-border h-fit flex flex-col flex-nowrap justify-start items-center gap-3 sm:gap-5">
          <ReferrerLeaderboardPage
            leaderboardPageData={leaderboardData}
            isLoading={isLoading}
            emptyLeaderboardCTA={
              <a
                className={cn(
                  shadcnButtonVariants({
                    variant: "outline",
                    size: "default",
                    className: "cursor-pointer rounded-full",
                  }),
                )}
                href="/ens-referral-awards"
              >
                Generate your referral link
              </a>
            }
            error={
              fetchErrorMessage ? (
                <LeaderboardFetchErrorInfo
                  message={fetchErrorMessage}
                  retryFunction={fetchReferrerLeaderboard}
                />
              ) : undefined
            }
            loadingStateData={{
              referrerRankOffset: (currentPage - 1) * itemsPerPage,
              itemsToDisplay: itemsPerPage,
            }}
          />
          {leaderboardData !== null &&
            leaderboardData.paginationContext.totalRecords > 0 &&
            numberOfPages > 1 && (
              <Pagination
                numberOfPages={numberOfPages}
                currentPage={currentPage}
                onPrevious={() => {
                  setCurrentPage((prev) => prev - 1);
                }}
                onNext={() => {
                  setCurrentPage((prev) => prev + 1);
                }}
                onChosen={(newPage) => {
                  setCurrentPage(newPage);
                }}
              />
            )}
        </div>
      </TooltipProvider>
    </ENSNodeProvider>
  );
}
