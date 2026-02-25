import {
  calcReferralProgramStatus,
  type ReferralProgramEditionConfig,
  ReferralProgramStatuses,
} from "@namehash/ens-referrals/v1";
import { useNow } from "@namehash/namehash-ui";
import { secondsInMinute } from "date-fns/constants";
import { useMemo } from "react";

import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles";
import { cn } from "@/utils/tailwindClassConcatenation";

interface ReferralProgramLeaderboardHeroButtonsProps {
  referralProgramEditionConfig: ReferralProgramEditionConfig;
}

export const ReferralProgramLeaderboardHeroButtons = ({
  referralProgramEditionConfig,
}: ReferralProgramLeaderboardHeroButtonsProps) => {
  // refresh the status every minute
  const now = useNow({ timeToRefresh: secondsInMinute });
  const referralProgramStatus = useMemo(
    () => calcReferralProgramStatus(referralProgramEditionConfig.rules, now),
    [now, referralProgramEditionConfig],
  );
  return (
    <div className="flex flex-col sm:flex-row justify-start items-start gap-4">
      <a
        href={`/ens-referral-program/editions/${referralProgramEditionConfig.slug}/rules`}
        className={cn(
          shadcnButtonVariants({
            variant: "default",
            size: "default",
            className:
              "cursor-pointer rounded-full px-5 h-12 box-border text-black bg-white hover:bg-white/90",
          }),
        )}
      >
        Learn more
      </a>
      {referralProgramStatus === ReferralProgramStatuses.Active && (
        <a
          href="/ens-referral-program/live-feed"
          className={cn(
            shadcnButtonVariants({
              variant: "ghost",
              size: "default",
              className:
                "cursor-pointer rounded-full px-5 h-12 box-border text-white hover:text-white bg-white/10 hover:bg-white/20",
            }),
          )}
        >
          Live feed
        </a>
      )}
    </div>
  );
};
