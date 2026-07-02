// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying app benchmarks

import OurbitExchange from "data/apps/ourbit-exchange";
import { defineAppBenchmarks } from "data/benchmarks/registry";
import type { BestPracticeBenchmarks } from "data/ens-best-practices/types";

import depositAddresses from "./resolution/deposit-addresses";
import ensv2ReadyResolution from "./resolution/ensv2-ready-resolution";

const benchmarks: BestPracticeBenchmarks = {
  "ensv2-ready-resolution": ensv2ReadyResolution,
  "deposit-addresses": depositAddresses,
};

defineAppBenchmarks(OurbitExchange, benchmarks);

export default benchmarks;
