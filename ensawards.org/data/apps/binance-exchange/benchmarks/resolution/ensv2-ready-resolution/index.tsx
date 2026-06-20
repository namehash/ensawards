// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying app benchmarks

import type { AcceptanceTestBenchmark } from "data/acceptance-tests/types";
import type { AcceptanceTestBenchmarks } from "data/benchmarks/types";
import { BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import { acceptanceTestDetailsContainerStyles } from "data/ens-best-practices/styles";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { cn } from "@/utils/tailwindClassConcatenation";

import correctlyResolveEnsv2TestNameAddressProofImageCopyTrading from "./ac-1.gif";
import correctlyResolveEnsv2TestNameAddressProofImageWithdrawal from "./ac-2.png";

const ensv2ReadyResolution = {
  "correctly-resolve-ensv2-test-name-address": {
    result: BenchmarkResults.NotApplicable,
    contributions: [
      { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-11T07:30:06Z") },
    ],
    notes: (
      <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
        <p className="w-full">
          ENSv2 ready resolution was tested using the search tool in the &quot;copy-trading&quot;
          flow. The app doesn't support the use of ENS names at all as the trader identifier.
          <br />
          <br />
          While that's a key issue that this app is encouraged to improve, this best practice is
          applicable specifically to apps that already have an existing ENS integration and making
          sure existing integrations are ENSv2 compatible. Therefore, for this best practice we
          apply a rating of not applicable.
        </p>
        <img
          alt="Binance exchange doesn't allow ENS name as trader in the copy-trading flow"
          src={correctlyResolveEnsv2TestNameAddressProofImageCopyTrading.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
        <span className="w-full h-px bg-gray-200 my-5" />
        <p className="w-full">
          The ENSv2 ready resolution was also tested using the &quot;withdrawal&quot; flow. The app
          doesn't support the use of ENS names at all as the recipient identifier.
          <br />
          <br />
          While that's a key issue that this app is encouraged to improve, this best practice is
          applicable specifically to apps that already have an existing ENS integration and making
          sure existing integrations are ENSv2 compatible. Therefore, for this best practice we
          apply a rating of not applicable.
        </p>
        <img
          alt="Binance exchange doesn't allow ENS name as recipient in the withdrawal flow"
          src={correctlyResolveEnsv2TestNameAddressProofImageWithdrawal.src}
          className="w-auto h-full max-h-[325px] rounded-xl"
        />
      </div>
    ),
  } as const satisfies AcceptanceTestBenchmark,
} as const satisfies AcceptanceTestBenchmarks;

export default ensv2ReadyResolution;
