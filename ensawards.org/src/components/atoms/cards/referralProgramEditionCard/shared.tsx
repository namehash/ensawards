import type { ReferralProgramEditionConfig } from "@namehash/ens-referrals/v1";

import type { PriceUsdc, UnixTimestamp } from "@ensnode/ensnode-sdk";

import { ReferralProgramPeriodDate } from "@/components/atoms/ReferralProgramTimeline.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { TooltipProvider } from "@/components/ui/tooltip";
import { parseReferralProgramCurrency } from "@/utils/referralProgram";
import { cn } from "@/utils/tailwindClassConcatenation.ts";

export interface ReferralProgramEditionCardProps {
  referralProgramEditionConfig: ReferralProgramEditionConfig;
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

export interface ReferralProgramEditionBudgetProps {
  totalAwardPoolValue: PriceUsdc;
  styles?: {
    container?: string;
    label?: string;
    value?: string;
  };
}

export const ReferralProgramEditionBudget = ({
  totalAwardPoolValue,
  styles,
}: ReferralProgramEditionBudgetProps) => {
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

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
        Budget
      </p>
      <p
        className={cn(
          styles?.value ??
            "text-sm leading-normal font-medium text-black max-sm:text-right cursor-default",
        )}
      >
        {currencyFormatter.format(parseReferralProgramCurrency(totalAwardPoolValue))} USD
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
