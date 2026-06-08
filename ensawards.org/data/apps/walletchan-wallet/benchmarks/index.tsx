// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying app benchmarks

import type { AcceptanceTestBenchmark } from "data/acceptance-tests/types";
import WalletChanWallet from "data/apps/walletchan-wallet";
import { defineAppBenchmarks } from "data/benchmarks/registry";
import { BenchmarkResults } from "data/benchmarks/types.ts";
import contributors from "data/contributors";
import { acceptanceTestDetailsContainerStyles } from "data/ens-best-practices/styles";
import type { BestPracticeBenchmarks } from "data/ens-best-practices/types";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { cn } from "@/utils/tailwindClassConcatenation";

import exampleProofImage from "./acceptance-test-benchmark-proof-example.png";
import correctlyResolveEnsv2TestNameAddressProofImage from "./correctly-resolve-ensv2-test-name-address-proof.png";
import namedSmartContractsOnMainnetProofImage from "./named-smart-contracts-on-mainnet-proof.png";

const benchmarks: BestPracticeBenchmarks = {
  "display-named-smart-contracts-mainnet": {
    "mainnet-interactions-display-named-smart-contracts": {
      result: BenchmarkResults.Pass,
      contributions: [
        { from: contributors.apoorvlathey, lastUpdated: parseTimestamp("2026-04-18T00:00:00Z") },
      ],
      notes: (
        // TODO: Enhance the notes
        <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
          <p className="w-full">
            Screenshot presents a transaction interaction on mainnet (setting name's records using
            ENS public resolver contract) where the user is interacting with a contract that has an
            ENS name, and the wallet is correctly displaying the ENS name of the contract.
          </p>
          <img
            alt="proof image"
            src={namedSmartContractsOnMainnetProofImage.src}
            className="w-auto h-full max-h-[325px] rounded-xl"
          />
        </div>
      ),
    } as const satisfies AcceptanceTestBenchmark,
  },
  "display-named-smart-contracts-l2-chains": {
    "l2-chain-interactions-display-named-smart-contracts": {
      result: BenchmarkResults.Pass,
      contributions: [
        { from: contributors.apoorvlathey, lastUpdated: parseTimestamp("2026-04-18T00:00:00Z") },
      ],
      notes: (
        // TODO: Enhance the notes
        <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
          <p className="w-full">TODO: Add correct Benchmark notes</p>
          <img
            alt="example proof"
            src={exampleProofImage.src}
            className="w-auto h-full max-h-[325px] rounded-xl"
          />
        </div>
      ),
    } as const satisfies AcceptanceTestBenchmark,
  },
  "ensv2-ready-resolution": {
    "correctly-resolve-ensv2-test-name-address": {
      result: BenchmarkResults.Fail,
      contributions: [
        { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-05T16:07:00Z") },
      ],
      notes: (
        <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
          <p className="w-full">
            The resolution was tested using the &quot;send&quot; flow. The app failed to resolve the
            address for the test name, which we interpret as a failure.
          </p>
          <img
            alt="WalletChan failed to resolve the test name"
            src={correctlyResolveEnsv2TestNameAddressProofImage.src}
            className="w-auto h-full max-h-[325px] rounded-xl"
          />
        </div>
      ),
    } as const satisfies AcceptanceTestBenchmark,
  },
} as const satisfies BestPracticeBenchmarks;

defineAppBenchmarks(WalletChanWallet, benchmarks);

export default benchmarks;
