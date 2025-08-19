import type {PossibleSuggestions} from "@/components/molecules/contact-form/types.ts";
import {type AppData, appsData, BenchmarkResult} from "@/data/appData.ts";

export const normalizeText = (text: string): string =>
  text.toLowerCase().replaceAll(" ", "-");

export const getSuggestionText = (whatsSuggested: PossibleSuggestions): string => {
  switch (whatsSuggested) {
    case "app":
      return "Want to add an app? Suggest the app for review or add an app review yourself on GitHub.";

    case "best practice":
      return "Want to add best practice? Suggest it for review or add it yourself on GitHub.";

    case "benchmark result":
      return "Benchmark result updates to report? Notify us of the change or update it yourself on GitHub.";

    default:
      throw new Error(`${whatsSuggested} is not a valid suggestion category`);
  }
};

export const scrollWithOffset = (id:string, offset:number) => {
  const element = document.getElementById(id);
  if (!element) return;

  const y = element.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
}

export const getAppById = (appId: string): AppData | undefined => {
  return appsData.find((app) => app.id === appId);
}

//TODO: distribute these functions more reasonably
export const BenchmarkResultToBadgeStyles = new Map<BenchmarkResult, string>([
    [BenchmarkResult.PartialPass, "text-neutral-900 bg-neutral-100"],
    [BenchmarkResult.Pass, "text-emerald-600 bg-[#0596691A]"],
    [BenchmarkResult.Fail, "text-red-600 bg-[#DC26261A]"]
]);
