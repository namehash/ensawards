import type { ReferralProgramEditionConfig } from "@namehash/ens-referrals/v1";
import { calcReferralProgramStatus } from "@namehash/ens-referrals/v1";
// TODO: Remember to roll back to "v0" / adapt imports
//  when implementing final version of the logic for the new referral program
import { useNow } from "@namehash/namehash-ui";
import { secondsInMinute } from "date-fns/constants";
import { ChevronRightIcon } from "lucide-react";
import type * as React from "react";
import { useMemo } from "react";

import type { PriceUsdc } from "@ensnode/ensnode-sdk";
import { getCurrencyInfo } from "@ensnode/ensnode-sdk";

import { ReferralProgramStatusBadge } from "@/components/atoms/badges/ReferralProgramStatusBadge.tsx";
import { GenericTooltip } from "@/components/atoms/GenericTooltip.tsx";
import { ReferralProgramPeriodDate } from "@/components/atoms/ReferralProgramTimeline.tsx";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/utils/tailwindClassConcatenation.ts";

export interface ReferralProgramEditionCardProps {
  referralProgramEditionConfig: ReferralProgramEditionConfig;
  showMobileVariant?: boolean;
}

export const ReferralProgramEditionCard = ({
  referralProgramEditionConfig,
  showMobileVariant = false,
}: ReferralProgramEditionCardProps) => {
  // refresh the status every minute
  const now = useNow({ timeToRefresh: secondsInMinute });
  const referralProgramStatus = useMemo(
    () => calcReferralProgramStatus(referralProgramEditionConfig.rules, now),
    [now],
  );

  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  //TODO: Maybe we already have a function for it? I couldn't find such...
  // If it turns out we really need this function then it should be moved to /src/utils
  /**
   * Converts the parsed currency representation in its smallest unit back to its original value.
   *
   * **Note** For large values this parsing may lead to loss of precision
   *
   * @param referralProgramTotalAwardShare - a {@link PriceUsdc} object with the amount in the smallest unit (6 decimals)
   * @returns A number representing the actual amount of the given currency
   *
   * @example
   * Based on the USDC currency
   * parseReferralProgramCurrency({ currency: "USDC", amount: 123456780n }) // returns 123.4567
   * parseReferralProgramCurrency({ currency: "USDC", amount: 1000000n }) // returns 1
   * parseReferralProgramCurrency({ currency: "USDC", amount: 1000n }) // returns 0.001
   */
  const parseReferralProgramCurrency = (referralProgramTotalAwardShare: PriceUsdc): number => {
    const currencyInfo = getCurrencyInfo(referralProgramTotalAwardShare.currency);
    return Number(referralProgramTotalAwardShare.amount) / Math.pow(10, currencyInfo.decimals);
  };

  // TODO: Should we include tooltips here as well (same as we do in Referrer cards)?
  return (
    <TooltipProvider delayDuration={250} skipDelayDuration={0}>
      {/* The "onClick" here is hacky, but allows us to have two different links (as before) and the
      requested hover behavior */}
      <div
        onClick={(event) => {
          const target = event.target as Element;
          if (!target.closest("a") && !showMobileVariant)
            window.location.href = `/leaderboards/referral-program/${referralProgramEditionConfig.slug}`; //TODO: exact path to be established
        }}
        className={cn(
          "w-full sm:max-w-[335px] h-fit min-h-[80px] box-border flex flex-col flex-wrap justify-start items-start gap-2 p-4 bg-white",
          "rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xs relative z-10",
          !showMobileVariant &&
            "sm:max-w-full sm:flex-row sm:justify-between sm:items-center sm:px-6 sm:py-5 sm:gap-5 cursor-pointer",
        )}
      >
        <div
          className={cn(
            "w-full flex flex-row justify-between items-start gap-5 pb-1",
            !showMobileVariant && "sm:hidden",
          )}
        >
          <h3 className="text-lg leading-normal font-semibold text-black text-ellipsis">
            {referralProgramEditionConfig.displayName}
          </h3>
          <ReferralProgramStatusBadge status={referralProgramStatus} />
        </div>
        <h3
          className={cn(
            "hidden w-2/5 text-lg leading-normal font-semibold text-black text-ellipsis",
            !showMobileVariant && "sm:block",
          )}
        >
          {referralProgramEditionConfig.displayName}
        </h3>
        <div
          className={cn(
            "flex flex-row flex-nowrap justify-between items-start gap-0 self-stretch",
            !showMobileVariant &&
              "sm:min-w-[120px] sm:flex-col sm:justify-center max-sm:self-stretch",
          )}
        >
          <GenericTooltip
            tooltipOffset={0}
            content={<p className="max-w-[140px]">Start date and end date of the program.</p>}
          >
            <p
              className={cn(
                "text-muted-foreground text-sm leading-normal font-normal max-sm:text-left",
                !showMobileVariant && "cursor-pointer",
              )}
            >
              Time period
            </p>
          </GenericTooltip>
          <p
            className={cn(
              "text-sm leading-normal font-medium text-black cursor-pointer max-sm:text-right",
              showMobileVariant && "text-right cursor-default",
            )}
          >
            <ReferralProgramPeriodDate
              timestamp={referralProgramEditionConfig.rules.startTime}
              className={cn("cursor-pointer", showMobileVariant && "cursor-default")}
            />{" "}
            -{" "}
            <ReferralProgramPeriodDate
              timestamp={referralProgramEditionConfig.rules.endTime}
              className={cn("cursor-pointer", showMobileVariant && "cursor-default")}
            />
          </p>
        </div>
        <div
          className={cn(
            "flex flex-row flex-nowrap justify-between items-start gap-0 self-stretch",
            !showMobileVariant &&
              "sm:min-w-[120px] sm:flex-col sm:justify-center max-sm:self-stretch",
          )}
        >
          <GenericTooltip
            tooltipOffset={0}
            content={<p className="max-w-[140px]">Estimated value of $ENS awards in USD</p>}
          >
            <p
              className={cn(
                "text-muted-foreground text-sm leading-normal font-normal",
                !showMobileVariant && "cursor-pointer",
              )}
            >
              Budget
            </p>
          </GenericTooltip>
          <p className="text-sm leading-normal font-medium text-black">
            {currencyFormatter.format(
              parseReferralProgramCurrency(referralProgramEditionConfig.rules.totalAwardPoolValue),
            )}{" "}
            USD
          </p>
        </div>
        <div
          className={cn(
            "flex flex-row flex-nowrap justify-between items-start gap-0 self-stretch",
            !showMobileVariant &&
              "sm:min-w-[80px] sm:flex-col sm:justify-center max-sm:self-stretch",
          )}
        >
          <GenericTooltip
            tooltipOffset={0}
            content={<p className="max-w-[140px]">All rules of the program in detail.</p>}
          >
            <p
              className={cn(
                "text-muted-foreground text-sm leading-normal font-normal",
                !showMobileVariant && "cursor-pointer",
              )}
            >
              Rules
            </p>
          </GenericTooltip>
          <a
            href={referralProgramEditionConfig.rules.rulesUrl.href}
            className="text-sm leading-[20px] font-medium text-blue-600 whitespace-nowrap hover:underline hover:underline-offset-[25%]"
          >
            Learn more
          </a>
        </div>
        <span className={cn("hidden min-w-[80px]", !showMobileVariant && "max-sm:hidden flex")}>
          <ReferralProgramStatusBadge
            status={referralProgramStatus}
            className={cn("cursor-pointer", showMobileVariant && "cursor-default")}
          />
        </span>
        <ChevronRightIcon
          className={cn(
            "hidden w-6 h-6 text-gray-400 hover:text-gray-500 shrink-0",
            !showMobileVariant && "max-sm:hidden block",
          )}
        />
        <button
          className={cn(
            shadcnButtonVariants({
              variant: "secondary",
              size: "default",
              className: cn(
                "sm:hidden cursor-pointer rounded-full self-stretch pt-1",
                showMobileVariant && "hidden",
              ),
            }),
          )}
        >
          View leaderboard
        </button>
      </div>
    </TooltipProvider>
  );
};

export interface ReferralProgramEditionCardLoadingProps {
  showMobileVariant?: boolean;
}

export function ReferralProgramEditionCardLoading({
  showMobileVariant = false,
}: ReferralProgramEditionCardLoadingProps) {
  const loadingStateStyles = "animate-pulse bg-gray-200 rounded-sm";
  return (
    <TooltipProvider delayDuration={250} skipDelayDuration={0}>
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
          <Skeleton className={cn("h-[18px] mt-[4px] mb-[3px] w-2/3", loadingStateStyles)} />
          <Skeleton className={cn(loadingStateStyles, "h-[22px] w-[60px] rounded-full")} />
        </div>
        <div
          className={cn(
            "hidden flex-row justify-start items-center w-2/5",
            !showMobileVariant && "sm:flex",
          )}
        >
          <Skeleton className={cn("h-[18px] mt-[4px] mb-[3px] w-1/2", loadingStateStyles)} />
        </div>
        <div
          className={cn(
            "flex flex-row flex-nowrap justify-between items-start gap-0 self-stretch",
            !showMobileVariant &&
              "sm:min-w-[120px] sm:flex-col sm:justify-center max-sm:self-stretch",
          )}
        >
          <GenericTooltip
            tooltipOffset={0}
            content={<p className="max-w-[140px]">Start date and end date of the program.</p>}
          >
            <p className="text-muted-foreground text-sm leading-normal font-normal max-sm:text-left">
              Time period
            </p>
          </GenericTooltip>
          <div className="w-fit flex flex-row flex-nowrap gap-1">
            <Skeleton className={cn("w-[85px] h-[14px] mt-[4px] mb-[3px]", loadingStateStyles)} /> -{" "}
            <Skeleton className={cn("w-[85px] h-[14px] mt-[4px] mb-[3px]", loadingStateStyles)} />
          </div>
        </div>
        <div
          className={cn(
            "flex flex-row flex-nowrap justify-between items-start gap-0 self-stretch",
            !showMobileVariant &&
              "sm:min-w-[120px] sm:flex-col sm:justify-center max-sm:self-stretch",
          )}
        >
          <GenericTooltip
            tooltipOffset={0}
            content={<p className="max-w-[140px]">Estimated value of $ENS awards in USD</p>}
          >
            <p className="text-muted-foreground text-sm leading-normal font-normal">Budget</p>
          </GenericTooltip>
          <Skeleton className={cn("w-[91px] h-[14px] mt-[4px] mb-[3px]", loadingStateStyles)} />
        </div>
        <div
          className={cn(
            "flex flex-row flex-nowrap justify-between items-start gap-0 self-stretch",
            !showMobileVariant &&
              "sm:min-w-[80px] sm:flex-col sm:justify-center max-sm:self-stretch",
          )}
        >
          <GenericTooltip
            tooltipOffset={0}
            content={<p className="max-w-[140px]">All rules of the program in detail.</p>}
          >
            <p className="text-muted-foreground text-sm leading-normal font-normal">Rules</p>
          </GenericTooltip>
          <Skeleton className={cn("w-[76px] h-[14px] mt-[4px] mb-[3px]", loadingStateStyles)} />
        </div>
        <span className={cn("hidden", !showMobileVariant && "max-sm:hidden sm:flex")}>
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
            "w-full h-10 rounded-full self-stretch pt-1",
            !showMobileVariant && "sm:hidden",
          )}
        ></div>
      </div>
    </TooltipProvider>
  );
}
