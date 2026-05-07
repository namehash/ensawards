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
        {bestPractice.technicalDetails.acceptanceTests.map((acceptanceTest) => (
          <div key={acceptanceTest.acceptanceTestSlug} className={technicalSectionContainerStyles}>
            <div className={cn(technicalSectionContainerStyles, "gap-1")}>
              <h3 className={cn(technicalSectionHeaderStyles, "text-lg")}>{acceptanceTest.name}</h3>
              {acceptanceTest.description}
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
