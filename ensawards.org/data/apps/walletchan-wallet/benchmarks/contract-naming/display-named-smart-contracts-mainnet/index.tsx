// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying app benchmarks

import type { AcceptanceTestBenchmark } from "data/acceptance-tests/types";
import { type AcceptanceTestBenchmarks, BenchmarkResults } from "data/benchmarks/types.ts";
import contributors from "data/contributors";
import { acceptanceTestDetailsContainerStyles } from "data/ens-best-practices/styles";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { cn } from "@/utils/tailwindClassConcatenation";

import namedSmartContractsOnMainnetProofImage from "./named-smart-contracts-on-mainnet-proof.png";

const displayNamedSmartContractsMainnet = {
  // TODO: `Contract Naming` category is temporarily hidden due to unfit content,
  // and so are all benchmarks belonging to it.
  // We aim to fix it as soon as we have the capacity.
  // See: https://github.com/namehash/ensawards/issues/222
  "mainnet-interactions-display-named-smart-contracts": {
    result: BenchmarkResults.Pass,
    contributions: [
      { from: contributors.apoorvlathey, lastUpdated: parseTimestamp("2026-04-18T00:00:00Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          Screenshot presents a transaction interaction on mainnet (setting name's records using ENS
          public resolver contract) where the user is interacting with a contract that has an ENS
          name, and the wallet is correctly displaying the ENS name of the contract.
        </p>
        <img
          alt="proof image"
          src={namedSmartContractsOnMainnetProofImage.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
} as const satisfies AcceptanceTestBenchmarks;

export default displayNamedSmartContractsMainnet;
