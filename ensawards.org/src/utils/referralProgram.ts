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

// TODO: After we are ready to publish the march edition (start using backend data instead of the defaults)
// we should adapt the code accordingly by:
// * Uncommenting all code related to fetching the editions from the backend
// * Using default values only as a fallback.
// * Removing all code that limits the list of editions to holiday awards only
// (all filters by "2025-12" slug should be removed)

export const DEFAULT_REFERRAL_PROGRAM_EDITIONS: ReferralProgramEditionConfig[] = Array.from(
  getDefaultReferralProgramEditionConfigSet(DEFAULT_ENS_NAMESPACE).values(),
).filter((edition) => edition.slug === "2025-12");

export async function getReferralProgramEditionConfigBySlug(
  referralProgramSlug: ReferralProgramEditionSlug,
): Promise<ReferralProgramEditionConfig | undefined> {
  if (!referralProgramSlug || !isValidSlug(referralProgramSlug)) return undefined;

  // try {
  //   const client = new ENSReferralsClient({ url: getENSNodeUrl() });
  //   const response = await client.getEditionConfigSet();

  //   const editions =
  //     response.responseCode === ReferralProgramEditionConfigSetResponseCodes.Ok
  //       ? response.data.editions
  //       : DEFAULT_REFERRAL_PROGRAM_EDITIONS;

  //   return editions.find((edition) => edition.slug === referralProgramSlug);
  // } catch (error) {
  //   console.error(
  //     "Error fetching referral program:",
  //     error,
  //     "Falling back to default referral program editions.",
  //   );
  //   return DEFAULT_REFERRAL_PROGRAM_EDITIONS.find(
  //     (edition) => edition.slug === referralProgramSlug,
  //   );
  // }

  return DEFAULT_REFERRAL_PROGRAM_EDITIONS.find((edition) => edition.slug === referralProgramSlug);
}

export async function fetchReferralProgramEditions(): Promise<ReferralProgramEditionConfig[]> {
  // try {
  //   const client = new ENSReferralsClient({ url: getENSNodeUrl() });
  //   const response = await client.getEditionConfigSet();

  //   return response.responseCode === ReferralProgramEditionConfigSetResponseCodes.Ok
  //     ? response.data.editions.filter((edition) => edition.slug === "2025-12")
  //     : DEFAULT_REFERRAL_PROGRAM_EDITIONS;
  // } catch (error) {
  //   console.error(
  //     "Error fetching referral program:",
  //     error,
  //     "Falling back to default referral program editions.",
  //   );
  //   return DEFAULT_REFERRAL_PROGRAM_EDITIONS;
  // }
  return DEFAULT_REFERRAL_PROGRAM_EDITIONS;
}
