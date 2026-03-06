import type {
  ReferralProgramEditionConfig,
  ReferralProgramEditionSlug,
} from "@namehash/ens-referrals/v1";
import {
  ENSReferralsClient,
  getDefaultReferralProgramEditionConfigSet,
  ReferralProgramAwardModels,
  ReferralProgramEditionConfigSetResponseCodes,
} from "@namehash/ens-referrals/v1";

import { isValidSlug } from "@/utils";
import { getENSNodeUrl } from "@/utils/env";
import { DEFAULT_ENS_NAMESPACE } from "@/utils/namespace";

export const filterOutUnrecognizedEditions = (
  editions: ReferralProgramEditionConfig[],
): ReferralProgramEditionConfig[] => {
  return editions.filter(
    (edition) => edition.rules.awardModel !== ReferralProgramAwardModels.Unrecognized,
  );
};

export const DEFAULT_REFERRAL_PROGRAM_EDITIONS: ReferralProgramEditionConfig[] =
  filterOutUnrecognizedEditions(
    Array.from(getDefaultReferralProgramEditionConfigSet(DEFAULT_ENS_NAMESPACE).values()),
  );

const getEditionsFetchErrorMessage = (errorMessage: string) =>
  `Error fetching referral program editions: ${errorMessage}. Falling back to default referral program editions.`;

export async function getReferralProgramEditionConfigBySlug(
  referralProgramSlug: ReferralProgramEditionSlug,
): Promise<ReferralProgramEditionConfig | undefined> {
  if (!referralProgramSlug || !isValidSlug(referralProgramSlug)) return undefined;

  try {
    const client = new ENSReferralsClient({ url: getENSNodeUrl() });
    const response = await client.getEditionConfigSet();

    if (response.responseCode !== ReferralProgramEditionConfigSetResponseCodes.Ok) {
      console.error(
        getEditionsFetchErrorMessage(`(${response.error}) --> ${response.errorMessage}`),
      );
      return DEFAULT_REFERRAL_PROGRAM_EDITIONS.find(
        (edition) => edition.slug === referralProgramSlug,
      );
    }

    return filterOutUnrecognizedEditions(response.data.editions).find(
      (edition) => edition.slug === referralProgramSlug,
    );
  } catch (error) {
    console.error(
      getEditionsFetchErrorMessage(error instanceof Error ? error.message : String(error)),
    );
    return DEFAULT_REFERRAL_PROGRAM_EDITIONS.find(
      (edition) => edition.slug === referralProgramSlug,
    );
  }
}

export async function fetchReferralProgramEditions(): Promise<ReferralProgramEditionConfig[]> {
  try {
    const client = new ENSReferralsClient({ url: getENSNodeUrl() });
    const response = await client.getEditionConfigSet();

    if (response.responseCode !== ReferralProgramEditionConfigSetResponseCodes.Ok) {
      console.error(
        getEditionsFetchErrorMessage(`(${response.error}) --> ${response.errorMessage}`),
      );
      return DEFAULT_REFERRAL_PROGRAM_EDITIONS;
    }

    return filterOutUnrecognizedEditions(response.data.editions);
  } catch (error) {
    console.error(
      getEditionsFetchErrorMessage(error instanceof Error ? error.message : String(error)),
    );
    return DEFAULT_REFERRAL_PROGRAM_EDITIONS;
  }
}
