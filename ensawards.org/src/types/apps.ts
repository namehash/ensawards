import { millisecondsInSecond } from "date-fns/constants";

import type { AccountId, Name, UnixTimestamp } from "@ensnode/ensnode-sdk";

import type { BestPractice } from "@/types/bestPractices.ts";

/**
 * TODO: Determine if we need PartialPass for benchmarks. If not we can simplify.
 */
export enum BenchmarkResult {
  Pass = "Pass",
  PartialPass = "Partial pass",
  Fail = "Fail",
}

/**
 * Helper function to convert human-readable date to Unix timestamp.
 * Use this in data files for better readability.
 *
 * @param date - A Date object or ISO 8601 date string
 * @returns Unix timestamp in seconds
 *
 * @example
 * toUnixTimestamp("2025-12-03T10:00:00Z")
 * toUnixTimestamp(new Date())
 */
export function toUnixTimestamp(date: Date | string): UnixTimestamp {
  return Math.floor(new Date(date).getTime() / millisecondsInSecond);
}

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
