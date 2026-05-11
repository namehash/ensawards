import type { BestPractice } from "data/ens-best-practices/types.ts";

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
        <h2 className={technicalSectionHeaderStyles}>ENS best practice details</h2>
        {bestPractice.technicalDetails.useCaseSummary}
      </div>
      <div className={technicalSectionContainerStyles}>
        <h2 className={cn(technicalSectionHeaderStyles, "text-xl")}>Desired outcome</h2>
        {bestPractice.technicalDetails.desiredOutcome}
      </div>
      <div className={technicalSectionContainerStyles}>
        <h2 className={cn(technicalSectionHeaderStyles, "text-xl")}>Acceptance tests</h2>
        {sortedAcceptanceTests.map((acceptanceTest, index) => (
          <div key={acceptanceTest.acceptanceTestSlug} className={technicalSectionContainerStyles}>
            <div className={cn(technicalSectionContainerStyles, "gap-3")}>
              <div className={cn(technicalSectionContainerStyles, "gap-1")}>
                <h3
                  className={cn(technicalSectionHeaderStyles, "text-base")}
                >{`Test ${index + 1}`}</h3>
                {acceptanceTest.description}
              </div>
              <div className={cn(technicalSectionContainerStyles, "gap-1")}>
                <h3 className={cn(technicalSectionHeaderStyles, "text-base")}>Example pass</h3>
                {acceptanceTest.examplePass.notes}
              </div>
              {acceptanceTest.examplePartialPass !== undefined && (
                <div className={cn(technicalSectionContainerStyles, "gap-1")}>
                  <h3 className={cn(technicalSectionHeaderStyles, "text-base")}>
                    Example partial pass
                  </h3>
                  {acceptanceTest.examplePartialPass.notes}
                </div>
              )}
              {acceptanceTest.exampleFail !== undefined && (
                <div className={cn(technicalSectionContainerStyles, "gap-1")}>
                  <h3 className={cn(technicalSectionHeaderStyles, "text-base")}>Example fail</h3>
                  {acceptanceTest.exampleFail.notes}
                </div>
              )}
            </div>
          </div>
        ))}
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
