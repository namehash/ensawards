import type { PossibleSuggestions } from "@/components/molecules/contact-form/types.ts";
import type { OmnichainIndexingStatusId, UnixTimestamp } from "@ensnode/ensnode-sdk";
import { getUnixTime } from "date-fns";
import type { Address } from "viem";

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

export const getSuggestionText = (whatsSuggested: PossibleSuggestions): string => {
  switch (whatsSuggested) {
    case "app":
      return "Want to add an app? Suggest the app for review or add the app review yourself on GitHub.";

    case "best practice":
      return "Want to add best practice? Suggest it for review or add it yourself on GitHub.";

    case "benchmark result":
      return "Benchmark result updates to report? Notify us of the change or update it yourself on GitHub.";

    case "dao":
      return "Want to add a DAO? Suggest the DAO for review or add the DAO review yourself on GitHub.";

    case "contract":
      return "Contracts to add or update? Notify us of the change or update it yourself on GitHub.";

    default:
      throw new Error(`${whatsSuggested} is not a valid suggestion category`);
  }
};

export const capitalizeFormLabel = (label: string): string => {
  //Special treatment for URL field
  if (label === "url") {
    return label.toUpperCase();
  }

  return capitalizeText(label);
};

export const capitalizeText = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const truncateAddress = (address: Address) =>
  `${address.slice(0, 6)}...${address.slice(-4)}`;

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
