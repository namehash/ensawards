import type { BestPractice } from "@/types/bestPractices.ts";
import type { AccountId, Name, UnixTimestamp } from "@ensnode/ensnode-sdk";
import type { BenchmarkResult } from "./benchmarks";

/**
 * Represents a benchmark result for a specific best practice within an app.
 */
export interface AppBenchmark {
  /** The best practice being benchmarked */
  bestPractice: BestPractice;
  /** The result of the benchmark */
  result: BenchmarkResult;
  /** The account ID of the person who performed the benchmark */
  benchmarkedBy: AccountId;
  /** Unix timestamp when the benchmark was performed */
  benchmarkedAt: UnixTimestamp;
}

/**
 * Represents all types of apps that are currently benchmarked on ENSAwards.
 */
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
