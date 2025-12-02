import { ReferrersList } from "@/components/holiday-referral-awards/referrers/ReferrersList.tsx";
import { FetchingErrorInfo } from "@/components/holiday-referral-awards/referrers/utils.tsx";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import { ENSNodeProvider, createConfig } from "@ensnode/ensnode-react";
import { ENSNodeClient, ReferrerLeaderboardPageResponseCodes } from "@ensnode/ensnode-sdk";
import type { ReferrerLeaderboardPage } from "@namehash/ens-referrals";
import { useEffect, useState } from "react";

export interface TopReferrersProps {
  onENSHolidayReferralsAwards: boolean;
  snippetSize?: number;
  header?: string;
}

export function TopReferrers({
  onENSHolidayReferralsAwards,
  header,
  snippetSize = 3,
}: TopReferrersProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchErrorMessage, setFetchErrorMessage] = useState("");
  const [topReferrersData, setTopReferrersData] = useState<ReferrerLeaderboardPage | null>(null);
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
        page: 1,
        itemsPerPage: snippetSize,
      });

      if (response.responseCode !== ReferrerLeaderboardPageResponseCodes.Ok) {
        setFetchErrorMessage(response.errorMessage);
        setIsLoading(false);
        return;
      }

      setTopReferrersData(response.data);
    } catch (error) {
      console.error(error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      setTopReferrersData(null);
      setFetchErrorMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    startFetching();
  }, []);

  const emptyStateCTAStyles = cn(
    shadcnButtonVariants({
      variant: "outline",
      size: "default",
      className: "cursor-pointer rounded-full",
    }),
  );

  const emptyStateCTA = onENSHolidayReferralsAwards ? (
    <a
      className={emptyStateCTAStyles}
      onClick={() => document.getElementById("referral award recipient")!.focus()}
    >
      Generate your referral link
    </a>
  ) : (
    <a className={emptyStateCTAStyles} href="/ens-referral-awards">
      Generate your referral link
    </a>
  );

  return (
    <ENSNodeProvider config={ensNodeReactConfig}>
      <TooltipProvider delayDuration={200} skipDelayDuration={0}>
        <div className="w-full max-w-[1216px] box-border h-fit flex flex-col flex-nowrap justify-start items-start gap-2 sm:gap-3">
          <ReferrersList
            referrersData={topReferrersData}
            isLoading={isLoading}
            generateLinkCTA={emptyStateCTA}
            error={
              fetchErrorMessage ? (
                <FetchingErrorInfo errorMessage={fetchErrorMessage} retryFunction={startFetching} />
              ) : undefined
            }
            loadingStateData={{
              numberOfItemsToDisplay: snippetSize,
              referrerPositionOffset: 0,
            }}
            header={header}
          />
          {topReferrersData !== null &&
            topReferrersData.paginationContext.totalRecords > snippetSize && (
              <a
                href="/leaderboards/referrer"
                className={cn(
                  shadcnButtonVariants({
                    variant: "ghost",
                    size: "default",
                    className: "cursor-pointer rounded-full text-sm max-sm:w-full",
                  }),
                )}
              >
                View full ENS referral leaderboard
              </a>
            )}
        </div>
      </TooltipProvider>
    </ENSNodeProvider>
  );
}
