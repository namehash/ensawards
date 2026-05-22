// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying app benchmarks

import AaveDeFiApp from "data/apps/aave-defi-app";
import { defineAppBenchmarks } from "data/benchmarks/registry";
import type { BestPracticeBenchmarks } from "data/ens-best-practices/types";

// TODO; Add proper benchmarks
const benchmarks: BestPracticeBenchmarks = {
  "display-named-smart-contracts-mainnet": {
    "mainnet-interactions-display-named-smart-contracts": undefined,
  },
  "display-named-smart-contracts-l2-chains": {
    "l2-chain-interactions-display-named-smart-contracts": undefined,
  },
};

defineAppBenchmarks(AaveDeFiApp, benchmarks);

export default benchmarks;
