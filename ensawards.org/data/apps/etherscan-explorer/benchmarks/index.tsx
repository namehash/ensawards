// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying app benchmarks

import EtherscanExplorer from "data/apps/etherscan-explorer";
import { mockedExampleBenchmark } from "data/benchmarks/mocked-example-benchmark";
import { defineAppBenchmarks } from "data/benchmarks/registry";
import { BenchmarkResults } from "data/benchmarks/types";
import type { BestPracticeBenchmarks } from "data/ens-best-practices/types.ts";

import depositAddresses from "./resolution/deposit-address";
import ensv2ReadyResolution from "./resolution/ensv2-ready-resolution";

const benchmarks = {
  // "recognize-all-ens-names": {
  //   result: BenchmarkResults.Pass,
  //   contributions: [
  //     { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-03T14:00:00Z") },
  //   ],
  // },
  "ensv2-ready-resolution": ensv2ReadyResolution,
  "deposit-addresses": depositAddresses,

  // TODO: `Contract Naming` category is temporarily hidden due to unfit content,
  // and so are all benchmarks belonging to it.
  // We aim to fix it as soon as we have the capacity.
  // See: https://github.com/namehash/ensawards/issues/222
  "display-named-smart-contracts-mainnet": {
    "mainnet-interactions-display-named-smart-contracts": mockedExampleBenchmark({
      result: BenchmarkResults.Pass,
    }),
  },
  "display-named-smart-contracts-l2-chains": {
    "l2-chain-interactions-display-named-smart-contracts": mockedExampleBenchmark({
      result: BenchmarkResults.Fail,
    }),
  },
} as const satisfies BestPracticeBenchmarks;

defineAppBenchmarks(EtherscanExplorer, benchmarks);

export default benchmarks;
