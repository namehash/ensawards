import {
  ENSReferralsClient,
  type ReferrerLeaderboardPage,
  ReferrerLeaderboardPageResponseCodes,
} from "@namehash/ens-referrals";
import {
  calcReferralProgramStatus,
  type ReferralProgramEditionConfig,
  ReferralProgramStatuses,
  type ReferralProgramStatusId,
} from "@namehash/ens-referrals/v1";
import { useNow } from "@namehash/namehash-ui";
import type { VariantProps } from "class-variance-authority";
import { secondsInMinute } from "date-fns/constants";
import { useEffect, useMemo, useState } from "react";

import { createConfig, ENSNodeProvider } from "@ensnode/ensnode-react";

import { ReferralProgramStatusBadge } from "@/components/atoms/badges/ReferralProgramStatusBadge";
import {
  ReferralProgramEditionBudget,
  ReferralProgramEditionRules,
  ReferralProgramEditionTimePeriod,
} from "@/components/atoms/cards/referralProgramEditionCard";
import {
  LastUpdateTime,
  LastUpdateTimeLoading,
} from "@/components/atoms/datetime/LastUpdateTime.tsx";
import { ErrorInfo } from "@/components/atoms/ErrorInfo.tsx";
import { DisplayReferrerLeaderboardPage } from "@/components/referral-awards-program/referrers/DisplayReferrerLeaderboardPage.tsx";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { getENSNodeUrl } from "@/utils/env";
import { getEnsAwardsBaseUrl } from "@/utils/index.ts";
import { fetchReferralProgramEditions } from "@/utils/referralProgram.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";

import { ReferralProgramEditionFieldLoading } from "../../atoms/cards/referralProgramEditionCard/loading.tsx";

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
  const [leaderboardSnippetData, setLeaderboardSnippetData] =
    useState<ReferrerLeaderboardPage | null>(null);
  const client = useMemo(() => new ENSReferralsClient({ url: getENSNodeUrl() }), []);
  const config = useMemo(() => createConfig({ url: getENSNodeUrl() }), []);

  //TODO: Ideally that part could also be extracted (with useQuery or w/e)
  // so that we can do something similar like we do with ENSNodeConfigInfo in ENSAdmin
  // and reuse this fetch wherever we need
  async function fetchReferrerLeaderboard() {
    setFetchErrorMessage("");
    setIsLoading(true);
    try {
      //TODO: Update after V1 api is available (no longer returns 404)
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
  }, [now]);

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

      let latestEdition = startedEditions[0];

      for (const edition of startedEditions) {
        if (edition.rules.startTime > latestEdition.rules.startTime) {
          latestEdition = edition;
        }
      }

      setLatestActiveReferralProgramEdition(latestEdition);
      setLatestReferralProgramEditionStatus(calcReferralProgramStatus(latestEdition.rules, now));
    });
  }, [now]);

  return (
    <ENSNodeProvider
      config={config}
      queryClientOptions={{
        defaultOptions: { queries: { staleTime: 30 * 1000 } },
      }}
    >
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
            leaderboardSnippetData.pageContext.totalRecords > snippetSize && (
              <a
                href={`/ens-referral-program/editions/${latestActiveReferralProgramEdition?.slug ?? "2025-12"}/leaderboard`}
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

interface ReferralProgramEditionInfoProps {
  referralProgramEdition: ReferralProgramEditionConfig;
  referralProgramEditionStatus: ReferralProgramStatusId;
  isLoading: boolean;
}

const ReferralProgramEditionInfo = ({
  referralProgramEdition,
  referralProgramEditionStatus: referralProgramStatus,
  isLoading,
}: ReferralProgramEditionInfoProps) => {
  return (
    <>
      {isLoading ? (
        <ReferralProgramEditionFieldLoading
          label="Time period"
          styles={{
            skeleton: "w-[185px] h-[14px] mt-[4px] mb-[3px]",
          }}
        />
      ) : (
        <ReferralProgramEditionTimePeriod
          startTime={referralProgramEdition.rules.startTime}
          endTime={referralProgramEdition.rules.endTime}
        />
      )}
      {isLoading ? (
        <ReferralProgramEditionFieldLoading
          label="Budget"
          styles={{
            skeleton: "w-[91px] h-[14px] mt-[4px] mb-[3px]",
          }}
        />
      ) : (
        <ReferralProgramEditionBudget
          totalAwardPoolValue={referralProgramEdition.rules.totalAwardPoolValue}
        />
      )}
      {isLoading ? (
        <ReferralProgramEditionFieldLoading label="Rules" />
      ) : (
        <ReferralProgramEditionRules
          rulesUrl={
            new URL(
              `/ens-referral-program/editions/${referralProgramEdition.slug}/rules`,
              getEnsAwardsBaseUrl(),
            )
          }
        />
      )}
      {isLoading ? (
        <ReferralProgramEditionFieldLoading
          label="Status"
          styles={{
            skeleton: "h-[22px] w-[60px] rounded-full",
          }}
        />
      ) : (
        <div className="flex flex-row flex-nowrap justify-between items-start gap-0 sm:min-w-[80px] sm:flex-col sm:justify-center max-sm:self-stretch">
          <p className="text-muted-foreground text-sm leading-normal font-normal max-sm:text-left cursor-default">
            Status
          </p>
          <ReferralProgramStatusBadge status={referralProgramStatus} />
        </div>
      )}
    </>
  );
};
