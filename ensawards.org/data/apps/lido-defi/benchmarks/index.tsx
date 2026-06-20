// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying app benchmarks

import type { AcceptanceTestBenchmark } from "data/acceptance-tests/types";
import LidoDeFi from "data/apps/lido-defi";
import { defineAppBenchmarks } from "data/benchmarks/registry";
import { BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import { acceptanceTestDetailsContainerStyles } from "data/ens-best-practices/styles";
import type { BestPracticeBenchmarks } from "data/ens-best-practices/types.ts";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { cn } from "@/utils/tailwindClassConcatenation";

import correctlyResolveEnsv2TestNameAddressProofImageName from "./correctly-resolve-ensv2-test-name-address-proof.png";
import correctlyResolveEnsv2TestNameAddressProofImageAddress from "./correctly-resolve-ensv2-test-name-address-proof-address.png";

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
      result: BenchmarkResults.PartialPass,
      contributions: [
        { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-09T13:49:30Z") },
      ],
      notes: (
        <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
          <p className="w-full">
            ENSv2 ready resolution was tested using the &quot;rewards&quot; explorer. The app
            doesn't explicitly prompt the user to pass an ENS name as identifier, but when it
            receives one, the resolved address is correct.
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
  },
  "deposit-addresses": {
    "at01-resolve-onchain-name": undefined,
    "at02-resolve-name-needing-normalization": undefined,
    "at03-resolve-offchain-eth-subname": undefined,
    "at04-resolve-offchain-dns-name": undefined,
    "at05-resolve-name-on-other-evm-chain": undefined,
    "at06-resolve-bitcoin-address": undefined,
    "at07-resolve-solana-address": undefined,
    "at08-handle-invalid-address-format": undefined,
  },
} as const satisfies BestPracticeBenchmarks;

defineAppBenchmarks(LidoDeFi, benchmarks);

export default benchmarks;
