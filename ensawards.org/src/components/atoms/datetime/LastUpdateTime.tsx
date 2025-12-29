import { AbsoluteTime } from "@/components/atoms/datetime/AbsoluteTime.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import type { UnixTimestamp } from "@ensnode/ensnode-sdk";

export interface LastUpdateTimeProps {
  timestamp: UnixTimestamp;
  options: {
    date: Intl.DateTimeFormatOptions;
    time: Intl.DateTimeFormatOptions;
  };
  className?: string;
}

/**
 * Displays the last time a given entity was updated in ENSNode using {@link AbsoluteTime}.
 */
export const LastUpdateTime = ({ timestamp, options, className }: LastUpdateTimeProps) => {
  return (
    <p
      className={cn(
        "text-sm sm:text-base leading-normal font-normal text-muted-foreground sm:whitespace-nowrap",
        className,
      )}
    >
      Last updated <AbsoluteTime timestamp={timestamp} options={options.date} /> at{" "}
      <AbsoluteTime timestamp={timestamp} options={options.time} />
    </p>
  );
};

interface LastUpdateTimeLoadingProps {
  className?: string;
}
export const LastUpdateTimeLoading = ({ className }: LastUpdateTimeLoadingProps) => (
  <Skeleton
    className={cn(
      "w-[225px] sm:w-[255px] sm:h-[14px] h-4 mt-1 mb-1 sm:mb-[3px] bg-gray-200",
      className,
    )}
  />
);
