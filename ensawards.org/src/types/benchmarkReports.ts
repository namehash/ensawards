import type { App, AppBenchmark } from "@/types/apps.ts";
import type { BestPractice } from "@/types/bestPractices.ts";
import type { AccountId, UnixTimestamp } from "@ensnode/ensnode-sdk";

/**
 * Represents a detailed benchmark report with content body and metadata.
 */
export interface BenchmarkReport {
  /** Unique identifier for the report */
  id: string;
  /** URL slug for the report */
  slug: string;
  /** The app this report is about */
  app: App;
  /** The best practice being benchmarked */
  bestPractice: BestPractice;
  /** The benchmark result (pass, partial pass, or fail) */
  benchmark: AppBenchmark;
  /** The author of the benchmark report */
  author: AccountId;
  /** Timestamp when the report was authored */
  createdAt: UnixTimestamp;
  /** Timestamp when the report was last updated */
  lastUpdatedAt: UnixTimestamp;
  /** The detailed content body of the report */
  content: BenchmarkReportContent;
  /** Meta information for SEO */
  meta: {
    title: string;
    description: string;
    ogImagePath?: string;
    twitterOgImagePath?: string;
  };
}

/**
 * Structured content for a benchmark report.
 */
export interface BenchmarkReportContent {
  /** Main introduction/summary section */
  introduction: string;
  /** Sections of the report */
  sections: BenchmarkReportSection[];
  /** Final conclusion */
  conclusion?: string;
}

/**
 * A section within a benchmark report.
 */
export interface BenchmarkReportSection {
  /** Section heading */
  heading: string;
  /** Section content body */
  content: string;
  /** Optional images for this section */
  images?: BenchmarkReportImage[];
}

/**
 * Image within a benchmark report.
 */
export interface BenchmarkReportImage {
  /** Image file path */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Optional caption */
  caption?: string;
  /** Image width */
  width?: number;
  /** Image height */
  height?: number;
}

/**
 * Update information for benchmark reports.
 */
export interface BenchmarkReportUpdate {
  /** Type of update */
  type: "new_version" | "correction" | "additional_info";
  /** Description of the update */
  description: string;
  /** Timestamp of the update */
  timestamp: UnixTimestamp;
  /** Author of the update */
  author: AccountId;
}
