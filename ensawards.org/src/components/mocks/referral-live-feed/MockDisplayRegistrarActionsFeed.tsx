import { useMemo, useState } from "react";

import { ENSNamespaceIds } from "@ensnode/datasources";
import { createConfig, ENSNodeProvider } from "@ensnode/ensnode-react";
import { RECORDS_PER_PAGE_DEFAULT, RegistrarActionsResponseCodes } from "@ensnode/ensnode-sdk";

import {
  LastUpdateTime,
  LastUpdateTimeLoading,
} from "@/components/atoms/datetime/LastUpdateTime.tsx";
import { ErrorInfo } from "@/components/atoms/ErrorInfo.tsx";
import type { ReferralLiveFeedTitle } from "@/components/referral-awards-program/referrals/FetchAndDisplayRegistrarActionsFeed.tsx";
import {
  DisplayRegistrarActionsList,
  DisplayRegistrarActionsListLoading,
} from "@/components/referral-awards-program/referrals/RegistrarActionsList.tsx";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { getENSNodeUrl } from "@/utils/env";
import { DEFAULT_REFERRAL_PROGRAM_EDITIONS } from "@/utils/referralProgram.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";

import { variants } from "./data.ts";

const variantIds = [...variants.keys()];

export function MockDisplayRegistrarActionsFeed() {
  const config = useMemo(() => createConfig({ url: getENSNodeUrl() }), []);

  const namespaceId = ENSNamespaceIds.Sepolia;
  const title: ReferralLiveFeedTitle = {
    text: "ENS referrals live feed",
  };

  const [selectedVariantId, setSelectedVariantId] = useState(variantIds[0]);
  const selectedVariant = variants.get(selectedVariantId);

  if (selectedVariant === undefined) {
    return <>No variant defined for variant id "{selectedVariantId}".</>;
  }

  return (
    <ENSNodeProvider config={config}>
      <TooltipProvider delayDuration={200} skipDelayDuration={0}>
        <section className="w-full max-w-[1216px] box-border h-fit flex flex-col flex-nowrap justify-start items-start gap-3 sm:gap-6">
          <div className="flex flex-col flex-nowrap justify-start items-start gap-2 sm:gap-4">
            <p>
              Select a mock <b>FetchAndDisplayRegistrarActionsFeed</b> variant
            </p>
            <div className="flex flex-wrap gap-2">
              {variantIds.map((variantId) => (
                <button
                  className={cn(
                    shadcnButtonVariants({
                      size: "sm",
                      variant: selectedVariantId === variantId ? "default" : "outline",
                      className: "cursor-pointer",
                    }),
                  )}
                  key={variantId}
                  onClick={() => setSelectedVariantId(variantId)}
                >
                  {variantId}
                </button>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col flex-nowrap justify-start items-start gap-3 sm:gap-6">
            <h3>Output:</h3>
            {selectedVariantId === "Loading" && (
              <div className="w-full h-fit flex flex-col justify-start items-center gap-6">
                <div
                  className={cn(
                    title.styles?.container ??
                      "w-full flex flex-col sm:flex-row sm:flex-wrap justify-start sm:justify-between items-start sm:items-center gap-y-2",
                  )}
                >
                  <h2 className={cn(title.styles?.text ?? "text-2xl leading-normal font-semibold")}>
                    {title.text}
                  </h2>
                  <LastUpdateTimeLoading />
                </div>
                <DisplayRegistrarActionsListLoading recordsPerPage={RECORDS_PER_PAGE_DEFAULT} />
              </div>
            )}

            {selectedVariantId === "Error" && (
              <ErrorInfo
                title={title.text}
                description={["ENSNode connection error occurred. Please try again later."]}
              >
                <button
                  className={cn(
                    shadcnButtonVariants({
                      variant: "outline",
                      size: "default",
                      className: "rounded-full cursor-pointer",
                    }),
                  )}
                  onClick={() => window.location.reload()}
                >
                  Try again
                </button>
              </ErrorInfo>
            )}

            {selectedVariantId === "Loaded" &&
              selectedVariant &&
              selectedVariant.responseCode === RegistrarActionsResponseCodes.Ok && (
                <div className="w-full h-fit flex flex-col justify-start items-center gap-6">
                  <div
                    className={cn(
                      title.styles?.container ??
                        "w-full flex flex-col sm:flex-row sm:flex-wrap justify-start sm:justify-between items-start sm:items-center gap-y-2",
                    )}
                  >
                    <h2
                      className={cn(title.styles?.text ?? "text-2xl leading-normal font-semibold")}
                    >
                      {title.text}
                    </h2>
                    {selectedVariant.accurateAsOf && (
                      <LastUpdateTime
                        timestamp={selectedVariant.accurateAsOf}
                        className="text-base sm:text-sm"
                      />
                    )}
                  </div>
                  <DisplayRegistrarActionsList
                    namespaceId={namespaceId}
                    registrarActions={selectedVariant.registrarActions}
                    referralProgramEditions={DEFAULT_REFERRAL_PROGRAM_EDITIONS}
                  />
                </div>
              )}
          </div>{" "}
        </section>
      </TooltipProvider>
    </ENSNodeProvider>
  );
}
