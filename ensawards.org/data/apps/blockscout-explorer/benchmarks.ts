import type { AppBenchmark } from "@/types/apps.ts";
import { BenchmarkResult } from "@/types/benchmarks.ts";
import { toUnixTimestamp } from "@/utils/time.ts";

import { benchmarkers } from "../../benchmarkers";
import { displayNamedSmartContractsL2 } from "../../ens-best-practices/categories/contract-naming/displayNamedSmartContractsL2.ts";
import { displayNamedSmartContractsMainnet } from "../../ens-best-practices/categories/contract-naming/displayNamedSmartContractsMainnet.ts";

export const BlockscoutExplorerBenchmarks: AppBenchmark[] = [
  // {
  //   bestPractice: recognizeAllENSNames,
  //   result: BenchmarkResult.Pass,
  //   benchmarkedBy: benchmarkers.stevedylan,
  //   benchmardAt: toUnixTimestamp("2025-12-03T14:00:00Z"),
  // },
  {
    bestPractice: displayNamedSmartContractsMainnet,
    result: BenchmarkResult.Pass,
    benchmarkedBy: benchmarkers.stevedylandev,
    benchmarkedAt: toUnixTimestamp("2025-12-08T18:28:32.410Z"),
  },
  {
    bestPractice: displayNamedSmartContractsL2,
    result: BenchmarkResult.Fail,
    benchmarkedBy: benchmarkers.stevedylandev,
    benchmarkedAt: toUnixTimestamp("2025-12-08T18:28:32.410Z"),
  },
];
