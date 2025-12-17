import { RegistrarActionCardLoading } from "@/components/atoms/cards/RegistrarActionCard.tsx";
import { Skeleton } from "@/components/ui/skeleton";

export function EnsAdvocateDetailsPageLoading() {
  return (
    <div className="w-full h-fit box-border flex flex-col justify-start items-center gap-6 sm:gap-10">
      <Skeleton className="w-full aspect-[152/35] bg-gray-200 rounded-xl" />
      <div className="w-full flex flex-col sm:flex-row flex-nowrap justify-start items-center gap-3 sm:gap-[25px]">
        <Skeleton className="w-[100px] h-[100px] flex-shrink-0 rounded-xl bg-gray-200" />
        <div className="w-full flex flex-col justify-center items-start gap-3 sm:gap-5">
          <div className="w-full flex flex-row justify-center sm:justify-start items-center">
            <Skeleton className="w-[180px] h-[24px] my-1 rounded-sm bg-gray-200" />
          </div>
          <div className="w-full flex flex-col sm:flex-row flex-nowrap justify-start items-center gap-3">
            <Skeleton className="max-sm:self-stretch sm:w-[165px] h-9 my-1 rounded-full bg-gray-200" />
            <Skeleton className="max-sm:self-stretch sm:w-[188px] h-9 my-1 rounded-full bg-gray-200" />
          </div>
        </div>
      </div>
      {/*TODO: Remember to update this part!!!*/}
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
    </div>
  );
}
