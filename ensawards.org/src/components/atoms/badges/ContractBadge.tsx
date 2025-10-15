import { GenericTooltip } from "@/components/atoms/GenericTooltip.tsx";
import { ForwardNameOnlyInfoIcon } from "@/components/atoms/icons/ForwardNameOnlyInfoIcon.tsx";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import type { CachedEnsProfile } from "@/types/contracts.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import { Check, CheckCheck, X as XIcon } from "lucide-react";
import React from "react";

export interface ContractBadgeProps {
  ensProfileData: CachedEnsProfile;
}

export function ContractBadge({ ensProfileData }: ContractBadgeProps) {
  return (
    <TooltipProvider delayDuration={1000} skipDelayDuration={0}>
      {ensProfileData === null ? (
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
            ensProfileData.primaryName !== null
              ? "text-emerald-600 bg-[#0596691A]"
              : "text-orange-600 bg-orange-100",
          )}
        >
          {ensProfileData.primaryName !== null ? (
            <CheckCheck width={20} height={20} />
          ) : (
            <Check width={20} height={20} />
          )}
          Named
          {ensProfileData.primaryName === null && (
            <GenericTooltip
              content={
                <>
                  This name forward-resolves to this contract, however it is not properly configured
                  as an ENS primary name.
                </>
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
