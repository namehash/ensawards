import type { PossibleSuggestions } from "@/components/molecules/contact-form/types.ts";

/**
 * Checks whether a given string is a valid slug.
 * A valid slug:
 * - is non-empty
 * - contains only lowercase letters (a–z) and hyphens (-)
 */
export const isValidSlug = (maybeSlug: string) => {
  const slugRegex = /^[a-z-]+$/;

  if (maybeSlug.length == 0 ){
    return false;
  }

  return slugRegex.test(maybeSlug);
}

/**
 * Takes in an array of strings and returns true
 * if and only if all strings in the provided array are unique.
 */
export const areStringsUnique = (stringArray: string[]): boolean => {
  const stringSet = new Set();

  for (const elem of stringArray){
    if (stringSet.has(elem)){
      return false;
    }

    stringSet.add(elem);
  }

  return true;
}

export const getSuggestionText = (whatsSuggested: PossibleSuggestions): string => {
  switch (whatsSuggested) {
    case "app":
      return "Want to add an app? Suggest the app for review or add an app review yourself on GitHub.";

    case "best practice":
      return "Want to add best practice? Suggest it for review or add it yourself on GitHub.";

    case "benchmark result":
      return "Benchmark result updates to report? Notify us of the change or update it yourself on GitHub.";

    case "dao":
      return "Want to add a DAO? Suggest the DAO for review or add an DAO review yourself on GitHub.";

    default:
      throw new Error(`${whatsSuggested} is not a valid suggestion category`);
  }
};
