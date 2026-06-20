import type { AcceptanceTestBenchmarks } from "data/benchmarks/types";
import { BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import {
  buildBenchmarkNote,
  buildFailNoteForAT3,
  buildFailNoteForAT5,
  buildNotApplicableForFailedTest,
  buildNotApplicableForNonEvmChain,
  buildPassNoteForAT1,
  buildPassNoteForAT2,
  buildPassNoteForAT4,
} from "data/ens-best-practices/resolution/deposit-addresses/notes";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import at1Proof from "./at-1.png";
import at2Proof from "./at-2.png";
import at3Proof from "./at-3.png";
import at4Proof from "./at-4.png";
import at5Proof from "./at-5.gif";
import at7Proof from "./at-7.png";

const method = 'the "send" flow on uniswap.org';

const depositAddresses = {
  "at01-resolve-onchain-name": {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-20T17:35:56Z") },
    ],
    notes: buildPassNoteForAT1({
      method,
      proof: {
        image: at1Proof,
        alt: "Uniswap correctly resolves the direct onchain subname address",
      },
    }),
  },
  "at02-resolve-name-needing-normalization": {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-20T17:35:56Z") },
    ],
    notes: buildPassNoteForAT2({
      method,
      proof: { image: at2Proof, alt: "Uniswap correctly resolves a name requiring normalization" },
    }),
  },
  "at03-resolve-offchain-eth-subname": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-20T17:35:56Z") },
    ],
    notes: buildFailNoteForAT3({
      method,
      proof: { image: at3Proof, alt: "Uniswap fails to resolve a CCIP-Read .eth subname" },
      extra: 'The app showed the message "Invalid recipient".',
    }),
  },
  "at04-resolve-offchain-dns-name": {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-20T17:35:56Z") },
    ],
    notes: buildPassNoteForAT4({
      method,
      proof: {
        image: at4Proof,
        alt: "Uniswap correctly implements CCIP-Read for offchain DNS names",
      },
    }),
  },
  "at05-resolve-name-on-other-evm-chain": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-20T17:35:56Z") },
    ],
    notes: buildFailNoteForAT5({
      method,
      proof: { image: at5Proof, alt: "Uniswap fails to resolve the Base deposit address" },
      extra: "The app resolved to the Ethereum Mainnet address instead of the Base address.",
    }),
  },
  "at06-resolve-bitcoin-address": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-20T17:35:56Z") },
    ],
    notes: buildNotApplicableForNonEvmChain({ chain: "Bitcoin" }),
  },
  "at07-resolve-solana-address": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-20T17:35:56Z") },
    ],
    notes: buildBenchmarkNote({
      proof: {
        image: at7Proof,
        alt: "Uniswap has Solana context but does not support ENS names in the send flow",
      },
      children: (
        <>
          The app has Solana context but shows message "Send is not supported on Solana" so there is no way to test this scenario.
          Therefore we classify this acceptance test as Not Applicable.
        </>
      ),
    }),
  },
  "at08-handle-invalid-address-format": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-20T17:35:56Z") },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 5, scope: "on Base" }),
  },
} as const satisfies AcceptanceTestBenchmarks;

export default depositAddresses;
