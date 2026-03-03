import type { JSX } from "astro/jsx-runtime";

import type { Name } from "@ensnode/ensnode-sdk";

import type { Project } from "../projects/types.ts";
import type { AppBenchmark } from "./benchmarks-types.ts";

/**
 * Represents all types of apps that are currently benchmarked on ENSAwards.
 */
export const AppTypes = {
  Wallet: "Wallet",
  Explorer: "Explorer",
} as const;

/**
 * The derived string union of possible {@link AppTypes}.
 */
export type AppType = (typeof AppTypes)[keyof typeof AppTypes];

export interface App {
  id: string; // normalized app name, might be redundant
  appSlug: string;
  project: Project; // each app belongs to a single project.
  name: string;
  description: string;
  type: AppType;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  benchmarks: AppBenchmark[];
  socials: {
    website: URL;
    twitter: URL;
    ens?: Name;
  };
  ogImagePath?: string;
  twitterOgImagePath?: string;
}
