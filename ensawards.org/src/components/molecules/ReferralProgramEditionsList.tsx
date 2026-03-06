import type { ReferralProgramEditionConfig } from "@namehash/ens-referrals/v1";
import {
  ENSReferralsClient,
  ReferralProgramEditionConfigSetResponseCodes,
} from "@namehash/ens-referrals/v1";
import { Fragment, useEffect, useMemo, useState } from "react";

import { ReferralProgramEditionCard } from "@/components/atoms/cards/referralProgramEditionCard";
import { ReferralProgramEditionCardLoading } from "@/components/atoms/cards/referralProgramEditionCard/loading.tsx";
import { ErrorInfo } from "@/components/atoms/ErrorInfo.tsx";
import { getENSNodeUrl } from "@/utils/env";
import {
  DEFAULT_REFERRAL_PROGRAM_EDITIONS,
  filterOutUnrecognizedEditions,
} from "@/utils/referralProgram";

export function ReferralProgramEditionsList() {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchErrorMessage, setFetchErrorMessage] = useState("");
  const client = useMemo(() => new ENSReferralsClient({ url: getENSNodeUrl() }), []);

  const [referralProgramEditionConfigs, setReferralProgramEditionConfigs] = useState<
    ReferralProgramEditionConfig[] | null
  >(null);

  const numberOfLoadingStateEditions = DEFAULT_REFERRAL_PROGRAM_EDITIONS.length;

  //TODO: Should we sort editions here on the FE? Do we want to display the newest editions at the top? Or maybe the oldest ones?
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
    <Fragment>
      {isLoading &&
        [...Array(numberOfLoadingStateEditions).keys()].map((placeholder) => (
          <ReferralProgramEditionCardLoading
            key={`referral-program-edition-loading-${placeholder}`}
          />
        ))}
      {!isLoading && referralProgramEditionConfigs === null && fetchErrorMessage && (
        <ErrorInfo
          title="Error loading referral programs data"
          description={[`${fetchErrorMessage} Please try again later.`]}
        />
      )}
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
