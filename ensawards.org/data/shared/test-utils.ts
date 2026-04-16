import type { AppBenchmark } from "data/benchmarks/types.ts";
import { BenchmarkResult } from "data/benchmarks/types.ts";
import { zeroAddress } from "viem";
import { mainnet } from "viem/chains";

import { type App, type AppSlug, type AppType, AppTypes } from "../apps/types.ts";
import {
  type BestPracticeApp,
  BestPracticeTypes,
  CategoryStatus,
} from "../ens-best-practices/types.ts";
import { type Project, ProjectIds } from "../projects/types.ts";

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
  },
  appliesTo: [AppTypes.Wallet],
  technicalDetails: {
    main: {
      header: "Main details",
      content: "Main content",
    },
    sides: [],
  },
  contributions: [{ from: { address: zeroAddress, chainId: mainnet.id }, lastUpdated: 0 }],
});

export const createMockBenchmark = (result: BenchmarkResult): AppBenchmark => ({
  result,
  contributions: [{ from: { address: zeroAddress, chainId: mainnet.id }, lastUpdated: 0 }],
});

export const createMockApp = (overrides: {
  id: string;
  appSlug: AppSlug;
  name: string;
  type: AppType;
}): App => ({
  id: overrides.id,
  appSlug: overrides.appSlug,
  project: createMockProject(overrides.name),
  name: overrides.name,
  description: `${overrides.name} description`,
  type: overrides.type,
  icon: mockIcon,
  socials: {
    website: new URL(`https://${overrides.appSlug}.example.com`),
    twitter: new URL(`https://x.com/${overrides.appSlug}`),
  },
});

export const mockRainbowApp = createMockApp({
  id: "rainbow-wallet",
  appSlug: "rainbow-wallet",
  name: "Rainbow",
  type: AppTypes.Wallet,
});

export const mockMetamaskApp = createMockApp({
  id: "metamask-wallet",
  appSlug: "metamask-wallet",
  name: "MetaMask",
  type: AppTypes.Wallet,
});

export const mockEtherscanApp = createMockApp({
  id: "etherscan-explorer",
  appSlug: "etherscan-explorer",
  name: "Etherscan",
  type: AppTypes.Explorer,
});

export const mockCoinbaseWalletApp = createMockApp({
  id: "coinbase-wallet",
  appSlug: "coinbase-wallet",
  name: "Coinbase Wallet",
  type: AppTypes.Wallet,
});

export const mockReverseResolutionBestPractice = createMockBestPractice({
  id: "set-primary-name",
  name: "Set primary name",
  bestPracticeSlug: "set-primary-name",
  categoryId: "reverse-resolution",
  categoryName: "Reverse resolution",
  categorySlug: "reverse-resolution",
});

export const mockDisplayProfilesBestPractice = createMockBestPractice({
  id: "display-avatar",
  name: "Display avatar",
  bestPracticeSlug: "display-avatar",
  categoryId: "display-profiles",
  categoryName: "Display profiles",
  categorySlug: "display-profiles",
});

export const mockForwardResolutionBestPractice = createMockBestPractice({
  id: "forward-resolution",
  name: "Forward resolution",
  bestPracticeSlug: "forward-resolution",
  categoryId: "forward-resolution",
  categoryName: "Forward resolution",
  categorySlug: "forward-resolution",
});

export const mockNormalizeNamesBestPractice = createMockBestPractice({
  id: "normalize-names",
  name: "Normalize names",
  bestPracticeSlug: "normalize-names",
  categoryId: "normalize-names",
  categoryName: "Normalize names",
  categorySlug: "normalize-names",
});
