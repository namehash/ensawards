import { ErrorInfo } from "@/components/atoms/ErrorInfo.tsx";
import { LastUpdateTimeLoading } from "@/components/atoms/datetime/LastUpdateTime.tsx";
import { DisplayReferrerLeaderboardPage } from "@/components/referral-awards-program/referrers/DisplayReferrerLeaderboardPage.tsx";
import { ReferrerLeaderboardLastUpdateTime } from "@/components/referral-awards-program/referrers/utils.tsx";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { getENSNodeUrl } from "@/utils/env";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import { ENSNodeProvider, createConfig } from "@ensnode/ensnode-react";
import {
  ENSReferralsClient,
  type ReferrerLeaderboardPage,
  ReferrerLeaderboardPageResponseCodes,
} from "@namehash/ens-referrals";
import type { VariantProps } from "class-variance-authority";
import { useEffect, useMemo, useState } from "react";

export interface ReferrerLeaderboardSnippetProps {
  snippetSize?: number;
  header?: string;
  showLastUpdateTime?: boolean;
  fullLeaderboardButtonVariant?: VariantProps<typeof shadcnButtonVariants>["variant"];
}
/**
 * Fetches {@link snippetSize} top referrers from the Referrer Leaderboard through ENSNode
 * and displays them as a snippet of the whole leaderboard.
 */
export function ReferrerLeaderboardSnippet({
  header,
  snippetSize = 3,
  showLastUpdateTime = false,
  fullLeaderboardButtonVariant = "ghost",
}: ReferrerLeaderboardSnippetProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchErrorMessage, setFetchErrorMessage] = useState("");
  const [leaderboardSnippetData, setLeaderboardSnippetData] =
    useState<ReferrerLeaderboardPage | null>(null);
  const ensNodeUrl = getENSNodeUrl();
  const client = useMemo(() => new ENSReferralsClient({ url: ensNodeUrl }), [ensNodeUrl]);
  const config = useMemo(() => createConfig({ url: ensNodeUrl }), [ensNodeUrl]);

  //TODO: Ideally that part could also be extracted (with useQuery or w/e)
  // so that we can do something similar like we do with ENSNodeConfigInfo in ENSAdmin
  // and reuse this fetch wherever we need
  async function fetchReferrerLeaderboard() {
    setFetchErrorMessage("");
    setIsLoading(true);
    try {
      const response = await client.getReferrerLeaderboardPage({
        page: 1,
        recordsPerPage: snippetSize,
      });

      if (response.responseCode !== ReferrerLeaderboardPageResponseCodes.Ok) {
        console.error(response.errorMessage);
        setFetchErrorMessage("An error occurred while loading the leaderboard.");
        setIsLoading(false);
        return;
      }

      setLeaderboardSnippetData(response.data);
    } catch (error) {
      console.error(error);
      setLeaderboardSnippetData(null);
      setFetchErrorMessage("An error occurred while loading the leaderboard.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchReferrerLeaderboard();
  }, []);

  return (
    <ENSNodeProvider
      config={config}
      queryClientOptions={{
        defaultOptions: { queries: { staleTime: 30 * 1000 } },
      }}
    >
      <TooltipProvider delayDuration={200} skipDelayDuration={0}>
        <div className="w-full max-w-[1216px] box-border h-fit flex flex-col flex-nowrap justify-start max-sm:items-center items-start gap-2 sm:gap-3 relative z-10">
          <div
            className={cn(
              "w-full flex justify-center items-center relative pb-2",
              (fetchErrorMessage || !showLastUpdateTime) && "hidden",
            )}
          >
            {isLoading ? (
              <LastUpdateTimeLoading />
            ) : (
              leaderboardSnippetData !== null && (
                <ReferrerLeaderboardLastUpdateTime
                  timestamp={leaderboardSnippetData.accurateAsOf}
                  className="text-base"
                />
              )
            )}
          </div>
          <DisplayReferrerLeaderboardPage
            leaderboardPageData={leaderboardSnippetData}
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
              recordsPerPage: snippetSize,
              page: 1,
            }}
            header={header}
          />
          {!isLoading &&
            leaderboardSnippetData !== null &&
            leaderboardSnippetData.pageContext.totalRecords > snippetSize && (
              <a
                href="/leaderboards/referrer"
                className={cn(
                  shadcnButtonVariants({
                    variant: fullLeaderboardButtonVariant,
                    size: "default",
                    className: cn(
                      "cursor-pointer rounded-full text-sm",
                      fullLeaderboardButtonVariant === "ghost" && "max-sm:w-full",
                    ),
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
