import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import type { ReferrerLeaderboardPageParams } from "@namehash/ens-referrals";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Ellipsis as DistanceSymbol,
} from "lucide-react";

/**
 * Display any of the additional pagination buttons if there are at least three pages
 * (first page and last page are not 1 & 2)
 */
const MINIMAL_TOTAL_PAGES_TO_DISPLAY_ADDITIONAL_PAGINATION_BUTTONS = 3;

interface DisplayPaginationProps
  extends PaginationProps,
    Omit<RecordsPerPageSelectProps, "recordsPerPage"> {
  recordAlias?: RecordAlias;
  containerClassName?: string;
  quantityClassName?: string;
}

export function DisplayPagination({
  totalPages,
  totalRecords,
  paginationParams,
  onNext,
  onPrevious,
  onChosen,
  onRecordsPerPageChange,
  possibleRecordsPerPageValues,
  selectorDescription,
  recordAlias,
  containerClassName,
  quantityClassName,
}: DisplayPaginationProps) {
  return (
    <div
      className={cn(
        "w-full flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-center gap-y-3",
        containerClassName,
      )}
    >
      <QuantityInfo
        paginationParams={paginationParams}
        totalRecords={totalRecords}
        recordAlias={recordAlias}
        className={quantityClassName}
      />
      <Pagination
        totalPages={totalPages}
        totalRecords={totalRecords}
        paginationParams={paginationParams}
        onPrevious={onPrevious}
        onNext={onNext}
        onChosen={onChosen}
      />
      <ItemsPerPageSelect
        recordsPerPage={paginationParams.recordsPerPage}
        onRecordsPerPageChange={onRecordsPerPageChange}
        selectorDescription={selectorDescription}
        possibleRecordsPerPageValues={possibleRecordsPerPageValues}
      />
    </div>
  );
}

export function DisplaySimplePagination({
  totalPages,
  totalRecords,
  paginationParams,
  onNext,
  onPrevious,
  onChosen,
  recordAlias,
  containerClassName,
  quantityClassName,
}: Omit<
  DisplayPaginationProps,
  "onRecordsPerPageChange" | "possibleRecordsPerPageValues" | "selectorDescription"
>) {
  return (
    <div
      className={cn(
        "w-full flex flex-row flex-wrap justify-start items-center gap-3",
        containerClassName,
      )}
    >
      <QuantityInfo
        paginationParams={paginationParams}
        totalRecords={totalRecords}
        recordAlias={recordAlias}
        className={quantityClassName}
      />
      <SimplePagination
        totalPages={totalPages}
        totalRecords={totalRecords}
        paginationParams={paginationParams}
        onPrevious={onPrevious}
        onNext={onNext}
        onChosen={onChosen}
      />
    </div>
  );
}

export interface PaginationProps {
  totalPages: number;
  totalRecords: number;
  paginationParams: Required<ReferrerLeaderboardPageParams>;
  onPrevious: () => void;
  onNext: () => void;
  onChosen: (newPage: number) => void;
}

export function Pagination({
  totalPages,
  totalRecords,
  paginationParams,
  onNext,
  onPrevious,
  onChosen,
}: PaginationProps) {
  const buttonStyles = shadcnButtonVariants({
    variant: "ghost",
    size: "default",
    className: "cursor-pointer rounded-md border",
  });

  // do not show pagination controls when there is only one page of records
  if (totalPages === 1) {
    return null;
  }

  return (
    <div className="w-fit h-fit flex flex-row flex-nowrap justify-center items-center gap-1 text-black">
      <button
        aria-disabled={paginationParams.page === 1}
        className={cn(buttonStyles, "block sm:hidden")}
        onClick={() => {
          onChosen(1);
        }}
      >
        <ChevronsLeft size={16} />
      </button>
      <button
        aria-disabled={paginationParams.page === 1}
        className={cn(buttonStyles, "border-transparent")}
        onClick={onPrevious}
      >
        <ChevronLeft size={16} />
        <span className="hidden sm:inline">Previous</span>
      </button>
      <p className="inline sm:hidden text-sm leading-normal font-medium">
        Page {paginationParams.page} of {totalPages}
      </p>
      <div className="hidden sm:flex flex-row flex-nowrap justify-center items-center gap-1">
        <button
          className={cn(
            buttonStyles,
            paginationParams.page === 1
              ? "border-gray-200 cursor-default hover:bg-white"
              : "border-transparent",
          )}
          onClick={() => {
            onChosen(1);
          }}
        >
          1
        </button>
        <DistanceSymbol
          className={cn(
            shouldDisplayLeftDistanceSymbol(totalPages, paginationParams.page) ? "block" : "hidden",
          )}
          size={16}
        />
        {shouldDisplayAdditionalButtonForPreviousPage(totalPages, paginationParams.page) && (
          <button
            id="previousPageButton"
            className={cn(buttonStyles, "border-transparent")}
            onClick={onPrevious}
          >
            {paginationParams.page - 1}
          </button>
        )}
        {shouldDisplayAdditionalButtonForCurrentPage(totalPages, paginationParams.page) && (
          <button
            id="currentPageButton"
            className={cn(buttonStyles, "border-gray-200")}
            onClick={() => {
              onChosen(paginationParams.page);
            }}
          >
            {paginationParams.page}
          </button>
        )}
        {shouldDisplayAdditionalButtonForNextPage(totalPages, paginationParams.page) && (
          <button
            id="nextPageButton"
            className={cn(buttonStyles, "border-transparent")}
            onClick={onNext}
          >
            {paginationParams.page + 1}
          </button>
        )}
        <DistanceSymbol
          className={cn(
            shouldDisplayRightDistanceSymbol(totalPages, paginationParams.page)
              ? "block"
              : "hidden",
          )}
          size={16}
        />
        <button
          className={cn(
            buttonStyles,
            paginationParams.page === totalPages
              ? "border-gray-200 cursor-default hover:bg-white"
              : "border-transparent",
          )}
          onClick={() => {
            onChosen(totalPages);
          }}
        >
          {totalPages}
        </button>
      </div>
      <button
        aria-disabled={paginationParams.page === totalPages}
        className={cn(buttonStyles, "border-transparent")}
        onClick={onNext}
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight size={16} />
      </button>
      <button
        aria-disabled={paginationParams.page === totalPages}
        className={cn(buttonStyles, "block sm:hidden")}
        onClick={() => {
          onChosen(totalPages);
        }}
      >
        <ChevronsRight size={16} />
      </button>
    </div>
  );
}

const shouldDisplayAdditionalButtonForCurrentPage = (
  totalPages: number,
  currentPage: number,
): boolean => {
  // if there are at least three pages,
  if (totalPages < MINIMAL_TOTAL_PAGES_TO_DISPLAY_ADDITIONAL_PAGINATION_BUTTONS) return false;

  // and current page is not the last page,
  if (currentPage === totalPages) return false;

  // and current page is not the first page
  if (currentPage === 1) return false;

  return true;
};

const shouldDisplayAdditionalButtonForNextPage = (
  totalPages: number,
  currentPage: number,
): boolean => {
  const nextPage = Math.min(currentPage + 1, totalPages);

  // if there are at least three pages,
  if (totalPages < MINIMAL_TOTAL_PAGES_TO_DISPLAY_ADDITIONAL_PAGINATION_BUTTONS) return false;

  // and next page is not the last page
  if (nextPage === totalPages) return false;

  return true;
};

const shouldDisplayAdditionalButtonForPreviousPage = (
  totalPages: number,
  currentPage: number,
): boolean => {
  const previousPage = Math.max(currentPage - 1, 1);

  // if there are at least three pages,
  if (totalPages < MINIMAL_TOTAL_PAGES_TO_DISPLAY_ADDITIONAL_PAGINATION_BUTTONS) return false;

  // and previous page is not the first page
  if (previousPage === 1) return false;

  return true;
};

const shouldDisplayRightDistanceSymbol = (totalPages: number, currentPage: number): boolean => {
  const nextPage = Math.min(currentPage + 1, totalPages);

  // if there are at least three pages,
  if (totalPages < MINIMAL_TOTAL_PAGES_TO_DISPLAY_ADDITIONAL_PAGINATION_BUTTONS) return false;

  // and there is at least one page between next page and last page
  if (totalPages - nextPage <= 1) return false;

  return true;
};

const shouldDisplayLeftDistanceSymbol = (totalPages: number, currentPage: number): boolean => {
  const previousPage = Math.max(currentPage - 1, 1);

  // if there are at least three pages,
  if (totalPages < MINIMAL_TOTAL_PAGES_TO_DISPLAY_ADDITIONAL_PAGINATION_BUTTONS) return false;

  // and there is at least one page between previous page and first page
  if (previousPage - 1 <= 1) return false;

  return true;
};

export function SimplePagination({
  totalPages,
  totalRecords,
  paginationParams,
  onNext,
  onPrevious,
}: PaginationProps) {
  const buttonStyles = shadcnButtonVariants({
    variant: "ghost",
    size: "default",
    className: "cursor-pointer rounded-md",
  });

  // do not show pagination controls when there is only one page of records
  if (totalPages === 1) {
    return null;
  }

  return (
    <div className="flex flex-row flex-nowrap justify-start items-center gap-1">
      <button
        aria-disabled={paginationParams.page === 1}
        className={cn(buttonStyles)}
        onClick={onPrevious}
      >
        <ChevronLeft size={16} />
      </button>
      <button
        aria-disabled={paginationParams.page === totalPages}
        className={cn(buttonStyles)}
        onClick={onNext}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}

type RecordAlias = {
  plural: string;
  singular: string;
};

interface QuantityInfoProps {
  paginationParams: Required<ReferrerLeaderboardPageParams>;
  totalRecords: number;
  recordAlias?: RecordAlias;
  className?: string;
}

const QuantityInfo = ({
  paginationParams,
  totalRecords,
  recordAlias = { plural: "records", singular: "record" },
  className,
}: QuantityInfoProps) => {
  const numberFormat = new Intl.NumberFormat("en-US");

  // Edge-case of zero referrers
  if (totalRecords === 0) {
    return (
      <p className={cn("text-sm leading-normal font-medium", className)}>No referrers found</p>
    );
  }

  // A single page case
  if (paginationParams.recordsPerPage >= totalRecords) {
    return (
      <p className={cn("text-sm leading-normal font-medium", className)}>
        {totalRecords} {totalRecords > 1 ? recordAlias.plural : recordAlias.singular}
      </p>
    );
  }

  return (
    <p className={cn("text-sm leading-normal font-medium", className)}>
      Rank {numberFormat.format((paginationParams.page - 1) * paginationParams.recordsPerPage + 1)}-
      {numberFormat.format(paginationParams.page * paginationParams.recordsPerPage)} of{" "}
      {numberFormat.format(totalRecords)} {recordAlias.plural}
    </p>
  );
};

interface RecordsPerPageSelectProps {
  recordsPerPage: number;
  onRecordsPerPageChange: (newItemsPerPage: number) => void;
  possibleRecordsPerPageValues?: number[];
  selectorDescription?: string;
}

const ItemsPerPageSelect = ({
  recordsPerPage,
  onRecordsPerPageChange,
  possibleRecordsPerPageValues = [25, 50],
  selectorDescription = "Items per page",
}: RecordsPerPageSelectProps) => {
  const handleValueChange = (value: string) => {
    const newValue = Number(value);

    onRecordsPerPageChange(newValue);
  };
  return (
    <div className="flex flex-row flex-nowrap justify-center items-center gap-3">
      <p className="text-sm leading-normal font-medium text-muted-foreground">
        {selectorDescription}
      </p>
      <Select onValueChange={handleValueChange} value={recordsPerPage.toString()}>
        <SelectTrigger className="w-[75px] cursor-pointer shadow-none">
          <SelectValue placeholder={selectorDescription} />
        </SelectTrigger>
        <SelectContent position="popper" className="min-w-[75px] w-[75px]">
          <SelectGroup>
            {possibleRecordsPerPageValues.map((value) => (
              <SelectItem
                key={`ItemsPerPageSelectItem-${value}`}
                value={value.toString()}
                className="cursor-pointer"
              >
                {value}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
