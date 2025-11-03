import type { BestPractice } from "@/types/bestPractices.ts";
import type { Name } from "@ensnode/ensnode-sdk";

export enum BenchmarkResult {
  Pass = "Pass",
  PartialPass = "Partial pass",
  Fail = "Fail",
}

export interface AppBenchmark {
  bestPracticeDetails: BestPractice;
  result: BenchmarkResult;
}

export interface App {
  id: string; // normalized app name, might be redundant
  slug: string;
  name: string;
  description: string;
  type: string; //Will probably change to string union once the data is provided
  socials: {
    website: URL;
    twitter: URL;
    ens?: Name;
  };
  iconSourceLink: string;
  benchmarks: AppBenchmark[];
}
