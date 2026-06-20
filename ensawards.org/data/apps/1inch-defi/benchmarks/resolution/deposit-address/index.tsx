// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import type { AcceptanceTestBenchmarks } from "data/benchmarks/types";
import { BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import {
  buildFailNoteForAT4,
  buildFailNoteForAT5,
  buildFailNoteForAT7,
  buildNotApplicableForFailedTest,
  buildNotApplicableForNonEvmChain,
  buildPassNoteForAT1,
  buildPassNoteForAT2,
  buildPassNoteForAT3,
} from "data/ens-best-practices/resolution/deposit-addresses/notes";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import at1Proof from "./at-1.gif";
import at2Proof from "./at-2.gif";
import at3Proof from "./at-3.gif";
import at4Proof from "./at-4.png";
import at5Proof from "./at-5.gif";
import at7Proof from "./at-7.png";

const evmWalletMethod = 'the "send" feature on 1inch.com with a connected EVM wallet';

const depositAddresses = {
  "at01-resolve-onchain-name": {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-19T15:10:01Z") },
    ],
    notes: buildPassNoteForAT1({
      method: evmWalletMethod,
      proof: {
        image: at1Proof,
        alt: "1inch correctly resolves the direct onchain subname address",
      },
    }),
  },
  "at02-resolve-name-needing-normalization": {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-19T15:10:01Z") },
    ],
    notes: buildPassNoteForAT2({
      method: evmWalletMethod,
      proof: { image: at2Proof, alt: "1inch correctly resolves a name requiring normalization" },
    }),
  },
  "at03-resolve-offchain-eth-subname": {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-19T15:10:01Z") },
    ],
    notes: buildPassNoteForAT3({
      method: evmWalletMethod,
      proof: { image: at3Proof, alt: "1inch correctly implements CCIP-Read for .eth subnames" },
    }),
  },
  "at04-resolve-offchain-dns-name": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-19T15:10:01Z") },
    ],
    notes: buildFailNoteForAT4({
      method: evmWalletMethod,
      proof: { image: at4Proof, alt: "1inch fails to resolve an offchain DNS name" },
      extra: 'The app showed an "invalid domain format" error instead.',
    }),
  },
  "at05-resolve-name-on-other-evm-chain": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-19T15:10:01Z") },
    ],
    notes: buildFailNoteForAT5({
      method:
        'the "send" feature for ETH on the Base network on the main page of 1inch.com with a connected EVM wallet',
      proof: { image: at5Proof, alt: "1inch fails to resolve the Base deposit address" },
      extra: "The app showed the Ethereum Mainnet address instead.",
    }),
  },
  "at06-resolve-bitcoin-address": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-19T15:10:01Z") },
    ],
    notes: buildNotApplicableForNonEvmChain({ chain: "Bitcoin" }),
  },
  "at07-resolve-solana-address": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-19T15:10:01Z") },
    ],
    notes: buildFailNoteForAT7({
      method: 'the "send" feature on 1inch.com with a connected Solana wallet',
      proof: { image: at7Proof, alt: "1inch fails to resolve a Solana address using ENS" },
      extra: "Sending to it using its ENS name was not possible.",
    }),
  },
  "at08-handle-invalid-address-format": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-19T15:10:01Z") },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 5, scope: "on Base" }),
  },
} as const satisfies AcceptanceTestBenchmarks;

export default depositAddresses;
