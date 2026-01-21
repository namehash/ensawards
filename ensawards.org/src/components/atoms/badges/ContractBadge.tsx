import { Check, CheckCheck, X as XIcon } from "lucide-react";
import React from "react";

import type { Name } from "@ensnode/ensnode-sdk";

import { GenericTooltip } from "@/components/atoms/GenericTooltip.tsx";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { type ContractResolutionStatusId, ContractResolutionStatusIds } from "@/types/contracts.ts";

export interface ContractBadgeProps {
  contractResolutionStatus: ContractResolutionStatusId;
  name?: Name;
}

const getTooltipContent = (resolutionStatus: ContractResolutionStatusId, ensName?: Name) => {
  switch (resolutionStatus) {
    case ContractResolutionStatusIds.ForwardNamed:
      return (
        <p className="max-w-[275px]">
          {ensName} successfully resolves to this contract, but this contract does not have an{" "}
          <a
            className="text-blue-400 hover:underline hover:underline-offset-[25%]"
            href="https://docs.ens.domains/web/reverse"
            target="_blank"
            rel="noreferrer"
          >
            ENS primary name
          </a>
          .
        </p>
      );

    case ContractResolutionStatusIds.Unnamed:
      return (
        <p className="max-w-[275px]">
          This contract is unnamed. It doesn’t have an{" "}
          <a
            className="text-blue-400 hover:underline hover:underline-offset-[25%]"
            href="https://docs.ens.domains/web/reverse"
            target="_blank"
            rel="noreferrer"
          >
            ENS primary name
          </a>{" "}
          or any known “official” ENS name.
        </p>
      );

    case ContractResolutionStatusIds.PrimaryNamed:
      return (
        <p className="max-w-[275px]">
          {ensName} is the{" "}
          <a
            className="text-blue-400 hover:underline hover:underline-offset-[25%]"
            href="https://docs.ens.domains/web/reverse"
            target="_blank"
            rel="noreferrer"
          >
            ENS primary name
          </a>{" "}
          of this contract.
        </p>
      );

    default:
      return <p>The ENS identity for this contract has not been resolved yet.</p>;
  }
};

export function ContractBadge({ contractResolutionStatus, name }: ContractBadgeProps) {
  return (
    <TooltipProvider delayDuration={250} skipDelayDuration={0}>
      <GenericTooltip content={getTooltipContent(contractResolutionStatus, name)}>
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
          <span
            className="w-fit flex flex-row flex-nowrap justify-center items-center gap-[6px] pl-[10px] pr-3
              py-1 rounded-full text-sm leading-normal font-medium text-orange-600 bg-orange-100 hover:bg-orange-200 cursor-default"
          >
            <Check width={16} height={16} />
            Named
          </span>
        )}
      </GenericTooltip>
    </TooltipProvider>
  );
}
