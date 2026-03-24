import { ChevronRightIcon } from "lucide-react";

import {
  ReferralProgramEditionCardLoadingStateStyles,
  ReferralProgramEditionFieldLoading,
} from "@/components/atoms/cards/referralProgramEditionCard/shared";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { cn } from "@/utils/tailwindClassConcatenation.ts";

export interface ReferralProgramEditionCardLoadingProps {
  showMobileVariant?: boolean;
}

export function ReferralProgramEditionCardRevShareLimitLoading({
  showMobileVariant = false,
}: ReferralProgramEditionCardLoadingProps) {
  return (
    <div
      className={cn(
        "max-w-[335px] w-full h-fit min-h-[80px] box-border flex flex-col flex-wrap justify-start items-start gap-2 p-4 bg-white",
        "rounded-2xl border border-gray-200 relative z-10 max-w-full w-full sm:flex-row sm:justify-between sm:items-center sm:px-6 sm:py-5 sm:gap-5",
      )}
    >
      <div className="w-full flex flex-row justify-between items-start gap-5 pb-1 sm:hidden">
        <Skeleton
          className={cn(
            "h-[18px] mt-[5px] mb-[4px] w-2/3",
            ReferralProgramEditionCardLoadingStateStyles,
          )}
        />
        <Skeleton
          className={cn(
            ReferralProgramEditionCardLoadingStateStyles,
            "h-[22px] w-[60px] rounded-full",
          )}
        />
      </div>
      <div
        className={cn(
          "hidden flex-row justify-start items-center w-2/5",
          !showMobileVariant && "sm:flex",
        )}
      >
        <Skeleton
          className={cn(
            "h-[18px] mt-[5px] mb-[4px] w-1/2",
            ReferralProgramEditionCardLoadingStateStyles,
          )}
        />
      </div>
      <ReferralProgramEditionFieldLoading
        label="Time period"
        styles={{
          container: cn(
            "flex flex-row flex-nowrap justify-between items-start gap-0 self-stretch",
            "sm:min-w-[120px] sm:flex-col sm:justify-center max-sm:self-stretch",
          ),
          skeleton: "w-[185px] h-[14px] mt-[4px] mb-[3px]",
        }}
      />
      <ReferralProgramEditionFieldLoading
        label="Budget"
        styles={{
          container: cn(
            "flex flex-row flex-nowrap justify-between items-start gap-0 self-stretch",
            "sm:min-w-[120px] sm:flex-col sm:justify-center max-sm:self-stretch",
          ),
          skeleton: "w-[91px] h-[14px] mt-[4px] mb-[3px]",
        }}
      />
      <ReferralProgramEditionFieldLoading
        label="Max revenue share"
        styles={{
          container: cn(
            "flex flex-row flex-nowrap justify-between items-start gap-0 self-stretch",
            "sm:min-w-[150px] sm:flex-col sm:justify-center max-sm:self-stretch",
          ),
          skeleton: "w-[41px] h-[14px] mt-[4px] mb-[3px]",
        }}
      />
      <span className="hidden sm:flex sm:flex-row sm:justify-end w-[90px]">
        <Skeleton
          className={cn(
            ReferralProgramEditionCardLoadingStateStyles,
            "h-[22px] w-[60px] rounded-full",
          )}
        />
      </span>
      <ChevronRightIcon className="hidden sm:block w-6 h-6 text-gray-400 hover:text-gray-500 shrink-0" />
      <div
        className={cn(
          ReferralProgramEditionCardLoadingStateStyles,
          "w-full h-9 rounded-full self-stretch sm:hidden",
        )}
      ></div>
    </div>
  );
}
