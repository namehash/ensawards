import type { AppBenchmark } from "@/types/apps.ts";
import { BenchmarkResult } from "@/types/benchmarks.ts";
import { toUnixTimestamp } from "@/utils/time.ts";

import { benchmarkers } from "../../benchmarkers";
import { displayNamedSmartContractsL2 } from "../../ens-best-practices/categories/contract-naming/displayNamedSmartContractsL2.ts";
import { displayNamedSmartContractsMainnet } from "../../ens-best-practices/categories/contract-naming/displayNamedSmartContractsMainnet.ts";

export const EtherscanExplorerBenchmarks: AppBenchmark[] = [
  // {
  //   bestPractice: recognizeAllENSNames,
  //   result: BenchmarkResult.Pass,
  //   benchmarkedBy: benchmarkers.stevedylan,
  //   benchmarkedAt: toUnixTimestamp("2025-12-03T14:00:00Z"),
  // },
  {
    bestPractice: displayNamedSmartContractsMainnet,
    result: BenchmarkResult.Pass,
    benchmarkedBy: benchmarkers.stevedylandev,
    benchmarkedAt: toUnixTimestamp("2025-12-08T18:26:20.566Z"),
  },
  {
    bestPractice: displayNamedSmartContractsL2,
    result: BenchmarkResult.Fail,
    benchmarkedBy: benchmarkers.stevedylandev,
    benchmarkedAt: toUnixTimestamp("2025-12-08T18:26:20.566Z"),
  },
];
