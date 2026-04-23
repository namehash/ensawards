// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying app benchmarks

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import contributors from "../../contributors";
import displayNamedSmartContractsL2 from "../../ens-best-practices/contract-naming/display-named-smart-contracts-l2-chains.ts";
import displayNamedSmartContractsMainnet from "../../ens-best-practices/contract-naming/display-named-smart-contracts-mainnet.ts";
import type { AppBenchmark } from "../benchmarks-types.ts";
import { BenchmarkResult } from "../benchmarks-types.ts";

const benchmarks: AppBenchmark[] = [
  {
    bestPractice: displayNamedSmartContractsMainnet,
    result: BenchmarkResult.Pass,
    lastUpdated: parseTimestamp("2026-04-18T00:00:00Z"),
    contributions: [
      { from: contributors.apoorvlathey, updatedAt: parseTimestamp("2026-04-18T00:00:00Z") },
    ],
  },
  {
    bestPractice: displayNamedSmartContractsL2,
    result: BenchmarkResult.Pass,
    lastUpdated: parseTimestamp("2026-04-18T00:00:00Z"),
    contributions: [
      { from: contributors.apoorvlathey, updatedAt: parseTimestamp("2026-04-18T00:00:00Z") },
    ],
  },
];

export default benchmarks;
