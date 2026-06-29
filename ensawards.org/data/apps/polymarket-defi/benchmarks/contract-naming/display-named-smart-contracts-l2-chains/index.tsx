// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying app benchmarks

import type { AcceptanceTestBenchmarks } from "data/benchmarks/types";

// TODO: `Contract Naming` category is temporarily hidden due to unfit content,
// and so are all benchmarks belonging to it.
// We aim to fix it as soon as we have the capacity.
// See: https://github.com/namehash/ensawards/issues/222
const displayNamedSmartContractsL2Chains = {
  "l2-chain-interactions-display-named-smart-contracts": undefined,
} as const satisfies AcceptanceTestBenchmarks;

export default displayNamedSmartContractsL2Chains;
