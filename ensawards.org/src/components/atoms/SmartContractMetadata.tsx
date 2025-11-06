import { GenericTooltip } from "@/components/atoms/GenericTooltip.tsx";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import type { EnsProfileForContract } from "@/types/contracts.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import type { Name } from "@ensnode/ensnode-sdk";
import { BookOpen, Braces, CircleUser, ShieldCheck } from "lucide-react";
import React from "react";

export interface SmartContractMetadataProps {
  name: Name;
  metadata?: EnsProfileForContract;
}

const getDeactivatedMetadataFieldMessage = (metadataFieldName: string) =>
  `The "${metadataFieldName}" field has not been defined for this contract.`;

export function SmartContractMetadata({ metadata, name }: SmartContractMetadataProps) {
  return (
    <TooltipProvider delayDuration={200} skipDelayDuration={0}>
      <div className="flex flex-row flex-nowrap justify-start items-center gap-4 sm:pt-0.5 box-border">
        <GenericTooltip
          content={
            <div className="w-full max-w-[275px] flex flex-col gap-2 justify-start items-start">
              <div className="self-stretch flex flex-row flex-nowrap justify-between items-center">
                <h4 className="text-sm leading-normal font-semibold">docs</h4>
                <span className="text-xs leading-normal font-semibold rounded-md py-0.5 px-2 bg-white text-black">
                  {metadata && metadata.docs ? "Set" : "Not set"}
                </span>
              </div>
              <div className="flex flex-col gap-1 justify-start items-start">
                <p>Links to the primary documentation for the smart contract.</p>
                <a
                  className="text-blue-500 whitespace-nowrap hover:underline hover:underline-offset-[25%]"
                  href="https://discuss.ens.domains/t/ensip-proposal-contract-metadata-standard-and-text-records/21397"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Learn more
                </a>
              </div>
            </div>
          }
        >
          <BookOpen
            className={cn(
              "w-[18px] h-[18px] cursor-default",
              metadata && metadata.docs ? "text-black" : "text-gray-300 hover:text-gray-500",
            )}
          />
        </GenericTooltip>
        <GenericTooltip
          content={
            <div className="w-full max-w-[275px] flex flex-col gap-2 justify-start items-start">
              <div className="self-stretch flex flex-row flex-nowrap justify-between items-center">
                <h4 className="text-sm leading-normal font-semibold">compiled-metadata</h4>
                <span className="text-xs leading-normal font-semibold rounded-md py-0.5 px-2 bg-white text-black">
                  {metadata && metadata.compiledMetadata ? "Set" : "Not set"}
                </span>
              </div>
              <div className="flex flex-col gap-1 justify-start items-start">
                <p>Supports decentralized contract verification.</p>
                <a
                  className="text-blue-500 whitespace-nowrap hover:underline hover:underline-offset-[25%]"
                  href="https://discuss.ens.domains/t/ensip-proposal-contract-metadata-standard-and-text-records/21397"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Learn more
                </a>
              </div>
            </div>
          }
        >
          <Braces
            className={cn(
              "w-[18px] h-[18px] cursor-default",
              metadata && metadata.compiledMetadata
                ? "text-black"
                : "text-gray-300 hover:text-gray-500",
            )}
          />
        </GenericTooltip>
        <GenericTooltip
          content={
            <div className="w-full max-w-[275px] flex flex-col gap-2 justify-start items-start">
              <div className="self-stretch flex flex-row flex-nowrap justify-between items-center">
                <h4 className="text-sm leading-normal font-semibold">avatar</h4>
                <span className="text-xs leading-normal font-semibold rounded-md py-0.5 px-2 bg-white text-black">
                  {metadata && metadata.avatar ? "Set" : "Not set"}
                </span>
              </div>
              <div className="flex flex-col gap-1 justify-start items-start">
                <p>Customize an avatar image for the contract.</p>
                <a
                  className="text-blue-500 whitespace-nowrap hover:underline hover:underline-offset-[25%]"
                  href="https://discuss.ens.domains/t/ensip-proposal-contract-metadata-standard-and-text-records/21397"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Learn more
                </a>
              </div>
            </div>
          }
        >
          <CircleUser
            className={cn(
              "w-[18px] h-[18px] cursor-default",
              metadata && metadata.audits ? "text-black" : "text-gray-300 hover:text-gray-500",
            )}
          />
        </GenericTooltip>
        <GenericTooltip
          content={
            <div className="w-full max-w-[275px] flex flex-col gap-2 justify-start items-start">
              <div className="self-stretch flex flex-row flex-nowrap justify-between items-center">
                <h4 className="text-sm leading-normal font-semibold">audits</h4>
                <span className="text-xs leading-normal font-semibold rounded-md py-0.5 px-2 bg-white text-black">
                  {metadata && metadata.audits ? "Set" : "Not set"}
                </span>
              </div>
              <div className="flex flex-col gap-1 justify-start items-start">
                <p>Links to security audits performed on the contract.</p>
                <a
                  className="text-blue-500 whitespace-nowrap hover:underline hover:underline-offset-[25%]"
                  href="https://discuss.ens.domains/t/ensip-proposal-contract-metadata-standard-and-text-records/21397"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Learn more
                </a>
              </div>
            </div>
          }
        >
          <ShieldCheck
            className={cn(
              "w-[18px] h-[18px] cursor-default",
              metadata && metadata.audits ? "text-black" : "text-gray-300 hover:text-gray-500",
            )}
          />
        </GenericTooltip>
      </div>
    </TooltipProvider>
  );
}
