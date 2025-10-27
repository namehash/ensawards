import { GenericTooltip } from "@/components/atoms/GenericTooltip.tsx";
import { InfoIcon } from "@/components/atoms/icons/InfoIcon.tsx";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { type ContractResolutionStatusId, ContractResolutionStatusIds } from "@/types/contracts.ts";
import { Check, CheckCheck, X as XIcon } from "lucide-react";
import React from "react";

export interface ContractBadgeProps {
  contractResolutionStatus: ContractResolutionStatusId;
}

export function ContractBadge({ contractResolutionStatus }: ContractBadgeProps) {
  return (
    <TooltipProvider delayDuration={250} skipDelayDuration={0}>
      {contractResolutionStatus === ContractResolutionStatusIds.Unnamed && (
        <span
          className="w-fit flex flex-row flex-nowrap justify-center items-center gap-[6px] pl-[10px] pr-3 py-1
          rounded-full text-sm leading-normal font-medium text-red-600 bg-[#DC26261A] hover:bg-red-200 cursor-default"
        >
          <XIcon width={16} height={16} />
          Unnamed
        </span>
      )}
      {contractResolutionStatus === ContractResolutionStatusIds.PrimaryNamed && (
        <span
          className="w-fit flex flex-row flex-nowrap justify-center items-center gap-[6px] pl-[10px] pr-3
              py-1 rounded-full text-sm leading-normal font-medium text-emerald-600 bg-emerald-100 hover:bg-emerald-200 cursor-default"
        >
          <CheckCheck width={16} height={16} />
          Named
        </span>
      )}
      {contractResolutionStatus === ContractResolutionStatusIds.ForwardNamed && (
        <GenericTooltip
          content={
            <p className="max-w-[275px]">
              This contract does not have an ENS primary name configured, but this name resolves to
              this contract.
            </p>
          }
        >
          <span
            className="w-fit flex flex-row flex-nowrap justify-center items-center gap-[6px] pl-[10px] pr-3
              py-1 rounded-full text-sm leading-normal font-medium text-orange-600 bg-orange-100 hover:bg-orange-200 cursor-default"
          >
            <Check width={16} height={16} />
            Named
            <InfoIcon width={16} height={16} className="text-orange-400" />
          </span>
        </GenericTooltip>
      )}
    </TooltipProvider>
  );
}
