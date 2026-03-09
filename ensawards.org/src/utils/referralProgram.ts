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

import { getCurrencyInfo, type PriceUsdc } from "@ensnode/ensnode-sdk";

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

//TODO: Maybe we already have a function for it? I couldn't find such...
/**
 * Converts the parsed currency representation in its smallest unit back to its original value.
 *
 * **Note** For large values this parsing may lead to loss of precision
 *
 * @param valueInUSDC - a {@link PriceUsdc} object with the amount in the smallest unit (6 decimals)
 * @returns A number representing the actual amount of the given currency
 *
 * @example
 * Based on the USDC currency
 * parseReferralProgramCurrency({ currency: "USDC", amount: 123456780n }) // returns 123.4567
 * parseReferralProgramCurrency({ currency: "USDC", amount: 1000000n }) // returns 1
 * parseReferralProgramCurrency({ currency: "USDC", amount: 1000n }) // returns 0.001
 */
export const parseReferralProgramCurrency = (valueInUSDC: PriceUsdc): number => {
  const currencyInfo = getCurrencyInfo(valueInUSDC.currency);
  return Number(valueInUSDC.amount) / Math.pow(10, currencyInfo.decimals);
};
