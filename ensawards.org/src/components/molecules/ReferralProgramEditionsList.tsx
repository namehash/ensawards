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
import { DEFAULT_REFERRAL_PROGRAM_EDITIONS } from "@/utils/referralProgram";

export function ReferralProgramEditionsList() {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchErrorMessage, setFetchErrorMessage] = useState("");
  const ensNodeUrl = getENSNodeUrl();
  const client = useMemo(() => new ENSReferralsClient({ url: ensNodeUrl }), [ensNodeUrl]);

  const [referralProgramEditionConfigs, setReferralProgramEditionConfigs] = useState<
    ReferralProgramEditionConfig[] | null
  >(null);

  // this value should be adjusted as new editions are launched, we could also turn it into an env variable
  const numberOfLoadingStateEditions = 1;

  // TODO: in the future this should be completely powered by the backend (so the fetch is done by the client),
  // but for now we should used the default get function and only display the holiday awards edition.
  // For more details see the TODO @ ensawards.org\src\utils\referralProgram.ts
  async function fetchReferralProgramEditionConfigs() {
    setFetchErrorMessage("");
    setIsLoading(true);

    try {
      // const response = await client.getEditionConfigSet();

      // if (response.responseCode !== ReferralProgramEditionConfigSetResponseCodes.Ok) {
      //   console.error(response.errorMessage);
      //   setReferralProgramEditionConfigs(null);
      //   setFetchErrorMessage("An error occurred while loading the Referral program editions.");
      //   setIsLoading(false);
      //   return;
      // }

      // setReferralProgramEditionConfigs(response.data.editions);

      //TODO: A temporary mock to only display holiday awards edition
      setReferralProgramEditionConfigs(DEFAULT_REFERRAL_PROGRAM_EDITIONS);
    } catch (error) {
      // console.error(error);
      // setReferralProgramEditionConfigs(null);
      // setFetchErrorMessage("An error occurred while loading the Referral program editions.");
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
