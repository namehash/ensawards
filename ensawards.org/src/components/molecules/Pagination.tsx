import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { capitalizeText } from "@/utils";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import type { RequestPageParams } from "@ensnode/ensnode-sdk";
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

const numberFormat = new Intl.NumberFormat("en-US");

interface DisplayPaginationProps
  extends PaginationProps,
    Omit<RecordsPerPageSelectProps, "recordsPerPage" | "selectDescription"> {
  recordAlias: RecordAlias;
  containerClassName?: string;
  quantityInfoPrefix?: string;
  quantityClassName?: string;
}

export function DisplayPagination({
  totalPages,
  totalRecords,
  paginationParams,
  onNext,
  onPrevious,
  onSelectPage,
  onSelectRecordsPerPage,
  recordsPerPageOptions,
  recordAlias,
  containerClassName,
  quantityInfoPrefix,
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
        prefix={quantityInfoPrefix}
        className={quantityClassName}
      />
      <Pagination
        totalPages={totalPages}
        totalRecords={totalRecords}
        paginationParams={paginationParams}
        onPrevious={onPrevious}
        onNext={onNext}
        onSelectPage={onSelectPage}
      />
      <RecordsPerPageSelect
        recordsPerPage={paginationParams.recordsPerPage}
        onSelectRecordsPerPage={onSelectRecordsPerPage}
        selectDescription={`${capitalizeText(recordAlias.plural)} per page`}
        recordsPerPageOptions={recordsPerPageOptions}
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
  onSelectPage,
  recordAlias,
  containerClassName,
  quantityInfoPrefix,
  quantityClassName,
}: Omit<DisplayPaginationProps, "onSelectRecordsPerPage" | "recordsPerPageOptions">) {
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
        prefix={quantityInfoPrefix}
        className={quantityClassName}
      />
      <SimplePagination
        totalPages={totalPages}
        totalRecords={totalRecords}
        paginationParams={paginationParams}
        onPrevious={onPrevious}
        onNext={onNext}
        onSelectPage={onSelectPage}
      />
    </div>
  );
}

export interface PaginationProps {
  totalPages: number;
  totalRecords: number;
  paginationParams: Required<RequestPageParams>;
  onPrevious: () => void;
  onNext: () => void;
  onSelectPage: (newPage: number) => void;
}

export function Pagination({
  totalPages,
  totalRecords,
  paginationParams,
  onNext,
  onPrevious,
  onSelectPage,
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
          onSelectPage(1);
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
        Page {numberFormat.format(paginationParams.page)} of {numberFormat.format(totalPages)}
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
            onSelectPage(1);
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
            className={cn(buttonStyles, "border-gray-200 cursor-default hover:bg-white")}
            onClick={() => {
              onSelectPage(paginationParams.page);
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
            onSelectPage(totalPages);
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
          onSelectPage(totalPages);
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
  paginationParams: Required<RequestPageParams>;
  totalRecords: number;
  recordAlias: RecordAlias;
  prefix?: string;
  className?: string;
}

const QuantityInfo = ({
  paginationParams,
  totalRecords,
  recordAlias,
  prefix,
  className,
}: QuantityInfoProps) => {
  // Edge-case of zero records
  if (totalRecords === 0) {
    return (
      <p className={cn("text-sm leading-normal font-medium", className)}>
        No {recordAlias.plural} found
      </p>
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
      {prefix && prefix}{" "}
      {numberFormat.format((paginationParams.page - 1) * paginationParams.recordsPerPage + 1)}-
      {numberFormat.format(paginationParams.page * paginationParams.recordsPerPage)} of{" "}
      {numberFormat.format(totalRecords)} {recordAlias.plural}
    </p>
  );
};

interface RecordsPerPageSelectProps {
  recordsPerPage: number;
  onSelectRecordsPerPage: (newRecordsPerPage: number) => void;
  recordsPerPageOptions?: number[];
  selectDescription: string;
}

const RecordsPerPageSelect = ({
  recordsPerPage,
  onSelectRecordsPerPage,
  recordsPerPageOptions = [25, 50],
  selectDescription,
}: RecordsPerPageSelectProps) => {
  const handleValueChange = (value: string) => {
    const newValue = Number(value);

    onSelectRecordsPerPage(newValue);
  };

  const validatedRecordsPerPageOptions = [
    ...new Set(recordsPerPageOptions.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))),
  ];
  return (
    <div className="flex flex-row flex-nowrap justify-center items-center gap-3">
      <p className="text-sm leading-normal font-medium text-muted-foreground">
        {selectDescription}
      </p>
      <Select onValueChange={handleValueChange} value={recordsPerPage.toString()}>
        <SelectTrigger className="w-[75px] cursor-pointer shadow-none">
          <SelectValue placeholder={selectDescription} />
        </SelectTrigger>
        <SelectContent position="popper" className="min-w-[75px] w-[75px]">
          <SelectGroup>
            {validatedRecordsPerPageOptions.map((value) => (
              <SelectItem
                key={`RecordsPerPageSelectItem-${value}`}
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
