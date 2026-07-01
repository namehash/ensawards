// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying app benchmarks

import type { AcceptanceTestBenchmark } from "data/acceptance-tests/types";
import type { AcceptanceTestBenchmarks } from "data/benchmarks/types";
import { BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import {
  acceptanceTestDetailsContainerStyles,
  bestPracticeTechnicalDetailsCodeStyles,
} from "data/ens-best-practices/styles";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { cn } from "@/utils/tailwindClassConcatenation";

import at1ProofImage from "./at-1.png";

const ensv2ReadyResolution = {
  "correctly-resolve-ensv2-test-name-address": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-30T09:20:00Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          ENSv2 ready resolution was tested using the &quot;Address book&quot; feature. The resolved
          address is <i>NOT</i> the expected Ethereum Mainnet address (
          <span className={bestPracticeTechnicalDetailsCodeStyles}>
            0x2222222222222222222222222222222222222222
          </span>
          ).
        </p>
        <img
          alt="Bitfinex exchange fails to resolve the name for ENSv2"
          src={at1ProofImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
} as const satisfies AcceptanceTestBenchmarks;

export default ensv2ReadyResolution;
