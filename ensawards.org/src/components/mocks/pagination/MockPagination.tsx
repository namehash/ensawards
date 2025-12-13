import { Pagination, SimplePagination } from "@/components/molecules/Pagination.tsx";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import React, { useState } from "react";

export function MockPagination() {
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const mockTotalRecords = 100;
  const mockRecordsPerPage = 5;

  const numberOfTotalPagesVariants = [1, 2, 3, 4, 5, 6, 10];

  return (
    <div className="w-full max-w-[1216px] box-border flex flex-col justify-start items-center gap-6 sm:gap-10">
      <div className="w-fit flex flex-row justify-center items-center gap-3">
        <p>Choose number of totalPages:</p>
        <Select
          onValueChange={(value) => {
            setTotalPages(Number(value));
          }}
          value={totalPages.toString()}
        >
          <SelectTrigger className="w-[75px] cursor-pointer shadow-none">
            <SelectValue placeholder="Value of totalPages" />
          </SelectTrigger>
          <SelectContent position="popper" className="min-w-[75px] w-[75px]">
            <SelectGroup>
              {numberOfTotalPagesVariants.map((value) => (
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
        <p>
          Current page: <b>{currentPage}</b>
        </p>
      </div>
      <div className="w-full flex flex-col justify-start items-center gap-3 sm:gap-5">
        <p>
          Output of <b>&lt;Pagination/&gt;</b> component:
        </p>
        <Pagination
          totalPages={totalPages}
          totalRecords={mockTotalRecords}
          paginationParams={{
            page: currentPage,
            recordsPerPage: mockRecordsPerPage,
          }}
          onPrevious={() => {
            setCurrentPage((prev) => prev - 1);
          }}
          onNext={() => {
            setCurrentPage((prev) => prev + 1);
          }}
          onChosen={(newPage) => {
            setCurrentPage(newPage);
          }}
        />
      </div>
      <div className="w-full flex flex-col justify-start items-center gap-3 sm:gap-5">
        <p>
          Output of <b>&lt;SimplePagination/&gt;</b> component:
        </p>
        <SimplePagination
          totalPages={totalPages}
          totalRecords={mockTotalRecords}
          paginationParams={{
            page: currentPage,
            recordsPerPage: mockRecordsPerPage,
          }}
          onPrevious={() => {
            setCurrentPage((prev) => prev - 1);
          }}
          onNext={() => {
            setCurrentPage((prev) => prev + 1);
          }}
          onChosen={(newPage) => {
            setCurrentPage(newPage);
          }}
        />
      </div>
    </div>
  );
}
