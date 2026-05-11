import { getAcceptanceTestBySlug } from "data/acceptance-tests/utils";
import type { App } from "data/apps/types.ts";
import type { AcceptanceTestBenchmarks } from "data/benchmarks/types";
import { sortAcceptanceTestBenchmarks } from "data/benchmarks/utils";
import type { BestPractice } from "data/ens-best-practices/types.ts";

import { BenchmarkResultBadge } from "@/components/atoms/badges/BenchmarkResultBadge";
import { PendingAcceptanceTestResultCTA } from "@/components/atoms/banners/PendingAcceptanceTestResultCTA";
import { cn } from "@/utils/tailwindClassConcatenation";

export interface BenchmarkTechnicalDetailsProps {
  bestPractice: BestPractice;
  acceptanceTestBenchmarks: AcceptanceTestBenchmarks;
  benchmarkedApp: App;
}

export const BenchmarkTechnicalDetails = ({
  bestPractice,
  acceptanceTestBenchmarks,
  benchmarkedApp,
}: BenchmarkTechnicalDetailsProps) => {
  const technicalSectionContainerStyles =
    "flex flex-col justify-start items-start gap-3 text-base leading-7 font-normal text-muted-foreground";
  const technicalSectionHeaderStyles = "text-2xl leading-none font-semibold text-black";

  // Sort acceptance tests by slug (alphabetically) to ensure consistent display order across best practice details and benchmark details pages.
  const sortedAcceptanceTestBenchmarks = [...Object.entries(acceptanceTestBenchmarks)].sort(
    ([aAcceptanceTestSlug, _a], [bAcceptanceTestSlug, _b]) =>
      aAcceptanceTestSlug.localeCompare(bAcceptanceTestSlug),
  );

  return (
    <div className="max-w-[716px] flex flex-nowrap flex-col justify-center items-start gap-6">
      <div className={technicalSectionContainerStyles}>
        <h2 className={technicalSectionHeaderStyles}>ENS best practice benchmark report</h2>
        {bestPractice.technicalDetails.useCaseSummary}
        <div className={cn(technicalSectionContainerStyles, "w-full p-4 bg-neutral-50 rounded-xl")}>
          <h2 className={cn(technicalSectionHeaderStyles, "text-xl")}>Desired outcome</h2>
          {bestPractice.technicalDetails.desiredOutcome}
        </div>
      </div>
      {sortedAcceptanceTestBenchmarks.map(
        ([acceptanceTestSlug, acceptanceTestBenchmark], index) => {
          const acceptanceTest = getAcceptanceTestBySlug(acceptanceTestSlug);

          if (acceptanceTest === undefined) {
            throw new Error(
              `Invariant(AcceptanceTestSlug): Acceptance test with slug ${acceptanceTestSlug} is not defined`,
            );
          }
          return (
            <div
              key={acceptanceTest.acceptanceTestSlug}
              className={technicalSectionContainerStyles}
            >
              <h3
                className={technicalSectionHeaderStyles}
              >{`Acceptance Test ${index + 1} Result`}</h3>
              {acceptanceTest.description}
              <div
                className={cn(
                  technicalSectionContainerStyles,
                  "w-full p-4 bg-neutral-50 rounded-xl",
                )}
              >
                <BenchmarkResultBadge benchmarkResult={acceptanceTestBenchmark?.result} />
                {acceptanceTestBenchmark !== undefined ? (
                  acceptanceTestBenchmark.notes
                ) : (
                  <PendingAcceptanceTestResultCTA app={benchmarkedApp} />
                )}
              </div>
            </div>
          );
        },
      )}
      <div className={technicalSectionContainerStyles}>
        <h2 className={technicalSectionHeaderStyles}>Implementation recommendations</h2>
        {bestPractice.technicalDetails.implementationRecommendations}
      </div>
    </div>
  );
};
