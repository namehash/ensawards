import { RegistrarActionCardLoading } from "@/components/atoms/cards/RegistrarActionCard.tsx";
import { LastUpdateTime } from "@/components/atoms/datetime/LastUpdateTime.tsx";
import { SimplePagination } from "@/components/molecules/Pagination.tsx";

interface AdvocateReferralsListLoadingProps {
  recordsPerPage: number;
}
/**
 * Displays a loading state for a list of {@link NamedRegistrarAction}s.
 */
function AdvocateReferralsListLoading({ recordsPerPage }: AdvocateReferralsListLoadingProps) {
  return (
    <div className="w-full space-y-3 relative z-10">
      {[...Array(recordsPerPage)].map((_, idx) => (
        <RegistrarActionCardLoading key={idx} showReferrer={false} />
      ))}
    </div>
  );
}
export function AdvocateReferralsList() {
  return (
    <div className="w-full h-fit box-border flex flex-col justify-start items-center gap-6">
      <div className="w-full flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center max-sm:gap-2">
        <h3 className="text-2xl leading-normal font-semibold">Referrals</h3>
        <LastUpdateTime
          timestamp={1765977533}
          options={{
            date: {
              year: "numeric",
              month: "short",
              day: "numeric",
            },
            time: {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              hour12: false,
            },
          }}
          className="text-base sm:text-sm"
        />
      </div>
      {/*TODO: Separate this part (and the loading state) into AdvocateReferralsPage.tsx + add error state as well*/}
      <div className="w-full h-fit box-border flex flex-col justify-start items-center gap-3 relative">
        {[...Array(5)].map((_, idx) => (
          <RegistrarActionCardLoading key={idx} showReferrer={false} />
        ))}
      </div>
      <SimplePagination
        totalPages={3}
        totalRecords={25}
        paginationParams={{
          page: 1,
          recordsPerPage: 5,
        }}
        onPrevious={() => console.log("previous placeholder")}
        onNext={() => console.log("next placeholder")}
        showText={true}
        containerClassName="w-full justify-between"
      />
    </div>
  );
}
