import { BenchmarkResults } from "data/benchmarks/types";
import type { BestPractice } from "data/ens-best-practices/types.ts";

import { BenchmarkResultBadge } from "@/components/atoms/badges/BenchmarkResultBadge";
import { cn } from "@/utils/tailwindClassConcatenation";

import {
  AcceptanceTestDetailsContainer,
  BenefitFromUsingEns,
  ImplementationRecommendations,
  technicalSectionContainerStyles,
  technicalSectionHeaderStyles,
  UseCaseSummary,
} from "../shared";

export interface BestPracticeTechnicalDetailsProps {
  bestPractice: BestPractice;
}

export const BestPracticeTechnicalDetails = ({
  bestPractice,
}: BestPracticeTechnicalDetailsProps) => {
  // Sort acceptance tests by slug (alphabetically) to ensure consistent display order across best practice details and benchmark details pages.
  const sortedAcceptanceTests = [...bestPractice.technicalDetails.acceptanceTests].sort((a, b) =>
    a.acceptanceTestSlug.localeCompare(b.acceptanceTestSlug),
  );

  return (
    <div className="max-w-[716px] flex flex-nowrap flex-col justify-center items-start gap-6">
      <div className={technicalSectionContainerStyles}>
        <h2 className={technicalSectionHeaderStyles}>ENS best practice overview</h2>
        <UseCaseSummary bestPractice={bestPractice} />
        <BenefitFromUsingEns bestPractice={bestPractice} />
      </div>
      {sortedAcceptanceTests.map((acceptanceTest, index) => (
        <AcceptanceTestDetailsContainer
          key={acceptanceTest.acceptanceTestSlug}
          acceptanceTestSlug={acceptanceTest.acceptanceTestSlug}
          testIndex={index}
        >
          <>
            <div
              className={cn(technicalSectionContainerStyles, "w-full p-4 bg-neutral-50 rounded-lg")}
            >
              <h4
                className={cn(
                  technicalSectionHeaderStyles,
                  "text-xl w-full flex flex-row items-start justify-between gap-3",
                )}
              >
                Example test result
                <BenchmarkResultBadge benchmarkResult={BenchmarkResults.Pass} />
              </h4>
              {acceptanceTest.examplePass.notes}
            </div>
            {acceptanceTest.examplePartialPass !== undefined && (
              <div
                className={cn(
                  technicalSectionContainerStyles,
                  "w-full p-4 bg-neutral-50 rounded-lg",
                )}
              >
                <h4
                  className={cn(
                    technicalSectionHeaderStyles,
                    "text-xl w-full flex flex-row items-start justify-between gap-3",
                  )}
                >
                  Example test result
                  <BenchmarkResultBadge benchmarkResult={BenchmarkResults.PartialPass} />
                </h4>
                {acceptanceTest.examplePartialPass.notes}
              </div>
            )}
            {acceptanceTest.exampleFail !== undefined && (
              <div
                className={cn(
                  technicalSectionContainerStyles,
                  "w-full p-4 bg-neutral-50 rounded-lg",
                )}
              >
                <h4
                  className={cn(
                    technicalSectionHeaderStyles,
                    "text-xl w-full flex flex-row items-start justify-between gap-3",
                  )}
                >
                  Example test result
                  <BenchmarkResultBadge benchmarkResult={BenchmarkResults.Fail} />
                </h4>
                {acceptanceTest.exampleFail.notes}
              </div>
            )}
          </>
        </AcceptanceTestDetailsContainer>
      ))}
      <ImplementationRecommendations bestPractice={bestPractice} />
    </div>
  );
};
