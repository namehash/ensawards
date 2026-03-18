// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying app benchmarks

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import contributors from "../../contributors";
import displayNamedSmartContractsL2 from "../../ens-best-practices/contract-naming/display-named-smart-contracts-l2-chains.ts";
import displayNamedSmartContractsMainnet from "../../ens-best-practices/contract-naming/display-named-smart-contracts-mainnet.ts";
import type { AppBenchmarkCompleted } from "../benchmarks-types.ts";
import { BenchmarkResult, BenchmarkStatuses } from "../benchmarks-types.ts";

const benchmarks: AppBenchmarkCompleted[] = [
  // {
  //   bestPractice: recognizeAllENSNames,
  //   status: BenchmarkStatuses.Completed,
  //   result: BenchmarkResult.Pass,
  //   lastUpdated: parseTimestamp("2025-12-03T14:00:00Z"),
  //   contributions: [
  //   { from: contributors.stevedylan, updatedAt: parseTimestamp("2025-12-08T18:26:20.566Z") },
  // ],
  // },
  {
    bestPractice: displayNamedSmartContractsMainnet,
    status: BenchmarkStatuses.Completed,
    result: BenchmarkResult.Pass,
    lastUpdated: parseTimestamp("2025-12-08T18:26:20.566Z"),
    contributions: [
      { from: contributors.stevedylan, updatedAt: parseTimestamp("2025-12-08T18:26:20.566Z") },
    ],
  },
  {
    bestPractice: displayNamedSmartContractsL2,
    status: BenchmarkStatuses.Completed,
    result: BenchmarkResult.Fail,
    lastUpdated: parseTimestamp("2025-12-08T18:26:20.566Z"),
    contributions: [
      { from: contributors.stevedylan, updatedAt: parseTimestamp("2025-12-08T18:26:20.566Z") },
    ],
  },
];

export default benchmarks;
