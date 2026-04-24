import React, { type PropsWithChildren, type ReactElement } from "react";

import { Tooltip, TooltipArrow, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip.tsx";

export interface GenericTooltipProps {
  content: ReactElement;
  tooltipOffset?: number;
  triggerAsChild?: boolean;
}

export function GenericTooltip({
  content,
  children,
  tooltipOffset = 12,
  triggerAsChild = false,
}: PropsWithChildren<GenericTooltipProps>) {
  return (
    <Tooltip>
      <TooltipTrigger asChild={triggerAsChild}>{children}</TooltipTrigger>
      <TooltipContent
        sideOffset={tooltipOffset}
        className="bg-[#171717] text-xs leading-normal text-white outline-none px-3 py-[6px] rounded-md duration-0"
      >
        {content}
        <TooltipArrow width={12} height={8} />
      </TooltipContent>
    </Tooltip>
  );
}
