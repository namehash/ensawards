import type { Address } from "viem";

import type { PossibleSuggestions } from "@/components/molecules/contact-form/types.ts";
import { AppTypes } from "@/types/apps.ts";
import type { BestPracticeTarget } from "@/types/bestPractices.ts";
import { ProtocolTypes } from "@/types/bestPractices.ts";

const CAPITALIZED_ACRONYMS = ["DAO", "DeFi"];

export const normalizeLeaderboardSnippetPhrase = (text: string): string => {
  return CAPITALIZED_ACRONYMS.some((phrase) => text.includes(phrase)) ? text : text.toLowerCase();
};

export const breakLongWords = (
  word: string,
  breakRegex: string | RegExp,
  minLength = 15,
): string[] => {
  if (word.length < minLength) {
    return [word];
  }

  const elements = word.split(breakRegex);
  const result: string[] = [];
  let current = elements[0];

  for (let i = 1; i < elements.length; i++) {
    const next = elements[i];
    if ((current + next).length < minLength) {
      current += next; // merge if still short
    } else {
      result.push(current);
      current = next;
    }
  }

  if (current) result.push(current);
  return result;
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

const pluralizedBestPracticeTargets: Record<BestPracticeTarget, string> = {
  [AppTypes.Explorer]: "Explorers",
  [AppTypes.Wallet]: "Wallets",
  [ProtocolTypes.DAO]: "DAOs",
  [ProtocolTypes.DeFi]: "DeFi protocols",
};

export const pluralizeBestPracticeTarget = (target: BestPracticeTarget): string => {
  return pluralizedBestPracticeTargets[target];
};
