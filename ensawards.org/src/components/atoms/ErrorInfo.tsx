import { cn } from "@/utils/tailwindClassConcatenation.ts";
import { AlertCircle as AlertIcon } from "lucide-react";
import type { PropsWithChildren } from "react";

export interface ErrorInfoProps {
  title?: string;
  /**
   * Error description. Allows multiple lines. Each line should be a separate entry
   */
  description?: string[];
}

export function ErrorInfo({ title, description, children }: PropsWithChildren<ErrorInfoProps>) {
  const verticalContainerStyles = "w-full flex flex-col justify-start items-center";
  return (
    <div className={cn(verticalContainerStyles, "gap-5 justify-center md:min-h-[305px]")}>
      <div className="w-[48px] h-[48px] flex flex-col justify-center items-center rounded-full bg-red-600/10">
        <AlertIcon size={20} className="flex-shrink-0 text-red-600" />
      </div>
      <div className={cn(verticalContainerStyles, "gap-4")}>
        <div className={cn(verticalContainerStyles, "gap-1")}>
          <h3 className="text-xl leading-normal font-semibold text-black text-center">{title}</h3>
          <div className={cn(verticalContainerStyles, "gap-0")}>
            {description?.map((description) => (
              <p className="text-base leading-normal font-normal text-muted-foreground text-center">
                {description}
              </p>
            ))}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
