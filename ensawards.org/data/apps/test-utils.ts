import { mainnet } from "viem/chains";

import {
  type BestPracticeApp,
  BestPracticeTypes,
  CategoryStatus,
} from "../ens-best-practices/types.ts";
import { type Project, ProjectIds } from "../projects/types.ts";
import { type AppBenchmark, BenchmarkResult } from "./benchmarks-types.ts";
import { type App, AppTypes } from "./types.ts";

export const mockIcon = (() => null) as unknown as App["icon"];

export const createMockProject = (name: string): Project => ({
  id: ProjectIds.Ens,
  name,
  description: `${name} description`,
  icon: mockIcon,
  socials: {
    website: new URL(`https://${name.toLowerCase().replace(/\s+/g, "-")}.example.com`),
    twitter: new URL(`https://x.com/${name.toLowerCase().replace(/\s+/g, "")}`),
  },
});

export const createMockBestPractice = (overrides: {
  id: string;
  name: string;
  bestPracticeSlug: string;
  categoryId: string;
  categoryName: string;
  categorySlug: string;
}): BestPracticeApp => ({
  type: BestPracticeTypes.App,
  id: overrides.id,
  bestPracticeSlug: overrides.bestPracticeSlug,
  name: overrides.name,
  description: `${overrides.name} description`,
  category: {
    id: overrides.categoryId,
    categorySlug: overrides.categorySlug,
    name: overrides.categoryName,
    description: `${overrides.categoryName} description`,
    status: CategoryStatus.Active,
    contributions: [
      { from: { address: "0x123" as `0x${string}`, chainId: mainnet.id }, updatedAt: 0 },
    ],
  },
  appliesTo: [AppTypes.Wallet],
  technicalDetails: {
    main: {
      header: "Main details",
      content: "Main content",
    },
    sides: [],
  },
  contributions: [
    { from: { address: "0x123" as `0x${string}`, chainId: mainnet.id }, updatedAt: 0 },
  ],
});

export const createMockBenchmark = (
  bestPractice: BestPracticeApp,
  result: BenchmarkResult,
): AppBenchmark => ({
  bestPractice,
  result,
  lastUpdated: 0,
  contributions: [
    { from: { address: "0x123" as `0x${string}`, chainId: mainnet.id }, updatedAt: 0 },
  ],
});

export const createMockApp = (overrides: {
  id: string;
  appSlug: string;
  name: string;
  type: App["type"];
  benchmarks?: AppBenchmark[];
}): App => ({
  id: overrides.id,
  appSlug: overrides.appSlug,
  project: createMockProject(overrides.name),
  name: overrides.name,
  description: `${overrides.name} description`,
  type: overrides.type,
  icon: mockIcon,
  benchmarks: overrides.benchmarks ?? [],
  socials: {
    website: new URL(`https://${overrides.appSlug}.example.com`),
    twitter: new URL(`https://x.com/${overrides.appSlug}`),
  },
});
