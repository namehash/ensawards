import {
  ReferralProgramStatusBadge,
  type ReferralProgramStatusId,
  ReferralProgramStatuses,
} from "@/components/atoms/badges/ReferralProgramStatusBadge.tsx";
import { AbsoluteTime } from "@/components/atoms/datetime/AbsoluteTime.tsx";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip.tsx";
import { useNow } from "@/utils/hooks/useNow.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import type { UnixTimestamp } from "@ensnode/ensnode-sdk";
import type { ReferralProgramRules } from "@namehash/ens-referrals";
import { secondsInMinute } from "date-fns/constants";
import type * as React from "react";
import { useMemo } from "react";

interface ReferralProgramTimelineProps {
  referralProgramRules: ReferralProgramRules;
  styles?: {
    mainContainer?: string;
    itemContainer?: string;
    header?: string;
    dates?: string;
  };
}

export const calculateReferralProgramStatus = (
  referralProgramRules: ReferralProgramRules,
  now: UnixTimestamp,
): ReferralProgramStatusId => {
  // if the program has not started return "Scheduled"
  if (now < referralProgramRules.startTime) return ReferralProgramStatuses.Scheduled;

  // if the program has ended return "Closed"
  if (now > referralProgramRules.endTime) return ReferralProgramStatuses.Closed;

  // otherwise, return active
  return ReferralProgramStatuses.Active;
};

export function ReferralProgramTimeline({
  referralProgramRules,
  styles,
}: ReferralProgramTimelineProps) {
  // refresh the status every minute
  const now = useNow({ timeToRefresh: secondsInMinute });
  const referralProgramStatus = useMemo(
    () => calculateReferralProgramStatus(referralProgramRules, now),
    [now],
  );

  const containerStyles = cn(
    "flex flex-row md:flex-col flex-nowrap justify-between md:justify-center items-center md:items-start md:gap-0 leading-7 max-md:self-stretch",
    styles?.itemContainer,
  );
  const headerStyles = cn("text-gray-400 whitespace-nowrap", styles?.header);

  return (
    <TooltipProvider delayDuration={250} skipDelayDuration={0}>
      <div
        className={cn(
          "flex flex-col md:flex-row flex-nowrap justify-center md:justify-start items-start gap-2 sm:gap-8 md:gap-14 max-md:self-stretch",
          styles?.mainContainer,
        )}
      >
        <div className={cn(containerStyles, "md:gap-0.5")}>
          <p className={headerStyles}>Status</p>
          <ReferralProgramStatusBadge status={referralProgramStatus} />
        </div>
        <div className={containerStyles}>
          <p className={headerStyles}>Time period</p>
          <p className={cn("text-base leading-normal font-medium text-white", styles?.dates)}>
            <ReferralProgramPeriodDate timestamp={referralProgramRules.startTime} /> -{" "}
            <ReferralProgramPeriodDate timestamp={referralProgramRules.endTime} />
          </p>
        </div>
      </div>
    </TooltipProvider>
  );
}

interface ReferralProgramPeriodDateProps {
  timestamp: UnixTimestamp;
}

const ReferralProgramPeriodDate = ({ timestamp }: ReferralProgramPeriodDateProps) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <span className="whitespace-nowrap">
          <AbsoluteTime
            timestamp={timestamp}
            options={{
              year: "numeric",
              month: "short",
              day: "numeric",
              timeZone: "UTC",
            }}
          />
        </span>
      </TooltipTrigger>
      <TooltipContent className="bg-[#171717] text-xs text-white text-left shadow-md outline-none w-fit duration-0">
        <AbsoluteTime
          timestamp={timestamp}
          options={{
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          }}
        />{" "}
        (Local time)
        <br />
        <AbsoluteTime
          timestamp={timestamp}
          options={{
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
            timeZone: "UTC",
          }}
        />{" "}
        (UTC)
        <TooltipArrow width={12} height={8} />
      </TooltipContent>
    </Tooltip>
  );
};
