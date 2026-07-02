import type { AcceptanceTestBenchmarks } from "data/benchmarks/types";
import { BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import {
  buildEnsNotSupportedNote,
  buildNotApplicableForFailedTest,
} from "data/ens-best-practices/resolution/deposit-addresses/notes";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import at1Proof from "./at-1.png";

const method = "the 'withdraw' feature on kucoin.com";

const depositAddresses = {
  "at01-resolve-onchain-name": {
    result: BenchmarkResults.Fail,
    contributions: [
      {
        from: contributors.y3drk,
        lastUpdated: parseTimestamp("2026-07-02T00:00:00Z"),
      },
    ],
    notes: buildEnsNotSupportedNote({
      method,
      proof: {
        image: at1Proof,
        alt: "KuCoin doesn't accept ENS names as withdrawal addresses",
      },
    }),
  },
  "at02-resolve-name-needing-normalization": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      {
        from: contributors.y3drk,
        lastUpdated: parseTimestamp("2026-07-02T00:00:00Z"),
      },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 1 }),
  },
  "at03-resolve-offchain-eth-subname": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      {
        from: contributors.y3drk,
        lastUpdated: parseTimestamp("2026-07-02T00:00:00Z"),
      },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 1 }),
  },
  "at04-resolve-offchain-dns-name": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      {
        from: contributors.y3drk,
        lastUpdated: parseTimestamp("2026-07-02T00:00:00Z"),
      },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 1 }),
  },
  "at05-resolve-name-on-other-evm-chain": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      {
        from: contributors.y3drk,
        lastUpdated: parseTimestamp("2026-07-02T00:00:00Z"),
      },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 1 }),
  },
  "at06-resolve-bitcoin-address": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      {
        from: contributors.y3drk,
        lastUpdated: parseTimestamp("2026-07-02T00:00:00Z"),
      },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 1 }),
  },
  "at07-resolve-solana-address": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      {
        from: contributors.y3drk,
        lastUpdated: parseTimestamp("2026-07-02T00:00:00Z"),
      },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 1 }),
  },
  "at08-handle-invalid-address-format": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      {
        from: contributors.y3drk,
        lastUpdated: parseTimestamp("2026-07-02T00:00:00Z"),
      },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 1 }),
  },
} as const satisfies AcceptanceTestBenchmarks;

export default depositAddresses;
