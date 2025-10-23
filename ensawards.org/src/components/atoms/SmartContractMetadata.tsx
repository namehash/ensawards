import { EnsAvatar } from "@/components/atoms/EnsAvatar.tsx";
import { GenericTooltip } from "@/components/atoms/GenericTooltip.tsx";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import type { EnsProfileForContract } from "@/types/contracts.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import type { Name } from "@ensnode/ensnode-sdk";
import {BookOpen, Braces, ShieldCheck} from "lucide-react";
import React from "react";
import {ExternalLinkWithIcon} from "@/components/atoms/Link.tsx";

export interface SmartContractMetadataProps {
  name: Name;
  metadata?: EnsProfileForContract;
}

const getDeactivatedMetadataFieldMessage = (metadataFieldName: string) =>
  `The "${metadataFieldName}" field has not been defined for this contract.`;

export function SmartContractMetadata({ metadata, name }: SmartContractMetadataProps) {
  return (
    <TooltipProvider delayDuration={1000} skipDelayDuration={0}>
      <div className="flex flex-row flex-nowrap justify-start items-center gap-3">
        <GenericTooltip
          content={
            <div className="w-full max-w-[275px]">
              {metadata && metadata.docs ? (
                <p>
                  The docs of the contract are available{" "}
                  <ExternalLinkWithIcon
                    className="text-blue-400 whitespace-nowrap"
                    href={metadata.docs.href}
                    iconSize={14}
                  >
                    here
                  </ExternalLinkWithIcon>
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
                  <ExternalLinkWithIcon
                    className="text-blue-400 whitespace-nowrap"
                    href={metadata.compiledMetadata.href}
                    iconSize={14}
                  >
                    here
                  </ExternalLinkWithIcon>
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
                  <ExternalLinkWithIcon
                    className="text-blue-400 whitespace-nowrap"
                    href={metadata.avatar.href}
                    iconSize={14}
                  >
                    {metadata.avatar.href}
                  </ExternalLinkWithIcon>
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
                            <ExternalLinkWithIcon
                              className="text-blue-400 whitespace-nowrap"
                              href={audit.report.href}
                              iconSize={14}
                            >
                              Report
                            </ExternalLinkWithIcon>
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
