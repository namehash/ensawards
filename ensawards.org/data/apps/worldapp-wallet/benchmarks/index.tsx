// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying app benchmarks

import type { AcceptanceTestBenchmark } from "data/acceptance-tests/types";
import WorldWallet from "data/apps/worldapp-wallet";
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
      result: BenchmarkResults.Fail,
      contributions: [
        { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-09T07:49:00Z") },
      ],
      notes: (
        <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
          <p className="w-full">
            ENSv2 ready resolution was tested using the &quot;send&quot; flow. The wallet doesn't
            allow using ENS name as the recipient identifier, which we interpret as a failure.
          </p>
          <div className="flex flex-row flex-wrap justify-center items-start gap-5">
            <img
              alt="World App's wallet doesn't allow ENS name as recipient in the send flow, part 1"
              src={correctlyResolveEnsv2TestNameAddressProofImage1.src}
              className="w-auto h-full max-h-[325px] md:max-w-[calc(50%-10px)] rounded-xl"
            />
            <img
              alt="World App's wallet doesn't allow ENS name as recipient in the send flow, part 2"
              src={correctlyResolveEnsv2TestNameAddressProofImage2.src}
              className="w-auto h-full max-h-[325px] md:max-w-[calc(50%-10px)] rounded-xl"
            />
          </div>
        </div>
      ),
    } as const satisfies AcceptanceTestBenchmark,
  },
} as const satisfies BestPracticeBenchmarks;

defineAppBenchmarks(WorldWallet, benchmarks);

export default benchmarks;
