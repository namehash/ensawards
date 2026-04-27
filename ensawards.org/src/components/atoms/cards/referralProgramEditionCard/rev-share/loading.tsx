import {
  ReferralProgramEditionCardLoading,
  type ReferralProgramEditionCardLoadingProps,
  ReferralProgramEditionFieldLoading,
} from "@/components/atoms/cards/referralProgramEditionCard/shared";
import { cn } from "@/utils/tailwindClassConcatenation.ts";

export function ReferralProgramEditionCardRevShareCapLoading({
  showMobileVariant = false,
}: ReferralProgramEditionCardLoadingProps) {
  return (
    <ReferralProgramEditionCardLoading showMobileVariant={showMobileVariant}>
      <ReferralProgramEditionFieldLoading
        label="Max revenue share"
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
