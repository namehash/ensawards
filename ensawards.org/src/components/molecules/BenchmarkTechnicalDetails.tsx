import { getAcceptanceTestBySlug } from "data/acceptance-tests/utils";
import type { AcceptanceTestBenchmarks } from "data/benchmarks/types";
import type { BestPractice } from "data/ens-best-practices/types.ts";

import { BenchmarkResultBadge } from "@/components/atoms/badges/BenchmarkResultBadge";
import { cn } from "@/utils/tailwindClassConcatenation";

export interface BenchmarkTechnicalDetailsProps {
  bestPractice: BestPractice;
  acceptanceTestBenchmarks: AcceptanceTestBenchmarks;
}

export const BenchmarkTechnicalDetails = ({
  bestPractice,
  acceptanceTestBenchmarks,
}: BenchmarkTechnicalDetailsProps) => {
  const technicalSectionContainerStyles =
    "flex flex-col justify-start items-start gap-3 text-base leading-7 font-normal text-muted-foreground";
  const technicalSectionHeaderStyles = "text-2xl leading-none font-semibold text-black";

  return (
    <div className="max-w-[716px] flex flex-nowrap flex-col justify-center items-start gap-6">
      <div className={technicalSectionContainerStyles}>
        <h2 className={technicalSectionHeaderStyles}>ENS best practice benchmark report</h2>
        {bestPractice.technicalDetails.useCaseSummary}
      </div>
      <div className={technicalSectionContainerStyles}>
        <h2 className={cn(technicalSectionHeaderStyles, "text-xl")}>Desired outcome</h2>
        {bestPractice.technicalDetails.desiredOutcome}
      </div>
      <div className={technicalSectionContainerStyles}>
        <h2 className={cn(technicalSectionHeaderStyles, "text-xl")}>Acceptance tests</h2>
        <div className={cn(technicalSectionContainerStyles, "gap-6")}>
          {[...Object.entries(acceptanceTestBenchmarks)].map(
            ([acceptanceTestSlug, acceptanceTestBenchmark]) => {
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
                  <div className={cn(technicalSectionContainerStyles, "gap-1")}>
                    <div className="w-full flex flex-col sm:flex-row sm:flex-wrap justify-start items-start sm:items-center gap-2">
                      <BenchmarkResultBadge benchmarkResult={acceptanceTestBenchmark?.result} />
                      <h3 className={cn(technicalSectionHeaderStyles, "text-lg")}>
                        {acceptanceTest.name}
                      </h3>
                    </div>
                    {acceptanceTest.description}
                    {acceptanceTestBenchmark && (
                      <div className={cn(technicalSectionContainerStyles, "gap-1")}>
                        <p className={cn(technicalSectionHeaderStyles, "text-lg")}>
                          Benchmark notes
                        </p>
                        {acceptanceTestBenchmark.notes}
                      </div>
                    )}
                  </div>
                </div>
              );
            },
          )}
        </div>
      </div>
      <div className={technicalSectionContainerStyles}>
        <h2 className={cn(technicalSectionHeaderStyles, "text-xl")}>
          Implementation recommendations
        </h2>
        {bestPractice.technicalDetails.implementationRecommendations}
      </div>
    </div>
  );
};
