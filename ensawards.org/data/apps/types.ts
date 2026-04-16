import type { JSX } from "astro/jsx-runtime";

import type { Name } from "@ensnode/ensnode-sdk";

import type { BestPracticeBenchmarks } from "../ens-best-practices/types.ts";
import type { Project } from "../projects/types.ts";

/**
 * Represents all types of apps that are currently benchmarked on ENSAwards.
 */
export const AppTypes = {
  Wallet: "wallet",
  Explorer: "explorer",
} as const;

/**
 * The derived string union of possible {@link AppTypes}.
 */
export type AppType = (typeof AppTypes)[keyof typeof AppTypes];

/** A unique identifier for an app.
 *
 * @invariant Must be unique across all apps.
 * @invariant Must match {@link ENSAWARDS_SLUG_PATTERN}.
 */
export type AppSlug = string;

export interface App {
  id: string; // normalized app name, might be redundant
  appSlug: AppSlug;
  project: Project; // each app is part of a broader project (which may span multiple apps and protocols).
  name: string;
  description: string;
  type: AppType;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  socials: {
    website: URL;
    twitter: URL;
    ens?: Name;
  };
  /** Relative path from `/data/apps` to the Open Graph image for the app. */
  ogImagePath?: string;
  /** Relative path from `/data/apps` to the Twitter Open Graph image for the app. */
  twitterOgImagePath?: string;
}

/**
 * Defines relations between {@link AppSlug} and {@link BestPracticeBenchmarks}
 * for the related {@link App}.
 *
 * @invariant Each {@link App} must define an explicit entry.
 */
export type AppBenchmarks = Record<AppSlug, BestPracticeBenchmarks>;
