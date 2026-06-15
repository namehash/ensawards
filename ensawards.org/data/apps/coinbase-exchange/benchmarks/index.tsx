// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying app benchmarks

import type { AcceptanceTestBenchmark } from "data/acceptance-tests/types";
import CoinbaseExchange from "data/apps/coinbase-exchange";
import { defineAppBenchmarks } from "data/benchmarks/registry";
import { BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import { acceptanceTestDetailsContainerStyles } from "data/ens-best-practices/styles";
import type { BestPracticeBenchmarks } from "data/ens-best-practices/types";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { cn } from "@/utils/tailwindClassConcatenation";

import correctlyResolveEnsv2TestNameAddressProofImage from "./correctly-resolve-ensv2-test-name-address-proof.png";

const benchmarks: BestPracticeBenchmarks = {
  "ensv2-ready-resolution": {
    "correctly-resolve-ensv2-test-name-address": {
      result: BenchmarkResults.Fail,
      contributions: [
        { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-12T09:01:23Z") },
      ],
      notes: (
        <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
          <p className="w-full">
            ENSv2 ready resolution was tested using the &quot;send&quot; flow. The resolved address
            is <i>NOT</i> correct.
          </p>
          <img
            alt="Coinbase exchange fails to resolve the name for ENSv2"
            src={correctlyResolveEnsv2TestNameAddressProofImage.src}
            className="w-auto h-full max-h-[325px] rounded-xl"
          />
        </div>
      ),
    } as const satisfies AcceptanceTestBenchmark,
  },
};

defineAppBenchmarks(CoinbaseExchange, benchmarks);

export default benchmarks;
