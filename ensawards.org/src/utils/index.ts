import type {PossibleSuggestions} from "@/components/molecules/contact-form/types.ts";
import {type AppData, appsData, BenchmarkResult} from "@/data/appData.ts";

export const adaptToLink = (name: string): string =>
  name.toLowerCase().replaceAll(" ", "-");

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
