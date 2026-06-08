import { EnsIcon } from "@namehash/namehash-ui";
import type { AcceptanceTestSlug } from "data/acceptance-tests/types";
import { getAcceptanceTestBySlug } from "data/acceptance-tests/utils";
import type { BestPractice } from "data/ens-best-practices/types";
import type { PropsWithChildren } from "react";

import { cn } from "@/utils/tailwindClassConcatenation";

export const technicalSectionContainerStyles =
  "flex flex-col justify-start items-start gap-3 text-base leading-7 font-normal text-muted-foreground";

export const technicalSectionHeaderStyles = "text-2xl leading-none font-semibold text-black";

export const BenefitFromUsingEns = ({ bestPractice }: { bestPractice: BestPractice }) => (
  <div className={cn(technicalSectionContainerStyles, "w-full p-4 bg-[#0080BC]/5 rounded-xl")}>
    <h2
      className={cn(
        technicalSectionHeaderStyles,
        "text-xl w-full flex flex-row items-center justify-between gap-3",
      )}
    >
      {bestPractice.technicalDetails.benefitFromUsingEnsTitle ?? "Benefit from using ENS"}
      <EnsIcon width={28} height={28} className="text-[#0080BC]" />
    </h2>
    {bestPractice.technicalDetails.benefitFromUsingEns}
  </div>
);

export const ImplementationRecommendations = ({ bestPractice }: { bestPractice: BestPractice }) => (
  <div className={technicalSectionContainerStyles}>
    <h2 className={technicalSectionHeaderStyles}>Implementation recommendations</h2>
    {bestPractice.technicalDetails.implementationRecommendations}
  </div>
);

export const UseCaseSummary = ({ bestPractice }: { bestPractice: BestPractice }) => (
  <>{bestPractice.technicalDetails.useCaseSummary}</>
);

export interface AcceptanceTestDetailsProps {
  acceptanceTestSlug: AcceptanceTestSlug;
  testIndex: number;
}

export const AcceptanceTestDetailsContainer = ({
  acceptanceTestSlug,
  testIndex,
  children,
}: PropsWithChildren<AcceptanceTestDetailsProps>) => {
  const acceptanceTest = getAcceptanceTestBySlug(acceptanceTestSlug);

  if (acceptanceTest === undefined) {
    throw new Error(
      `Invariant(AcceptanceTestSlug): Acceptance test with slug ${acceptanceTestSlug} is not defined`,
    );
  }
  return (
    <div key={acceptanceTest.acceptanceTestSlug} className={technicalSectionContainerStyles}>
      <h3 className={technicalSectionHeaderStyles}>{`Acceptance Test ${testIndex + 1}`}</h3>
      {acceptanceTest.description}
      {children}
    </div>
  );
};
