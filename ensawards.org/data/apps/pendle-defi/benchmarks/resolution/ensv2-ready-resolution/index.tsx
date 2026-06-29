// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying app benchmarks

import type { AcceptanceTestBenchmark } from "data/acceptance-tests/types";
import type { AcceptanceTestBenchmarks } from "data/benchmarks/types";
import { BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import {
  acceptanceTestDetailsContainerStyles,
  bestPracticeTechnicalDetailsLinkStyles,
} from "data/ens-best-practices/styles";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { cn } from "@/utils/tailwindClassConcatenation";

import at1BorosProof from "./at-1-boros.gif";
import at1V2AppProof from "./at-1-v2.gif";

const ensv2ReadyResolution = {
  "correctly-resolve-ensv2-test-name-address": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-18T13:40:40Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          ENSv2 ready resolution was tested using the search tool in the &quot;send&quot; flow of
          the Pendle's{" "}
          <a
            className={bestPracticeTechnicalDetailsLinkStyles}
            target="_blank"
            rel="noopener noreferrer"
            href="https://boros.pendle.finance/"
          >
            Boros
          </a>{" "}
          app. The app doesn't support the use of ENS names at all as the recipient identifier.
          <br />
          <br />
          While that's a key issue that this app is encouraged to improve, this best practice is
          applicable specifically to apps that already have an existing ENS integration and making
          sure existing integrations are ENSv2 compatible. Therefore, for this best practice we
          apply a rating of not applicable.
        </p>
        <img
          alt="Pendle Boros DeFi app doesn't allow ENS name as recipient in the send flow"
          src={at1BorosProof.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
        <span className="w-full h-px bg-gray-200 my-5" />
        <p className="w-full">
          The ENSv2 ready resolution was also tested using the &quot;dashboard&quot; tool of the
          Pendle's{" "}
          <a
            className={bestPracticeTechnicalDetailsLinkStyles}
            target="_blank"
            rel="noopener noreferrer"
            href="https://app.pendle.finance/"
          >
            V2
          </a>{" "}
          app. The app doesn't support the use of ENS names at all as the user identifier.
          <br />
          <br />
          While that's a key issue that this app is encouraged to improve, this best practice is
          applicable specifically to apps that already have an existing ENS integration and making
          sure existing integrations are ENSv2 compatible. Therefore, for this best practice we
          apply a rating of not applicable.
        </p>
        <img
          alt="Pendle V2 DeFi app doesn't allow ENS name as user in the dashboard tool"
          src={at1V2AppProof.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
} as const satisfies AcceptanceTestBenchmarks;

export default ensv2ReadyResolution;
