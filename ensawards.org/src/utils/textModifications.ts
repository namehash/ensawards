import type { Address } from "viem";

import { AppTypes } from "../../data/apps/types.ts";
import { type BestPracticeTarget } from "../../data/ens-best-practices/types.ts";
import { ProtocolTypes } from "../../data/protocols/types.ts";

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

export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
