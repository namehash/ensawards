import { contractPipeline } from "@/contract-pipelines";
import { daoContractsOnly, defiContractsOnly } from "@/contract-pipelines/filters.ts";
import type { SupportedGroupByCategory } from "@/contract-pipelines/group-by.ts";
import { sortProtocolLeaderboard } from "@/contract-pipelines/sorting.ts";
import { APPS } from "@/data/apps.ts";
import { BEST_PRACTICE_CATEGORIES, BEST_PRACTICES } from "@/data/bestPractices.ts";
import { DAO_PROTOCOLS, DEFI_PROTOCOLS, PROTOCOLS } from "@/data/protocols.ts";
import { type App, type AppType, AppTypes } from "@/types/apps.ts";
import { BenchmarkResult } from "@/types/benchmarks";
import type {
  BestPractice,
  BestPracticeCategory,
  BestPracticeTarget,
  ProtocolType,
} from "@/types/bestPractices.ts";
import { ProtocolTypes } from "@/types/bestPractices.ts";
import type { Contract } from "@/types/contracts.ts";
import type {
  DAOProtocol,
  DAOProtocolId,
  DeFiProtocol,
  DeFiProtocolId,
  Protocol,
  ProtocolId,
} from "@/types/protocols.ts";

export const getProtocolById = (protocolId: ProtocolId): Protocol => {
  // biome-ignore lint/style/noNonNullAssertion: Because of invariant that PROTOCOLS array satisfies we are guaranteed to find corresponding protocol
  return PROTOCOLS.find((protocol) => protocol.id === protocolId)!;
};

export const getProtocolBySlug = (
  protocolType: ProtocolType,
  protocolSlug: string,
): Protocol | undefined => {
  return PROTOCOLS.find(
    (protocol) => protocolType === protocol.protocolType && protocol.slug === protocolSlug,
  );
};

export const getDAOByProtocolId = (protocolId: DAOProtocolId): DAOProtocol => {
  // biome-ignore lint/style/noNonNullAssertion: Because of invariant that DAO_PROTOCOLS array satisfies we are guaranteed to find corresponding protocol
  return DAO_PROTOCOLS.find((protocol) => protocol.id === protocolId)!;
};

export const getDAOByProtocolSlug = (protocolSlug: string): DAOProtocol | undefined => {
  return DAO_PROTOCOLS.find((protocol) => protocol.slug === protocolSlug);
};

export const getDeFiProtocolByProtocolId = (protocolId: DeFiProtocolId): DeFiProtocol => {
  // biome-ignore lint/style/noNonNullAssertion: Because of invariant that DEFI_PROTOCOLS array satisfies we are guaranteed to find corresponding protocol
  return DEFI_PROTOCOLS.find((protocol) => protocol.id === protocolId)!;
};

export const getDeFiProtocolByProtocolSlug = (protocolSlug: string): DeFiProtocol | undefined => {
  return DEFI_PROTOCOLS.find((protocol) => protocol.slug === protocolSlug);
};

const ProtocolTypeSlugMapping = new Map<string, ProtocolType>([
  ["dao", ProtocolTypes.DAO],
  ["defi", ProtocolTypes.DeFi],
]);

export const getProtocolTypeBySlug = (protocolTypeSlug: string): ProtocolType | undefined => {
  return ProtocolTypeSlugMapping.get(protocolTypeSlug);
};

const AppTypeSlugMapping = new Map<string, AppType>([
  ["wallet", AppTypes.Wallet],
  ["explorer", AppTypes.Explorer],
]);

export const getAppTypeBySlug = (appTypeSlug: string): AppType | undefined =>
  AppTypeSlugMapping.get(appTypeSlug);

export const getAppBySlug = (appSlug: string): App | undefined => {
  return APPS.find((app) => app.slug === appSlug);
};

export const getAppById = (appId: string): App | undefined => {
  return APPS.find((app) => app.id === appId);
};

export const getCategoryBySlug = (categorySlug: string): BestPracticeCategory | undefined => {
  return BEST_PRACTICE_CATEGORIES.find((category) => category.slug === categorySlug);
};

export const getCategoryById = (categoryId: string): BestPracticeCategory | undefined => {
  return BEST_PRACTICE_CATEGORIES.find((category) => category.id === categoryId);
};

export const getBestPracticeBySlug = (bestPracticeSlug: string): BestPractice | undefined => {
  return BEST_PRACTICES.find((bestPractice) => bestPractice.slug === bestPracticeSlug);
};

export const getBestPracticeById = (bestPracticeId: string): BestPractice | undefined =>
  BEST_PRACTICES.find((bestPractice) => bestPractice.id === bestPracticeId);

export const calculateAppEnsAwardsScore = (app: App) => {
  const accumulatedBenchmarks = app.benchmarks.reduce((sum, benchmark) => {
    switch (benchmark.result) {
      case BenchmarkResult.Pass:
        return sum + 1;

      case BenchmarkResult.PartialPass:
        return sum + 0.5;

      default:
        return sum;
    }
  }, 0);

  return (accumulatedBenchmarks * 100) / app.benchmarks.length;
};

/**
 * Calculates how well the benchmarked apps apply this best practice.
 *
 * For now, the weights for different {@link BenchmarkResult}s are:
 * {@link BenchmarkResult.Pass} = 1.0
 * {@link BenchmarkResult.PartialPass} = 0.5
 * {@link BenchmarkResult.Fail} = 0.0
 */
export const calculateAppSupport = (bestPractice: BestPractice): number => {
  let benchmarkedApps = 0;
  let appSupport = 0;

  for (const app of APPS) {
    const appBenchmark = app.benchmarks.find(
      (benchmark) => benchmark.bestPractice.id === bestPractice.id,
    );

    if (appBenchmark === undefined) {
      continue;
    }

    benchmarkedApps += 1;

    switch (appBenchmark.result) {
      case BenchmarkResult.Pass:
        appSupport += 1;
        break;

      case BenchmarkResult.PartialPass:
        appSupport += 0.5;
        break;

      default:
        // Explicit non-increase for failed benchmark
        appSupport += 0;
        break;
    }
  }

  return (appSupport * 100) / benchmarkedApps;
};

/**
 * Calculates how many apps passed our benchmark on this best practice.
 *
 * For now, both {@link BenchmarkResult.Pass} and {@link BenchmarkResult.PartialPass} are treated as a pass.
 */
export const calculateAppsPassed = (bestPractice: BestPractice): number => {
  let appsPassed = 0;

  APPS.forEach((app) => {
    const appBenchmark = app.benchmarks.find(
      (benchmark) => benchmark.bestPractice.id === bestPractice.id,
    );

    if (
      appBenchmark !== undefined &&
      (appBenchmark.result === BenchmarkResult.Pass ||
        appBenchmark.result === BenchmarkResult.PartialPass)
    ) {
      appsPassed += 1;
    }
  });

  return appsPassed;
};

/**
 * Checks if the ENS best practice applies to all types that are specified in {@link AppTypes}.
 */
export const appliesToAllApps = (targets: BestPracticeTarget[]): boolean =>
  Object.values(AppTypes).every((appType) => targets.includes(appType));

/**
 * Checks if the ENS best practice applies to all types that are specified in {@link ProtocolTypes}.
 */
export const appliesToAllProtocols = (targets: BestPracticeTarget[]): boolean =>
  Object.values(ProtocolTypes).every((protocolType) => targets.includes(protocolType));

const contractPipelineFilterByProtocolType = new Map<
  ProtocolType,
  (contracts: Contract[]) => Contract[]
>([
  [ProtocolTypes.DAO, daoContractsOnly],
  [ProtocolTypes.DeFi, defiContractsOnly],
]);

// TODO: Should this name be more generic?
export const getContractNamingScoresByProtocolType = (
  protocolType: ProtocolType,
): Record<SupportedGroupByCategory, number> => {
  const filter = contractPipelineFilterByProtocolType.get(protocolType);

  // if the filter for a given ProtocolType is undefined throw an error
  if (filter === undefined) {
    throw new Error(`No contract pipeline filter registered for ProtocolType: ${protocolType}`);
  }

  return contractPipeline({
    filter: filter,
    sort: sortProtocolLeaderboard,
  });
};
