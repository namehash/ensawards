import {cn} from "@/utils/tailwindClassConcatenation.ts";
import {shadcnButtonVariants} from "@/components/ui/shadcnButtonStyles.ts";
import {ChevronLeft, ChevronsLeft, ChevronRight, ChevronsRight, Ellipsis} from "lucide-react";

export interface PaginationProps {
    numberOfPages: number;
    currentPage: number;
    onPrevious: () => void;
    onNext: () => void;
    onChosen: (newPage: number) => void;
}

export function Pagination({numberOfPages, currentPage, onNext, onPrevious, onChosen}: PaginationProps) {
    const buttonStyles =
                shadcnButtonVariants({
            variant: "ghost",
            size: "default",
            className: "cursor-pointer rounded-md",
        });
    return <div className="w-fit h-fit flex flex-row flex-nowrap justify-center items-center gap-1 text-black">
        <button aria-disabled={currentPage === 1} className={cn(buttonStyles, "block sm:hidden")} onClick={() => {onChosen(1)}}><ChevronsLeft size={16} /></button>
        <button aria-disabled={currentPage === 1} className={cn(buttonStyles)} onClick={onPrevious}><ChevronLeft size={16} /><span className="hidden sm:inline">Previous</span></button>
        <p className="inline sm:hidden text-sm leading-normal font-medium">Page {currentPage} of {numberOfPages}</p>
        <div className="hidden sm:flex flex-row flex-nowrap justify-center items-center gap-1">
            <button className={cn(buttonStyles, currentPage == 1 && "border border-gray-200")} onClick={() => {
                onChosen(1)
            }}>1
            </button>
            <Ellipsis className={cn(currentPage >= 4 ? "block" : "hidden")} size={16}/>
            {currentPage >= 3 && numberOfPages >= 3 &&
                <button className={cn(buttonStyles)} onClick={onPrevious}>{currentPage - 1}
                </button>}
            {currentPage >= 2 && currentPage < numberOfPages && numberOfPages > 2 &&
                <button className={cn(buttonStyles, "border border-gray-200")} onClick={() => {
                    onChosen(currentPage)
                }}>{currentPage}
                </button>
            }
            {currentPage + 1 < numberOfPages && numberOfPages > 2 &&
                <button className={cn(buttonStyles)} onClick={onNext}>{currentPage + 1}
                </button>}
            <Ellipsis className={cn((currentPage < numberOfPages - 2 && numberOfPages > 2) ? "block" : "hidden")} size={16}/>
            <button className={cn(buttonStyles, currentPage == numberOfPages && "border border-gray-200")}
                    onClick={() => {
                        onChosen(numberOfPages)
                    }}>{numberOfPages}
            </button>
        </div>
        <button aria-disabled={currentPage === numberOfPages} className={cn(buttonStyles)} onClick={onNext}><span className="hidden sm:inline">Next</span><ChevronRight
            size={16}/></button>
        <button aria-disabled={currentPage === numberOfPages} className={cn(buttonStyles, "block sm:hidden")} onClick={() => {onChosen(numberOfPages)}}><ChevronsRight size={16} /></button>
    </div>
}