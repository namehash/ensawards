import type { BestPractice } from "@/types/bestPractices.ts";
import type { ChainId, Name } from "@ensnode/ensnode-sdk";
import type { Address } from "viem";

export enum BenchmarkResult {
  Pass = "Pass",
  PartialPass = "Partial pass",
  Fail = "Fail",
}

/**
 * Unix timestamp in seconds.
 */
export type UnixTimestamp = number;

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
  return Math.floor(new Date(date).getTime() / 1000);
}

/**
 * Identity of the person who verified a benchmark result.
 * Uses ENSIP-19 reverse resolution pattern with chainId and address.
 */
export interface BenchmarkVerifier {
  /**
   * The chain ID where the verifier's address exists.
   * Using ChainId type from ensnode-sdk for consistency with contract naming pattern.
   */
  chainId: ChainId;

  /**
   * The Ethereum address of the verifier.
   */
  address: Address;

  /**
   * Unix timestamp (in seconds) of when the benchmark was last verified.
   */
  verifiedAt: UnixTimestamp;
}

export interface AppBenchmark {
  bestPracticeDetails: BestPractice;
  result: BenchmarkResult;
  verification: BenchmarkVerifier;
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
