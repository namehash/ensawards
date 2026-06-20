import type { AcceptanceTestBenchmarks } from "data/benchmarks/types";
import { BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import {
  buildFailNoteForAT1,
  buildNotApplicableForFailedTest,
} from "data/ens-best-practices/resolution/deposit-addresses/notes";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import at1Proof from "./at-1.png";

const method = 'the "rewards" feature on stake.lido.fi';

const depositAddresses = {
  "at01-resolve-onchain-name": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-20T17:47:02Z") },
    ],
    notes: buildFailNoteForAT1({
      method,
      proof: {
        image: at1Proof,
        alt: "Lido fails to resolve the direct onchain subname address",
      },
      extra: 'The app showed the message "An error happened during ENS name resolving".',
    }),
  },
  "at02-resolve-name-needing-normalization": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-20T17:47:02Z") },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 1 }),
  },
  "at03-resolve-offchain-eth-subname": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-20T17:47:02Z") },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 1 }),
  },
  "at04-resolve-offchain-dns-name": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-20T17:47:02Z") },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 1 }),
  },
  "at05-resolve-name-on-other-evm-chain": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-20T17:47:02Z") },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 1 }),
  },
  "at06-resolve-bitcoin-address": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-20T17:47:02Z") },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 1 }),
  },
} as const satisfies AcceptanceTestBenchmarks;

export default depositAddresses;
