// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import type { AcceptanceTestBenchmarks } from "data/benchmarks/types";
import { BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import {
  buildFailNoteForAT5,
  buildNotApplicableForFailedTest,
  buildNotApplicableForNonEvmChain,
  buildPassNoteForAT1,
  buildPassNoteForAT2,
  buildPassNoteForAT3,
  buildPassNoteForAT4,
} from "data/ens-best-practices/resolution/deposit-addresses/notes";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import at1Proof from "./at-1.png";
import at2Proof from "./at-2.png";
import at3Proof from "./at-3.png";
import at4Proof from "./at-4.png";
import at5Proof from "./at-5.png";

const depositAddresses = {
  "at01-resolve-onchain-name": {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-19T14:27:32Z") },
    ],
    notes: buildPassNoteForAT1({
      method: "the quick-search feature on the main page of eth.blockscout.com",
      proof: {
        image: at1Proof,
        alt: "Blockscout correctly resolves the deposit address of a direct onchain name",
      },
    }),
  },
  "at02-resolve-name-needing-normalization": {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-19T14:27:32Z") },
    ],
    notes: buildPassNoteForAT2({
      method: "the quick-search feature on eth.blockscout.com",
      proof: {
        image: at2Proof,
        alt: "Blockscout correctly resolves the deposit address of a name requiring normalization",
      },
    }),
  },
  "at03-resolve-offchain-eth-subname": {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-19T14:27:32Z") },
    ],
    notes: buildPassNoteForAT3({
      method: "the quick-search feature on eth.blockscout.com",
      proof: {
        image: at3Proof,
        alt: "Blockscout correctly resolves the deposit address of an offchain .eth subname via CCIP-Read",
      },
    }),
  },
  "at04-resolve-offchain-dns-name": {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-19T14:27:32Z") },
    ],
    notes: buildPassNoteForAT4({
      method: "the quick-search feature on eth.blockscout.com",
      proof: {
        image: at4Proof,
        alt: "Blockscout correctly resolves the deposit address of an offchain DNS name via CCIP-Read",
      },
    }),
  },
  "at05-resolve-name-on-other-evm-chain": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-19T14:27:32Z") },
    ],
    notes: buildFailNoteForAT5({
      method: "the quick-search feature on base.blockscout.com",
      proof: { image: at5Proof, alt: "Blockscout fails to resolve the Base deposit address" },
      extra: "The app showed the Ethereum Mainnet address instead.",
    }),
  },
  "at06-resolve-bitcoin-address": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-19T14:27:32Z") },
    ],
    notes: buildNotApplicableForNonEvmChain({ chain: "Bitcoin" }),
  },
  "at07-resolve-solana-address": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-19T14:27:32Z") },
    ],
    notes: buildNotApplicableForNonEvmChain({ chain: "Solana" }),
  },
  "at08-handle-invalid-address-format": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.llev, lastUpdated: parseTimestamp("2026-06-19T14:27:32Z") },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 5, scope: "on Base" }),
  },
} as const satisfies AcceptanceTestBenchmarks;

export default depositAddresses;
