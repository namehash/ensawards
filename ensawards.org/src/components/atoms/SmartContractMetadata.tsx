import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip.tsx";
import type { ContractMetadata } from "@/types/contracts.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import { Aperture, BadgeDollarSign, Bell, Citrus } from "lucide-react";
import React from "react";

export interface SmartContractMetadataProps {
  metadata: ContractMetadata;
}

const getActivatedMetadataFieldMessage = (fieldValue:string) => `Example activated info. Field value=${fieldValue}.`;

const getDeactivatedMetadataFieldMessage = () => "Example deactivated info";

export function SmartContractMetadata({ metadata }: SmartContractMetadataProps) {
  return (
    <TooltipProvider delayDuration={1000} skipDelayDuration={0}>
      <div className="flex flex-row flex-nowrap justify-start items-center gap-3">
        {/*TODO replace with actual appropriate icons when they are provided*/}
        <Tooltip>
          <TooltipTrigger asChild>
            <Aperture
              className={cn(
                "w-[21px] h-[21px]",
                metadata.field1 ? "text-black" : "text-gray-200",
              )}
            />
          </TooltipTrigger>
          <TooltipContent
            sideOffset={10}
            className="bg-gray-50 text-sm text-black shadow-md outline-none max-w-[275px]"
          >
            {metadata.field1
              ? getActivatedMetadataFieldMessage(metadata.field1)
              : getDeactivatedMetadataFieldMessage()}
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Bell
              className={cn(
                "w-[21px] h-[21px]",
                metadata.field2 ? "text-black" : "text-gray-200",
              )}
            />
          </TooltipTrigger>
          <TooltipContent
            sideOffset={10}
            className="bg-gray-50 text-sm text-black shadow-md outline-none max-w-[275px]"
          >
            {metadata.field2
                ? getActivatedMetadataFieldMessage(metadata.field2)
                : getDeactivatedMetadataFieldMessage()}
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Citrus
              className={cn(
                "w-[21px] h-[21px]",
                metadata.field3 ? "text-black" : "text-gray-200",
              )}
            />
          </TooltipTrigger>
          <TooltipContent
            sideOffset={10}
            className="bg-gray-50 text-sm text-black shadow-md outline-none max-w-[275px]"
          >
            {metadata.field3
                ? getActivatedMetadataFieldMessage(metadata.field3)
                : getDeactivatedMetadataFieldMessage()}
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <BadgeDollarSign
              className={cn(
                "w-[21px] h-[21px]",
                metadata.field4 ? "text-black" : "text-gray-200",
              )}
            />
          </TooltipTrigger>
          <TooltipContent
            sideOffset={10}
            className="bg-gray-50 text-sm text-black shadow-md outline-none max-w-[275px]"
          >
            {metadata.field4
                ? getActivatedMetadataFieldMessage(metadata.field4)
                : getDeactivatedMetadataFieldMessage()}
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
