// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying app benchmarks

import { type AcceptanceTestBenchmarks, BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import {
  buildFailNoteForAT4,
  buildFailNoteForAT5,
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
import at4Proof from "./at-4.gif";
import at5Proof from "./at-5.gif";
import at6Proof from "./at-6.png";
import at7Proof from "./at-7.png";
import at8Proof from "./at-8.gif";

const method = 'the "send" flow';

const depositAddresses = {
  "at01-resolve-onchain-name": {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T08:48:26Z") },
    ],
    notes: buildPassNoteForAT1({
      method,
      proof: {
        image: at1Proof,
        alt: "Ambire Wallet correctly resolves the address for vitalik.eth",
      },
    }),
  },
  "at02-resolve-name-needing-normalization": {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T08:18:28Z") },
    ],
    notes: buildPassNoteForAT2({
      method,
      proof: {
        image: at2Proof,
        alt: "Ambire Wallet correctly resolves the address for Ξthereum.eth",
      },
    }),
  },
  "at03-resolve-offchain-eth-subname": {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T08:20:12Z") },
    ],
    notes: buildPassNoteForAT3({
      method,
      proof: {
        image: at3Proof,
        alt: "Ambire Wallet correctly resolves the address for jesse.base.eth",
      },
    }),
  },
  "at04-resolve-offchain-dns-name": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T08:21:49Z") },
    ],
    notes: buildFailNoteForAT4({
      method,
      proof: { image: at4Proof, alt: "Ambire Wallet fails to resolve the address for dperri.com" },
      extra: 'The app showed the message "Failed to resolve ENS Domain".',
    }),
  },
  "at05-resolve-name-on-other-evm-chain": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T08:33:38Z") },
    ],
    notes: buildFailNoteForAT5({
      method,
      proof: {
        image: at5Proof,
        alt: "Ambire Wallet fails to resolve the address for lightkeeper.eth in context of the Base chain",
      },
      extra: "The app resolved to the Ethereum Mainnet address instead of the Base address.",
    }),
  },
  "at06-resolve-bitcoin-address": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T08:38:20Z") },
    ],
    notes: buildNotApplicableForNonEvmChain({
      chain: "Bitcoin",
      proof: {
        image: at6Proof,
        alt: "Ambire Wallet doesn't have context of non-EVM chain Bitcoin",
      },
    }),
  },
  "at07-resolve-solana-address": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T08:39:08Z") },
    ],
    notes: buildNotApplicableForNonEvmChain({
      chain: "Solana",
      proof: { image: at7Proof, alt: "Ambire Wallet doesn't have context of non-EVM chain Solana" },
    }),
  },
  "at08-handle-invalid-address-format": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T08:35:02Z") },
    ],
    notes: buildNotApplicableForFailedTest({
      testNumber: 5,
      scope: "on Base",
      proof: {
        image: at8Proof,
        alt: "Ambire Wallet fails to resolve the address for zissou.eth in context of the Base chain",
      },
    }),
  },
} as const satisfies AcceptanceTestBenchmarks;

export default depositAddresses;
