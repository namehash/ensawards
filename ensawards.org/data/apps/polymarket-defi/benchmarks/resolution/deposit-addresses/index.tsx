// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying app benchmarks

import { type AcceptanceTestBenchmarks, BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import {
  buildBenchmarkNote,
  buildNotApplicableForFailedTest,
} from "data/ens-best-practices/resolution/deposit-addresses/notes";
import {
  vitalikAddressSpan,
  vitalikEnsNameSpan,
} from "data/ens-best-practices/resolution/deposit-addresses/technicalDetails";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import at1Proof from "./at-1.gif";

const depositAddresses = {
  "at01-resolve-onchain-name": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-25T08:34:33Z") },
    ],
    notes: buildBenchmarkNote({
      children: (
        <>
          Tested using the "leaderboard" feature. It doesn't support the use of ENS names at all as
          the user identifier, so it never resolves the expected Ethereum Mainnet address of{" "}
          {vitalikEnsNameSpan} ({vitalikAddressSpan}
          ), which we classify as a failure.
        </>
      ),
      proof: {
        image: at1Proof,
        alt: "Polymarket DeFi app doesn't resolve ENS names in the leaderboard feature",
      },
    }),
  },
  "at02-resolve-name-needing-normalization": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-25T08:34:33Z") },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 1 }),
  },
  "at03-resolve-offchain-eth-subname": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-25T08:34:33Z") },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 1 }),
  },
  "at04-resolve-offchain-dns-name": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-25T08:34:33Z") },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 1 }),
  },
  "at05-resolve-name-on-other-evm-chain": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-25T08:34:33Z") },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 1 }),
  },
  "at06-resolve-bitcoin-address": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-25T08:34:33Z") },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 1 }),
  },
  "at07-resolve-solana-address": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-25T08:34:33Z") },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 1 }),
  },
  "at08-handle-invalid-address-format": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-25T08:34:33Z") },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 1 }),
  },
} as const satisfies AcceptanceTestBenchmarks;

export default depositAddresses;
