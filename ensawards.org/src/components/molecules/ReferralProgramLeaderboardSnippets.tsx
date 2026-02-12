import type { ReferralProgramEditionConfig } from "@namehash/ens-referrals/v1";
import {
  ENSReferralsClient,
  getDefaultReferralProgramEditionConfigSet,
  ReferralProgramEditionConfigSetResponseCodes,
} from "@namehash/ens-referrals/v1";
import { useEffect, useMemo, useState } from "react";

import {
  ReferrerLeaderboardSnippetCard,
  ReferrerLeaderboardSnippetCardLoading,
} from "@/components/atoms/cards/ReferrerLeaderboardSnippetCard.tsx";
import { ErrorInfo } from "@/components/atoms/ErrorInfo.tsx";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { getENSNodeUrl } from "@/utils/env";
import { DEFAULT_ENS_NAMESPACE } from "@/utils/namespace.ts";

export function ReferralProgramLeaderboardSnippets() {
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
    <TooltipProvider delayDuration={250} skipDelayDuration={0}>
      {isLoading &&
        [...Array(numberOfLoadingStateEditions).keys()].map((placeholder) => (
          <ReferrerLeaderboardSnippetCardLoading
            key={`referral-program-edition-loading-${placeholder}`}
          />
        ))}
      {!isLoading && referralProgramEditionConfigs === null && fetchErrorMessage && (
        <ErrorInfo
          title="Error loading referral programs data"
          description={[`${fetchErrorMessage} Please try again later.`]}
        />
      )}
      {!isLoading &&
        referralProgramEditionConfigs !== null &&
        referralProgramEditionConfigs.map((edition) => (
          <ReferrerLeaderboardSnippetCard
            referralProgramEditionConfig={edition}
            key={`referral-program-edition-${edition.slug}`}
          />
        ))}
    </TooltipProvider>
  );
}
