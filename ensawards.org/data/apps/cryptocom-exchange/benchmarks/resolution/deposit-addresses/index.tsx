// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying app benchmarks

import { type AcceptanceTestBenchmarks, BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import {
  buildEnsNotSupportedNote,
  buildNotApplicableForFailedTest,
} from "data/ens-best-practices/resolution/deposit-addresses/notes";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import at1Proof from "./at-1.gif";

const depositAddresses = {
  "at01-resolve-onchain-name": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-22T14:57:04Z") },
    ],
    notes: buildEnsNotSupportedNote({
      method: 'the "withdraw" flow',
      proof: {
        image: at1Proof,
        alt: "Crypto.com Exchange doesn't allow ENS names as the recipient in the withdraw flow",
      },
    }),
  },
  "at02-resolve-name-needing-normalization": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-22T14:57:04Z") },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 1 }),
  },
  "at03-resolve-offchain-eth-subname": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-22T14:57:04Z") },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 1 }),
  },
  "at04-resolve-offchain-dns-name": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-22T14:57:04Z") },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 1 }),
  },
  "at05-resolve-name-on-other-evm-chain": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-22T14:57:04Z") },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 1 }),
  },
  "at06-resolve-bitcoin-address": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-22T14:57:04Z") },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 1 }),
  },
  "at07-resolve-solana-address": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-22T14:57:04Z") },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 1 }),
  },
  "at08-handle-invalid-address-format": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-22T14:57:04Z") },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 1 }),
  },
} as const satisfies AcceptanceTestBenchmarks;

export default depositAddresses;
