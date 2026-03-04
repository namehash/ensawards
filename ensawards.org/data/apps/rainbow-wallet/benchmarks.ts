// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying app benchmarks

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import contributors from "../../contributors";
import displayNamedSmartContractsL2 from "../../ens-best-practices/contract-naming/display-named-smart-contracts-l2-chains.ts";
import displayNamedSmartContractsMainnet from "../../ens-best-practices/contract-naming/display-named-smart-contracts-mainnet.ts";
import type { AppBenchmark } from "../benchmarks-types.ts";
import { BenchmarkResult } from "../benchmarks-types.ts";

const benchmarks: AppBenchmark[] = [
  // {
  //   bestPractice: recognizeAllENSNames,
  //   result: BenchmarkResult.Pass,
  //   lastUpdated: parseTimestamp("2025-12-03T14:00:00Z"),
  //   contributors: [contributors.stevedylan],
  // },
  {
    bestPractice: displayNamedSmartContractsMainnet,
    result: BenchmarkResult.Pass,
    lastUpdated: parseTimestamp("2025-12-08T18:19:28.672Z"),
    contributors: [contributors.stevedylan],
  },
  {
    bestPractice: displayNamedSmartContractsL2,
    result: BenchmarkResult.Fail,
    lastUpdated: parseTimestamp("2025-12-08T18:19:28.672Z"),
    contributors: [contributors.stevedylan],
  },
];

export default benchmarks;
