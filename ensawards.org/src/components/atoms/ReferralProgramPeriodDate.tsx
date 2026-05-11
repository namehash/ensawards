import { AbsoluteTime } from "@namehash/namehash-ui";
import type { UnixTimestamp } from "enssdk";

import { Tooltip, TooltipArrow, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip.tsx";
import { cn } from "@/utils/tailwindClassConcatenation.ts";

interface ReferralProgramPeriodDateProps {
  timestamp: UnixTimestamp;
  className?: string;
}

export const ReferralProgramPeriodDate = ({
  timestamp,
  className,
}: ReferralProgramPeriodDateProps) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <span className={cn("whitespace-nowrap", className)}>
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
