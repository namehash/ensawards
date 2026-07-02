// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying app benchmarks

import { type AcceptanceTestBenchmarks, BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import {
  buildFailNoteForAT2,
  buildFailNoteForAT5,
  buildFailNoteForAT7,
  buildNotApplicableForFailedTest,
  buildNotApplicableForNonEvmChain,
  buildPassNoteForAT1,
  buildPassNoteForAT3,
  buildPassNoteForAT4,
} from "data/ens-best-practices/resolution/deposit-addresses/notes";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import at1Proof from "./at-1.png";
import at2Proof from "./at-2.gif";
import at3Proof from "./at-3.gif";
import at4Proof from "./at-4.gif";
import at5Proof from "./at-5.png";
import at7Proof from "./at-7.png";

const method = 'the "send" flow';

const depositAddresses = {
  "at01-resolve-onchain-name": {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-07-02T10:20:57Z") },
    ],
    notes: buildPassNoteForAT1({
      method,
      proof: {
        image: at1Proof,
        alt: "1inch Wallet correctly resolves the address for vitalik.eth",
      },
    }),
  },
  "at02-resolve-name-needing-normalization": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-07-02T10:20:57Z") },
    ],
    notes: buildFailNoteForAT2({
      method,
      proof: {
        image: at2Proof,
        alt: "1inch Wallet fails to resolve the address for Ξthereum.eth",
      },
      extra: "The app blocked the send operation from continuing.",
    }),
  },
  "at03-resolve-offchain-eth-subname": {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-07-02T10:20:57Z") },
    ],
    notes: buildPassNoteForAT3({
      method,
      proof: {
        image: at3Proof,
        alt: "1inch Wallet correctly resolves the address for jesse.base.eth",
      },
    }),
  },
  "at04-resolve-offchain-dns-name": {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-07-02T10:20:57Z") },
    ],
    notes: buildPassNoteForAT4({
      method,
      proof: {
        image: at4Proof,
        alt: "1inch Wallet correctly resolves the address for dperri.com",
      },
    }),
  },
  "at05-resolve-name-on-other-evm-chain": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-07-02T10:20:57Z") },
    ],
    notes: buildFailNoteForAT5({
      method,
      proof: {
        image: at5Proof,
        alt: "1inch Wallet fails to resolve the address for lightkeeper.eth on the Base chain",
      },
      extra: "The app resolved to the Ethereum Mainnet address instead of the Base address.",
    }),
  },
  "at06-resolve-bitcoin-address": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-07-02T10:20:57Z") },
    ],
    notes: buildNotApplicableForNonEvmChain({ chain: "Bitcoin" }),
  },
  "at07-resolve-solana-address": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-07-02T10:20:57Z") },
    ],
    notes: buildFailNoteForAT7({
      method: 'the "send" flow in context of the Solana chain',
      proof: {
        image: at7Proof,
        alt: "1inch Wallet fails to resolve the Solana address for gregskril.eth",
      },
      extra: 'The app showed the message "Incompatible network".',
    }),
  },
  "at08-handle-invalid-address-format": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-07-02T10:20:57Z") },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 5, scope: "on Base" }),
  },
} as const satisfies AcceptanceTestBenchmarks;

export default depositAddresses;
