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
import type { ReferrerLeaderboardPaginationParams } from "@namehash/ens-referrals";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Ellipsis } from "lucide-react";
import React from "react";

export interface PaginationProps {
  numberOfPages: number;
  totalRecords: number;
  paginationParams: Required<ReferrerLeaderboardPaginationParams>;
  onPrevious: () => void;
  onNext: () => void;
  onChosen: (newPage: number) => void;
}

export function Pagination({
  numberOfPages,
  totalRecords,
  paginationParams,
  onNext,
  onPrevious,
  onChosen,
}: PaginationProps) {
  const buttonStyles = shadcnButtonVariants({
    variant: "ghost",
    size: "default",
    className: "cursor-pointer rounded-md",
  });

  if (totalRecords <= paginationParams.itemsPerPage) {
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
        className={cn(buttonStyles)}
        onClick={onPrevious}
      >
        <ChevronLeft size={16} />
        <span className="hidden sm:inline">Previous</span>
      </button>
      <p className="inline sm:hidden text-sm leading-normal font-medium">
        Page {paginationParams.page} of {numberOfPages}
      </p>
      <div className="hidden sm:flex flex-row flex-nowrap justify-center items-center gap-1">
        <button
          className={cn(buttonStyles, paginationParams.page == 1 && "border border-gray-200")}
          onClick={() => {
            onChosen(1);
          }}
        >
          1
        </button>
        <Ellipsis className={cn(paginationParams.page >= 4 ? "block" : "hidden")} size={16} />
        {paginationParams.page >= 3 && numberOfPages >= 3 && (
          <button className={cn(buttonStyles)} onClick={onPrevious}>
            {paginationParams.page - 1}
          </button>
        )}
        {paginationParams.page >= 2 &&
          paginationParams.page < numberOfPages &&
          numberOfPages > 2 && (
            <button
              className={cn(buttonStyles, "border border-gray-200")}
              onClick={() => {
                onChosen(paginationParams.page);
              }}
            >
              {paginationParams.page}
            </button>
          )}
        {paginationParams.page + 1 < numberOfPages && numberOfPages > 2 && (
          <button className={cn(buttonStyles)} onClick={onNext}>
            {paginationParams.page + 1}
          </button>
        )}
        <Ellipsis
          className={cn(
            paginationParams.page < numberOfPages - 2 && numberOfPages > 2 ? "block" : "hidden",
          )}
          size={16}
        />
        <button
          className={cn(
            buttonStyles,
            paginationParams.page == numberOfPages && "border border-gray-200",
          )}
          onClick={() => {
            onChosen(numberOfPages);
          }}
        >
          {numberOfPages}
        </button>
      </div>
      <button
        aria-disabled={paginationParams.page === numberOfPages}
        className={cn(buttonStyles)}
        onClick={onNext}
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight size={16} />
      </button>
      <button
        aria-disabled={paginationParams.page === numberOfPages}
        className={cn(buttonStyles, "block sm:hidden")}
        onClick={() => {
          onChosen(numberOfPages);
        }}
      >
        <ChevronsRight size={16} />
      </button>
    </div>
  );
}

export function SimplePagination({
  numberOfPages,
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

  if (totalRecords <= paginationParams.itemsPerPage) {
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
        aria-disabled={paginationParams.page === numberOfPages}
        className={cn(buttonStyles)}
        onClick={onNext}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}

interface DisplayPaginationProps
  extends PaginationProps,
    Omit<ItemsPerPageSelectProps, "itemsPerPage"> {
  containerClassName?: string;
  quantityClassName?: string;
}

export function DisplayPagination({
  numberOfPages,
  totalRecords,
  paginationParams,
  onNext,
  onPrevious,
  onChosen,
  onItemsPerPageChange,
  possibleItemsPerPageValues,
  selectorDescription,
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
        className={quantityClassName}
      />
      <Pagination
        numberOfPages={numberOfPages}
        totalRecords={totalRecords}
        paginationParams={paginationParams}
        onPrevious={onPrevious}
        onNext={onNext}
        onChosen={onChosen}
      />
      <ItemsPerPageSelect
        itemsPerPage={paginationParams.itemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
        selectorDescription={selectorDescription}
        possibleItemsPerPageValues={possibleItemsPerPageValues}
      />
    </div>
  );
}

export function DisplaySimplePagination({
  numberOfPages,
  totalRecords,
  paginationParams,
  onNext,
  onPrevious,
  onChosen,
  containerClassName,
  quantityClassName,
}: Omit<
  DisplayPaginationProps,
  "onItemsPerPageChange" | "possibleItemsPerPageValues" | "selectorDescription"
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
        className={quantityClassName}
      />
      <SimplePagination
        numberOfPages={numberOfPages}
        totalRecords={totalRecords}
        paginationParams={paginationParams}
        onPrevious={onPrevious}
        onNext={onNext}
        onChosen={onChosen}
      />
    </div>
  );
}

interface QuantityInfoProps {
  paginationParams: Required<ReferrerLeaderboardPaginationParams>;
  totalRecords: number;
  className?: string;
}

//TODO: appreciate advice about the name
const QuantityInfo = ({ paginationParams, totalRecords, className }: QuantityInfoProps) => {
  const numberFormat = new Intl.NumberFormat("en-US");

  // Edge-case of zero referrers
  if (totalRecords === 0) {
    return (
      <p className={cn("text-sm leading-normal font-medium", className)}>No referrers found</p>
    );
  }

  // A single page case
  if (paginationParams.itemsPerPage >= totalRecords) {
    return (
      <p className={cn("text-sm leading-normal font-medium", className)}>
        {totalRecords} referrer{totalRecords > 1 && "s"}
      </p>
    );
  }

  return (
    <p className={cn("text-sm leading-normal font-medium", className)}>
      Rank {numberFormat.format((paginationParams.page - 1) * paginationParams.itemsPerPage + 1)}-
      {numberFormat.format(paginationParams.page * paginationParams.itemsPerPage)} of{" "}
      {numberFormat.format(totalRecords)} referrers
    </p>
  );
};

interface ItemsPerPageSelectProps {
  itemsPerPage: number;
  onItemsPerPageChange: (newItemsPerPage: number) => void;
  possibleItemsPerPageValues?: number[];
  selectorDescription?: string;
}

const ItemsPerPageSelect = ({
  itemsPerPage,
  onItemsPerPageChange,
  possibleItemsPerPageValues = [25, 50],
  selectorDescription = "Items per page",
}: ItemsPerPageSelectProps) => {
  const handleValueChange = (value: string) => {
    const newValue = Number(value);

    onItemsPerPageChange(newValue);
  };
  return (
    <div className="flex flex-row flex-nowrap justify-center items-center gap-3">
      <p className="text-sm leading-normal font-medium text-muted-foreground">
        {selectorDescription}
      </p>
      <Select onValueChange={handleValueChange} value={itemsPerPage.toString()}>
        <SelectTrigger className="w-[75px] cursor-pointer shadow-none">
          <SelectValue placeholder={selectorDescription} />
        </SelectTrigger>
        <SelectContent position="popper" className="min-w-[75px] w-[75px]">
          <SelectGroup>
            {possibleItemsPerPageValues.map((value) => (
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
