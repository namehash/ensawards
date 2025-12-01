import { useEffect, useState } from "react";

import { ReferrersList } from "@/components/holiday-referral-awards/referrers/ReferrersList.tsx";
import { FetchingErrorInfo } from "@/components/holiday-referral-awards/referrers/utils.tsx";
import { Pagination } from "@/components/molecules/Pagination.tsx";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { getENSNodeUrl } from "@/utils/env";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import { ENSNodeProvider, createConfig } from "@ensnode/ensnode-react";
import { ENSNodeClient, ReferrerLeaderboardPageResponseCodes } from "@ensnode/ensnode-sdk";
import type { ReferrerLeaderboardPage } from "@namehash/ens-referrals";

export interface ReferrersPaginatedDisplayProps {
  itemsPerPage?: number;
}

export function ReferrersPaginatedDisplay({ itemsPerPage = 12 }: ReferrersPaginatedDisplayProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchErrorMessage, setFetchErrorMessage] = useState("");
  const [referrersLeaderboardsData, setReferrersLeaderboardsData] =
    useState<ReferrerLeaderboardPage | null>(null);
  const client = new ENSNodeClient({
    url: new URL("https://api.alpha-sepolia.yellow.ensnode.io/"), //TODO: replace with the line below later on
    // url: getENSNodeUrl(),
  });
  const ensNodeReactConfig = createConfig({
    url: "https://api.alpha-sepolia.yellow.ensnode.io/",
  }); //TODO: replace with getENSNodeUrl for prod

  //TODO: Ideally that part could also be extracted (with useQuery or w/e)
  // so that we can do something similar like we do with ENSNodeConfigInfo in ENSAdmin
  // and reuse this fetch wherever we need
  async function startFetching() {
    setFetchErrorMessage("");
    setIsLoading(true);
    try {
      const response = await client.getReferrerLeaderboard({
        page: currentPage,
        itemsPerPage: itemsPerPage,
      });

      if (response.responseCode !== ReferrerLeaderboardPageResponseCodes.Ok) {
        setFetchErrorMessage(response.errorMessage);
        setIsLoading(false);
        return;
      }

      setReferrersLeaderboardsData(response.data);
      setNumberOfPages(response.data.paginationContext.totalPages);
    } catch (error) {
      console.error(error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      setReferrersLeaderboardsData(null);
      setFetchErrorMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    startFetching();
  }, [currentPage]);

  return (
    <ENSNodeProvider config={ensNodeReactConfig}>
      <TooltipProvider delayDuration={200} skipDelayDuration={0}>
        <div className="w-full max-w-[1216px] box-border h-fit flex flex-col flex-nowrap justify-start items-center gap-3 sm:gap-5">
          <ReferrersList
            referrersData={referrersLeaderboardsData}
            isLoading={isLoading}
            generateLinkCTA={
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
                <FetchingErrorInfo errorMessage={fetchErrorMessage} retryFunction={startFetching} />
              ) : undefined
            }
            loadingStateData={{
              referrerPositionOffset: referrersLeaderboardsData?.paginationContext.startIndex || 0,
              numberOfItemsToDisplay: itemsPerPage,
            }}
          />
          {referrersLeaderboardsData !== null &&
            referrersLeaderboardsData.paginationContext.totalRecords > 0 &&
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
