import { ReferrerLeaderboardPage } from "@/components/holiday-referral-awards/referrers/ReferrerLeaderboardPage.tsx";
import { LeaderboardFetchErrorInfo } from "@/components/holiday-referral-awards/referrers/utils.tsx";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { getENSNodeUrl } from "@/utils/env";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import { ENSNodeProvider, createConfig } from "@ensnode/ensnode-react";
import { ENSNodeClient, ReferrerLeaderboardPageResponseCodes } from "@ensnode/ensnode-sdk";
import type { ReferrerLeaderboardPage as ReferrerLeaderboardPageType } from "@namehash/ens-referrals";
import { useEffect, useState } from "react";

export interface ReferrerLeaderboardSnippetProps {
  locatedOnHolidayReferralAwards: boolean;
  snippetSize?: number;
  header?: string;
}

export function ReferrerLeaderboardSnippet({
  locatedOnHolidayReferralAwards,
  header,
  snippetSize = 3,
}: ReferrerLeaderboardSnippetProps) {
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
        page: 1,
        itemsPerPage: snippetSize,
      });

      if (response.responseCode !== ReferrerLeaderboardPageResponseCodes.Ok) {
        console.error(response.errorMessage);
        setFetchErrorMessage("An error has occurred while loading the leaderboard.");
        setIsLoading(false);
        return;
      }

      setLeaderboardData(response.data);
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
  }, []);

  const emptyLeaderboardCTAStyles = cn(
    shadcnButtonVariants({
      variant: "outline",
      size: "default",
      className: "cursor-pointer rounded-full",
    }),
  );

  const emptyReferrerLeaderboardCTA = locatedOnHolidayReferralAwards ? (
    <a
      className={emptyLeaderboardCTAStyles}
      onClick={() => document.getElementById("referral award recipient")!.focus()}
    >
      Generate your referral link
    </a>
  ) : (
    <a className={emptyLeaderboardCTAStyles} href="/ens-referral-awards">
      Generate your referral link
    </a>
  );

  return (
    <ENSNodeProvider config={ensNodeProviderConfig}>
      <TooltipProvider delayDuration={200} skipDelayDuration={0}>
        <div className="w-full max-w-[1216px] box-border h-fit flex flex-col flex-nowrap justify-start items-start gap-2 sm:gap-3 relative z-10">
          <ReferrerLeaderboardPage
            leaderboardPageData={leaderboardData}
            isLoading={isLoading}
            emptyLeaderboardCTA={emptyReferrerLeaderboardCTA}
            error={
              fetchErrorMessage ? (
                <LeaderboardFetchErrorInfo
                  message={fetchErrorMessage}
                  retryFunction={fetchReferrerLeaderboard}
                />
              ) : undefined
            }
            loadingStateData={{
              itemsToDisplay: snippetSize,
              referrerRankOffset: 0,
            }}
            header={header}
          />
          {leaderboardData !== null &&
            leaderboardData.paginationContext.totalRecords > snippetSize && (
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
