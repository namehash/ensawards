import { cn } from "@/utils/tailwindClassConcatenation.ts";
import { ChevronRight } from "lucide-react";
import { type PropsWithChildren, useState } from "react";

interface FoldableCardProps {
  header: string;
  cardStyles?: string;
}

export function FoldableCard({
  header,
  cardStyles,
  children,
}: PropsWithChildren<FoldableCardProps>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const chevronStyles = "text-black/30 hover:text-black/60";
  return (
    <div
      onClick={() => setIsOpen((prev) => !prev)}
      className={cn(
        "w-full max-w-[590px] h-fit flex flex-col justify-start items-start gap-4 px-5 py-4 box-border border border-gray-200 hover:border-gray-300 hover:shadow-xs rounded-lg bg-white transition-all duration-300 relative z-10 cursor-pointer",
        cardStyles,
      )}
    >
      <div className="w-full h-fit flex flex-row flex-nowrap justify-between items-center">
        <h4 className="text-lg leading-6 font-semibold text-black">{header}</h4>
        <ChevronRight size={24} className={cn(chevronStyles, isOpen && "rotate-90")} />
      </div>
      {isOpen && <div className="relative z-20">{children}</div>}
    </div>
  );
}
