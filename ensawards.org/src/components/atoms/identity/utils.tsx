import type { PropsWithChildren } from "react";
import { type Address, getAddress } from "viem";

import {
  DEFAULT_EVM_CHAIN_ID,
  type ENSNamespaceId,
  type Identity,
  type Name,
  ResolutionStatusIds,
  beautifyName,
  isResolvedIdentity,
  translateDefaultableChainIdToChainId,
} from "@ensnode/ensnode-sdk";

import { CopyButton } from "@/components/atoms/CopyButton.tsx";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { getEnsAdvocateDetailsRelativePath } from "@/utils";
import { getAddressDetailsUrl, getBlockExplorerUrlForAddress } from "@/utils/namespace.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import { ChainExplorerIcon, ChainIcon, EnsIcon, getChainName } from "@namehash/namehash-ui";

interface NameDisplayProps {
  name: Name;
  className?: string;
}

/**
 * Displays an ENS name in beautified form.
 *
 * @param name - The name to display in beautified form.
 *
 */
export function NameDisplay({ name, className = "font-medium" }: NameDisplayProps) {
  const beautifiedName = beautifyName(name);
  return <span className={className}>{beautifiedName}</span>;
}

interface AddressDisplayProps {
  address: Address;
  className?: string;
}

/**
 * Displays a truncated checksummed address without any navigation.
 * Pure display component for showing addresses.
 */
export function AddressDisplay({ address, className }: AddressDisplayProps) {
  const checksummedAddress = getAddress(address);
  const truncatedAddress = `${checksummedAddress.slice(0, 6)}...${checksummedAddress.slice(-4)}`;
  return <span className={className}>{truncatedAddress}</span>;
}

interface IdentityLinkProps {
  identity: Identity;
  className?: string;
}

/**
 * Displays a truncated address with a link to the address details URL.
 * If the ENS namespace has a known ENS Manager App,
 * includes a link to the view details of the address within that ENS namespace.
 *
 * Can take other components (ex.ChainIcon) as children
 * and display them alongside the link as one common interaction area.
 */
export function IdentityLink({
  identity,
  className,
  children,
}: PropsWithChildren<IdentityLinkProps>) {
  const addressDetailsRelativePath = getEnsAdvocateDetailsRelativePath(identity.address);

  return (
    <a
      href={addressDetailsRelativePath}
      className={cn("text-sm leading-normal font-medium text-blue-600", className)}
    >
      {children}
    </a>
  );
}

export interface IdentityTooltipProps {
  identity: Identity;
  namespaceId: ENSNamespaceId;
}

/**
 * On hover displays details on how the primary name for
 * the address of the identity was resolved.
 */
export const IdentityTooltip = ({
  identity,
  namespaceId,
  children,
}: PropsWithChildren<IdentityTooltipProps>) => {
  if (!isResolvedIdentity(identity)) {
    // identity is still loading, don't build any tooltip components yet.
    return children;
  }

  const chainDescription =
    identity.chainId === DEFAULT_EVM_CHAIN_ID
      ? 'the "default" EVM Chain'
      : getChainName(identity.chainId);

  let header: string;

  switch (identity.resolutionStatus) {
    case ResolutionStatusIds.Named:
      header = `Primary name on ${chainDescription} for address:`;
      break;
    case ResolutionStatusIds.Unnamed:
      header = `Unnamed address on ${chainDescription}:`;
      break;
    case ResolutionStatusIds.Unknown:
      header = `Error resolving address on ${chainDescription}:`;
      break;
  }

  const ensAppAddressDetailsUrl = getAddressDetailsUrl(identity.address, namespaceId);

  const body = (
    <span>
      <AddressDisplay address={identity.address} />
    </span>
  );

  const effectiveChainId = translateDefaultableChainIdToChainId(identity.chainId, namespaceId);
  const chainExplorerUrl = getBlockExplorerUrlForAddress(effectiveChainId, identity.address);

  return (
    <Tooltip delayDuration={250}>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent
        side="top"
        className="bg-gray-50 text-sm text-black text-left shadow-md outline-none w-fit"
      >
        <div className="flex gap-4">
          <div className="flex items-center">
            <ChainIcon
              chainId={translateDefaultableChainIdToChainId(identity.chainId, namespaceId)}
              height={24}
              width={24}
            />
          </div>
          <div>
            {header}
            <br />
            {body}
          </div>
          <div className="flex items-center gap-2">
            <CopyButton
              value={identity.address}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            />
            {chainExplorerUrl && (
              <a target="_blank" href={chainExplorerUrl.toString()}>
                <ChainExplorerIcon
                  height={24}
                  width={24}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                />
              </a>
            )}
            {ensAppAddressDetailsUrl && (
              <a target="_blank" href={ensAppAddressDetailsUrl.toString()}>
                <EnsIcon
                  height={24}
                  width={18}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                />
              </a>
            )}
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  );
};
