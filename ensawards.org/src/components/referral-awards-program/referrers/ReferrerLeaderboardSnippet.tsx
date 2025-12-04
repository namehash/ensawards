import { DisplayReferrerLeaderboardPage } from "@/components/referral-awards-program/referrers/DisplayReferrerLeaderboardPage.tsx";
import { LeaderboardFetchErrorInfo } from "@/components/referral-awards-program/referrers/utils.tsx";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { getENSNodeUrl } from "@/utils/env";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import { ENSNodeProvider, createConfig } from "@ensnode/ensnode-react";
import { ENSNodeClient, ReferrerLeaderboardPageResponseCodes } from "@ensnode/ensnode-sdk";
import type { ReferrerLeaderboardPage } from "@namehash/ens-referrals";
import { useEffect, useState } from "react";

type GenerateReferralLinkAction = "scroll" | "link";

export interface ReferrerLeaderboardSnippetProps {
  generateReferralLinkAction: GenerateReferralLinkAction;
  snippetSize?: number;
  header?: string;
}

export function ReferrerLeaderboardSnippet({
  generateReferralLinkAction,
  header,
  snippetSize = 3,
}: ReferrerLeaderboardSnippetProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchErrorMessage, setFetchErrorMessage] = useState("");
  const [leaderboardSnippetData, setLeaderboardSnippetData] =
    useState<ReferrerLeaderboardPage | null>(null);
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

      setLeaderboardSnippetData(response.data);
    } catch (error) {
      console.error(error);
      setLeaderboardSnippetData(null);
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

  const emptyReferrerLeaderboardCTA =
    generateReferralLinkAction === "scroll" ? (
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
          <DisplayReferrerLeaderboardPage
            leaderboardPageData={leaderboardSnippetData}
            isLoading={isLoading}
            emptyLeaderboardCTA={emptyReferrerLeaderboardCTA}
            leaderboardPageFetchError={
              fetchErrorMessage ? (
                <LeaderboardFetchErrorInfo
                  message={fetchErrorMessage}
                  retryFunction={fetchReferrerLeaderboard}
                />
              ) : undefined
            }
            leaderboardPageLoadingData={{
              itemsPerPage: snippetSize,
              currentPage: 1,
            }}
            header={header}
          />
          {leaderboardSnippetData !== null &&
            leaderboardSnippetData.paginationContext.totalRecords > snippetSize && (
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
