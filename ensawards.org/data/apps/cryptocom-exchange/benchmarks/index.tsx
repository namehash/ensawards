// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying app benchmarks

import type { AcceptanceTestBenchmark } from "data/acceptance-tests/types";
import CryptoComExchange from "data/apps/cryptocom-exchange";
import { defineAppBenchmarks } from "data/benchmarks/registry";
import { BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import { acceptanceTestDetailsContainerStyles } from "data/ens-best-practices/styles";
import type { BestPracticeBenchmarks } from "data/ens-best-practices/types";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { cn } from "@/utils/tailwindClassConcatenation";

import correctlyResolveEnsv2TestNameAddressProofImage from "./correctly-resolve-ensv2-test-name-address-proof.gif";

const benchmarks: BestPracticeBenchmarks = {
  "ensv2-ready-resolution": {
    "correctly-resolve-ensv2-test-name-address": {
      result: BenchmarkResults.NotApplicable,
      contributions: [
        { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-11T13:47:40Z") },
      ],
      notes: (
        <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
          <p className="w-full">
            ENSv2 ready resolution was tested using the &quot;withdrawal&quot; flow. The app doesn't
            support the use of ENS names at all as the recipient identifier.
            <br />
            <br />
            While that's a key issue that this app is encouraged to improve, this best practice is
            applicable specifically to apps that already have an existing ENS integration and making
            sure existing integrations are ENSv2 compatible. Therefore, for this best practice we
            apply a rating of not applicable.
          </p>
          <img
            alt="Crypto.com exchange doesn't allow ENS name as recipient in the withdrawal flow"
            src={correctlyResolveEnsv2TestNameAddressProofImage.src}
            className="w-auto h-full max-h-[325px] rounded-xl"
          />
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
};

defineAppBenchmarks(CryptoComExchange, benchmarks);

export default benchmarks;
