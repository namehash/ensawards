import { useState } from "react";

import { mockReferralProgramEditionsList } from "@/components/mocks/referral-program-editions/data";
import { DisplayReferralProgramEditionsList } from "@/components/molecules/ReferralProgramEditionsList";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";

const ReferralProgramEditionsListVariants = {
  Default: "Default",
  Simplified: "Simplified",
};

type ReferralProgramEditionsListVariant =
  (typeof ReferralProgramEditionsListVariants)[keyof typeof ReferralProgramEditionsListVariants];

const ReferralProgramEditionsListStates = {
  Loading: "Loading",
  Error: "Error",
  Loaded: "Loaded",
};

type ReferralProgramEditionsListState =
  (typeof ReferralProgramEditionsListStates)[keyof typeof ReferralProgramEditionsListStates];

export const MockReferralProgramEditionsList = () => {
  const [variant, setVariant] = useState<ReferralProgramEditionsListVariant>(
    ReferralProgramEditionsListVariants.Default,
  );
  const [state, setState] = useState<ReferralProgramEditionsListState>(
    ReferralProgramEditionsListStates.Loading,
  );

  return (
    <section className="w-full max-w-[1216px] box-border h-fit flex flex-col flex-nowrap justify-start items-start gap-3 sm:gap-6">
      <div className="flex flex-col flex-nowrap justify-start items-start gap-2 sm:gap-4">
        <p>
          Select a mock <b>ReferralProgramEditionsList</b> variant and state
        </p>
        <div className="flex flex-wrap gap-2">
          {Object.values(ReferralProgramEditionsListVariants).map((variantId) => (
            <button
              className={cn(
                shadcnButtonVariants({
                  size: "sm",
                  variant: variant === variantId ? "default" : "outline",
                  className: "cursor-pointer",
                }),
              )}
              key={variantId}
              onClick={() => setVariant(variantId)}
            >
              {variantId}
            </button>
          ))}
        </div>
        <div className="h-[1px] w-full bg-gray-200" />
        <div className="flex flex-wrap gap-2">
          {Object.values(ReferralProgramEditionsListStates).map((stateId) => (
            <button
              className={cn(
                shadcnButtonVariants({
                  size: "sm",
                  variant: state === stateId ? "default" : "outline",
                  className: "cursor-pointer",
                }),
              )}
              key={stateId}
              onClick={() => setState(stateId)}
            >
              {stateId}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col flex-nowrap justify-start items-start gap-3 sm:gap-6">
        <h3>Output:</h3>
        <DisplayReferralProgramEditionsList
          isLoading={state === ReferralProgramEditionsListStates.Loading}
          fetchErrorMessage={
            state === ReferralProgramEditionsListStates.Error ? "Mock test error message." : ""
          }
          referralProgramEditionConfigs={
            state === ReferralProgramEditionsListStates.Loaded
              ? mockReferralProgramEditionsList
              : null
          }
          loadingReferralProgramEditionConfigs={mockReferralProgramEditionsList}
          simplifiedVariant={variant === ReferralProgramEditionsListVariants.Simplified}
        />
      </div>
    </section>
  );
};
