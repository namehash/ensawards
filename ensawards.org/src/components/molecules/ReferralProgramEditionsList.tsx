import type {
  ReferralProgramEditionConfig,
  ReferralProgramStatusId,
} from "@namehash/ens-referrals/v1";
import {
  calcReferralProgramStatus,
  ENSReferralsClient,
  ReferralProgramEditionConfigSetResponseCodes,
  ReferralProgramStatuses,
} from "@namehash/ens-referrals/v1";
import { useNow } from "@namehash/namehash-ui";
import { secondsInMinute } from "date-fns/constants";
import { Fragment, type ReactNode, useEffect, useMemo, useState } from "react";

import { ReferralProgramEditionCard } from "@/components/atoms/cards/referralProgramEditionCard";
import { ReferralProgramEditionCardLoading } from "@/components/atoms/cards/referralProgramEditionCard/loading.tsx";
import { ErrorInfo } from "@/components/atoms/ErrorInfo.tsx";
import { getENSNodeUrl } from "@/utils/env";
import {
  DEFAULT_REFERRAL_PROGRAM_EDITIONS,
  filterOutUnrecognizedEditions,
} from "@/utils/referralProgram";

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
        setIsLoading(false);
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
      loadingReferralProgramEditionConfigs={DEFAULT_REFERRAL_PROGRAM_EDITIONS}
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
  closedEditions: closeEditions,
  scheduledEditions,
}: ReferralProgramEditionsListContainerProps) => {
  const headerStyles = "text-2xl leading-normal font-semibold text-black";
  const subcontainerStyles = "w-full flex flex-col justify-start items-start gap-6";
  const editionsListStyles = "w-full h-fit flex flex-col justify-start items-center gap-2";
  return (
    <div className="w-full flex flex-col justify-start items-start gap-8 sm:gap-10 relative z-10">
      {activeEditions.length > 0 && (
        <div className={subcontainerStyles}>
          <h2 className={headerStyles}>Active</h2>
          <div className={editionsListStyles}>{activeEditions}</div>
        </div>
      )}
      {scheduledEditions.length > 0 && (
        <div className={subcontainerStyles}>
          <h2 className={headerStyles}>Scheduled</h2>
          <div className={editionsListStyles}>{scheduledEditions}</div>
        </div>
      )}
      {closeEditions.length > 0 && (
        <div className={subcontainerStyles}>
          <h2 className={headerStyles}>Closed</h2>
          <div className={editionsListStyles}>{closeEditions}</div>
        </div>
      )}
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
  // refresh the status every minute
  const now = useNow({ timeToRefresh: secondsInMinute });

  const ErrorDisplay = (
    <ErrorInfo
      title="Error loading referral programs data"
      description={[`${fetchErrorMessage} Please try again later.`]}
    />
  );

  if (simplifiedVariant) {
    const numberOfLoadingStateEditions = loadingReferralProgramEditionConfigs.length;

    return (
      <Fragment>
        {isLoading && (
          <div className="w-full h-fit flex flex-col justify-start items-center gap-2">
            {[...Array(numberOfLoadingStateEditions).keys()].map((placeholder) => (
              <ReferralProgramEditionCardLoading
                key={`referral-program-edition-loading-${placeholder}`}
              />
            ))}
          </div>
        )}
        {!isLoading && referralProgramEditionConfigs === null && fetchErrorMessage && ErrorDisplay}
        {!isLoading && referralProgramEditionConfigs !== null && (
          <div className="w-full h-fit flex flex-col justify-start items-center gap-2">
            {referralProgramEditionConfigs.map((edition) => (
              <ReferralProgramEditionCard
                referralProgramEditionConfig={edition}
                key={`referral-program-edition-${edition.slug}`}
              />
            ))}
          </div>
        )}
      </Fragment>
    );
  }

  const filterEditionsByStatus = (
    editions: ReferralProgramEditionConfig[],
    status: ReferralProgramStatusId,
  ) => editions.filter((edition) => calcReferralProgramStatus(edition.rules, now) === status);

  return (
    <Fragment>
      {isLoading && (
        <ReferralProgramEditionsListContainer
          activeEditions={filterEditionsByStatus(
            loadingReferralProgramEditionConfigs,
            ReferralProgramStatuses.Active,
          ).map((_, index) => (
            <ReferralProgramEditionCardLoading
              key={`referral-program-edition-loading-active#${index}`}
            />
          ))}
          closedEditions={filterEditionsByStatus(
            loadingReferralProgramEditionConfigs,
            ReferralProgramStatuses.Closed,
          ).map((_, index) => (
            <ReferralProgramEditionCardLoading
              key={`referral-program-edition-loading-closed#${index}`}
            />
          ))}
          scheduledEditions={filterEditionsByStatus(
            loadingReferralProgramEditionConfigs,
            ReferralProgramStatuses.Scheduled,
          ).map((_, index) => (
            <ReferralProgramEditionCardLoading
              key={`referral-program-edition-loading-scheduled#${index}`}
            />
          ))}
        />
      )}
      {!isLoading && referralProgramEditionConfigs === null && fetchErrorMessage && ErrorDisplay}
      {!isLoading && referralProgramEditionConfigs !== null && (
        <ReferralProgramEditionsListContainer
          activeEditions={filterEditionsByStatus(
            referralProgramEditionConfigs,
            ReferralProgramStatuses.Active,
          ).map((edition) => (
            <ReferralProgramEditionCard
              referralProgramEditionConfig={edition}
              key={`referral-program-edition-${edition.slug}`}
            />
          ))}
          closedEditions={filterEditionsByStatus(
            referralProgramEditionConfigs,
            ReferralProgramStatuses.Closed,
          ).map((edition) => (
            <ReferralProgramEditionCard
              referralProgramEditionConfig={edition}
              key={`referral-program-edition-${edition.slug}`}
            />
          ))}
          scheduledEditions={filterEditionsByStatus(
            referralProgramEditionConfigs,
            ReferralProgramStatuses.Scheduled,
          ).map((edition) => (
            <ReferralProgramEditionCard
              referralProgramEditionConfig={edition}
              key={`referral-program-edition-${edition.slug}`}
            />
          ))}
        />
      )}
    </Fragment>
  );
};
