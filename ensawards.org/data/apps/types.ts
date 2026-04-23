import type { SvgIcon } from "data/shared/svg-icon.ts";

import type { Name } from "@ensnode/ensnode-sdk";

import type { BestPracticeBenchmarks } from "../ens-best-practices/types.ts";
import type { Project } from "../projects/types.ts";

/**
 * Represents the types of apps that are currently benchmarked on ENSAwards.
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
  icon: SvgIcon;
  socials: {
    website: URL;
    twitter: URL;
    ens?: Name;
  };
  /** Relative path from `/data/apps` to the Open Graph image for the app.
   *
   * @optional It's not required to provide an OG image yourself.
   * We have a fallback mechanism in place, so the SEO of App's details page won't be degraded.
   * In fact, we recommend leaving it empty. When your PR with a new {@link App} gets accepted,
   * the NameHash Labs team will follow it up, providing customized OG images.
   */
  ogImagePath?: string;

  /** Relative path from `/data/apps` to the Twitter Open Graph image for the app.
   *
   * @optional It's not required to provide a Twitter OG image yourself.
   * We have a fallback mechanism in place, so the SEO of App's details page won't be degraded.
   * In fact, we recommend leaving it empty. When your PR with a new {@link App} gets accepted,
   * the NameHash Labs team will follow it up, providing customized OG images.
   */
  twitterOgImagePath?: string;
}

/**
 * Defines relations between {@link AppSlug} and {@link BestPracticeBenchmarks}
 * for the related {@link App}.
 *
 * @invariant An explicit key for each {@link AppSlug} should be added to this `Record` for each available {@link App}.
 * The value should be a {@link BestPracticeBenchmarks} record.
 * To register this entry, `defineAppBenchmarks()` should be called from each app's `data/apps/{app}/benchmarks.ts` file.
 */
export type AppBenchmarks = Record<AppSlug, BestPracticeBenchmarks>;
