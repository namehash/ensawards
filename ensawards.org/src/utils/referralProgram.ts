import type {
  ReferralProgramEditionSlug,
  ReferralProgramEditionSummary,
  ReferralProgramEditionSummaryPieSplit,
  ReferralProgramEditionSummaryRevShareCap,
} from "@namehash/ens-referrals";
import {
  ENSReferralsClient,
  ReferralProgramAwardModels,
  ReferralProgramEditionSummariesResponseCodes,
} from "@namehash/ens-referrals";
import { isValidSlug } from "data/shared/slugs";

import { getENSNodeUrl } from "@/utils/env";

export const filterOutUnrecognizedEditions = (
  editionSummaries: ReferralProgramEditionSummary[],
): (ReferralProgramEditionSummaryPieSplit | ReferralProgramEditionSummaryRevShareCap)[] => {
  return editionSummaries.filter(
    (editionSummary) => editionSummary.awardModel !== ReferralProgramAwardModels.Unrecognized,
  );
};

const getEditionsFetchErrorMessage = (errorMessage: string) =>
  `Error fetching referral program editions: ${errorMessage}.`;

export async function getReferralProgramEditionSummaryBySlug(
  referralProgramSlug: ReferralProgramEditionSlug,
): Promise<
  ReferralProgramEditionSummaryPieSplit | ReferralProgramEditionSummaryRevShareCap | undefined
> {
  if (!referralProgramSlug || !isValidSlug(referralProgramSlug)) return undefined;

  try {
    const client = new ENSReferralsClient({ url: getENSNodeUrl() });
    const response = await client.getEditionSummaries();

    if (response.responseCode !== ReferralProgramEditionSummariesResponseCodes.Ok) {
      console.error(
        getEditionsFetchErrorMessage(`(${response.error}) --> ${response.errorMessage}`),
      );
      return undefined;
    }

    return filterOutUnrecognizedEditions(response.data.editions).find(
      (edition) => edition.slug === referralProgramSlug,
    );
  } catch (error) {
    console.error(
      getEditionsFetchErrorMessage(error instanceof Error ? error.message : String(error)),
    );
    return undefined;
  }
}

export async function fetchReferralProgramEditionSummaries(): Promise<
  (ReferralProgramEditionSummaryPieSplit | ReferralProgramEditionSummaryRevShareCap)[]
> {
  try {
    const client = new ENSReferralsClient({ url: getENSNodeUrl() });
    const response = await client.getEditionSummaries();

    if (response.responseCode !== ReferralProgramEditionSummariesResponseCodes.Ok) {
      throw new Error(`(${response.error}) --> ${response.errorMessage}`);
    }

    return filterOutUnrecognizedEditions(response.data.editions);
  } catch (error) {
    throw new Error(
      getEditionsFetchErrorMessage(error instanceof Error ? error.message : String(error)),
    );
  }
}
