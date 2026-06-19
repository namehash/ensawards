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

import correctlyImplementCcipReadForEthSubnamesProofImage from "./correctly-implement-ccip-read-for-eth-subnames-proof.gif";
import correctlyImplementCcipReadForOffchainDnsNamesProofImage from "./correctly-implement-ccip-read-for-offchain-dns-names-proof.gif";
import correctlyResolveDirectOnchainSubnameAddressProofImage from "./correctly-resolve-direct-onchain-subname-address-proof.gif";
import correctlyResolveNamesForDifferentEvmChainsProofImage from "./correctly-resolve-names-for-different-evm-chains-proof.gif";
import correctlyResolveNamesForSolanaProofImage from "./correctly-resolve-names-for-solana-proof.gif";
import correctlyResolveNamesRequiringNormalizationProofImage from "./correctly-resolve-names-requiring-normalization-proof.gif";

const depositAddresses = {
  "correctly-resolve-direct-onchain-subname-address": {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T10:17:33Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          ENS resolution was tested using the &quot;send&quot; flow. The resolved address is
          correct.
        </p>
        <img
          alt="Coinbase Wallet correctly resolves the address for vitalik.eth"
          src={correctlyResolveDirectOnchainSubnameAddressProofImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
  "correctly-resolve-names-requiring-normalization": {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T10:19:15Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          ENS resolution was tested using the &quot;send&quot; flow. The resolved address is
          correct.
        </p>
        <img
          alt="Coinbase Wallet correctly resolves the address for Ξthereum.eth"
          src={correctlyResolveNamesRequiringNormalizationProofImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
  "correctly-implement-ccip-read-for-eth-subnames": {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T10:20:22Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          ENS resolution was tested using the &quot;send&quot; flow. The resolved address is
          correct.
        </p>
        <img
          alt="Coinbase Wallet correctly resolves the address for jesse.base.eth"
          src={correctlyImplementCcipReadForEthSubnamesProofImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
  "correctly-implement-ccip-read-for-offchain-dns-names": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T10:22:06Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          ENS resolution was tested using the &quot;send&quot; flow. The app <i>FAILS</i> to resolve
          the input name.
        </p>
        <img
          alt="Coinbase Wallet fails to resolve the address for dperri.com"
          src={correctlyImplementCcipReadForOffchainDnsNamesProofImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
  "correctly-resolve-names-for-different-evm-chains": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T10:26:55Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          ENS resolution was tested using the &quot;send&quot; flow in context of the Base chain.
          The resolved address is <i>NOT</i> correct.
        </p>
        <img
          alt="Coinbase Wallet fails to resolve the address for lightkeeper.eth in context of the Base chain"
          src={correctlyResolveNamesForDifferentEvmChainsProofImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
  "correctly-resolve-names-for-bitcoin": undefined, // TODO: Had trouble testing this, skipped not to waste more time, need help
  "correctly-resolve-names-for-solana": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T11:35:34Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          ENS resolution was tested using the &quot;send&quot; flow. The app <i>FAILS</i> to resolve
          the Solana address for the input name.
        </p>
        <img
          alt="Coinbase Wallet fails to resolve the address for gregskrill.eth"
          src={correctlyResolveNamesForSolanaProofImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
  "correctly-handle-resolution-for-chains-with-invalid-address-formatting": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T11:51:00Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          Based on the results of the{" "}
          <span className={bestPracticeTechnicalDetailsCodeStyles}>Acceptance Test 5</span>, the app
          doesn't appear to support ENS resolution on Base at all and therefore we classify this
          acceptance test as{" "}
          <span className={bestPracticeTechnicalDetailsCodeStyles}>Not Applicable</span>.
        </p>
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
} as const satisfies AcceptanceTestBenchmarks;

export default depositAddresses;
