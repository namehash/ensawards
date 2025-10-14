import type { BestPractice } from "@/types/bestPractices.ts";

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
  ensAwardsScore: number;
  type: string; //Will probably change to string union once the data is provided
  websiteLink: string;
  iconSourceLink: string;
  benchmarks: AppBenchmark[];
}
