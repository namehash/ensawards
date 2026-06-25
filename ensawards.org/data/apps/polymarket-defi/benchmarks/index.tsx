// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying app benchmarks

import PolymarketDeFi from "data/apps/polymarket-defi";
import { defineAppBenchmarks } from "data/benchmarks/registry";
import type { BestPracticeBenchmarks } from "data/ens-best-practices/types";

import displayNamedSmartContractsL2Chains from "./contract-naming/display-named-smart-contracts-l2-chains";
import displayNamedSmartContractsMainnet from "./contract-naming/display-named-smart-contracts-mainnet";
import depositAddresses from "./resolution/deposit-addresses";
import ensv2ReadyResolution from "./resolution/ensv2-ready-resolution";

const benchmarks: BestPracticeBenchmarks = {
  // TODO: `Contract Naming` category is temporarily hidden due to unfit content,
  // and so are all benchmarks belonging to it.
  // We aim to fix it as soon as we have the capacity.
  // See: https://github.com/namehash/ensawards/issues/222
  "display-named-smart-contracts-mainnet": displayNamedSmartContractsMainnet,
  "display-named-smart-contracts-l2-chains": displayNamedSmartContractsL2Chains,
  "ensv2-ready-resolution": ensv2ReadyResolution,
  "deposit-addresses": depositAddresses,
};

defineAppBenchmarks(PolymarketDeFi, benchmarks);

export default benchmarks;
