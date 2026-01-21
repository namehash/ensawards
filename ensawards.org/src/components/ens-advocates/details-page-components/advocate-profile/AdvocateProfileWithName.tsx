import {
  EnsAvatar,
  getBlockExplorerAddressDetailsUrl,
  getEnsManagerAddressDetailsUrl,
  NameDisplay,
} from "@namehash/namehash-ui";

import { getENSRootChainId } from "@ensnode/ensnode-sdk";

import type { FetchAndDisplayAdvocateProfileWithNameProps } from "@/components/ens-advocates/details-page-components/advocate-profile/FetchAndDisplayAdvocateProfileWithName.tsx";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles.ts";
import { DEFAULT_ENS_NAMESPACE } from "@/utils/namespace.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";

interface AdvocateProfileWithNameProps extends FetchAndDisplayAdvocateProfileWithNameProps {
  headerImage?: string | null;
}

export function AdvocateProfileWithName({
  name,
  address,
  headerImage,
}: AdvocateProfileWithNameProps) {
  // Parse header image URI and only use it if it's HTTP/HTTPS
  // TODO: Add support for more URI types as defined in ENSIP-12
  // See: https://docs.ens.domains/ensip/12#uri-types

  const namespaceId = DEFAULT_ENS_NAMESPACE;
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
        className="w-full aspect-[67/28] sm:aspect-[152/35] bg-blue-500 rounded-xl relative"
        style={{
          backgroundImage: validHeaderImageUrl ? `url(${validHeaderImageUrl})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute w-full h-full bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_0%,#FFF_100%)]" />
      </div>
      <div className="w-full flex flex-col sm:flex-row flex-nowrap justify-start items-center gap-3 sm:gap-[25px]">
        <EnsAvatar
          className="w-[100px] h-[100px] sm:w-[56px] sm:h-[56px] flex-shrink-0 rounded-xl sm:rounded-md border border-gray-200"
          name={name}
          namespaceId={namespaceId}
          isSquare={true}
        />
        <div className="w-full flex flex-col sm:flex-row sm:flex-wrap justify-center sm:justify-between items-start sm:items-center gap-3 sm:gap-y-3">
          <NameDisplay
            className="max-sm:self-stretch text-center sm:text-left text-2xl sm:text-3xl font-bold"
            name={name}
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
