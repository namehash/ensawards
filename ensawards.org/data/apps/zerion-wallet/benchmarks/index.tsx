import ZerionWallet from "data/apps/zerion-wallet";
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

defineAppBenchmarks(ZerionWallet, benchmarks);

export default benchmarks;
