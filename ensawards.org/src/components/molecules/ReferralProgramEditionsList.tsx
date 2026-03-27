import type { ReferralProgramEditionSummary } from "@namehash/ens-referrals/v1";
import {
  ENSReferralsClient,
  ReferralProgramAwardModels,
  ReferralProgramEditionStatuses,
  ReferralProgramEditionSummariesResponseCodes,
} from "@namehash/ens-referrals/v1";
import { useNow } from "@namehash/namehash-ui";
import { secondsInMinute } from "date-fns/constants";
import { Inbox as NoEditionsIcon } from "lucide-react";
import { Fragment, type ReactNode, useEffect, useMemo, useState } from "react";

import { ReferralProgramEditionCardPieSplit } from "@/components/atoms/cards/referralProgramEditionCard/pie-split";
import { ReferralProgramEditionCardPieSplitLoading } from "@/components/atoms/cards/referralProgramEditionCard/pie-split/loading";
import { ReferralProgramEditionCardRevShareLimit } from "@/components/atoms/cards/referralProgramEditionCard/rev-share";
import { ReferralProgramEditionCardRevShareLimitLoading } from "@/components/atoms/cards/referralProgramEditionCard/rev-share/loading";
import { ErrorInfo } from "@/components/atoms/ErrorInfo.tsx";
import { mockReferralProgramEditionSummariesList } from "@/components/mocks/referral-program-editions/data";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles";
import { getENSNodeUrl } from "@/utils/env";
import { filterOutUnrecognizedEditions } from "@/utils/referralProgram";
import { cn } from "@/utils/tailwindClassConcatenation";

interface ReferralProgramEditionsListProps {
  simplifiedVariant?: boolean;
}

export function ReferralProgramEditionsList({
  simplifiedVariant = false,
}: ReferralProgramEditionsListProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchErrorMessage, setFetchErrorMessage] = useState("");
  const client = useMemo(() => new ENSReferralsClient({ url: getENSNodeUrl() }), []);
  const [referralProgramEditionSummaries, setReferralProgramEditionSummaries] = useState<
    ReferralProgramEditionSummary[] | null
  >(null);
  // refresh every 5 minutes
  const now = useNow({ timeToRefresh: 5 * secondsInMinute });

  async function fetchReferralProgramEditionSummaries() {
    setFetchErrorMessage("");
    setIsLoading(true);

    try {
      const response = await client.getEditionSummaries();
      if (response.responseCode !== ReferralProgramEditionSummariesResponseCodes.Ok) {
        console.error(response.errorMessage);
        setReferralProgramEditionSummaries(null);
        setFetchErrorMessage("An error occurred while loading the Referral program editions.");
        return;
      }
      setReferralProgramEditionSummaries(filterOutUnrecognizedEditions(response.data.editions));
    } catch (error) {
      console.error(error);
      setReferralProgramEditionSummaries(null);
      setFetchErrorMessage("An error occurred while loading the Referral program editions.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchReferralProgramEditionSummaries();
  }, [now]);

  return (
    <DisplayReferralProgramEditionsList
      isLoading={isLoading}
      fetchErrorMessage={fetchErrorMessage}
      referralProgramEditionSummaries={referralProgramEditionSummaries}
      // Using mock data for the loading state because the current ens-referrals defaults are outdated
      loadingReferralProgramEditionSummaries={mockReferralProgramEditionSummariesList}
      simplifiedVariant={simplifiedVariant}
    />
  );
}

interface ReferralProgramEditionsListContainerProps {
  activeEditions: ReactNode[];
  closedEditions: ReactNode[];
  scheduledEditions: ReactNode[];
}

const ReferralProgramEditionsListContainer = ({
  activeEditions,
  closedEditions,
  scheduledEditions,
}: ReferralProgramEditionsListContainerProps) => {
  const headerStyles = "text-2xl leading-normal font-semibold text-black";
  const subcontainerStyles = "w-full flex flex-col justify-start items-start gap-6";
  const editionsListStyles = "w-full h-fit flex flex-col justify-start items-center gap-2";
  return (
    <div className="w-full flex flex-col justify-start items-start gap-8 sm:gap-10 relative z-10">
      <div className={subcontainerStyles}>
        <h2 className={headerStyles}>Active</h2>
        {activeEditions.length > 0 ? (
          <div className={editionsListStyles}>{activeEditions}</div>
        ) : (
          <NoEditionsInfo
            header="No active editions"
            description="Looks like there are no active editions yet."
          />
        )}
      </div>
      <div className={subcontainerStyles}>
        <h2 className={headerStyles}>Scheduled</h2>
        {scheduledEditions.length > 0 ? (
          <div className={editionsListStyles}>{scheduledEditions}</div>
        ) : (
          <NoEditionsInfo
            header="No scheduled editions"
            description="Looks like there are no scheduled editions yet."
          />
        )}
      </div>
      <div className={subcontainerStyles}>
        <h2 className={headerStyles}>Closed</h2>
        {closedEditions.length > 0 ? (
          <div className={editionsListStyles}>{closedEditions}</div>
        ) : (
          <NoEditionsInfo
            header="No closed editions"
            description="Looks like there are no closed editions yet."
          />
        )}
      </div>
    </div>
  );
};

interface DisplayReferralProgramEditionsListProps {
  isLoading: boolean;
  fetchErrorMessage: string;
  referralProgramEditionSummaries: ReferralProgramEditionSummary[] | null;
  loadingReferralProgramEditionSummaries: ReferralProgramEditionSummary[];
  simplifiedVariant: boolean;
}

export const DisplayReferralProgramEditionsList = ({
  isLoading,
  fetchErrorMessage,
  referralProgramEditionSummaries,
  loadingReferralProgramEditionSummaries,
  simplifiedVariant,
}: DisplayReferralProgramEditionsListProps) => {
  if (simplifiedVariant) {
    return (
      <DisplaySimplifiedReferralProgramEditionSummariesList
        isLoading={isLoading}
        fetchErrorMessage={fetchErrorMessage}
        referralProgramEditionSummaries={referralProgramEditionSummaries}
        loadingReferralProgramEditionSummaries={loadingReferralProgramEditionSummaries}
      />
    );
  }

  return (
    <DisplayGroupedReferralProgramEditionSummariesList
      isLoading={isLoading}
      fetchErrorMessage={fetchErrorMessage}
      referralProgramEditionSummaries={referralProgramEditionSummaries}
      loadingReferralProgramEditionSummaries={loadingReferralProgramEditionSummaries}
    />
  );
};

const DisplayGroupedReferralProgramEditionSummariesList = ({
  isLoading,
  fetchErrorMessage,
  referralProgramEditionSummaries,
  loadingReferralProgramEditionSummaries,
}: Omit<DisplayReferralProgramEditionsListProps, "simplifiedVariant">) => {
  // refresh the status every minute
  const now = useNow({ timeToRefresh: secondsInMinute });

  const { activeEditions, closedEditions, scheduledEditions } = useMemo(() => {
    if (!referralProgramEditionSummaries) {
      return { activeEditions: [], closedEditions: [], scheduledEditions: [] };
    }
    return {
      activeEditions: referralProgramEditionSummaries.filter(
        (editionSummary) =>
          editionSummary.status === ReferralProgramEditionStatuses.Active ||
          editionSummary.status === ReferralProgramEditionStatuses.Exhausted,
      ),
      closedEditions: referralProgramEditionSummaries.filter(
        (editionSummary) =>
          editionSummary.status === ReferralProgramEditionStatuses.Closed ||
          editionSummary.status === ReferralProgramEditionStatuses.AwardsReview,
      ),
      scheduledEditions: referralProgramEditionSummaries.filter(
        (editionSummary) => editionSummary.status === ReferralProgramEditionStatuses.Scheduled,
      ),
    };
  }, [referralProgramEditionSummaries, now]);

  return (
    <Fragment>
      {isLoading && (
        <ReferralProgramEditionsListContainer
          activeEditions={loadingReferralProgramEditionSummaries
            .filter(
              (edition) =>
                edition.status === ReferralProgramEditionStatuses.Active ||
                edition.status === ReferralProgramEditionStatuses.Exhausted,
            )
            .map((edition, index) => {
              if (edition.rules.awardModel === ReferralProgramAwardModels.RevShareLimit) {
                return (
                  <ReferralProgramEditionCardRevShareLimitLoading
                    key={`referral-program-edition-loading-active#${index}`}
                  />
                );
              }
              return (
                <ReferralProgramEditionCardPieSplitLoading
                  key={`referral-program-edition-loading-active#${index}`}
                />
              );
            })}
          closedEditions={loadingReferralProgramEditionSummaries
            .filter(
              (editionSummary) =>
                editionSummary.status === ReferralProgramEditionStatuses.Closed ||
                editionSummary.status === ReferralProgramEditionStatuses.AwardsReview,
            )
            .map((editionSummary, index) => {
              if (editionSummary.rules.awardModel === ReferralProgramAwardModels.RevShareLimit) {
                return (
                  <ReferralProgramEditionCardRevShareLimitLoading
                    key={`referral-program-edition-loading-closed#${index}`}
                  />
                );
              }
              return (
                <ReferralProgramEditionCardPieSplitLoading
                  key={`referral-program-edition-loading-closed#${index}`}
                />
              );
            })}
          scheduledEditions={loadingReferralProgramEditionSummaries
            .filter(
              (editionSummary) =>
                editionSummary.status === ReferralProgramEditionStatuses.Scheduled,
            )
            .map((editionSummary, index) => {
              if (editionSummary.rules.awardModel === ReferralProgramAwardModels.RevShareLimit) {
                return (
                  <ReferralProgramEditionCardRevShareLimitLoading
                    key={`referral-program-edition-loading-scheduled#${index}`}
                  />
                );
              }
              return (
                <ReferralProgramEditionCardPieSplitLoading
                  key={`referral-program-edition-loading-scheduled#${index}`}
                />
              );
            })}
        />
      )}
      {!isLoading && referralProgramEditionSummaries === null && fetchErrorMessage && (
        <SummariesFetchingErrorDisplay />
      )}
      {!isLoading && referralProgramEditionSummaries !== null && (
        <ReferralProgramEditionsListContainer
          activeEditions={activeEditions.map((edition) => {
            if (edition.awardModel === ReferralProgramAwardModels.RevShareLimit) {
              return (
                <ReferralProgramEditionCardRevShareLimit
                  referralProgramEditionSummary={edition}
                  key={`referral-program-edition-${edition.slug}`}
                />
              );
            }
            return (
              <ReferralProgramEditionCardPieSplit
                referralProgramEditionSummary={edition}
                key={`referral-program-edition-${edition.slug}`}
              />
            );
          })}
          closedEditions={closedEditions.map((edition) => {
            if (edition.rules.awardModel === ReferralProgramAwardModels.RevShareLimit) {
              return (
                <ReferralProgramEditionCardRevShareLimit
                  referralProgramEditionSummary={edition}
                  key={`referral-program-edition-${edition.slug}`}
                />
              );
            }
            return (
              <ReferralProgramEditionCardPieSplit
                referralProgramEditionSummary={edition}
                key={`referral-program-edition-${edition.slug}`}
              />
            );
          })}
          scheduledEditions={scheduledEditions.map((edition) => {
            if (edition.rules.awardModel === ReferralProgramAwardModels.RevShareLimit) {
              return (
                <ReferralProgramEditionCardRevShareLimit
                  referralProgramEditionSummary={edition}
                  key={`referral-program-edition-${edition.slug}`}
                />
              );
            }
            return (
              <ReferralProgramEditionCardPieSplit
                referralProgramEditionSummary={edition}
                key={`referral-program-edition-${edition.slug}`}
              />
            );
          })}
        />
      )}
    </Fragment>
  );
};

const DisplaySimplifiedReferralProgramEditionSummariesList = ({
  isLoading,
  fetchErrorMessage,
  referralProgramEditionSummaries,
  loadingReferralProgramEditionSummaries,
}: Omit<DisplayReferralProgramEditionsListProps, "simplifiedVariant">) => (
  <Fragment>
    {isLoading && (
      <div className="w-full h-fit flex flex-col justify-start items-center gap-2">
        {loadingReferralProgramEditionSummaries.map((editionSummary, index) => {
          if (editionSummary.rules.awardModel === ReferralProgramAwardModels.RevShareLimit) {
            return (
              <ReferralProgramEditionCardRevShareLimitLoading
                key={`referral-program-edition-loading-active#${index}`}
              />
            );
          }
          return (
            <ReferralProgramEditionCardPieSplitLoading
              key={`referral-program-edition-loading-active#${index}`}
            />
          );
        })}
      </div>
    )}
    {!isLoading && referralProgramEditionSummaries === null && fetchErrorMessage && (
      <SummariesFetchingErrorDisplay />
    )}
    {!isLoading && referralProgramEditionSummaries !== null && (
      <div className="w-full h-fit flex flex-col justify-start items-center gap-2">
        {referralProgramEditionSummaries.map((editionSummary) => {
          if (editionSummary.rules.awardModel === ReferralProgramAwardModels.RevShareLimit) {
            return (
              <ReferralProgramEditionCardRevShareLimit
                referralProgramEditionSummary={editionSummary}
                key={`referral-program-edition-${editionSummary.slug}`}
              />
            );
          }

          return (
            <ReferralProgramEditionCardPieSplit
              referralProgramEditionSummary={editionSummary}
              key={`referral-program-edition-${editionSummary.slug}`}
            />
          );
        })}
      </div>
    )}
  </Fragment>
);

const NoEditionsInfo = ({ header, description }: { header: string; description: string }) => {
  const baseContainerStyles = "w-full h-fit flex flex-col justify-start items-center";
  return (
    <div className={cn(baseContainerStyles, "gap-5")}>
      <span className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
        <NoEditionsIcon size={24} className="text-muted-foreground" />
      </span>
      <div className={cn(baseContainerStyles, "gap-1")}>
        <h3 className="text-xl leading-normal font-semibold text-black text-center">{header}</h3>
        <p className="text-base leading-normal font-normal text-muted-foreground text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

const SummariesFetchingErrorDisplay = () => (
  <ErrorInfo
    title="Error loading referral program editions"
    description={[`Please try again later.`]}
  >
    <button
      className={cn(
        shadcnButtonVariants({
          variant: "outline",
          size: "default",
          className: "rounded-full cursor-pointer",
        }),
      )}
      // Simple reload to avoid prop drilling and hacky refetches
      onClick={() => window.location.reload()}
    >
      Try again
    </button>
  </ErrorInfo>
);
