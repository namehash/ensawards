import { ErrorInfo } from "@/components/atoms/ErrorInfo.tsx";
import { ReferrersList } from "@/components/holiday-referral-awards/referrers/ReferrersList.tsx";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { getENSNodeUrl } from "@/utils/env";
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
  const ensNodeUrl = getENSNodeUrl();
  const client = new ENSNodeClient({
    url: ensNodeUrl,
  });
  const ensNodeReactConfig = createConfig({
    url: ensNodeUrl,
  });

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
        console.error(response.errorMessage);
        setFetchErrorMessage("An error has occurred while loading the leaderboard.");
        setIsLoading(false);
        return;
      }

      setTopReferrersData(response.data);
    } catch (error) {
      console.error(error);
      setTopReferrersData(null);
      setFetchErrorMessage("An error has occurred while loading the leaderboard.");
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
    <ENSNodeProvider
      config={ensNodeReactConfig}
      queryClientOptions={{ defaultOptions: { queries: { staleTime: 30 * 1000 } } }}
    >
      <TooltipProvider delayDuration={200} skipDelayDuration={0}>
        <div className="w-full max-w-[1216px] box-border h-fit flex flex-col flex-nowrap justify-start items-start gap-2 sm:gap-3">
          <ReferrersList
            referrersData={topReferrersData}
            isLoading={isLoading}
            generateLinkCTA={emptyStateCTA}
            error={
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
                    onClick={() => startFetching()}
                  >
                    Try again
                  </button>
                </ErrorInfo>
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
