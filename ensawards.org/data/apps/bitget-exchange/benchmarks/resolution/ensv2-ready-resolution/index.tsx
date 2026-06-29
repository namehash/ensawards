import type { AcceptanceTestBenchmark } from "data/acceptance-tests/types";
import { type AcceptanceTestBenchmarks, BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import { acceptanceTestDetailsContainerStyles } from "data/ens-best-practices/styles";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { cn } from "@/utils/tailwindClassConcatenation";

import at1ProofImage from "./at-1.png";

const ensv2ReadyResolution = {
  "correctly-resolve-ensv2-test-name-address": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-29T11:03:56Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          ENSv2 ready resolution was tested using the &quot;withdraw&quot; flow. The app doesn't
          support the use of ENS names at all as the recipient identifier.
          <br />
          <br />
          While that's a key issue that this app is encouraged to improve, this best practice is
          applicable specifically to apps that already have an existing ENS integration and making
          sure existing integrations are ENSv2 compatible. Therefore, for this best practice we
          apply a rating of not applicable.
        </p>
        <img
          alt="Bybit exchange doesn't allow ENS name as recipient in the withdrawal flow"
          src={at1ProofImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
} as const satisfies AcceptanceTestBenchmarks;

export default ensv2ReadyResolution;
