import type { ReferralProgramEditionSummary } from "@namehash/ens-referrals/v1";
import {
  ENSReferralsClient,
  ReferralProgramAwardModels,
  ReferralProgramEditionStatuses,
  ReferralProgramEditionSummariesResponseCodes,
} from "@namehash/ens-referrals/v1";
import { useNow } from "@namehash/namehash-ui";
import { secondsInMinute } from "date-fns/constants";
import { CalendarClock as NoEditionsIcon } from "lucide-react";
import { Fragment, type ReactNode, useCallback, useEffect, useMemo, useRef, useState } from "react";

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
  const client = useMemo(() => new ENSReferralsClient({ url: getENSNodeUrl() }), []);
  const [referralProgramEditionSummaries, setReferralProgramEditionSummaries] = useState<
    ReferralProgramEditionSummary[] | null
  >(null);
  // refresh every 5 minutes
  const now = useNow({ timeToRefresh: 5 * secondsInMinute });
  const initialLoadRef = useRef(false);

  const fetchReferralProgramEditionSummaries = useCallback(async () => {
    // Only show loading state during the initial fetch & refetches after errors,
    // not during refreshes
    if (!initialLoadRef.current) setIsLoading(true);

    try {
      const response = await client.getEditionSummaries();
      if (response.responseCode !== ReferralProgramEditionSummariesResponseCodes.Ok) {
        console.error(response.errorMessage);
        setReferralProgramEditionSummaries(null);
        initialLoadRef.current = false;
        return;
      }
      setReferralProgramEditionSummaries(filterOutUnrecognizedEditions(response.data.editions));
      initialLoadRef.current = true;
    } catch (error) {
      console.error(error);
      setReferralProgramEditionSummaries(null);
      initialLoadRef.current = false;
    } finally {
      setIsLoading(false);
    }
  }, [client]);

  useEffect(() => {
    fetchReferralProgramEditionSummaries();
  }, [now, fetchReferralProgramEditionSummaries]);

  return (
    <DisplayReferralProgramEditionsList
      isLoading={isLoading}
      retryFetch={fetchReferralProgramEditionSummaries}
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
            header="No editions currently active"
            description="Check back soon for new editions."
          />
        )}
      </div>
      <div className={subcontainerStyles}>
        <h2 className={headerStyles}>Scheduled</h2>
        {scheduledEditions.length > 0 ? (
          <div className={editionsListStyles}>{scheduledEditions}</div>
        ) : (
          <NoEditionsInfo
            header="No new editions scheduled yet"
            description="Check back soon for new editions."
          />
        )}
      </div>
      <div className={subcontainerStyles}>
        <h2 className={headerStyles}>Closed</h2>
        {closedEditions.length > 0 ? (
          <div className={editionsListStyles}>{closedEditions}</div>
        ) : (
          <NoEditionsInfo
            header="No closed editions yet"
            description="Once an edition's time period has passed you'll find it here."
          />
        )}
      </div>
    </div>
  );
};

interface DisplayReferralProgramEditionsListProps {
  isLoading: boolean;
  retryFetch: () => void;
  referralProgramEditionSummaries: ReferralProgramEditionSummary[] | null;
  loadingReferralProgramEditionSummaries: ReferralProgramEditionSummary[];
  simplifiedVariant: boolean;
}

export const DisplayReferralProgramEditionsList = ({
  isLoading,
  retryFetch,
  referralProgramEditionSummaries,
  loadingReferralProgramEditionSummaries,
  simplifiedVariant,
}: DisplayReferralProgramEditionsListProps) => {
  if (simplifiedVariant) {
    return (
      <DisplaySimplifiedReferralProgramEditionSummariesList
        isLoading={isLoading}
        retryFetch={retryFetch}
        referralProgramEditionSummaries={referralProgramEditionSummaries}
        loadingReferralProgramEditionSummaries={loadingReferralProgramEditionSummaries}
      />
    );
  }

  return (
    <DisplayGroupedReferralProgramEditionSummariesList
      isLoading={isLoading}
      retryFetch={retryFetch}
      referralProgramEditionSummaries={referralProgramEditionSummaries}
      loadingReferralProgramEditionSummaries={loadingReferralProgramEditionSummaries}
    />
  );
};

const DisplayGroupedReferralProgramEditionSummariesList = ({
  isLoading,
  retryFetch,
  referralProgramEditionSummaries,
  loadingReferralProgramEditionSummaries,
}: Omit<DisplayReferralProgramEditionsListProps, "simplifiedVariant">) => {
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
  }, [referralProgramEditionSummaries]);

  return (
    <Fragment>
      {isLoading && (
        <ReferralProgramEditionsListContainer
          activeEditions={loadingReferralProgramEditionSummaries
            .filter(
              (editionSummary) =>
                editionSummary.status === ReferralProgramEditionStatuses.Active ||
                editionSummary.status === ReferralProgramEditionStatuses.Exhausted,
            )
            .map((editionSummary, index) => {
              if (editionSummary.awardModel === ReferralProgramAwardModels.RevShareLimit) {
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
              if (editionSummary.awardModel === ReferralProgramAwardModels.RevShareLimit) {
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
              if (editionSummary.awardModel === ReferralProgramAwardModels.RevShareLimit) {
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
      {!isLoading && referralProgramEditionSummaries === null && (
        <SummariesFetchingErrorDisplay retryFetch={retryFetch} />
      )}
      {!isLoading && referralProgramEditionSummaries !== null && (
        <ReferralProgramEditionsListContainer
          activeEditions={activeEditions.map((editionSummary) => {
            if (editionSummary.awardModel === ReferralProgramAwardModels.RevShareLimit) {
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
          closedEditions={closedEditions.map((editionSummary) => {
            if (editionSummary.awardModel === ReferralProgramAwardModels.RevShareLimit) {
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
          scheduledEditions={scheduledEditions.map((editionSummary) => {
            if (editionSummary.awardModel === ReferralProgramAwardModels.RevShareLimit) {
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
        />
      )}
    </Fragment>
  );
};

const DisplaySimplifiedReferralProgramEditionSummariesList = ({
  isLoading,
  referralProgramEditionSummaries,
  loadingReferralProgramEditionSummaries,
  retryFetch,
}: Omit<DisplayReferralProgramEditionsListProps, "simplifiedVariant">) => (
  <Fragment>
    {isLoading && (
      <div className="w-full h-fit flex flex-col justify-start items-center gap-2">
        {loadingReferralProgramEditionSummaries.map((editionSummary, index) => {
          if (editionSummary.awardModel === ReferralProgramAwardModels.RevShareLimit) {
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
    {!isLoading && referralProgramEditionSummaries === null && (
      <SummariesFetchingErrorDisplay retryFetch={retryFetch} />
    )}
    {!isLoading && referralProgramEditionSummaries !== null && (
      <div className="w-full h-fit flex flex-col justify-start items-center gap-2">
        {referralProgramEditionSummaries.map((editionSummary) => {
          if (editionSummary.awardModel === ReferralProgramAwardModels.RevShareLimit) {
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

const SummariesFetchingErrorDisplay = ({ retryFetch }: { retryFetch: () => void }) => (
  <ErrorInfo
    title="Error loading referral program editions"
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
      onClick={retryFetch}
    >
      Try again
    </button>
  </ErrorInfo>
);
