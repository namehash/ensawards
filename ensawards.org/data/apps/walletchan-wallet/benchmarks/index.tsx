// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying app benchmarks

import WalletChanWallet from "data/apps/walletchan-wallet";
import { defineAppBenchmarks } from "data/benchmarks/registry";
import type { BestPracticeBenchmarks } from "data/ens-best-practices/types";

import displayNamedSmartContractsL2Chains from "./contract-naming/display-named-smart-contracts-l2-chains";
import displayNamedSmartContractsMainnet from "./contract-naming/display-named-smart-contracts-mainnet";
import depositAddresses from "./resolution/deposit-addresses";
import ensv2ReadyResolution from "./resolution/ensv2-ready-resolution";

const benchmarks: BestPracticeBenchmarks = {
  "display-named-smart-contracts-mainnet": displayNamedSmartContractsMainnet,
  "display-named-smart-contracts-l2-chains": displayNamedSmartContractsL2Chains,
  "ensv2-ready-resolution": ensv2ReadyResolution,
  "deposit-addresses": depositAddresses,
} as const satisfies BestPracticeBenchmarks;

defineAppBenchmarks(WalletChanWallet, benchmarks);

export default benchmarks;
