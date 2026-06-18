// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying app benchmarks

import type { AcceptanceTestBenchmark } from "data/acceptance-tests/types";
import AmbireWallet from "data/apps/ambire-wallet";
import { defineAppBenchmarks } from "data/benchmarks/registry";
import { BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import { acceptanceTestDetailsContainerStyles } from "data/ens-best-practices/styles";
import type { BestPracticeBenchmarks } from "data/ens-best-practices/types.ts";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { cn } from "@/utils/tailwindClassConcatenation";

import correctlyResolveEnsv2TestNameAddressProofImage from "./correctly-resolve-ensv2-test-name-address-proof.png";

const benchmarks = {
  // TODO: `Contract Naming` category is temporarily hidden due to unfit content,
  // and so are all benchmarks belonging to it.
  // We aim to fix it as soon as we have the capacity.
  // See: https://github.com/namehash/ensawards/issues/222
  "display-named-smart-contracts-mainnet": {
    "mainnet-interactions-display-named-smart-contracts": {
      result: BenchmarkResults.PartialPass,
      contributions: [
        { from: contributors.caldonia, lastUpdated: parseTimestamp("2026-04-23T19:50:24Z") },
      ],
      notes: (
        <div className={acceptanceTestDetailsContainerStyles}>
          <p className="w-full">Benchmark placeholder notes</p>
        </div>
      ),
    } as const satisfies AcceptanceTestBenchmark,
  },
  "display-named-smart-contracts-l2-chains": {
    "l2-chain-interactions-display-named-smart-contracts": {
      result: BenchmarkResults.PartialPass,
      contributions: [
        { from: contributors.caldonia, lastUpdated: parseTimestamp("2026-04-23T19:50:24Z") },
      ],
      notes: (
        <div className={acceptanceTestDetailsContainerStyles}>
          <p className="w-full">Benchmark placeholder notes</p>
        </div>
      ),
    } as const satisfies AcceptanceTestBenchmark,
  },
  "ensv2-ready-resolution": {
    "correctly-resolve-ensv2-test-name-address": {
      result: BenchmarkResults.Pass,
      contributions: [
        { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-05T17:29:00Z") },
      ],
      notes: (
        <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
          <p className="w-full">
            ENSv2 ready resolution was tested using the &quot;send&quot; flow. The resolved address
            is correct.
          </p>
          <img
            alt="Ambire Wallet correctly resolves the name for ENSv2"
            src={correctlyResolveEnsv2TestNameAddressProofImage.src}
            className="w-auto h-full max-h-[325px] rounded-xl"
          />
        </div>
      ),
    } as const satisfies AcceptanceTestBenchmark,
  },
  "deposit-addresses": {
    "correctly-resolve-direct-onchain-subname-address": undefined,
    "correctly-resolve-names-requiring-normalization": undefined,
    "correctly-implement-ccip-read-for-eth-subnames": undefined,
    "correctly-implement-ccip-read-for-offchain-dns-names": undefined,
    "correctly-resolve-names-for-different-evm-chains": undefined,
    "correctly-resolve-names-for-bitcoin": undefined,
    "correctly-resolve-names-for-solana": undefined,
    "correctly-handle-resolution-for-chains-with-invalid-address-formatting": undefined,
  },
} as const satisfies BestPracticeBenchmarks;

defineAppBenchmarks(AmbireWallet, benchmarks);

export default benchmarks;
