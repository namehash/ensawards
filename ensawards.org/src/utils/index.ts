import { getUnixTime } from "date-fns";
import type { Address } from "viem";

import type { OmnichainIndexingStatusId, UnixTimestamp } from "@ensnode/ensnode-sdk";

import type { PossibleSuggestions } from "@/components/molecules/contact-form/types.ts";

/**
 * Checks whether a given string is a valid slug.
 * A valid slug:
 * - is non-empty
 * - contains only lowercase letters (a–z), numbers (0-9), and hyphens (-)
 */
export const isValidSlug = (maybeSlug: string) => {
  const slugRegex = /^[a-z0-9-]+$/;

  if (maybeSlug.length == 0) {
    return false;
  }

  return slugRegex.test(maybeSlug);
};

/**
 * Takes in an array of strings and returns true
 * if and only if all strings in the provided array are unique.
 */
export const areStringsUnique = (stringArray: string[]): boolean => {
  const stringSet = new Set();

  for (const elem of stringArray) {
    if (stringSet.has(elem)) {
      return false;
    }

    stringSet.add(elem);
  }

  return true;
};

/**
 * Date marking the approximate end of the ENS contract naming season event.
 * April 30th 2026 at 23:59:59 UTC
 */
export const ENS_CONTRACT_NAMING_SEASON_APPROX_END: UnixTimestamp = getUnixTime(
  new Date("2026-04-30T23:59:59.000Z"),
);

export function formatOmnichainIndexingStatus(status: OmnichainIndexingStatusId): string {
  const [, formattedStatus] = status.split("-");

  return formattedStatus;
}

export function getEnsAdvocateDetailsRelativePath(address: Address): string {
  return `/advocate/${encodeURIComponent(address)}`;
}

export function getEnsAwardsBaseUrl() {
  if (typeof document !== "undefined") {
    return document.baseURI;
  }

  return "https://ensawards.org/";
}
