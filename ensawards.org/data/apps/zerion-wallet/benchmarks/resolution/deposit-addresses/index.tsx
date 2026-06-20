// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying app benchmarks

import { type AcceptanceTestBenchmarks, BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import {
  buildBenchmarkNote,
  buildFailNoteForAT3,
  buildFailNoteForAT4,
  buildFailNoteForAT5,
  buildFailNoteForAT7,
  buildNotApplicableForFailedTest,
  buildNotApplicableForNonEvmChain,
  buildPassNoteForAT1,
} from "data/ens-best-practices/resolution/deposit-addresses/notes";
import {
  ethereumAddressSpan,
  ethereumNormalizedEnsNameSpan,
  ethereumUnnormalizedEnsNameSpan,
} from "data/ens-best-practices/resolution/deposit-addresses/technicalDetails";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import at1Proof from "./at-1.png";
import at2_1Proof from "./at-2.1.png";
import at2_2Proof from "./at-2.2.png";
import at3Proof from "./at-3.png";
import at4Proof from "./at-4.png";
import at5Proof from "./at-5.png";
import at6Proof from "./at-6.png";
import at7Proof from "./at-7.png";

const method = 'the "send" flow';

const depositAddresses = {
  "at01-resolve-onchain-name": {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T14:56:43Z") },
    ],
    notes: buildPassNoteForAT1({
      method,
      proof: { image: at1Proof, alt: "Zerion correctly resolves the address for vitalik.eth" },
    }),
  },
  // The standard AT2 fail note doesn't capture this nuance, so we write a custom note.
  "at02-resolve-name-needing-normalization": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T15:02:11Z") },
    ],
    notes: buildBenchmarkNote({
      proof: [
        {
          image: at2_1Proof,
          alt: "Zerion correctly resolves the address for Ξthereum.eth, but associates a different ENS name with this address",
        },
        {
          image: at2_2Proof,
          alt: "Zerion sometimes shows No Result Found when resolving Ξthereum.eth",
        },
      ],
      children: (
        <>
          Tested using {method}. For {ethereumUnnormalizedEnsNameSpan} (normalized to{" "}
          {ethereumNormalizedEnsNameSpan}) the resolved Ethereum Mainnet address is correct (
          {ethereumAddressSpan}), but the app behaves inconsistently when displaying the resolved
          name. Repeated attempts produce different outcomes: sometimes it associates a completely
          different ENS name with this address, sometimes it shows "No Result Found" for the entered
          name. Every observed outcome is incorrect, so we count this as a failure.
        </>
      ),
    }),
  },
  "at03-resolve-offchain-eth-subname": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T15:10:31Z") },
    ],
    notes: buildFailNoteForAT3({
      method,
      proof: { image: at3Proof, alt: "Zerion fails to resolve the address for jesse.base.eth" },
    }),
  },
  "at04-resolve-offchain-dns-name": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T15:13:31Z") },
    ],
    notes: buildFailNoteForAT4({
      method,
      proof: { image: at4Proof, alt: "Zerion fails to resolve the address for dperri.com" },
    }),
  },
  "at05-resolve-name-on-other-evm-chain": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T15:16:11Z") },
    ],
    notes: buildFailNoteForAT5({
      method,
      proof: {
        image: at5Proof,
        alt: "Zerion fails to resolve the address for lightkeeper.eth in context of the Base chain",
      },
    }),
  },
  "at06-resolve-bitcoin-address": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T15:24:21Z") },
    ],
    notes: buildNotApplicableForNonEvmChain({
      chain: "Bitcoin",
      proof: { image: at6Proof, alt: "Zerion doesn't have context of non-EVM chain Bitcoin" },
    }),
  },
  "at07-resolve-solana-address": {
    result: BenchmarkResults.Fail,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T15:28:04Z") },
    ],
    notes: buildFailNoteForAT7({
      method,
      proof: {
        image: at7Proof,
        alt: "Zerion fails to resolve the Solana address for gregskril.eth",
      },
    }),
  },
  "at08-handle-invalid-address-format": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-19T15:20:00Z") },
    ],
    notes: buildNotApplicableForFailedTest({ testNumber: 5, scope: "on Base" }),
  },
} as const satisfies AcceptanceTestBenchmarks;

export default depositAddresses;
