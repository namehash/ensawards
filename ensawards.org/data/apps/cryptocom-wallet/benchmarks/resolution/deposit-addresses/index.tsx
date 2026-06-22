// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying app benchmarks

import { type AcceptanceTestBenchmarks, BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import {
  buildFailNoteForAT2,
  buildFailNoteForAT3,
  buildFailNoteForAT4,
  buildPassNoteForAT1,
  buildPassNoteForAT5,
  buildPassNoteForAT7,
  buildPassNoteForAT8,
} from "data/ens-best-practices/resolution/deposit-addresses/notes";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import at1Proof from "./at-1.png";
import at2Proof from "./at-2.png";
import at3Proof from "./at-3.png";
import at4Proof from "./at-4.png";
import at5Proof from "./at-5.png";
import at7Proof from "./at-7.png";
import at8Proof from "./at-8.png";

const method = 'the "send" flow';

const depositAddresses = {
  "at01-resolve-onchain-name": {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-22T08:11:36Z") },
    ],
    notes: buildPassNoteForAT1({
      method,
      proof: {
        image: at1Proof,
        alt: "Crypto.com Wallet correctly resolves the address for vitalik.eth",
      },
    }),
  },
  "at02-resolve-name-needing-normalization": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-22T08:11:36Z") },
    ],
    notes: buildFailNoteForAT2({
      method,
      proof: {
        image: at2Proof,
        alt: "Crypto.com Wallet fails to resolve the address for Ξthereum.eth",
      },
    }),
  },
  "at03-resolve-offchain-eth-subname": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-22T08:11:36Z") },
    ],
    notes: buildFailNoteForAT3({
      method,
      proof: {
        image: at3Proof,
        alt: "Crypto.com Wallet fails to resolve the address for jesse.base.eth",
      },
    }),
  },
  "at04-resolve-offchain-dns-name": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-22T08:11:36Z") },
    ],
    notes: buildFailNoteForAT4({
      method,
      proof: {
        image: at4Proof,
        alt: "Crypto.com Wallet fails to resolve the address for dperri.com",
      },
    }),
  },
  "at05-resolve-name-on-other-evm-chain": {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-22T08:11:36Z") },
    ],
    notes: buildPassNoteForAT5({
      method,
      proof: {
        image: at5Proof,
        alt: "Crypto.com Wallet correctly resolves the address for lightkeeper.eth on the Base chain",
      },
    }),
  },
  "at06-resolve-bitcoin-address": undefined,
  "at07-resolve-solana-address": {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-22T08:11:36Z") },
    ],
    notes: buildPassNoteForAT7({
      method: 'the "send" flow in context of the Solana chain',
      proof: {
        image: at7Proof,
        alt: "Crypto.com Wallet correctly resolves the Solana address for gregskril.eth",
      },
    }),
  },
  "at08-handle-invalid-address-format": {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-22T08:11:36Z") },
    ],
    notes: buildPassNoteForAT8({
      method: 'the "send" flow in context of the Base chain',
      proof: {
        image: at8Proof,
        alt: "Crypto.com Wallet gracefully handles the invalid address for zissou.eth on the Base chain",
      },
    }),
  },
} as const satisfies AcceptanceTestBenchmarks;

export default depositAddresses;
