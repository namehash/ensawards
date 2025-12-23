import { RegistrarActionCardLoading } from "@/components/atoms/cards/RegistrarActionCard.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";

export function EnsAdvocateProfileLoading() {
  return (
    <div className="w-full h-fit box-border flex flex-col justify-start items-center gap-6 sm:gap-10">
      <Skeleton className="w-full aspect-[67/28] sm:aspect-[152/35] bg-gray-200 rounded-xl" />
      <div className="w-full flex flex-col sm:flex-row flex-nowrap justify-start items-center gap-3 sm:gap-[25px]">
        <Skeleton className="w-[100px] h-[100px] sm:w-[56px] sm:h-[56px] flex-shrink-0 rounded-xl sm:rounded-md bg-gray-200" />
        <div className="w-full flex flex-col sm:flex-row sm:flex-wrap justify-center sm:justify-between items-start sm:items-center gap-3 sm:gap-y-3">
          <div className="max-sm:w-full flex flex-row justify-center sm:justify-start items-center">
            <Skeleton className="w-[180px] sm:w-[200px] h-[24px] sm:h-[30px] my-1 rounded-sm bg-gray-200" />
          </div>
          <div className="max-sm:w-full flex flex-col sm:flex-row flex-nowrap justify-start items-center gap-3">
            <Skeleton className="max-sm:self-stretch sm:w-[165px] h-9 my-1 rounded-full bg-gray-200" />
            <Skeleton className="max-sm:self-stretch sm:w-[188px] h-9 my-1 rounded-full bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
