import {
  ENSReferralsClient,
  ReferralProgramAwardModels,
  type ReferralProgramEditionSlug,
  type ReferralProgramEditionSummaryPieSplit,
  type ReferralProgramEditionSummaryRevShareLimit,
  type ReferrerLeaderboardPagePieSplit,
  ReferrerLeaderboardPageResponseCodes,
  type ReferrerLeaderboardPageRevShareLimit,
} from "@namehash/ens-referrals/v1";
import { useNow } from "@namehash/namehash-ui";
import type { VariantProps } from "class-variance-authority";
import { secondsInMinute } from "date-fns/constants";
import { useEffect, useMemo, useState } from "react";

import { createConfig, ENSNodeProvider } from "@ensnode/ensnode-react";

import {
  LastUpdateTime,
  LastUpdateTimeLoading,
} from "@/components/atoms/datetime/LastUpdateTime.tsx";
import { ErrorInfo } from "@/components/atoms/ErrorInfo.tsx";
import { ReferralProgramEditionInfo } from "@/components/molecules/ReferralProgramEditionInfo.tsx";
import { DisplayReferrerLeaderboardPage } from "@/components/referral-awards-program/referrers/DisplayReferrerLeaderboardPage.tsx";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { getENSNodeUrl } from "@/utils/env";
import { fetchReferralProgramEditionSummaries } from "@/utils/referralProgram.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";

export interface ReferrerLeaderboardSnippetProps {
  snippetSize?: number;
  showLastUpdateTime?: boolean;
  fullLeaderboardButtonVariant?: VariantProps<typeof shadcnButtonVariants>["variant"];
}
/**
 * Fetches {@link snippetSize} top referrers from the Referrer Leaderboard through ENSNode
 * and displays them as a snippet of the whole leaderboard.
 */
export function ReferrerLeaderboardSnippet({
  snippetSize = 3,
  showLastUpdateTime = false,
  fullLeaderboardButtonVariant = "ghost",
}: ReferrerLeaderboardSnippetProps) {
  const now = useNow({ timeToRefresh: secondsInMinute });
  const [latestReferralProgramEdition, setLatestReferralProgramEdition] = useState<
    ReferralProgramEditionSummaryPieSplit | ReferralProgramEditionSummaryRevShareLimit | null
  >(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [leaderboardSnippetData, setLeaderboardSnippetData] = useState<
    ReferrerLeaderboardPageRevShareLimit | ReferrerLeaderboardPagePieSplit | null
  >(null);
  const client = useMemo(() => new ENSReferralsClient({ url: getENSNodeUrl() }), []);
  const config = useMemo(() => createConfig({ url: getENSNodeUrl() }), []);

  async function fetchReferrerLeaderboard(referralProgramEditionSlug: ReferralProgramEditionSlug) {
    setIsError(false);
    setIsLoading(true);

    try {
      const response = await client.getReferrerLeaderboardPage({
        edition: referralProgramEditionSlug,
        page: 1,
        recordsPerPage: snippetSize,
      });

      if (response.responseCode !== ReferrerLeaderboardPageResponseCodes.Ok) {
        console.error(response.errorMessage);
        setLeaderboardSnippetData(null);
        setIsError(true);
        setIsLoading(false);
        return;
      }

      // Display an error for the unrecognized award model
      if (response.data.awardModel === ReferralProgramAwardModels.Unrecognized) {
        setLeaderboardSnippetData(null);
        setIsError(true);
        setIsLoading(false);
        return;
      }

      setLeaderboardSnippetData(response.data);
    } catch (error) {
      console.error(error);
      setLeaderboardSnippetData(null);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  const fetchLatestReferralProgramEdition = async (): Promise<
    ReferralProgramEditionSummaryPieSplit | ReferralProgramEditionSummaryRevShareLimit | null
  > => {
    try {
      const editions = await fetchReferralProgramEditionSummaries();

      if (editions.length === 0) {
        setLatestReferralProgramEdition(null);
        setLeaderboardSnippetData(null);
        setIsLoading(false);
        setIsError(true);
        return null;
      }

      const startedEditions = editions.filter((edition) => edition.rules.startTime <= now);

      const latestEdition =
        startedEditions.length === 0
          ? editions[0]
          : startedEditions.reduce(
              (latest, edition) =>
                edition.rules.startTime > latest.rules.startTime ? edition : latest,
              startedEditions[0],
            );

      setLatestReferralProgramEdition(latestEdition);

      return latestEdition;
    } catch (error) {
      console.error(error);
      setLatestReferralProgramEdition(null);
      setLeaderboardSnippetData(null);
      setIsLoading(false);
      setIsError(true);
      return null;
    }
  };

  useEffect(() => {
    const loadLeaderboardSnippet = async () => {
      const latestEdition = await fetchLatestReferralProgramEdition();

      if (latestEdition === null) {
        return;
      }

      await fetchReferrerLeaderboard(latestEdition.slug);
    };

    void loadLeaderboardSnippet();
  }, [now]);

  return (
    <ENSNodeProvider config={config}>
      <TooltipProvider delayDuration={200} skipDelayDuration={0}>
        <div className="w-full max-w-[1216px] box-border h-fit flex flex-col flex-nowrap justify-start max-sm:items-center items-start gap-2 sm:gap-3 relative z-10">
          <h3 className="w-full text-left text-xl sm:text-2xl leading-normal font-semibold text-black">
            Top {latestReferralProgramEdition?.displayName ?? "Referral program edition"} Referrers
          </h3>
          {latestReferralProgramEdition && (
            <div className="w-full flex flex-col sm:flex-row sm:flex-wrap justify-start items-center gap-2 sm:gap-10 py-1 sm:pt-1 sm:pb-3">
              <ReferralProgramEditionInfo
                referralProgramEditionSummary={latestReferralProgramEdition}
                isLoading={isLoading}
              />
              <div
                className={cn(
                  "w-fit flex justify-center items-center relative",
                  (isError || !showLastUpdateTime) && "hidden",
                )}
              >
                {isLoading ? (
                  <LastUpdateTimeLoading />
                ) : (
                  leaderboardSnippetData !== null && (
                    <LastUpdateTime
                      timestamp={leaderboardSnippetData.accurateAsOf}
                      className="text-sm"
                    />
                  )
                )}
              </div>
            </div>
          )}
          <DisplayReferrerLeaderboardPage
            leaderboardPageData={leaderboardSnippetData}
            isLoading={isLoading}
            editionSummary={latestReferralProgramEdition}
            leaderboardPageFetchError={
              isError ? (
                <ErrorInfo
                  title="Error loading referrer data"
                  description={["Please try again later."]}
                >
                  <button
                    className={cn(
                      shadcnButtonVariants({
                        variant: "outline",
                        size: "default",
                        className: "rounded-full cursor-pointer",
                      }),
                    )}
                    onClick={() => {
                      void (async () => {
                        const latestEdition =
                          latestReferralProgramEdition ??
                          (await fetchLatestReferralProgramEdition());

                        if (latestEdition === null) return;

                        await fetchReferrerLeaderboard(latestEdition.slug);
                      })();
                    }}
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
          />
          {!isLoading &&
            leaderboardSnippetData !== null &&
            latestReferralProgramEdition &&
            leaderboardSnippetData.pageContext.totalRecords > snippetSize && (
              <a
                href={`/ens-referral-program/editions/${latestReferralProgramEdition.slug}/leaderboard`}
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
                View full referrer leaderboard
              </a>
            )}
        </div>
      </TooltipProvider>
    </ENSNodeProvider>
  );
}
