// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying app benchmarks

import type { AcceptanceTestBenchmark } from "data/acceptance-tests/types";
import type { AcceptanceTestBenchmarks } from "data/benchmarks/types";
import { BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import { acceptanceTestDetailsContainerStyles } from "data/ens-best-practices/styles";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { cn } from "@/utils/tailwindClassConcatenation";

import correctlyResolveEnsv2TestNameAddressProofImagePortfolio from "./ac-1.1.gif";
import correctlyResolveEnsv2TestNameAddressProofImageSend from "./ac-1.2.png";

const ensv2ReadyResolution = {
  "correctly-resolve-ensv2-test-name-address": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-09T12:41:00Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          ENSv2 ready resolution was tested for two different flows of the app: &quot;send&quot;
          and &quot;portfolio&quot;. In both cases the resolved address is <i>NOT</i> correct.
        </p>
        <div className="flex flex-col justify-start items-center gap-5">
          <img
            alt="1inch defi app fails to resolve the name for ENSv2"
            src={correctlyResolveEnsv2TestNameAddressProofImagePortfolio.src}
            className="w-auto h-full max-h-[325px] rounded-xl"
          />
          <img
            alt="1inch defi app fails to resolve the name for ENSv2"
            src={correctlyResolveEnsv2TestNameAddressProofImageSend.src}
            className="w-auto h-full max-h-[325px] rounded-xl"
          />
        </div>
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
} as const satisfies AcceptanceTestBenchmarks;

export default ensv2ReadyResolution;
