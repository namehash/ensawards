import type { PossibleSuggestions } from "@/components/molecules/contact-form/types.ts";

export const adaptBreadcrumb = (breadcrumb: string): string =>
  breadcrumb.toLowerCase().replaceAll(" ", "-");
//TODO: If we only use it in subpage hero, maybe it's best to move it there

export const adaptSuggestionText = (whatsSuggested: PossibleSuggestions): string => {
  switch (whatsSuggested) {
    case "app":
      return "an app you'd like us to benchmark.";

    case "best practice":
      return "a best practice you'd like us to add.";

    default:
      throw new Error(`${whatsSuggested} is not a valid suggestion category`);
  }
};
