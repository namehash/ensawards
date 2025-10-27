import { EnsAvatar } from "@/components/atoms/EnsAvatar.tsx";
import { GenericTooltip } from "@/components/atoms/GenericTooltip.tsx";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import type { EnsProfileForContract } from "@/types/contracts.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import type { Name } from "@ensnode/ensnode-sdk";
import { BookOpen, Braces, ShieldCheck } from "lucide-react";
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
      <div className="flex flex-row flex-nowrap justify-start items-center gap-3">
        <GenericTooltip
          content={
            <div className="w-full max-w-[275px]">
              {metadata && metadata.docs ? (
                <p>
                  The docs of the contract are available{" "}
                  <a
                    className="text-blue-400 whitespace-nowrap hover:underline hover:underline-offset-[25%]"
                    href={metadata.docs.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    here
                  </a>
                </p>
              ) : (
                getDeactivatedMetadataFieldMessage("docs")
              )}
            </div>
          }
        >
          <BookOpen
            className={cn(
              "w-[17px] h-[17px]",
              metadata && metadata.docs ? "text-black" : "text-gray-200",
            )}
          />
        </GenericTooltip>
        <GenericTooltip
          content={
            <div className="w-full max-w-[275px]">
              {metadata && metadata.compiledMetadata ? (
                <p>
                  The compiled metadata of the contract is available{" "}
                  <a
                    className="text-blue-400 whitespace-nowrap hover:underline hover:underline-offset-[25%]"
                    href={metadata.compiledMetadata.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    here
                  </a>
                </p>
              ) : (
                getDeactivatedMetadataFieldMessage("compiled-metadata")
              )}
            </div>
          }
        >
          <Braces
            className={cn(
              "w-[17px] h-[17px]",
              metadata && metadata.compiledMetadata ? "text-black" : "text-gray-200",
            )}
          />
        </GenericTooltip>
        <GenericTooltip
          content={
            <div className="w-full max-w-[275px]">
              {metadata && metadata.avatar ? (
                <p>
                  Avatar URL:{" "}
                  <a
                    className="block w-full text-blue-400 hover:underline hover:underline-offset-[25%] break-all"
                    target="_blank"
                    rel="noreferrer noopener"
                    href={metadata.avatar.href}
                  >
                    {metadata.avatar.href}
                  </a>
                </p>
              ) : (
                getDeactivatedMetadataFieldMessage("avatar")
              )}
            </div>
          }
        >
          <EnsAvatar name={name} avatarUrl={metadata?.avatar} className="w-[17px] h-[17px]" />
        </GenericTooltip>
        <GenericTooltip
          content={
            <div className="w-full max-w-[350px]">
              {metadata && metadata.audits ? (
                <div>
                  <p>
                    Audits passed by the contract:
                    <ul>
                      {metadata &&
                        metadata.audits.map((audit) => (
                          <li className="list-disc list-inside">
                            Auditor: {audit.auditor} |{" "}
                            <a
                              className="text-blue-400 whitespace-nowrap hover:underline hover:underline-offset-[25%]"
                              href={audit.report.href}
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              Report
                            </a>
                          </li>
                        ))}
                    </ul>
                  </p>
                </div>
              ) : (
                getDeactivatedMetadataFieldMessage("audits")
              )}
            </div>
          }
        >
          <ShieldCheck
            className={cn(
              "w-[17px] h-[17px]",
              metadata && metadata.audits ? "text-black" : "text-gray-200",
            )}
          />
        </GenericTooltip>
      </div>
    </TooltipProvider>
  );
}
