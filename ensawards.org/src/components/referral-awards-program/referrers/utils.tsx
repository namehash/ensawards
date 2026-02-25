import { Award as AwardIcon } from "lucide-react";

import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";

export interface EmptyLeaderboardInfoProps {
  header: string;
  description: string;
  buttonData: {
    label: string;
    href: string;
  };
}

/**
 * Displays information that the current referrer leaderboard is empty
 * (when {@link ReferrerLeaderboardPageContext.totalRecords} is 0)
 *
 * or when that particular referral program edition has not started yet
 * (when current time is before {@link ReferralProgramEditionConfig.rules.startTime})
 */
export const EmptyLeaderboardInfo = ({
  header,
  description,
  buttonData,
}: EmptyLeaderboardInfoProps) => {
  const verticalContainerStyles = "w-full flex flex-col justify-start items-center";

  return (
    <div className={cn(verticalContainerStyles, "gap-5")}>
      <div className="w-[48px] h-[48px] flex flex-col justify-center items-center rounded-full bg-emerald-600/10">
        <AwardIcon size={20} className="flex-shrink-0 text-emerald-600" />
      </div>
      <div className={cn(verticalContainerStyles, "gap-4")}>
        <div className={cn(verticalContainerStyles, "gap-1")}>
          <h3 className="text-xl leading-normal font-semibold text-black text-center">{header}</h3>
          <p className="text-base leading-normal font-normal text-muted-foreground text-center">
            {description}
          </p>
        </div>
        <a
          className={cn(
            shadcnButtonVariants({
              variant: "outline",
              size: "default",
              className: "cursor-pointer rounded-full",
            }),
          )}
          href={buttonData.href}
        >
          {buttonData.label}
        </a>
      </div>
    </div>
  );
};
