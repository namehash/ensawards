// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying app benchmarks

import type { AcceptanceTestBenchmark } from "data/acceptance-tests/types";
import type { AcceptanceTestBenchmarks } from "data/benchmarks/types";
import { BenchmarkResults } from "data/benchmarks/types";
import contributors from "data/contributors";
import {
  acceptanceTestDetailsContainerStyles,
  bestPracticeTechnicalDetailsLinkStyles,
} from "data/ens-best-practices/styles";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { cn } from "@/utils/tailwindClassConcatenation";

import correctlyResolveEnsv2TestNameAddressProofImageV3 from "./ac-1.gif";
import correctlyResolveEnsv2TestNameAddressProofImageV4 from "./ac-2.png";

const ensv2ReadyResolution = {
    "correctly-resolve-ensv2-test-name-address": {
      result: BenchmarkResults.PartialPass,
      contributions: [
        { from: contributors.y3drk, lastUpdated: parseTimestamp("2026-06-09T11:56:00Z") },
      ],
      notes: (
        <div className={cn(acceptanceTestDetailsContainerStyles, "w-full")}>
          <p className="w-full">
            ENSv2 ready resolution was tested for two versions of the app:{" "}
            <a
              className={bestPracticeTechnicalDetailsLinkStyles}
              href="https://app.aave.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aave&nbsp;(v3)
            </a>{" "}
            and{" "}
            <a
              className={bestPracticeTechnicalDetailsLinkStyles}
              href="https://pro.aave.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aave&nbsp;Pro&nbsp;(v4)
            </a>{" "}
            using the &quot;watch&quot; tool for both of them. The resolved address is correct for
            the v4 version, but <i>INCORRECT</i> for the v3 variant.
          </p>
          <div className="flex flex-col justify-start items-center gap-5">
            <img
              alt="Aave defi app fails to resolve the name for ENSv2"
              src={correctlyResolveEnsv2TestNameAddressProofImageV3.src}
              className="w-auto h-full max-h-[325px] rounded-xl"
            />
            <img
              alt="Aave Pro defi app correctly resolves the name for ENSv2"
              src={correctlyResolveEnsv2TestNameAddressProofImageV4.src}
              className="w-auto h-full max-h-[325px] rounded-xl"
            />
          </div>
        </div>
      ),
    } as const satisfies AcceptanceTestBenchmark,
  } as const satisfies AcceptanceTestBenchmarks;

export default ensv2ReadyResolution;
