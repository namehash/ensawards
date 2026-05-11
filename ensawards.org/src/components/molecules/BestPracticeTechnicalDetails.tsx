import { BenchmarkResults } from "data/benchmarks/types";
import type { BestPractice } from "data/ens-best-practices/types.ts";

import { getBenchmarkIcon } from "@/components/atoms/badges/BenchmarkResultBadge";
import { cn } from "@/utils/tailwindClassConcatenation";

export interface BestPracticeTechnicalDetailsProps {
  bestPractice: BestPractice;
}

export const BestPracticeTechnicalDetails = ({
  bestPractice,
}: BestPracticeTechnicalDetailsProps) => {
  const technicalSectionContainerStyles =
    "flex flex-col justify-start items-start gap-3 text-base leading-7 font-normal text-muted-foreground";
  const technicalSectionHeaderStyles = "text-2xl leading-none font-semibold text-black";

  // Sort acceptance tests by slug (alphabetically) to ensure consistent display order across best practice details and benchmark details pages.
  const sortedAcceptanceTests = [...bestPractice.technicalDetails.acceptanceTests].sort((a, b) =>
    a.acceptanceTestSlug.localeCompare(b.acceptanceTestSlug),
  );

  return (
    <div className="max-w-[716px] flex flex-nowrap flex-col justify-center items-start gap-6">
      <div className={technicalSectionContainerStyles}>
        <h2 className={technicalSectionHeaderStyles}>ENS best practice overview</h2>
        {bestPractice.technicalDetails.useCaseSummary}
        <div className={cn(technicalSectionContainerStyles, "w-full p-4 bg-neutral-50 rounded-xl")}>
          <h2 className={cn(technicalSectionHeaderStyles, "text-xl")}>Desired outcome</h2>
          {bestPractice.technicalDetails.desiredOutcome}
        </div>
      </div>
      {sortedAcceptanceTests.map((acceptanceTest, index) => (
        <div key={acceptanceTest.acceptanceTestSlug} className={technicalSectionContainerStyles}>
          <div className={technicalSectionContainerStyles}>
            <div className={technicalSectionContainerStyles}>
              <h3 className={technicalSectionHeaderStyles}>{`Acceptance Test ${index + 1}`}</h3>
              {acceptanceTest.description}
            </div>
            <div
              className={cn(technicalSectionContainerStyles, "w-full p-4 bg-neutral-50 rounded-lg")}
            >
              <h3
                className={cn(
                  technicalSectionHeaderStyles,
                  "text-xl w-full flex flex-row items-center justify-start gap-3",
                )}
              >
                Example pass{" "}
                {getBenchmarkIcon(BenchmarkResults.Pass, "w-7 h-7 shrink-0 text-emerald-600")}
              </h3>
              {acceptanceTest.examplePass.notes}
            </div>
            {acceptanceTest.examplePartialPass !== undefined && (
              <div className={cn(technicalSectionContainerStyles, "p-4 bg-neutral-50 rounded-lg")}>
                <h3
                  className={cn(
                    technicalSectionHeaderStyles,
                    "text-xl w-full flex flex-row items-center justify-start gap-3",
                  )}
                >
                  Example partial pass{" "}
                  {getBenchmarkIcon(
                    BenchmarkResults.PartialPass,
                    "w-7 h-7 shrink-0 text-orange-600",
                  )}
                </h3>
                {acceptanceTest.examplePartialPass.notes}
              </div>
            )}
            {acceptanceTest.exampleFail !== undefined && (
              <div className={cn(technicalSectionContainerStyles, "p-4 bg-neutral-50 rounded-lg")}>
                <h3
                  className={cn(
                    technicalSectionHeaderStyles,
                    "text-xl w-full flex flex-row items-center justify-start gap-3",
                  )}
                >
                  Example fail{" "}
                  {getBenchmarkIcon(BenchmarkResults.Fail, "w-7 h-7 shrink-0 text-red-600")}
                </h3>
                {acceptanceTest.exampleFail.notes}
              </div>
            )}
          </div>
        </div>
      ))}
      <div className={technicalSectionContainerStyles}>
        <h2 className={technicalSectionHeaderStyles}>Implementation recommendations</h2>
        {bestPractice.technicalDetails.implementationRecommendations}
      </div>
    </div>
  );
};
