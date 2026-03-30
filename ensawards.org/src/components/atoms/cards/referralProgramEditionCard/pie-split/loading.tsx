import type { ReferralProgramEditionCardLoadingProps } from "@/components/atoms/cards/referralProgramEditionCard/shared";
import {
  ReferralProgramEditionCardLoading,
  ReferralProgramEditionFieldLoading,
} from "@/components/atoms/cards/referralProgramEditionCard/shared";
import { cn } from "@/utils/tailwindClassConcatenation.ts";

export function ReferralProgramEditionCardPieSplitLoading({
  showMobileVariant = false,
}: ReferralProgramEditionCardLoadingProps) {
  return (
    <ReferralProgramEditionCardLoading showMobileVariant={showMobileVariant}>
      <ReferralProgramEditionFieldLoading
        label="Max qualified referrers"
        styles={{
          container: cn(
            "flex flex-row flex-nowrap justify-between items-start gap-0 self-stretch",
            "sm:min-w-[150px] sm:flex-col sm:justify-center max-sm:self-stretch",
          ),
          skeleton: "w-[41px] h-[14px] mt-[4px] mb-[3px]",
        }}
      />
    </ReferralProgramEditionCardLoading>
  );
}
