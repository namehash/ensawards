// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying app benchmarks

import type { AcceptanceTestBenchmark } from "data/acceptance-tests/types";
import type { AcceptanceTestBenchmarks } from "data/benchmarks/types";
import { BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import { acceptanceTestDetailsContainerStyles } from "data/ens-best-practices/styles";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { cn } from "@/utils/tailwindClassConcatenation";

import correctlyResolveEnsv2TestNameAddressProofImageName from "./ac-1.png";
import correctlyResolveEnsv2TestNameAddressProofImageAddress from "./ac-2.png";

const ensv2ReadyResolution = {
  "correctly-resolve-ensv2-test-name-address": {
    result: BenchmarkResults.PartialPass,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-09T13:49:30Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          ENSv2 ready resolution was tested using the &quot;rewards&quot; explorer. The app doesn't
          explicitly prompt the user to pass an ENS name as identifier, but when it receives one,
          the resolved address is correct.
        </p>
        <div className="flex flex-col justify-start items-center gap-5">
          <img
            alt="Lido DeFi app correctly resolves the name for ENSv2"
            src={correctlyResolveEnsv2TestNameAddressProofImageName.src}
            className="w-auto h-full max-h-[325px] rounded-xl"
          />
          <img
            alt="Proof that the resolution flow is the same for address and name inputs"
            src={correctlyResolveEnsv2TestNameAddressProofImageAddress.src}
            className="w-auto h-full max-h-[325px] rounded-xl"
          />
        </div>
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
} as const satisfies AcceptanceTestBenchmarks;

export default ensv2ReadyResolution;
