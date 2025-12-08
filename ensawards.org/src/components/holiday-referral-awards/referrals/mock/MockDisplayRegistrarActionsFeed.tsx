import { useState } from "react";

import { ENSNamespaceIds } from "@ensnode/datasources";

import { DisplayRegistrarActionsFeed } from "@/components/holiday-referral-awards/referrals/DisplayRegistrarActionsFeed.tsx";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { ENSHolidayAwardsReferralIncentiveProgram } from "@/data/referralIncentivePrograms.ts";
import { getENSNodeUrl } from "@/utils/env";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import { ENSNodeProvider, createConfig } from "@ensnode/ensnode-react";
import { variants } from "./data.ts";

const variantIds = [...variants.keys()];

export function MockDisplayRegistrarActionsFeed() {
  const ensNodeProviderConfig = createConfig({
    url: getENSNodeUrl(),
  });

  const namespaceId = ENSNamespaceIds.Sepolia;
  const title = "ENS referrals live feed";

  const [selectedVariantId, setSelectedVariantId] = useState(variantIds[0]);
  const selectedVariant = variants.get(selectedVariantId);

  if (!selectedVariant) {
    return <>No variant defined for variant id "{selectedVariantId}".</>;
  }

  return (
    <ENSNodeProvider config={ensNodeProviderConfig}>
      <TooltipProvider delayDuration={200} skipDelayDuration={0}>
        <section className="w-full max-w-[1216px] box-border h-fit flex flex-col flex-nowrap justify-start items-start gap-3 sm:gap-6">
          <div className="flex flex-col flex-nowrap justify-start items-start gap-2 sm:gap-4">
            <p>
              Select a mock <b>DisplayRegistrarActionsFeed</b> variant
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
            <DisplayRegistrarActionsFeed
              namespaceId={namespaceId}
              title={title}
              registrarActions={selectedVariant}
              referralIncentiveProgram={ENSHolidayAwardsReferralIncentiveProgram}
            />
          </div>{" "}
        </section>
      </TooltipProvider>
    </ENSNodeProvider>
  );
}
