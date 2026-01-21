import {
  AddressDisplay,
  ChainIcon,
  getBlockExplorerAddressDetailsUrl,
  getEnsManagerAddressDetailsUrl,
  useIsMobile,
} from "@namehash/namehash-ui";
import type * as React from "react";
import type { Address } from "viem";

import { getENSRootChainId } from "@ensnode/ensnode-sdk";

import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { DEFAULT_ENS_NAMESPACE } from "@/utils/namespace.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";

interface AdvocateProfileWithoutNameProps {
  address: Address;
}

export function AdvocateProfileWithoutName({ address }: AdvocateProfileWithoutNameProps) {
  const isMobile = useIsMobile();
  const namespaceId = DEFAULT_ENS_NAMESPACE;
  return (
    <div className="w-full h-fit box-border flex flex-col gap-5 justify-start items-center">
      <div className="w-full aspect-[67/28] sm:aspect-[152/35] bg-blue-500 rounded-xl relative">
        <div className="absolute w-full h-full bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_0%,#FFF_100%)]" />
      </div>
      <div className="w-full flex flex-col sm:flex-row flex-nowrap justify-start items-center gap-3 sm:gap-[25px]">
        <div className="w-[100px] h-[100px] sm:w-[56px] sm:h-[56px] flex-shrink-0 rounded-xl sm:rounded-md flex justify-center items-center border border-gray-200">
          <ChainIcon
            chainId={getENSRootChainId(namespaceId)}
            height={isMobile ? 48 : 32}
            width={isMobile ? 48 : 32}
          />
        </div>
        <div className="w-full flex flex-col sm:flex-row sm:flex-wrap justify-center sm:justify-between items-start sm:items-center gap-3 sm:gap-y-3">
          <AddressDisplay
            className="max-sm:self-stretch text-center sm:text-left text-2xl sm:text-3xl font-bold"
            address={address}
          />
          <div className="max-sm:w-full flex flex-col sm:flex-row flex-nowrap justify-start items-center gap-3">
            {address !== null && (
              <a
                href={
                  getBlockExplorerAddressDetailsUrl(getENSRootChainId(namespaceId), address)?.href
                }
                target="_blank"
                className={cn(
                  shadcnButtonVariants({
                    variant: "secondary",
                    size: "default",
                    className: "cursor-pointer rounded-full max-sm:self-stretch",
                  }),
                )}
              >
                View on Etherscan
              </a>
            )}
            <a
              href={getEnsManagerAddressDetailsUrl(address, namespaceId)?.href}
              target="_blank"
              className={cn(
                shadcnButtonVariants({
                  variant: "default",
                  size: "default",
                  className: "cursor-pointer rounded-full max-sm:self-stretch",
                }),
              )}
            >
              View on ENS Manager
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
