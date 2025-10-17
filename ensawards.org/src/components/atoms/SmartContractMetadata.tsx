import { GenericTooltip } from "@/components/atoms/GenericTooltip.tsx";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import type {EnsProfileForContract} from "@/types/contracts.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import { BookOpen, ShieldCheck, Braces, CircleUser } from "lucide-react";
import React from "react";

export interface SmartContractMetadataProps {
  metadata: EnsProfileForContract | undefined;
}

const getDeactivatedMetadataFieldMessage = (metadataName: string) => `${metadataName} record is undefined for this contract.`;

export function SmartContractMetadata({ metadata }: SmartContractMetadataProps) {
  return (
    <TooltipProvider delayDuration={1000} skipDelayDuration={0}>
      <div className="flex flex-row flex-nowrap justify-start items-center gap-3">
        {/*TODO replace with actual appropriate icons when they are provided*/}
        <GenericTooltip
          content={
            <div className="w-full max-w-[275px]">
              {metadata && metadata.docs
                ? <p>The docs of the contract are available <a className="text-blue-400 whitespace-nowrap hover:underline hover:underline-offset-[25%]" href={metadata.docs.href} target="_blank" rel="noreferrer noopener">here ↗</a></p>
                : getDeactivatedMetadataFieldMessage("docs")}
            </div>
          }
        >
          <BookOpen
            className={cn("w-[21px] h-[21px]", metadata && metadata.docs ? "text-black" : "text-gray-200")}
          />
        </GenericTooltip>
        <GenericTooltip
          content={
            <div className="w-full max-w-[275px]">
              {metadata && metadata.compiledMetadata
                  ? <p>The compiled metadata of the contract is available <a className="text-blue-400 whitespace-nowrap hover:underline hover:underline-offset-[25%]" href={metadata.compiledMetadata.href} target="_blank"
                                                                    rel="noreferrer noopener">here ↗</a>
                  </p>
                  : getDeactivatedMetadataFieldMessage("compiled-metadata")}
            </div>
          }
        >
            <Braces
                className={cn("w-[21px] h-[21px]",metadata && metadata.compiledMetadata ? "text-black" : "text-gray-200")}
          />
        </GenericTooltip>
        <GenericTooltip
          content={
            <div className="w-full max-w-[275px]">
              {metadata && metadata.avatar
                ? <p>TODO: display the contract's avatar here</p>
                : getDeactivatedMetadataFieldMessage("avatar")}
            </div>
          }
        >
          <CircleUser
            className={cn("w-[21px] h-[21px]", metadata && metadata.avatar ? "text-black" : "text-gray-200")}
          />
        </GenericTooltip>
        <GenericTooltip
          content={
            <div className="w-full max-w-[275px]">
              {metadata && metadata.audits
                  ? <div><p>The audits passed by the contract:
                      <ul>
                          {metadata && metadata.audits.map((audit) => <li className="list-disc list-inside">Auditor: {audit.auditor} | <a
                              className="text-blue-400 whitespace-nowrap hover:underline hover:underline-offset-[25%]"
                                  href={audit.report.href} target="_blank"
                                  rel="noreferrer noopener">Report ↗</a></li>)}
                      </ul>
                              </p></div>
                              : getDeactivatedMetadataFieldMessage("audits")}
                      </div>
                      }
                      >
                      <ShieldCheck
                className={cn("w-[21px] h-[21px]", metadata && metadata.audits ? "text-black" : "text-gray-200")}
          />
        </GenericTooltip>
      </div>
    </TooltipProvider>
  );
}
