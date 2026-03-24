import type {
  ReferralProgramEditionConfig,
  ReferralProgramStatusId,
} from "@namehash/ens-referrals/v1";
import {
  calcReferralProgramStatus,
  ENSReferralsClient,
  ReferralProgramAwardModels,
  ReferralProgramEditionConfigSetResponseCodes,
  ReferralProgramStatuses,
} from "@namehash/ens-referrals/v1";
import { useNow } from "@namehash/namehash-ui";
import { secondsInHour, secondsInMinute } from "date-fns/constants";
import { Inbox as NoEditionsIcon } from "lucide-react";
import { Fragment, type ReactNode, useEffect, useMemo, useState } from "react";

import { ReferralProgramEditionCardPieSplit } from "@/components/atoms/cards/referralProgramEditionCard/pie-split";
import { ReferralProgramEditionCardPieSplitLoading } from "@/components/atoms/cards/referralProgramEditionCard/pie-split/loading";
import { ReferralProgramEditionCardRevShareLimit } from "@/components/atoms/cards/referralProgramEditionCard/rev-share";
import { ReferralProgramEditionCardRevShareLimitLoading } from "@/components/atoms/cards/referralProgramEditionCard/rev-share/loading";
import { ErrorInfo } from "@/components/atoms/ErrorInfo.tsx";
import { mockReferralProgramEditionsList } from "@/components/mocks/referral-program-editions/data";
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

  const [referralProgramEditionConfigs, setReferralProgramEditionConfigs] = useState<
    ReferralProgramEditionConfig[] | null
  >(null);

  async function fetchReferralProgramEditionConfigs() {
    setFetchErrorMessage("");
    setIsLoading(true);

    try {
      const response = await client.getEditionConfigSet();
      if (response.responseCode !== ReferralProgramEditionConfigSetResponseCodes.Ok) {
        console.error(response.errorMessage);
        setReferralProgramEditionConfigs(null);
        setFetchErrorMessage("An error occurred while loading the Referral program editions.");
        return;
      }
      setReferralProgramEditionConfigs(filterOutUnrecognizedEditions(response.data.editions));
    } catch (error) {
      console.error(error);
      setReferralProgramEditionConfigs(null);
      setFetchErrorMessage("An error occurred while loading the Referral program editions.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchReferralProgramEditionConfigs();
  }, []);

  return (
    <DisplayReferralProgramEditionsList
      isLoading={isLoading}
      fetchErrorMessage={fetchErrorMessage}
      referralProgramEditionConfigs={referralProgramEditionConfigs}
      // Using mock data for the loading state because the current ens-referrals defaults are outdated
      loadingReferralProgramEditionConfigs={mockReferralProgramEditionsList}
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
  referralProgramEditionConfigs: ReferralProgramEditionConfig[] | null;
  loadingReferralProgramEditionConfigs: ReferralProgramEditionConfig[];
  simplifiedVariant: boolean;
}

export const DisplayReferralProgramEditionsList = ({
  isLoading,
  fetchErrorMessage,
  referralProgramEditionConfigs,
  loadingReferralProgramEditionConfigs,
  simplifiedVariant,
}: DisplayReferralProgramEditionsListProps) => {
  // refresh the status every minute for the grouped view
  const now = useNow({ timeToRefresh: simplifiedVariant ? secondsInHour : secondsInMinute });

  const ErrorDisplay = (
    <ErrorInfo
      title="Error loading referral programs data"
      description={[`${fetchErrorMessage} Please try again later.`]}
    />
  );

  if (simplifiedVariant) {
    return (
      <Fragment>
        {isLoading && (
          <div className="w-full h-fit flex flex-col justify-start items-center gap-2">
            {loadingReferralProgramEditionConfigs.map((edition, index) => {
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
          </div>
        )}
        {!isLoading && referralProgramEditionConfigs === null && fetchErrorMessage && ErrorDisplay}
        {!isLoading && referralProgramEditionConfigs !== null && (
          <div className="w-full h-fit flex flex-col justify-start items-center gap-2">
            {referralProgramEditionConfigs.map((edition) => {
              if (edition.rules.awardModel === ReferralProgramAwardModels.RevShareLimit) {
                return (
                  <ReferralProgramEditionCardRevShareLimit
                    referralProgramEditionConfig={edition}
                    key={`referral-program-edition-${edition.slug}`}
                  />
                );
              }

              return (
                <ReferralProgramEditionCardPieSplit
                  referralProgramEditionConfig={edition}
                  key={`referral-program-edition-${edition.slug}`}
                />
              );
            })}
          </div>
        )}
      </Fragment>
    );
  }

  const filterEditionsByStatus = (
    editions: ReferralProgramEditionConfig[],
    status: ReferralProgramStatusId,
  ) => editions.filter((edition) => calcReferralProgramStatus(edition.rules, now) === status);

  const { activeEditions, closedEditions, scheduledEditions } = useMemo(() => {
    if (!referralProgramEditionConfigs) {
      return { activeEditions: [], closedEditions: [], scheduledEditions: [] };
    }
    return {
      activeEditions: referralProgramEditionConfigs.filter(
        (edition) =>
          calcReferralProgramStatus(edition.rules, now) === ReferralProgramStatuses.Active,
      ),
      closedEditions: referralProgramEditionConfigs.filter(
        (edition) =>
          calcReferralProgramStatus(edition.rules, now) === ReferralProgramStatuses.Closed,
      ),
      scheduledEditions: referralProgramEditionConfigs.filter(
        (edition) =>
          calcReferralProgramStatus(edition.rules, now) === ReferralProgramStatuses.Scheduled,
      ),
    };
  }, [referralProgramEditionConfigs, now]);

  return (
    <Fragment>
      {isLoading && (
        <ReferralProgramEditionsListContainer
          activeEditions={filterEditionsByStatus(
            loadingReferralProgramEditionConfigs,
            ReferralProgramStatuses.Active,
          ).map((edition, index) => {
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
          closedEditions={filterEditionsByStatus(
            loadingReferralProgramEditionConfigs,
            ReferralProgramStatuses.Closed,
          ).map((edition, index) => {
            if (edition.rules.awardModel === ReferralProgramAwardModels.RevShareLimit) {
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
          scheduledEditions={filterEditionsByStatus(
            loadingReferralProgramEditionConfigs,
            ReferralProgramStatuses.Scheduled,
          ).map((edition, index) => {
            if (edition.rules.awardModel === ReferralProgramAwardModels.RevShareLimit) {
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
      {!isLoading && referralProgramEditionConfigs === null && fetchErrorMessage && ErrorDisplay}
      {!isLoading && referralProgramEditionConfigs !== null && (
        <ReferralProgramEditionsListContainer
          activeEditions={activeEditions.map((edition) => {
            if (edition.rules.awardModel === ReferralProgramAwardModels.RevShareLimit) {
              return (
                <ReferralProgramEditionCardRevShareLimit
                  referralProgramEditionConfig={edition}
                  key={`referral-program-edition-${edition.slug}`}
                />
              );
            }
            return (
              <ReferralProgramEditionCardPieSplit
                referralProgramEditionConfig={edition}
                key={`referral-program-edition-${edition.slug}`}
              />
            );
          })}
          closedEditions={closedEditions.map((edition) => {
            if (edition.rules.awardModel === ReferralProgramAwardModels.RevShareLimit) {
              return (
                <ReferralProgramEditionCardRevShareLimit
                  referralProgramEditionConfig={edition}
                  key={`referral-program-edition-${edition.slug}`}
                />
              );
            }
            return (
              <ReferralProgramEditionCardPieSplit
                referralProgramEditionConfig={edition}
                key={`referral-program-edition-${edition.slug}`}
              />
            );
          })}
          scheduledEditions={scheduledEditions.map((edition) => {
            if (edition.rules.awardModel === ReferralProgramAwardModels.RevShareLimit) {
              return (
                <ReferralProgramEditionCardRevShareLimit
                  referralProgramEditionConfig={edition}
                  key={`referral-program-edition-${edition.slug}`}
                />
              );
            }
            return (
              <ReferralProgramEditionCardPieSplit
                referralProgramEditionConfig={edition}
                key={`referral-program-edition-${edition.slug}`}
              />
            );
          })}
        />
      )}
    </Fragment>
  );
};

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
