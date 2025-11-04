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
    <TooltipProvider delayDuration={250} skipDelayDuration={0}>
      <div className="flex flex-row flex-nowrap justify-start items-center gap-4">
        <GenericTooltip
          content={
            <div className="w-full max-w-[275px] flex flex-col gap-1 justify-start items-start">
              <div className="self-stretch flex flex-row flex-nowrap justify-between items-center">
                <h4 className="text-base font-semibold">docs</h4>
                <span
                  className={cn(
                    "text-xs rounded-full py-1 px-2",
                    metadata && metadata.docs
                      ? "text-emerald-100 bg-emerald-600"
                      : "text-red-100 bg-red-600",
                  )}
                >
                  {metadata && metadata.docs ? "Set" : "Not set"}
                </span>
              </div>
              <span className="w-full h-[1px] self-stretch bg-white" />
              <p>Links to the primary documentation for the smart contract.</p>
              <a
                className="text-blue-400 whitespace-nowrap hover:underline hover:underline-offset-[25%]"
                href="https://discuss.ens.domains/t/ensip-proposal-contract-metadata-standard-and-text-records/21397"
                target="_blank"
                rel="noreferrer noopener"
              >
                Learn more
              </a>
            </div>
          }
        >
          <BookOpen
            className={cn(
              "w-[20px] h-[20px] cursor-pointer",
              metadata && metadata.docs ? "text-black" : "text-gray-300 hover:text-gray-500",
            )}
          />
        </GenericTooltip>
        <GenericTooltip
          content={
            <div className="w-full max-w-[275px] flex flex-col gap-1 justify-start items-start">
              <div className="self-stretch flex flex-row flex-nowrap justify-between items-center">
                <h4 className="text-base font-semibold">compiled-metadata</h4>
                <span
                  className={cn(
                    "text-xs rounded-full py-1 px-2",
                    metadata && metadata.compiledMetadata
                      ? "text-emerald-100 bg-emerald-600"
                      : "text-red-100 bg-red-600",
                  )}
                >
                  {metadata && metadata.compiledMetadata ? "Set" : "Not set"}
                </span>
              </div>
              <span className="w-full h-[1px] self-stretch bg-white" />
              <p>Supports decentralized contract verification.</p>
              <a
                className="text-blue-400 whitespace-nowrap hover:underline hover:underline-offset-[25%]"
                href="https://discuss.ens.domains/t/ensip-proposal-contract-metadata-standard-and-text-records/21397"
                target="_blank"
                rel="noreferrer noopener"
              >
                Learn more
              </a>
            </div>
          }
        >
          <Braces
            className={cn(
              "w-[20px] h-[20px] cursor-pointer",
              metadata && metadata.compiledMetadata
                ? "text-black"
                : "text-gray-300 hover:text-gray-500",
            )}
          />
        </GenericTooltip>
        <GenericTooltip
          content={
            <div className="w-full max-w-[275px] flex flex-col gap-1 justify-start items-start">
              <div className="self-stretch flex flex-row flex-nowrap justify-between items-center">
                <h4 className="text-base font-semibold">avatar</h4>
                <span
                  className={cn(
                    "text-xs rounded-full py-1 px-2",
                    metadata && metadata.avatar
                      ? "text-emerald-100 bg-emerald-600"
                      : "text-red-100 bg-red-600",
                  )}
                >
                  {metadata && metadata.avatar ? "Set" : "Not set"}
                </span>
              </div>
              <span className="w-full h-[1px] self-stretch bg-white" />
              <p>Customize an avatar image for the contract.</p>
              <a
                className="text-blue-400 whitespace-nowrap hover:underline hover:underline-offset-[25%]"
                href="https://discuss.ens.domains/t/ensip-proposal-contract-metadata-standard-and-text-records/21397"
                target="_blank"
                rel="noreferrer noopener"
              >
                Learn more
              </a>
            </div>
          }
        >
          <CircleUser
            className={cn(
              "w-[20px] h-[20px] cursor-pointer",
              metadata && metadata.audits ? "text-black" : "text-gray-300 hover:text-gray-500",
            )}
          />
        </GenericTooltip>
        <GenericTooltip
          content={
            <div className="w-full max-w-[275px] flex flex-col gap-1 justify-start items-start">
              <div className="self-stretch flex flex-row flex-nowrap justify-between items-center">
                <h4 className="text-base font-semibold">audits</h4>
                <span
                  className={cn(
                    "text-xs rounded-full py-1 px-2",
                    metadata && metadata.audits
                      ? "text-emerald-100 bg-emerald-600"
                      : "text-red-100 bg-red-600",
                  )}
                >
                  {metadata && metadata.audits ? "Set" : "Not set"}
                </span>
              </div>
              <span className="w-full h-[1px] self-stretch bg-white" />
              <p>Links to security audits performed on the contract.</p>
              <a
                className="text-blue-400 whitespace-nowrap hover:underline hover:underline-offset-[25%]"
                href="https://discuss.ens.domains/t/ensip-proposal-contract-metadata-standard-and-text-records/21397"
                target="_blank"
                rel="noreferrer noopener"
              >
                Learn more
              </a>
            </div>
          }
        >
          <ShieldCheck
            className={cn(
              "w-[20px] h-[20px] cursor-pointer",
              metadata && metadata.audits ? "text-black" : "text-gray-300 hover:text-gray-500",
            )}
          />
        </GenericTooltip>
      </div>
    </TooltipProvider>
  );
}
