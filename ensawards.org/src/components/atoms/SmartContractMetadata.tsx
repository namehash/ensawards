import type {ContractMetadata} from "@/types/contracts.ts";
import {cn} from "@/utils/tailwindClassConcatenation.ts";
import React from "react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip.tsx";
import { Aperture, Bell, Citrus, BadgeDollarSign } from 'lucide-react';

export interface SmartContractMetadataProps {
    metadata: ContractMetadata;
}

export function SmartContractMetadata({metadata}: SmartContractMetadataProps){
    return         <TooltipProvider delayDuration={1000} skipDelayDuration={0}>
    <div className="flex flex-row flex-nowrap justify-start items-center gap-3">
        {/*TODO replace with actual appropriate icons when they are provided*/}
            <Tooltip>
                <TooltipTrigger asChild>
                    <Aperture
                        className={cn("w-[21px] h-[21px]", metadata.field1.active ? "text-black" : "text-gray-200")}/>
                </TooltipTrigger>
                <TooltipContent sideOffset={10}
                                className="bg-gray-50 text-sm text-black shadow-md outline-none max-w-[275px]">
                    {metadata.field1.active ? metadata.field1.messageActivated : metadata.field1.messageDeactivated}
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Bell
                        className={cn("w-[21px] h-[21px]", metadata.field2.active ? "text-black" : "text-gray-200")}/>
                </TooltipTrigger>
                <TooltipContent sideOffset={10}
                                className="bg-gray-50 text-sm text-black shadow-md outline-none max-w-[275px]">
                    {metadata.field2.active ? metadata.field2.messageActivated : metadata.field2.messageDeactivated}
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Citrus
                        className={cn("w-[21px] h-[21px]", metadata.field3.active ? "text-black" : "text-gray-200")}/>
                </TooltipTrigger>
                <TooltipContent sideOffset={10}
                                className="bg-gray-50 text-sm text-black shadow-md outline-none max-w-[275px]">
                    {metadata.field3.active ? metadata.field3.messageActivated : metadata.field3.messageDeactivated}
                </TooltipContent>
            </Tooltip>
            <Tooltip>
                <TooltipTrigger asChild>
                    <BadgeDollarSign
                        className={cn("w-[21px] h-[21px]", metadata.field4.active ? "text-black" : "text-gray-200")}/>
                </TooltipTrigger>
                <TooltipContent sideOffset={10}
                                className="bg-gray-50 text-sm text-black shadow-md outline-none max-w-[275px]">
                    {metadata.field4.active ? metadata.field4.messageActivated : metadata.field4.messageDeactivated}
                </TooltipContent>
            </Tooltip>
    </div>
    </TooltipProvider>
}