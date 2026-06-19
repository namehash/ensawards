// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying app benchmarks

import type { AcceptanceTestBenchmark } from "data/acceptance-tests/types";
import { type AcceptanceTestBenchmarks, BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import {
  acceptanceTestDetailsContainerStyles,
  bestPracticeTechnicalDetailsCodeStyles,
} from "data/ens-best-practices/styles";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { cn } from "@/utils/tailwindClassConcatenation";

import correctlyResolveDirectOnchainSubnameAddressProofImage1 from "./correctly-resolve-direct-onchain-subname-address-proof-1.png";
import correctlyResolveDirectOnchainSubnameAddressProofImage2 from "./correctly-resolve-direct-onchain-subname-address-proof-2.png";

const depositAddresses = {
  "correctly-resolve-direct-onchain-subname-address": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T13:45:00Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          ENS resolution was tested using the &quot;send&quot; flow. The wallet doesn't support the
          use of ENS names at all as the recipient identifier, which we classify as a failure.
        </p>
        <div className="flex flex-row flex-wrap justify-center items-start gap-5">
          <img
            alt="World App's wallet doesn't allow ENS name as recipient in the send flow, part 1"
            src={correctlyResolveDirectOnchainSubnameAddressProofImage1.src}
            className="w-auto h-full max-h-[325px] md:max-w-[calc(50%-10px)] rounded-xl"
          />
          <img
            alt="World App's wallet doesn't allow ENS name as recipient in the send flow, part 2"
            src={correctlyResolveDirectOnchainSubnameAddressProofImage2.src}
            className="w-auto h-full max-h-[325px] md:max-w-[calc(50%-10px)] rounded-xl"
          />
        </div>
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
  "correctly-resolve-names-requiring-normalization": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T13:32:00Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          Based on the results of the{" "}
          <span className={bestPracticeTechnicalDetailsCodeStyles}>Acceptance Test 1</span>, the app
          doesn't appear to support ENS resolution at all and therefore we classify this acceptance
          test as <span className={bestPracticeTechnicalDetailsCodeStyles}>Not Applicable</span>.
        </p>
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
  "correctly-implement-ccip-read-for-eth-subnames": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T13:32:00Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          Based on the results of the{" "}
          <span className={bestPracticeTechnicalDetailsCodeStyles}>Acceptance Test 1</span>, the app
          doesn't appear to support ENS resolution at all and therefore we classify this acceptance
          test as <span className={bestPracticeTechnicalDetailsCodeStyles}>Not Applicable</span>.
        </p>
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
  "correctly-implement-ccip-read-for-offchain-dns-names": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T13:32:00Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          Based on the results of the{" "}
          <span className={bestPracticeTechnicalDetailsCodeStyles}>Acceptance Test 1</span>, the app
          doesn't appear to support ENS resolution at all and therefore we classify this acceptance
          test as <span className={bestPracticeTechnicalDetailsCodeStyles}>Not Applicable</span>.
        </p>
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
  "correctly-resolve-names-for-different-evm-chains": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T13:32:00Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          Based on the results of the{" "}
          <span className={bestPracticeTechnicalDetailsCodeStyles}>Acceptance Test 1</span>, the app
          doesn't appear to support ENS resolution at all and therefore we classify this acceptance
          test as <span className={bestPracticeTechnicalDetailsCodeStyles}>Not Applicable</span>.
        </p>
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
  "correctly-resolve-names-for-bitcoin": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T13:33:00Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          Based on the results of the{" "}
          <span className={bestPracticeTechnicalDetailsCodeStyles}>Acceptance Test 1</span>, the app
          doesn't appear to support ENS resolution at all and therefore we classify this acceptance
          test as <span className={bestPracticeTechnicalDetailsCodeStyles}>Not Applicable</span>.
        </p>
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
  "correctly-resolve-names-for-solana": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T13:33:00Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          Based on the results of the{" "}
          <span className={bestPracticeTechnicalDetailsCodeStyles}>Acceptance Test 1</span>, the app
          doesn't appear to support ENS resolution at all and therefore we classify this acceptance
          test as <span className={bestPracticeTechnicalDetailsCodeStyles}>Not Applicable</span>.
        </p>
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
  "correctly-handle-resolution-for-chains-with-invalid-address-formatting": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T13:33:00Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          Based on the results of the{" "}
          <span className={bestPracticeTechnicalDetailsCodeStyles}>Acceptance Test 1</span>, the app
          doesn't appear to support ENS resolution at all and therefore we classify this acceptance
          test as <span className={bestPracticeTechnicalDetailsCodeStyles}>Not Applicable</span>.
        </p>
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
} as const satisfies AcceptanceTestBenchmarks;

export default depositAddresses;
