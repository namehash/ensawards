import { GenericTooltip } from "@/components/atoms/GenericTooltip.tsx";
import { ForwardNameOnlyInfoIcon } from "@/components/atoms/icons/ForwardNameOnlyInfoIcon.tsx";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { type ContractResolutionStatusId, ContractResolutionStatusIds } from "@/types/contracts.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import { Check, CheckCheck, X as XIcon } from "lucide-react";
import React from "react";

export interface ContractBadgeProps {
  contractResolutionStatus: ContractResolutionStatusId;
}

export function ContractBadge({ contractResolutionStatus }: ContractBadgeProps) {
  return (
    <TooltipProvider delayDuration={1000} skipDelayDuration={0}>
      {contractResolutionStatus === ContractResolutionStatusIds.Unnamed ? (
        <span
          className={cn(
            "w-fit flex flex-row flex-nowrap justify-center items-center gap-[6px] pl-[10px] pr-3 " +
              "py-1 rounded-full text-xs leading-normal font-medium",
            "text-red-600 bg-[#DC26261A]",
          )}
        >
          <XIcon width={20} height={20} />
          Unnamed
        </span>
      ) : (
        <span
          className={cn(
            "w-fit flex flex-row flex-nowrap justify-center items-center gap-[6px] pl-[10px] pr-3 " +
              "py-1 rounded-full text-xs leading-normal font-medium",
            contractResolutionStatus === ContractResolutionStatusIds.PrimaryNamed
              ? "text-emerald-600 bg-[#0596691A]"
              : "text-orange-600 bg-orange-100",
          )}
        >
          {contractResolutionStatus === ContractResolutionStatusIds.PrimaryNamed ? (
            <CheckCheck width={20} height={20} />
          ) : (
            <Check width={20} height={20} />
          )}
          Named
          {contractResolutionStatus === ContractResolutionStatusIds.ForwardNamed && (
            <GenericTooltip
              content={
                <p className="max-w-[275px]">
                  This contract does not have an ENS primary name configured, but this name resolves to this contract.
                </p>
              }
            >
              <ForwardNameOnlyInfoIcon width={20} height={20} />
            </GenericTooltip>
          )}
        </span>
      )}
    </TooltipProvider>
  );
}
