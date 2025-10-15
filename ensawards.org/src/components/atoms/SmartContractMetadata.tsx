import type { ContractMetadata } from "@/types/contracts.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import { Aperture, BadgeDollarSign, Bell, Citrus } from "lucide-react";
import React from "react";
import {GenericTooltip} from "@/components/atoms/GenericTooltip.tsx";
import {TooltipProvider} from "@/components/ui/tooltip.tsx";

export interface SmartContractMetadataProps {
  metadata: ContractMetadata;
}

const getActivatedMetadataFieldMessage = (fieldValue: string) =>
  `Example activated info. Field value=${fieldValue}.`;

const getDeactivatedMetadataFieldMessage = () => "Example deactivated info";

export function SmartContractMetadata({ metadata }: SmartContractMetadataProps) {
  return (
      <TooltipProvider delayDuration={1000} skipDelayDuration={0}>
      <div className="flex flex-row flex-nowrap justify-start items-center gap-3">
        {/*TODO replace with actual appropriate icons when they are provided*/}
        <GenericTooltip content={<>{metadata.field1
              ? getActivatedMetadataFieldMessage(metadata.field1)
            : getDeactivatedMetadataFieldMessage()}</>} >
          <Aperture
              className={cn("w-[21px] h-[21px]", metadata.field1 ? "text-black" : "text-gray-200")}
          />
        </GenericTooltip>
        <GenericTooltip content={<>{metadata.field2
            ? getActivatedMetadataFieldMessage(metadata.field2)
            : getDeactivatedMetadataFieldMessage()}</>} >
          <Bell
              className={cn("w-[21px] h-[21px]", metadata.field2 ? "text-black" : "text-gray-200")}
          />
        </GenericTooltip>
        <GenericTooltip content={<>{metadata.field3
            ? getActivatedMetadataFieldMessage(metadata.field3)
            : getDeactivatedMetadataFieldMessage()}</>} >
          <Citrus
              className={cn("w-[21px] h-[21px]", metadata.field3 ? "text-black" : "text-gray-200")}
          />
        </GenericTooltip>
        <GenericTooltip content={<>{metadata.field4
            ? getActivatedMetadataFieldMessage(metadata.field4)
            : getDeactivatedMetadataFieldMessage()}</>} >
          <BadgeDollarSign
              className={cn("w-[21px] h-[21px]", metadata.field4 ? "text-black" : "text-gray-200")}
          />
        </GenericTooltip>
      </div>
      </TooltipProvider>
  );
}
