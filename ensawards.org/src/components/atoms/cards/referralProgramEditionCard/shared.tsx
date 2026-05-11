import type { ReferralProgramEditionSummary } from "@namehash/ens-referrals";
import { type UnixTimestamp } from "enssdk";
import { ChevronRightIcon } from "lucide-react";
import type { PropsWithChildren } from "react";

import type { PriceUsdc } from "@ensnode/ensnode-sdk";

import { ReferralProgramPeriodDate } from "@/components/atoms/ReferralProgramPeriodDate";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { TooltipProvider } from "@/components/ui/tooltip";
import { parseReferralProgramCurrency } from "@/utils/referralProgram";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import { usdFormatter } from "@/utils/textModifications";

export interface ReferralProgramEditionCardProps {
  referralProgramEditionSummary: ReferralProgramEditionSummary;
}

export interface ReferralProgramEditionTimePeriodProps {
  startTime: UnixTimestamp;
  endTime: UnixTimestamp;
  styles?: {
    container?: string;
    label?: string;
    value?: string;
    date?: string;
  };
}

export const ReferralProgramEditionTimePeriod = ({
  startTime,
  endTime,
  styles,
}: ReferralProgramEditionTimePeriodProps) => {
  return (
    <TooltipProvider delayDuration={250} skipDelayDuration={0}>
      <div
        className={cn(
          styles?.container ??
            "flex flex-row flex-nowrap justify-between items-start gap-0 sm:min-w-[80px] sm:flex-col sm:justify-center max-sm:self-stretch",
        )}
      >
        <p
          className={cn(
            styles?.label ??
              "text-muted-foreground text-sm leading-normal font-normal max-sm:text-left cursor-default",
          )}
        >
          Time period
        </p>
        <p
          className={cn(
            styles?.value ??
              "text-sm leading-normal font-medium text-black cursor-default max-sm:text-right",
          )}
        >
          <ReferralProgramPeriodDate timestamp={startTime} className={styles?.date} /> -{" "}
          <ReferralProgramPeriodDate timestamp={endTime} className={styles?.date} />
        </p>
      </div>
    </TooltipProvider>
  );
};

export interface ReferralProgramEditionAwardPoolProps {
  totalAwardPoolValue: PriceUsdc;
  styles?: {
    container?: string;
    label?: string;
    value?: string;
  };
}

export const ReferralProgramEditionAwardPool = ({
  totalAwardPoolValue,
  styles,
}: ReferralProgramEditionAwardPoolProps) => {
  return (
    <div
      className={cn(
        styles?.container ??
          "flex flex-row flex-nowrap justify-between items-start gap-0 sm:min-w-[80px] sm:flex-col sm:justify-center max-sm:self-stretch",
      )}
    >
      <p
        className={cn(
          styles?.label ??
            "text-muted-foreground text-sm leading-normal font-normal max-sm:text-left cursor-default",
        )}
      >
        Award pool
      </p>
      <p
        className={cn(
          styles?.value ??
            "text-sm leading-normal font-medium text-black max-sm:text-right cursor-default",
        )}
      >
        {usdFormatter.format(parseReferralProgramCurrency(totalAwardPoolValue))} USD
      </p>
    </div>
  );
};

export interface ReferralProgramEditionRulesProps {
  rulesUrlHref: string;
  styles?: {
    container?: string;
    label?: string;
  };
}

export const ReferralProgramEditionRules = ({
  rulesUrlHref,
  styles,
}: ReferralProgramEditionRulesProps) => {
  return (
    <div
      className={cn(
        styles?.container ??
          "flex flex-row flex-nowrap justify-between items-start gap-0 sm:min-w-[80px] sm:flex-col sm:justify-center max-sm:self-stretch",
      )}
    >
      <p
        className={cn(
          styles?.label ??
            "text-muted-foreground text-sm leading-normal font-normal max-sm:text-left cursor-default",
        )}
      >
        Rules
      </p>
      <a
        href={rulesUrlHref}
        className="text-sm leading-[20px] font-medium text-blue-600 whitespace-nowrap hover:underline hover:underline-offset-[25%] max-sm:text-right"
      >
        Learn more
      </a>
    </div>
  );
};

export const ReferralProgramEditionCardLoadingStateStyles = "animate-pulse bg-gray-200 rounded-sm";

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
        className={cn(
          "w-[76px] h-[14px] mt-[4px] mb-[3px]",
          ReferralProgramEditionCardLoadingStateStyles,
          styles?.skeleton,
        )}
      />
    </div>
  );
};

export interface ReferralProgramEditionCardLoadingProps {
  showMobileVariant?: boolean;
}

export function ReferralProgramEditionCardLoading({
  showMobileVariant = false,
  children,
}: PropsWithChildren<ReferralProgramEditionCardLoadingProps>) {
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
        label="Award pool"
        styles={{
          container: cn(
            "flex flex-row flex-nowrap justify-between items-start gap-0 self-stretch",
            "sm:min-w-[120px] sm:flex-col sm:justify-center max-sm:self-stretch",
          ),
          skeleton: "w-[91px] h-[14px] mt-[4px] mb-[3px]",
        }}
      />
      {children}
      <span className="hidden sm:flex sm:flex-row sm:max-[1205px]:justify-start min-[1205px]:justify-end w-[110px]">
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
