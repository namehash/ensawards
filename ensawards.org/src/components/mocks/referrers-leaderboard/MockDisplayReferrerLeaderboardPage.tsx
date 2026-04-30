import {
  type ReferralProgramAwardModel,
  ReferralProgramAwardModels,
} from "@namehash/ens-referrals";
import { useMemo, useState } from "react";

import { createEnsNodeProviderOptions, EnsNodeProvider } from "@ensnode/ensnode-react";

import {
  type MockReferrersListState,
  MockReferrersListStates,
  mockReferrersLeaderboardData,
} from "@/components/mocks/referrers-leaderboard/data";
import { DisplayReferrerLeaderboardPage } from "@/components/referral-awards-program/referrers/DisplayReferrerLeaderboardPage.tsx";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { getENSNodeUrl } from "@/utils/env";
import { cn } from "@/utils/tailwindClassConcatenation.ts";

const DEFAULT_STATE = MockReferrersListStates.Loaded;

export function MockDisplayReferrerLeaderboardPage() {
  const ensNodeProviderOptions = useMemo(
    () =>
      createEnsNodeProviderOptions({
        url: getENSNodeUrl(),
      }),
    [],
  );
  const [selectedState, setSelectedState] = useState<MockReferrersListState>(DEFAULT_STATE);
  const [selectedAwardModel, setSelectedAwardModel] = useState<ReferralProgramAwardModel>(
    ReferralProgramAwardModels.PieSplit,
  );

  return (
    <EnsNodeProvider options={ensNodeProviderOptions}>
      <TooltipProvider delayDuration={200} skipDelayDuration={0}>
        <div className="w-full max-w-[1216px] box-border h-fit flex flex-col flex-nowrap justify-start items-start gap-3 sm:gap-6">
          <div className="flex flex-col flex-nowrap justify-start items-start gap-2 sm:gap-4">
            <p>
              Select a mock <b>DisplayReferrerLeaderboardPage</b> variant and state
            </p>
            <div className="flex flex-wrap gap-2">
              {Object.values(MockReferrersListStates).map((stateId) => (
                <button
                  className={cn(
                    shadcnButtonVariants({
                      size: "sm",
                      variant: selectedState === stateId ? "default" : "outline",
                      className: "cursor-pointer",
                    }),
                  )}
                  key={stateId}
                  onClick={() => setSelectedState(stateId)}
                >
                  {stateId}
                </button>
              ))}
            </div>
            <div className="h-[1px] w-full bg-gray-200" />
            <div className="flex flex-wrap gap-2">
              {[ReferralProgramAwardModels.PieSplit, ReferralProgramAwardModels.RevShareCap].map(
                (awardModelId) => (
                  <button
                    className={cn(
                      shadcnButtonVariants({
                        size: "sm",
                        variant: selectedAwardModel === awardModelId ? "default" : "outline",
                        className: "cursor-pointer",
                      }),
                    )}
                    key={awardModelId}
                    onClick={() => setSelectedAwardModel(awardModelId)}
                  >
                    {awardModelId}
                  </button>
                ),
              )}
            </div>
          </div>
          <DisplayReferrerLeaderboardPage
            // biome-ignore lint/style/noNonNullAssertion: we are guaranteed to have data for every combination of award model and state as we control the mock data
            {...mockReferrersLeaderboardData.get(selectedAwardModel)!.get(selectedState)!}
          />
        </div>
      </TooltipProvider>
    </EnsNodeProvider>
  );
}
