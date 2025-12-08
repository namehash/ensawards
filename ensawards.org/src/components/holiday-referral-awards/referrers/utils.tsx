import { AbsoluteTime } from "@/components/atoms/datetime/AbsoluteTime.tsx";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import type { UnixTimestamp } from "@ensnode/ensnode-sdk";
import { AlertCircle as AlertIcon, Award as AwardIcon } from "lucide-react";
import type { ReactElement } from "react";

export interface ReferrersSnapshotTimeProps {
  lastUpdateTimestamp: UnixTimestamp;
}
export const ReferrersSnapshotTime = ({ lastUpdateTimestamp }: ReferrersSnapshotTimeProps) => {
  return (
    <p className="text-base leading-normal font-normal text-muted-foreground whitespace-nowrap">
      Last updated{" "}
      <AbsoluteTime
        timestamp={lastUpdateTimestamp}
        options={{
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: false,
        }}
      />
    </p>
  );
};

interface NoReferrersInfoProps {
  cta: ReactElement;
}

export const NoReferrersInfo = ({ cta }: NoReferrersInfoProps) => {
  const verticalContainerStyles = "w-full flex flex-col justify-start items-center";

  return (
    <div className={cn(verticalContainerStyles, "gap-5")}>
      <div className="w-[48px] h-[48px] flex flex-col justify-center items-center rounded-full bg-emerald-600/10">
        <AwardIcon size={20} className="flex-shrink-0 text-emerald-600" />
      </div>
      <div className={cn(verticalContainerStyles, "gap-4")}>
        <div className={cn(verticalContainerStyles, "gap-1")}>
          <h3 className="text-xl leading-normal font-semibold text-black text-center">
            Looks like there's no referrals in December yet
          </h3>
          <p className="text-base leading-normal font-normal text-muted-foreground text-center">
            Wanna be first? Generate your referral link and earn awards!
          </p>
        </div>
        {cta}
      </div>
    </div>
  );
};
