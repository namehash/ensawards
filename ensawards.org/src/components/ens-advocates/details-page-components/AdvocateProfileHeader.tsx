//TODO: Should I specifically target 'ens advocate program' in naming or convert all these file names to be more generic?

import { EnsAvatar } from "@/components/atoms/identity/EnsAvatar.tsx";
import { NameDisplay } from "@/components/atoms/identity/utils.tsx";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import {
  buildExternalEnsAppProfileUrl,
  getBlockExplorerUrlForAddress,
  getEnsManagerAppUrl,
} from "@/utils/namespace.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import type { ENSNamespaceId } from "@ensnode/datasources";
import { type Name, getENSRootChainId } from "@ensnode/ensnode-sdk";
import type { Address } from "viem";

interface AdvocateProfileHeaderProps {
  name: Name;
  namespaceId: ENSNamespaceId;
  address: Address | null;
  headerImage?: string | null;
  websiteUrl?: string | null; //TODO: should this prop be removed? Afaik we don't use it anywhere in our current designs
}

export function AdvocateProfileHeader({
  name,
  address,
  namespaceId,
  headerImage,
  websiteUrl,
}: AdvocateProfileHeaderProps) {
  // Parse header image URI and only use it if it's HTTP/HTTPS
  // TODO: Add support for more URI types as defined in ENSIP-12
  // See: https://docs.ens.domains/ensip/12#uri-types
  const getValidHeaderImageUrl = (headerImage: string | null | undefined): string | null => {
    if (!headerImage) return null;

    let url: URL;
    try {
      url = new URL(headerImage);
    } catch {
      return null;
    }

    if (url.protocol === "http:" || url.protocol === "https:") return headerImage;

    // For any other URI types (ipfs, data, NFT URIs, etc.), fallback to default
    return null;
  };

  const validHeaderImageUrl = getValidHeaderImageUrl(headerImage);

  return (
    <div className="w-full h-fit box-border flex flex-col gap-5 justify-start items-center">
      <div
        className="w-full aspect-[152/35] bg-blue-500 rounded-xl relative"
        style={{
          backgroundImage: validHeaderImageUrl ? `url(${validHeaderImageUrl})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute w-full aspect-[152/35] bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_0%,#FFF_100%)]" />
      </div>
      <div className="w-full flex flex-col sm:flex-row flex-nowrap justify-start items-center gap-3 sm:gap-[25px]">
        <EnsAvatar
          className="w-[100px] h-[100px] rounded-xl"
          name={name}
          namespaceId={namespaceId}
        />
        <div className="w-full flex flex-col justify-center items-start gap-3 sm:gap-5">
          <NameDisplay
            className="self-stretch text-center sm:text-left text-2xl sm:text-3xl font-bold"
            name={name}
          />
          <div className="w-full flex flex-col sm:flex-row flex-nowrap justify-start items-center gap-3">
            {address !== null && (
              <a
                href={getBlockExplorerUrlForAddress(getENSRootChainId(namespaceId), address)?.href}
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
              href={buildExternalEnsAppProfileUrl(name, namespaceId)?.href}
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
