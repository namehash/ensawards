import {
  ReferralProgramEditionStatuses,
  type ReferralProgramEditionSummary,
} from "@namehash/ens-referrals/v1";
import { useNow } from "@namehash/namehash-ui";
import { secondsInMinute } from "date-fns/constants";
import { useEffect, useState } from "react";

import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles";
import { getReferralProgramEditionSummaryBySlug } from "@/utils/referralProgram";
import { cn } from "@/utils/tailwindClassConcatenation";

interface ReferralProgramLeaderboardHeroButtonsProps {
  referralProgramEditionSummary: ReferralProgramEditionSummary;
}

export const ReferralProgramLeaderboardHeroButtons = ({
  referralProgramEditionSummary,
}: ReferralProgramLeaderboardHeroButtonsProps) => {
  const [referralProgramEditionSummaryData, setReferralProgramEditionSummaryData] = useState(
    referralProgramEditionSummary,
  );
  // refresh every 5 minutes
  const now = useNow({ timeToRefresh: 5 * secondsInMinute });

  async function refreshReferralProgramEditionSummary() {
    const refreshedSummary = await getReferralProgramEditionSummaryBySlug(
      referralProgramEditionSummary.slug,
    );

    setReferralProgramEditionSummaryData(refreshedSummary ?? referralProgramEditionSummary);
  }

  useEffect(() => {
    refreshReferralProgramEditionSummary();
  }, [referralProgramEditionSummary, now]);

  return (
    <div className="flex flex-col sm:flex-row justify-start items-start gap-4">
      <a
        href={`/ens-referral-program/editions/${referralProgramEditionSummaryData.slug}/rules`}
        className={cn(
          shadcnButtonVariants({
            variant: "default",
            size: "default",
            className:
              "cursor-pointer rounded-full px-5 h-12 box-border text-black bg-white hover:bg-white/90",
          }),
        )}
      >
        View edition rules
      </a>
      {referralProgramEditionSummaryData.status === ReferralProgramEditionStatuses.Active && (
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
