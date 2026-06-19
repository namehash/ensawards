// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying app benchmarks

import type { AcceptanceTestBenchmark } from "data/acceptance-tests/types";
import OneInchDeFi from "data/apps/1inch-defi";
import { defineAppBenchmarks } from "data/benchmarks/registry";
import { BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import { acceptanceTestDetailsContainerStyles } from "data/ens-best-practices/styles";
import type { BestPracticeBenchmarks } from "data/ens-best-practices/types";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { cn } from "@/utils/tailwindClassConcatenation";

import correctlyResolveEnsv2TestNameAddressProofImagePortfolio from "./correctly-resolve-ensv2-test-name-address-proof-portfolio.gif";
import correctlyResolveEnsv2TestNameAddressProofImageSend from "./correctly-resolve-ensv2-test-name-address-proof-send.png";

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
        { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-09T12:41:00Z") },
      ],
      notes: (
        <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
          <p className="w-full">
            ENSv2 ready resolution was tested for two different flows of the app: &quot;send&quot;
            and &quot;portfolio&quot;. In both cases the resolved address is <i>NOT</i> correct.
          </p>
          <div className="flex flex-col justify-start items-center gap-5">
            <img
              alt="1inch defi app fails to resolve the name for ENSv2"
              src={correctlyResolveEnsv2TestNameAddressProofImagePortfolio.src}
              className="w-auto h-full max-h-[325px] rounded-xl"
            />
            <img
              alt="1inch defi app fails to resolve the name for ENSv2"
              src={correctlyResolveEnsv2TestNameAddressProofImageSend.src}
              className="w-auto h-full max-h-[325px] rounded-xl"
            />
          </div>
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

defineAppBenchmarks(OneInchDeFi, benchmarks);

export default benchmarks;
