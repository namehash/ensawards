// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying app benchmarks

import type { AcceptanceTestBenchmark } from "data/acceptance-tests/types";
import BinanceExchange from "data/apps/binance-exchange";
import PendleDeFi from "data/apps/pendle-defi";
import { defineAppBenchmarks } from "data/benchmarks/registry";
import { BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import {
  acceptanceTestDetailsContainerStyles,
  bestPracticeTechnicalDetailsLinkStyles,
} from "data/ens-best-practices/styles";
import type { BestPracticeBenchmarks } from "data/ens-best-practices/types";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { cn } from "@/utils/tailwindClassConcatenation";

import correctlyResolveEnsv2TestNameAddressProofImageBoros from "./correctly-resolve-ensv2-test-name-address-proof-boros.gif";
import correctlyResolveEnsv2TestNameAddressProofImageV2App from "./correctly-resolve-ensv2-test-name-address-proof-v2.gif";

const benchmarks: BestPracticeBenchmarks = {
  // TODO: `Contract Naming` category is temporarily hidden due to unfit content,
  // and so are all benchmarks belonging to it.
  // We aim to fix it as soon as we have the capacity.
  // See: https://github.com/namehash/ensawards/issues/222
  "display-named-smart-contracts-mainnet": {
    "mainnet-interactions-display-named-smart-contracts": undefined,
  },
  "display-named-smart-contracts-l2-chains": {
    "l2-chain-interactions-display-named-smart-contracts": undefined,
  },
  "ensv2-ready-resolution": {
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
            src={correctlyResolveEnsv2TestNameAddressProofImageBoros.src}
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
            src={correctlyResolveEnsv2TestNameAddressProofImageV2App.src}
            className="w-auto h-full max-h-[325px] rounded-xl"
          />
        </div>
      ),
    } as const satisfies AcceptanceTestBenchmark,
  },
};

defineAppBenchmarks(PendleDeFi, benchmarks);

export default benchmarks;
