// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying app benchmarks

import type { AcceptanceTestBenchmarks } from "data/benchmarks/types";

const ensv2ReadyResolution = {
  "correctly-resolve-ensv2-test-name-address": undefined,
} as const satisfies AcceptanceTestBenchmarks;

export default ensv2ReadyResolution;
