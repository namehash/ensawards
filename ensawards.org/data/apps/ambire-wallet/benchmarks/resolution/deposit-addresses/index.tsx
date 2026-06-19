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

import correctlyHandleResolutionForChainsWithInvalidAddressFormattingProofImage from "./correctly-handle-resolution-for-chains-with-invalid-address-formatting-proof.gif";
import correctlyImplementCcipReadForEthSubnamesProofImage from "./correctly-implement-ccip-read-for-eth-subnames-proof.gif";
import correctlyImplementCcipReadForOffchainDnsNamesProofImage from "./correctly-implement-ccip-read-for-offchain-dns-names-proof.gif";
import correctlyResolveDirectOnchainSubnameAddressProofImage from "./correctly-resolve-direct-onchain-subname-address-proof.gif";
import correctlyResolveNamesForBitcoinProofImage from "./correctly-resolve-names-for-bitcoin-proof.png";
import correctlyResolveNamesForDifferentEvmChainsProofImage from "./correctly-resolve-names-for-different-evm-chains-proof.gif";
import correctlyResolveNamesForSolanaProofImage from "./correctly-resolve-names-for-solana-proof.png";
import correctlyResolveNamesRequiringNormalizationProofImage from "./correctly-resolve-names-requiring-normalization-proof.gif";

const depositAddresses = {
  "correctly-resolve-direct-onchain-subname-address": {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T08:48:26Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          ENS resolution was tested using the &quot;send&quot; flow. The resolved address is
          correct.
        </p>
        <img
          alt="Ambire Wallet correctly resolves the address for vitalik.eth"
          src={correctlyResolveDirectOnchainSubnameAddressProofImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
  "correctly-resolve-names-requiring-normalization": {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T08:18:28Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          ENS resolution was tested using the &quot;send&quot; flow. The resolved address is
          correct.
        </p>
        <img
          alt="Ambire Wallet correctly resolves the address for Ξthereum.eth"
          src={correctlyResolveNamesRequiringNormalizationProofImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
  "correctly-implement-ccip-read-for-eth-subnames": {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T08:20:12Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          ENS resolution was tested using the &quot;send&quot; flow. The resolved address is
          correct.
        </p>
        <img
          alt="Ambire Wallet correctly resolves the address for jesse.base.eth"
          src={correctlyImplementCcipReadForEthSubnamesProofImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
  "correctly-implement-ccip-read-for-offchain-dns-names": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T08:21:49Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          ENS resolution was tested using the &quot;send&quot; flow. The app <i>FAILS</i> to resolve
          the input name.
        </p>
        <img
          alt="Ambire Wallet fails to resolve the address for dperri.com"
          src={correctlyImplementCcipReadForOffchainDnsNamesProofImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
  "correctly-resolve-names-for-different-evm-chains": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T08:33:38Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          ENS resolution was tested using the &quot;send&quot; flow in context of the Base chain.
          The resolved address is <i>NOT</i> correct.
        </p>
        <img
          alt="Ambire Wallet fails to resolve the address for lightkeeper.eth in context of the Base chain"
          src={correctlyResolveNamesForDifferentEvmChainsProofImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
  "correctly-resolve-names-for-bitcoin": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T08:38:20Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          The app doesn't have context of non-EVM chain Bitcoin and therefore we classify this
          acceptance test as{" "}
          <span className={bestPracticeTechnicalDetailsCodeStyles}>Not Applicable</span>.
        </p>
        <img
          alt="Ambire Wallet doesn't have context of non-EVM chain Bitcoin"
          src={correctlyResolveNamesForBitcoinProofImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
  "correctly-resolve-names-for-solana": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T08:39:08Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          The app doesn't have context of non-EVM chain Solana and therefore we classify this
          acceptance test as{" "}
          <span className={bestPracticeTechnicalDetailsCodeStyles}>Not Applicable</span>.
        </p>
        <img
          alt="Ambire Wallet doesn't have context of non-EVM chain Solana"
          src={correctlyResolveNamesForSolanaProofImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
  "correctly-handle-resolution-for-chains-with-invalid-address-formatting": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T08:35:02Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          ENS resolution was tested using the &quot;send&quot; flow in context of the Base chain.
          Based on the results of the{" "}
          <span className={bestPracticeTechnicalDetailsCodeStyles}>Acceptance Test 5</span>, the app
          doesn't appear to support ENS resolution on Base at all and therefore we classify this
          acceptance test as{" "}
          <span className={bestPracticeTechnicalDetailsCodeStyles}>Not Applicable</span>.
        </p>
        <img
          alt="Ambire Wallet fails to resolve the address for zissou.eth in context of the Base chain"
          src={correctlyHandleResolutionForChainsWithInvalidAddressFormattingProofImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
} as const satisfies AcceptanceTestBenchmarks;

export default depositAddresses;
