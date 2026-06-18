// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying app benchmarks

import type { AcceptanceTestBenchmark } from "data/acceptance-tests/types";
import RobinhoodWallet from "data/apps/robinhood-wallet";
import { defineAppBenchmarks } from "data/benchmarks/registry";
import { BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import { acceptanceTestDetailsContainerStyles } from "data/ens-best-practices/styles";
import type { BestPracticeBenchmarks } from "data/ens-best-practices/types";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { cn } from "@/utils/tailwindClassConcatenation";

import correctlyResolveEnsv2TestNameAddressProofImage from "./correctly-resolve-ensv2-test-name-address-proof.gif";

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
        { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-11T13:26:00Z") },
      ],
      notes: (
        <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
          <p className="w-full">
            ENSv2 ready resolution was tested using the &quot;send&quot; flow. The wallet doesn't
            support the use of ENS names at all as the recipient identifier.
            <br />
            <br />
            While that's a key issue that this app is encouraged to improve, this best practice is
            applicable specifically to apps that already have an existing ENS integration and making
            sure existing integrations are ENSv2 compatible. Therefore, for this best practice we
            apply a rating of not applicable.
          </p>
          <img
            alt="Robinhood Wallet doesn't allow ENS name as recipient in the send flow"
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
};

defineAppBenchmarks(RobinhoodWallet, benchmarks);

export default benchmarks;
