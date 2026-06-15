// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying app benchmarks

import type { AcceptanceTestBenchmark } from "data/acceptance-tests/types";
import BinanceExchange from "data/apps/binance-exchange";
import { defineAppBenchmarks } from "data/benchmarks/registry";
import { BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import { acceptanceTestDetailsContainerStyles } from "data/ens-best-practices/styles";
import type { BestPracticeBenchmarks } from "data/ens-best-practices/types";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { cn } from "@/utils/tailwindClassConcatenation";

import correctlyResolveEnsv2TestNameAddressProofImageCopyTrading from "./correctly-resolve-ensv2-test-name-address-proof-copy-trading.gif";
import correctlyResolveEnsv2TestNameAddressProofImageWithdrawal from "./correctly-resolve-ensv2-test-name-address-proof-withdrawal.png";

const benchmarks: BestPracticeBenchmarks = {
  "ensv2-ready-resolution": {
    "correctly-resolve-ensv2-test-name-address": {
      result: BenchmarkResults.NotApplicable,
      contributions: [
        { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-11T07:30:06Z") },
      ],
      notes: (
        <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
          <p className="w-full">
            ENSv2 ready resolution was tested using the search tool in the &quot;copy-trading&quot;
            flow. The app doesn't allow using ENS name as the trader identifier, which we interpret
            as not applicable to our acceptance test scenario.
          </p>
          <img
            alt="Binance exchange doesn't allow ENS name as trader in the copy-trading flow"
            src={correctlyResolveEnsv2TestNameAddressProofImageCopyTrading.src}
            className="w-auto h-full max-h-[325px] rounded-xl"
          />
          <p className="w-full">
            The ENSv2 ready resolution was also tested using the &quot;withdrawal&quot; flow. The
            app doesn't allow using ENS name as the recipient identifier, which we interpret as not
            applicable to our acceptance test scenario.
          </p>
          <img
            alt="Binance exchange doesn't allow ENS name as recipient in the withdrawal flow"
            src={correctlyResolveEnsv2TestNameAddressProofImageWithdrawal.src}
            className="w-auto h-full max-h-[325px] rounded-xl"
          />
        </div>
      ),
    } as const satisfies AcceptanceTestBenchmark,
  },
};

defineAppBenchmarks(BinanceExchange, benchmarks);

export default benchmarks;
