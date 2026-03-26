import {
  calcReferralProgramStatus,
  ENSReferralsClient,
  ReferralProgramAwardModels,
  type ReferralProgramEditionConfig,
  ReferralProgramStatuses,
  type ReferralProgramStatusId,
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
import { fetchReferralProgramEditions } from "@/utils/referralProgram.ts";
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
  const [latestActiveReferralProgramEdition, setLatestActiveReferralProgramEdition] =
    useState<ReferralProgramEditionConfig | null>(null);
  const [latestReferralProgramEditionStatus, setLatestReferralProgramEditionStatus] =
    useState<ReferralProgramStatusId>(ReferralProgramStatuses.Active);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchErrorMessage, setFetchErrorMessage] = useState("");
  const [leaderboardSnippetData, setLeaderboardSnippetData] = useState<
    ReferrerLeaderboardPageRevShareLimit | ReferrerLeaderboardPagePieSplit | null
  >(null);
  const client = useMemo(() => new ENSReferralsClient({ url: getENSNodeUrl() }), []);
  const config = useMemo(() => createConfig({ url: getENSNodeUrl() }), []);

  async function fetchReferrerLeaderboard() {
    if (!latestActiveReferralProgramEdition) {
      // Editions haven't loaded yet — stay in the loading state silently
      return;
    }

    setFetchErrorMessage("");
    setIsLoading(true);

    try {
      const response = await client.getReferrerLeaderboardPage({
        edition: latestActiveReferralProgramEdition.slug,
        page: 1,
        recordsPerPage: snippetSize,
      });

      if (response.responseCode !== ReferrerLeaderboardPageResponseCodes.Ok) {
        console.error(response.errorMessage);
        setLeaderboardSnippetData(null);
        setFetchErrorMessage("An error occurred while loading the leaderboard.");
        setIsLoading(false);
        return;
      }

      // Display an error for the unrecognized award model
      if (response.data.awardModel === ReferralProgramAwardModels.Unrecognized) {
        setLeaderboardSnippetData(null);
        setFetchErrorMessage("Unrecognized referral program edition award model.");
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
  }, [now, latestActiveReferralProgramEdition]);

  useEffect(() => {
    fetchReferralProgramEditions().then((editions) => {
      const startedEditions = editions.filter((edition) => edition.rules.startTime <= now);

      // If there are no started editions recorded,
      // return the first edition from the fetched list,
      // which is guaranteed to exist from default edition config set.
      if (startedEditions.length === 0) {
        const fallbackEdition = editions[0];

        if (!fallbackEdition) return;

        setLatestActiveReferralProgramEdition(fallbackEdition);
        setLatestReferralProgramEditionStatus(
          calcReferralProgramStatus(fallbackEdition.rules, now),
        );
        return;
      }

      let latestEdition = startedEditions.reduce((latest, edition) =>
        edition.rules.startTime > latest.rules.startTime ? edition : latest,
      );

      setLatestActiveReferralProgramEdition(latestEdition);
      setLatestReferralProgramEditionStatus(calcReferralProgramStatus(latestEdition.rules, now));
    });
  }, [now]);

  return (
    <ENSNodeProvider config={config}>
      <TooltipProvider delayDuration={200} skipDelayDuration={0}>
        <div className="w-full max-w-[1216px] box-border h-fit flex flex-col flex-nowrap justify-start max-sm:items-center items-start gap-2 sm:gap-3 relative z-10">
          <h3 className="w-full text-left text-xl sm:text-2xl leading-normal font-semibold text-black">
            Top {latestActiveReferralProgramEdition?.displayName ?? "Referral program edition"}{" "}
            Referrers
          </h3>
          {latestActiveReferralProgramEdition && (
            <div className="w-full flex flex-col sm:flex-row sm:flex-wrap justify-start items-center gap-2 sm:gap-10 py-1 sm:pt-1 sm:pb-3">
              <ReferralProgramEditionInfo
                referralProgramEdition={latestActiveReferralProgramEdition}
                referralProgramEditionStatus={latestReferralProgramEditionStatus}
                aggregatedEditionMetrics={
                  leaderboardSnippetData !== null &&
                  leaderboardSnippetData.awardModel === ReferralProgramAwardModels.RevShareLimit
                    ? leaderboardSnippetData.aggregatedMetrics
                    : null
                }
                isLoading={isLoading}
              />
              <div
                className={cn(
                  "w-fit flex justify-center items-center relative",
                  (fetchErrorMessage || !showLastUpdateTime) && "hidden",
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
            expectedAwardModel={
              latestActiveReferralProgramEdition?.rules.awardModel ??
              ReferralProgramAwardModels.Unrecognized
            }
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
          />
          {!isLoading &&
            leaderboardSnippetData !== null &&
            latestActiveReferralProgramEdition &&
            leaderboardSnippetData.pageContext.totalRecords > snippetSize && (
              <a
                href={`/ens-referral-program/editions/${latestActiveReferralProgramEdition.slug}/leaderboard`}
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
