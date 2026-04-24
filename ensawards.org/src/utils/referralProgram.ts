import type {
  ReferralProgramEditionSlug,
  ReferralProgramEditionSummary,
  ReferralProgramEditionSummaryPieSplit,
  ReferralProgramEditionSummaryRevShareLimit,
} from "@namehash/ens-referrals/v1";
import {
  ENSReferralsClient,
  ReferralProgramAwardModels,
  ReferralProgramEditionSummariesResponseCodes,
} from "@namehash/ens-referrals/v1";
import { isValidSlug } from "data/shared/slugs";

import { getCurrencyInfo, type Price } from "@ensnode/ensnode-sdk";

import { getENSNodeUrl } from "@/utils/env";

export const filterOutUnrecognizedEditions = (
  editionSummaries: ReferralProgramEditionSummary[],
): (ReferralProgramEditionSummaryPieSplit | ReferralProgramEditionSummaryRevShareLimit)[] => {
  return editionSummaries.filter(
    (editionSummary) => editionSummary.awardModel !== ReferralProgramAwardModels.Unrecognized,
  );
};

const getEditionsFetchErrorMessage = (errorMessage: string) =>
  `Error fetching referral program editions: ${errorMessage}.`;

export async function getReferralProgramEditionSummaryBySlug(
  referralProgramSlug: ReferralProgramEditionSlug,
): Promise<
  ReferralProgramEditionSummaryPieSplit | ReferralProgramEditionSummaryRevShareLimit | undefined
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
  (ReferralProgramEditionSummaryPieSplit | ReferralProgramEditionSummaryRevShareLimit)[]
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

//TODO: See https://github.com/namehash/ensawards/issues/151
/**
 * Converts the parsed currency representation in its smallest unit back to its original value.
 *
 * **Note** For large values this parsing may lead to loss of precision
 *
 * @param value - a {@link Price} object with the amount in the smallest unit
 * @returns A number representing the actual amount of the given currency
 *
 * @example
 * Based on the USDC currency
 * parseReferralProgramCurrency({ currency: "USDC", amount: 123456780n }) // returns 123.45678
 * parseReferralProgramCurrency({ currency: "USDC", amount: 1000000n }) // returns 1
 * parseReferralProgramCurrency({ currency: "USDC", amount: 1000n }) // returns 0.001
 */
export const parseReferralProgramCurrency = (value: Price): number => {
  const currencyInfo = getCurrencyInfo(value.currency);
  return Number(value.amount) / Math.pow(10, currencyInfo.decimals);
};
