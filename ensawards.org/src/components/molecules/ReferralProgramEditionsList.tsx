import type { ReferralProgramEditionConfig } from "@namehash/ens-referrals/v1";
import {
  ENSReferralsClient,
  getDefaultReferralProgramEditionConfigSet,
  ReferralProgramEditionConfigSetResponseCodes,
} from "@namehash/ens-referrals/v1";
import { Fragment, useEffect, useMemo, useState } from "react";

import {
  ReferralProgramEditionCard,
  ReferralProgramEditionCardLoading,
} from "@/components/atoms/cards/ReferralProgramEditionCard";
import { ErrorInfo } from "@/components/atoms/ErrorInfo.tsx";
import { getENSNodeUrl } from "@/utils/env";
import { DEFAULT_ENS_NAMESPACE } from "@/utils/namespace.ts";

export function ReferralProgramEditionsList() {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchErrorMessage, setFetchErrorMessage] = useState("");
  const ensNodeUrl = getENSNodeUrl();
  const client = useMemo(() => new ENSReferralsClient({ url: ensNodeUrl }), [ensNodeUrl]);

  const [referralProgramEditionConfigs, setReferralProgramEditionConfigs] = useState<
    ReferralProgramEditionConfig[] | null
  >(null);

  // this value should be adjusted as new editions are launched, we could also turn it into an env variable
  const numberOfLoadingStateEditions = 2;
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

      setReferralProgramEditionConfigs(response.data.editions);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setReferralProgramEditionConfigs(null);
      setFetchErrorMessage("An error occurred while loading the Referral program editions.");
    } finally {
      //TODO: A temporary mock to show how the display would look like
      setFetchErrorMessage("");
      setReferralProgramEditionConfigs(
        Array.from(getDefaultReferralProgramEditionConfigSet(DEFAULT_ENS_NAMESPACE).values()),
      );
      // -----------
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
