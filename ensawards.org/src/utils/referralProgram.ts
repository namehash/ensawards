import type {
  ReferralProgramEditionConfig,
  ReferralProgramEditionSlug,
} from "@namehash/ens-referrals/v1";
import {
  ENSReferralsClient,
  getDefaultReferralProgramEditionConfigSet,
  ReferralProgramEditionConfigSetResponseCodes,
} from "@namehash/ens-referrals/v1";

import { isValidSlug } from "@/utils";
import { getENSNodeUrl } from "@/utils/env";
import { DEFAULT_ENS_NAMESPACE } from "@/utils/namespace";

export async function getReferralProgramEditionConfigBySlug(
  referralProgramSlug: ReferralProgramEditionSlug,
): Promise<ReferralProgramEditionConfig | undefined> {
  if (!referralProgramSlug || !isValidSlug(referralProgramSlug)) return undefined;

  const fallback = Array.from(
    getDefaultReferralProgramEditionConfigSet(DEFAULT_ENS_NAMESPACE).values(),
  );

  try {
    const client = new ENSReferralsClient({ url: getENSNodeUrl() });
    const response = await client.getEditionConfigSet();

    const editions =
      response.responseCode === ReferralProgramEditionConfigSetResponseCodes.Ok
        ? response.data.editions
        : fallback;

    return editions.find((edition) => edition.slug === referralProgramSlug);
  } catch (error) {
    console.error(
      "Error fetching referral program:",
      error,
      "Falling back to default referral program editions.",
    );
    return fallback.find((edition) => edition.slug === referralProgramSlug);
  }
}

export async function fetchReferralProgramEditions(): Promise<ReferralProgramEditionConfig[]> {
  const fallback = Array.from(
    getDefaultReferralProgramEditionConfigSet(DEFAULT_ENS_NAMESPACE).values(),
  );

  try {
    const client = new ENSReferralsClient({ url: getENSNodeUrl() });
    const response = await client.getEditionConfigSet();

    return response.responseCode === ReferralProgramEditionConfigSetResponseCodes.Ok
      ? response.data.editions
      : fallback;
  } catch (error) {
    console.error(
      "Error fetching referral program:",
      error,
      "Falling back to default referral program editions.",
    );
    return fallback;
  }
}
