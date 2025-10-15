import {Tooltip, TooltipArrow, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip.tsx";
import React, {type PropsWithChildren, type ReactElement} from "react";

export interface GenericTooltipProps {
    content: ReactElement;
}

export function GenericTooltip({content, children}: PropsWithChildren<GenericTooltipProps>) {
    return (
            <Tooltip>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent
                    sideOffset={10}
                    className="bg-black text-xs leading-normal text-white outline-none max-w-[275px] px-3 py-[6px] rounded-md"
                >
                    {content}
                    <TooltipArrow width={12} height={8} />
                </TooltipContent>
            </Tooltip>
    );
}