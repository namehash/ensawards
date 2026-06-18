// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying app benchmarks

import type { AcceptanceTestBenchmark } from "data/acceptance-tests/types";
import RobinhoodExchange from "data/apps/robinhood-exchange";
import { defineAppBenchmarks } from "data/benchmarks/registry";
import { BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import { acceptanceTestDetailsContainerStyles } from "data/ens-best-practices/styles";
import type { BestPracticeBenchmarks } from "data/ens-best-practices/types";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { cn } from "@/utils/tailwindClassConcatenation";

import correctlyResolveEnsv2TestNameAddressProofImage1 from "./correctly-resolve-ensv2-test-name-address-proof-1.png";
import correctlyResolveEnsv2TestNameAddressProofImage2 from "./correctly-resolve-ensv2-test-name-address-proof-2.png";

const benchmarks: BestPracticeBenchmarks = {
  "ensv2-ready-resolution": {
    "correctly-resolve-ensv2-test-name-address": {
      result: BenchmarkResults.NotApplicable,
      contributions: [
        { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-15T06:59:00Z") },
      ],
      notes: (
        <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
          <p className="w-full">
            ENSv2 ready resolution was tested using the &quot;send&quot; flow. The app doesn't
            support the use of ENS names at all as the recipient identifier.
            <br />
            <br />
            While that's a key issue that this app is encouraged to improve, this best practice is
            applicable specifically to apps that already have an existing ENS integration and making
            sure existing integrations are ENSv2 compatible. Therefore, for this best practice we
            apply a rating of not applicable.
          </p>
          <div className="flex flex-col justify-start items-center gap-5">
            <img
              alt="Robinhood doesn't allow ENS name as recipient in the send flow, part 1"
              src={correctlyResolveEnsv2TestNameAddressProofImage1.src}
              className="h-auto w-full max-w-[325px] rounded-xl"
            />
            <img
              alt="Robinhood doesn't allow ENS name as recipient in the send flow, part 2"
              src={correctlyResolveEnsv2TestNameAddressProofImage2.src}
              className="h-auto w-full max-w-[325px] rounded-xl"
            />
          </div>
        </div>
      ),
    } as const satisfies AcceptanceTestBenchmark,
  },
};

defineAppBenchmarks(RobinhoodExchange, benchmarks);

export default benchmarks;
