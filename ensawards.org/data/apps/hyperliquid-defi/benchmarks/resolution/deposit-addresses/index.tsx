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

import at1ExplorerProof from "./at-1-explorer.gif";
import at1WithdrawProof from "./at-1-withdraw.png";

const depositAddresses = {
  "at01-resolve-onchain-name": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-25T07:43:31Z") },
    ],
    notes: buildBenchmarkNote({
      children: (
        <>
          Tested using the "withdraw" flow, and the "explorer" feature of the Hyperliquid app.
          <br />
          <br />
          Both of them don't support the use of ENS names at all as the recipient or user
          identifier, so they never resolve the expected Ethereum Mainnet address of{" "}
          {vitalikEnsNameSpan} ({vitalikAddressSpan}), which we classify as a failure.
        </>
      ),
      proof: [
        {
          image: at1WithdrawProof,
          alt: "Hyperliquid DeFi app doesn't allow ENS names as the recipient in the withdraw flow",
        },
        {
          image: at1ExplorerProof,
          alt: "Hyperliquid DeFi app doesn't allow ENS names as the user in the explorer feature",
        },
      ],
    }),
  },
  "at02-resolve-name-needing-normalization": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-25T07:43:31Z") },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 1 }),
  },
  "at03-resolve-offchain-eth-subname": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-25T07:43:31Z") },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 1 }),
  },
  "at04-resolve-offchain-dns-name": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-25T07:43:31Z") },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 1 }),
  },
  "at05-resolve-name-on-other-evm-chain": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-25T07:43:31Z") },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 1 }),
  },
  "at06-resolve-bitcoin-address": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-25T07:43:31Z") },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 1 }),
  },
  "at07-resolve-solana-address": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-25T07:43:31Z") },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 1 }),
  },
  "at08-handle-invalid-address-format": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-25T07:43:31Z") },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 1 }),
  },
} as const satisfies AcceptanceTestBenchmarks;

export default depositAddresses;
