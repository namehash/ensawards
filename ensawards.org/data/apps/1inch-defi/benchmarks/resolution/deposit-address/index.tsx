// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import type { AcceptanceTestBenchmark } from "data/acceptance-tests/types";
import type { AcceptanceTestBenchmarks } from "data/benchmarks/types";
import { BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import {
  acceptanceTestDetailsContainerStyles,
  bestPracticeTechnicalDetailsCodeStyles,
} from "data/ens-best-practices/styles";
import {
  dperriComAddressSpan,
  dperriComEnsNameSpan,
  ethereumAddressSpan,
  ethereumNormalizedEnsNameSpan,
  ethereumUnnormalizedEnsNameSpan,
  gregskrilAddressSolanaSpan,
  gregskrilEnsNameSpan,
  jesseBaseAddressSpan,
  jesseBaseEnsNameSpan,
  lightkeeperAddressSpan,
  lightkeeperEnsNameSpan,
  vitalikAddressSpan,
  vitalikEnsNameSpan,
} from "data/ens-best-practices/resolution/deposit-addresses/technicalDetails";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { cn } from "@/utils/tailwindClassConcatenation";

import at1Proof from "./at-1.gif";
import at2Proof from "./at-2.gif";
import at3Proof from "./at-3.gif";
import at4Proof from "./at-4.png";
import at5Proof from "./at-5.gif";
import at7Proof from "./at-7.png";

const depositAddresses = {
  "correctly-resolve-direct-onchain-subname-address": {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-19T15:10:01Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          Tested using the &quot;send&quot; feature on 1inch.com with a connected EVM wallet. The
          resolved Ethereum Mainnet address of {vitalikEnsNameSpan} is correct ({vitalikAddressSpan}
          ).
        </p>
        <img
          alt="1inch correctly resolves the direct onchain subname address"
          src={at1Proof.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
  "correctly-resolve-names-requiring-normalization": {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-19T15:10:01Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          Tested using the &quot;send&quot; feature on 1inch.com with a connected EVM wallet. The
          input {ethereumUnnormalizedEnsNameSpan} was correctly normalized to{" "}
          {ethereumNormalizedEnsNameSpan} and resolved to the correct Ethereum Mainnet address (
          {ethereumAddressSpan}).
        </p>
        <img
          alt="1inch correctly resolves a name requiring normalization"
          src={at2Proof.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
  "correctly-implement-ccip-read-for-eth-subnames": {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-19T15:10:01Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          Tested using the &quot;send&quot; feature on 1inch.com with a connected EVM wallet. The
          CCIP-Read enabled .eth subname {jesseBaseEnsNameSpan} resolved to the correct Ethereum
          Mainnet address ({jesseBaseAddressSpan}).
        </p>
        <img
          alt="1inch correctly implements CCIP-Read for .eth subnames"
          src={at3Proof.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
  "correctly-implement-ccip-read-for-offchain-dns-names": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-19T15:10:01Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          Tested using the &quot;send&quot; feature on 1inch.com with a connected EVM wallet. The
          offchain DNS name {dperriComEnsNameSpan} was <i>NOT</i> resolved to its expected Ethereum
          Mainnet address ({dperriComAddressSpan}) — the app showed an &quot;invalid domain
          format&quot; error instead.
        </p>
        <img
          alt="1inch fails to resolve an offchain DNS name"
          src={at4Proof.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
  "correctly-resolve-names-for-different-evm-chains": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-19T15:10:01Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          Tested using the &quot;quick-search&quot; feature on base.blockscout.com. For{" "}
          {lightkeeperEnsNameSpan} the shown address was the mainnet address, <i>NOT</i> the expected
          Base chain address ({lightkeeperAddressSpan}).
        </p>
        <img
          alt="1inch fails to resolve the Base deposit address"
          src={at5Proof.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
  "correctly-resolve-names-for-bitcoin": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-19T15:10:01Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          The app doesn't have context of the non-EVM chain Bitcoin and therefore we classify this
          acceptance test as{" "}
          <span className={bestPracticeTechnicalDetailsCodeStyles}>Not Applicable</span>.
        </p>
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
  "correctly-resolve-names-for-solana": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-19T15:10:01Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          Tested using the &quot;send&quot; feature on 1inch.com with a connected Solana wallet. It
          was <i>NOT</i> possible to send to the Solana address of {gregskrilEnsNameSpan} (
          {gregskrilAddressSolanaSpan}) using its ENS name.
        </p>
        <img
          alt="1inch fails to resolve a Solana address using ENS"
          src={at7Proof.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
  "correctly-handle-resolution-for-chains-with-invalid-address-formatting": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-19T15:10:01Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          Based on the results of the{" "}
          <span className={bestPracticeTechnicalDetailsCodeStyles}>Acceptance Test 5</span>, the app
          doesn't appear to support ENS resolution on Base and therefore we classify this acceptance
          test as <span className={bestPracticeTechnicalDetailsCodeStyles}>Not Applicable</span>.
        </p>
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
} as const satisfies AcceptanceTestBenchmarks;

export default depositAddresses;
