import type { Address } from "viem";

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

export const usdFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
