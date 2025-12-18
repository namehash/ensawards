// TODO: Move some items from the AdvocateReferralsList.tsx here

import { RegistrarActionCardLoading } from "@/components/atoms/cards/RegistrarActionCard.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";

export function AdvocateReferralsPageLoading() {
  {
    /*TODO: Remember to update this part!!!*/
  }
  return (
    <div className="w-full h-fit box-border flex flex-col justify-start items-center gap-6">
      <div className="w-full flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center max-sm:gap-2">
        <h3 className="text-2xl leading-normal font-semibold">Referrals</h3>
        <Skeleton className="w-[225px] sm:w-[255px] sm:h-[14px] h-4 mt-1 mb-1 sm:mb-[3px] bg-gray-200" />
      </div>
      <div className="w-full h-fit box-border flex flex-col justify-start items-center gap-3 relative">
        {[...Array(5)].map((_, idx) => (
          <RegistrarActionCardLoading key={idx} showReferrer={false} />
        ))}
      </div>
    </div>
  );
}
