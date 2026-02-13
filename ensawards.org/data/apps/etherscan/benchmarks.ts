import type { AppBenchmark } from "@/types/apps.ts";
import { BenchmarkResult } from "@/types/benchmarks.ts";
import { toUnixTimestamp } from "@/utils/time.ts";

import { benchmarkers } from "../../benchmarkers";
import { displayNamedSmartContractsL2 } from "../../ens-best-practices/categories/contract-naming/best-practices/displayNamedSmartContractsL2.ts";
import { displayNamedSmartContractsMainnet } from "../../ens-best-practices/categories/contract-naming/best-practices/displayNamedSmartContractsMainnet.ts";

export let EtherscanBenchmarks: AppBenchmark[];
EtherscanBenchmarks = [
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
    benchmarkedAt: toUnixTimestamp("2025-12-08T18:26:20.566Z"),
  },
  {
    bestPractice: displayNamedSmartContractsL2,
    result: BenchmarkResult.Fail,
    benchmarkedBy: benchmarkers.stevedylandev,
    benchmarkedAt: toUnixTimestamp("2025-12-08T18:26:20.566Z"),
  },
];
