import { ChevronRightIcon } from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton.tsx";
import { cn } from "@/utils/tailwindClassConcatenation.ts";

const loadingStateStyles = "animate-pulse bg-gray-200 rounded-sm";

export interface ReferralProgramEditionFieldLoadingProps {
  label: string;
  styles?: {
    container?: string;
    label?: string;
    skeleton?: string;
  };
}

export const ReferralProgramEditionFieldLoading = ({
  label,
  styles,
}: ReferralProgramEditionFieldLoadingProps) => {
  return (
    <div
      className={cn(
        styles?.container ??
          "flex flex-row flex-nowrap justify-between items-start gap-0 sm:min-w-[80px] sm:flex-col sm:justify-center max-sm:self-stretch",
      )}
    >
      <p
        className={cn(styles?.label ?? "text-muted-foreground text-sm leading-normal font-normal")}
      >
        {label}
      </p>
      <Skeleton
        className={cn("w-[76px] h-[14px] mt-[4px] mb-[3px]", loadingStateStyles, styles?.skeleton)}
      />
    </div>
  );
};

export interface ReferralProgramEditionCardLoadingProps {
  showMobileVariant?: boolean;
}

export function ReferralProgramEditionCardLoading({
  showMobileVariant = false,
}: ReferralProgramEditionCardLoadingProps) {
  return (
    <div
      className={cn(
        "max-w-[335px] w-full h-fit min-h-[80px] box-border flex flex-col flex-wrap justify-start items-start gap-2 p-4 bg-white",
        "rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xs relative z-10",
        !showMobileVariant &&
          "max-w-full w-full sm:flex-row sm:justify-between sm:items-center sm:px-6 sm:py-5 sm:gap-5 cursor-pointer",
      )}
    >
      <div
        className={cn(
          "w-full flex flex-row justify-between items-start gap-5 pb-1",
          !showMobileVariant && "sm:hidden",
        )}
      >
        <Skeleton className={cn("h-[18px] mt-[5px] mb-[4px] w-2/3", loadingStateStyles)} />
        <Skeleton className={cn(loadingStateStyles, "h-[22px] w-[60px] rounded-full")} />
      </div>
      <div
        className={cn(
          "hidden flex-row justify-start items-center w-2/5",
          !showMobileVariant && "sm:flex",
        )}
      >
        <Skeleton className={cn("h-[18px] mt-[5px] mb-[4px] w-1/2", loadingStateStyles)} />
      </div>
      <ReferralProgramEditionFieldLoading
        label="Time period"
        styles={{
          container: cn(
            "flex flex-row flex-nowrap justify-between items-start gap-0 self-stretch",
            !showMobileVariant &&
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
            !showMobileVariant &&
              "sm:min-w-[120px] sm:flex-col sm:justify-center max-sm:self-stretch",
          ),
          skeleton: "w-[91px] h-[14px] mt-[4px] mb-[3px]",
        }}
      />
      <span
        className={cn(
          "hidden",
          !showMobileVariant && "max-sm:hidden sm:flex sm:flex-row sm:justify-end w-[90px]",
        )}
      >
        <Skeleton className={cn(loadingStateStyles, "h-[22px] w-[60px] rounded-full")} />
      </span>
      <ChevronRightIcon
        className={cn(
          "hidden w-6 h-6 text-gray-400 hover:text-gray-500 shrink-0",
          !showMobileVariant && "max-sm:hidden block",
        )}
      />
      <div
        className={cn(
          loadingStateStyles,
          "w-full h-9 rounded-full self-stretch",
          !showMobileVariant && "sm:hidden",
        )}
      ></div>
    </div>
  );
}
