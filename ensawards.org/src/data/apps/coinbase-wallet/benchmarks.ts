import { benchmarkers } from "@/data/benchmarkers";
import { displayNamedSmartContractsL2 } from "@/data/ens-best-practices/categories/contract-naming/best-practices/displayNamedSmartContractsL2.ts";
import { displayNamedSmartContractsMainnet } from "@/data/ens-best-practices/categories/contract-naming/best-practices/displayNamedSmartContractsMainnet.ts";
import type { AppBenchmark } from "@/types/apps.ts";
import { BenchmarkResult } from "@/types/benchmarks.ts";
import { toUnixTimestamp } from "@/utils/time.ts";

export const CoinbaseWalletBenchmarks: AppBenchmark[] = [
  // {
  //   bestPractice: recognizeAllENSNames,
  //   result: BenchmarkResult.Pass,
  //   benchmarkedBy: benchmarkers.stevedylan,
  //   benchmardAt: toUnixTimestamp("2025-12-03T14:00:00Z"),
  // },
  {
    bestPractice: displayNamedSmartContractsMainnet,
    result: BenchmarkResult.Fail,
    benchmarkedBy: benchmarkers.stevedylandev,
    benchmarkedAt: toUnixTimestamp("2025-12-08T18:22:55.716Z"),
  },
  {
    bestPractice: displayNamedSmartContractsL2,
    result: BenchmarkResult.Fail,
    benchmarkedBy: benchmarkers.stevedylandev,
    benchmarkedAt: toUnixTimestamp("2025-12-08T18:22:55.716Z"),
  },
];
