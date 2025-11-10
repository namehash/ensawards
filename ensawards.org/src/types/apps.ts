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

export const AppTypes = {
  Wallet: "Wallet",
  Explorer: "Explorer",
};

/**
 * The derived string union of possible {@link AppTypes}.
 */
export type AppType = (typeof AppTypes)[keyof typeof AppTypes];

export interface App {
  id: string; // normalized app name, might be redundant
  slug: string;
  name: string;
  description: string;
  type: AppType;
  iconPath: string;
  benchmarks: AppBenchmark[];
  socials: {
    website: URL;
    twitter: URL;
    ens?: Name;
  };
  ogImagePath?: string;
  twitterOgImagePath?: string;
}
