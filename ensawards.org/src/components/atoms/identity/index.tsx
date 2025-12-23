import type * as React from "react";

import { useResolvedIdentity } from "@ensnode/ensnode-react";
import {
  type ENSNamespaceId,
  type Identity,
  ResolutionStatusIds,
  type UnresolvedIdentity,
  isResolvedIdentity,
  translateDefaultableChainIdToChainId,
} from "@ensnode/ensnode-sdk";

import { ChainIcon } from "@/components/atoms/ChainIcon.tsx";
import { Skeleton } from "@/components/ui/skeleton";
import { EnsAvatar } from "./EnsAvatar.tsx";

import { useIsMobile } from "@/utils/hooks/useMobile.tsx";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import { AddressDisplay, IdentityLink, IdentityTooltip, NameDisplay } from "./utils";

export interface ResolveAndDisplayIdentityProps {
  identity: UnresolvedIdentity;
  namespaceId: ENSNamespaceId;
  accelerate?: boolean;
  withLink?: boolean;
  withTooltip?: boolean;
  withAvatar?: boolean;
  withIdentifier?: boolean;
  className?: string;
}

/**
 * Resolves the provided `UnresolvedIdentity` through ENSNode and displays the result.
 *
 * @param identity - The `UnresolvedIdentity` to resolve and display.
 * @param namespaceId - The ENSNamespace identifier (e.g. 'mainnet', 'sepolia', 'holesky',
 *  'ens-test-env')
 * @param accelerate - Whether to attempt Protocol Acceleration (default: false)
 *                      when resolving the primary name.
 * @param withLink - Whether to wrap the displayed identity in an `IdentityLink` component.
 * @param withTooltip - Whether to wrap the displayed identity in an `IdentityInfoTooltip` component.
 * @param withAvatar - Whether to display an avatar image.
 * @param withIdentifier - Whether to display identity's textual identifier (address or name).
 * @param className - The class name to apply to the displayed identity.
 */
export function ResolveAndDisplayIdentity({
  identity,
  namespaceId,
  accelerate = true,
  withLink = true,
  withTooltip = true,
  withAvatar = false,
  withIdentifier = true,
  className,
}: ResolveAndDisplayIdentityProps) {
  // resolve the primary name for `identity` using ENSNode
  // TODO: extract out the concept of resolving an `Identity` into a provider that child
  //       components can then hook into.
  const { identity: identityResult } = useResolvedIdentity({
    identity,
    accelerate,
  });

  return (
    <DisplayIdentity
      identity={identityResult}
      namespaceId={namespaceId}
      withLink={withLink}
      withTooltip={withTooltip}
      withAvatar={withAvatar}
      withIdentifier={withIdentifier}
      className={className}
    />
  );
}

interface DisplayIdentityProps {
  identity: Identity;
  namespaceId: ENSNamespaceId;
  withLink?: boolean;
  withTooltip?: boolean;
  withAvatar?: boolean;
  withIdentifier?: boolean;
  className?: string;
}

/**
 * Displays the provided `Identity`.
 *
 * Performs _NO_ resolution if the provided `identity` is not already a `ResolvedIdentity`.
 *
 * @param identity - The identity to display. May be a `ResolvedIdentity` or an `UnresolvedIdentity`.
 *                      If not a `ResolvedIdentity` (and therefore just an `UnresolvedIdentity`) then displays a loading state.
 * @param namespaceId - The ENSNamespace identifier (e.g. 'mainnet', 'sepolia', 'holesky',
 *                        'ens-test-env')
 * @param withLink - Whether to wrap the displayed identity in an `IdentityLink` component.
 * @param withTooltip - Whether to wrap the displayed identity in an `IdentityInfoTooltip` component.
 * @param withAvatar - Whether to display an avatar image.
 * @param withIdentifier - Whether to display identity's textual identifier (address or name).
 * @param className - The class name to apply to the displayed identity.
 */
export function DisplayIdentity({
  identity,
  namespaceId,
  withLink = true,
  withTooltip = true,
  withAvatar = false,
  withIdentifier = true,
  className,
}: DisplayIdentityProps) {
  let avatar: React.ReactElement;
  let identifier: React.ReactElement;

  const isMobile = useIsMobile();

  if (!isResolvedIdentity(identity)) {
    // identity is an `UnresolvedIdentity` which represents that it hasn't been resolved yet
    // display loading state
    avatar = (
      <Skeleton
        className={cn(
          "h-10 w-10 rounded-full bg-gray-200",
          isMobile && withIdentifier && "w-5 h-5",
        )}
      />
    );
    identifier = (
      <Skeleton className={cn("w-[100px] h-[14px] mt-[4px] mb-[3px] bg-gray-200", className)} />
    );
  } else if (
    identity.resolutionStatus === ResolutionStatusIds.Unnamed ||
    identity.resolutionStatus === ResolutionStatusIds.Unknown
  ) {
    avatar = (
      <div
        className={cn(
          "w-10 h-10 flex justify-center items-center",
          isMobile && withIdentifier && "w-5 h-5",
        )}
      >
        <ChainIcon
          chainId={translateDefaultableChainIdToChainId(identity.chainId, namespaceId)}
          height={isMobile && withIdentifier ? 16 : 24}
          width={isMobile && withIdentifier ? 16 : 24}
        />
      </div>
    );
    identifier = (
      <AddressDisplay
        address={identity.address}
        className={cn("whitespace-nowrap hover:underline hover:underline-offset-[25%]", className)}
      />
    );
  } else {
    avatar = (
      <EnsAvatar
        name={identity.name}
        namespaceId={namespaceId}
        className={cn("h-10 w-10", isMobile && withIdentifier && "w-5 h-5")}
      />
    );
    identifier = (
      <NameDisplay
        name={identity.name}
        className={cn(
          "w-fit sm:w-full whitespace-nowrap hover:underline hover:underline-offset-[25%] overflow-x-auto",
          className,
        )}
      />
    );
  }

  let result = (
    <div className="inline-flex items-center gap-2">
      {/* TODO: extract the `EnsAvatar` / `ChainIcon` out of this component and remove the
      `withAvatar` prop. */}
      {withAvatar && avatar}
      {withIdentifier && identifier}
    </div>
  );

  // TODO: extract the `IdentityInfoTooltip` out of this component and remove the `withTooltip` prop.
  if (withTooltip) {
    result = (
      <IdentityTooltip identity={identity} namespaceId={namespaceId}>
        {result}
      </IdentityTooltip>
    );
  }

  // TODO: extract the `IdentityLink` out of this component and remove the `withLink` prop.
  if (withLink) {
    result = (
      <IdentityLink identity={identity} className={cn("inline-flex w-fit h-fit")}>
        {result}
      </IdentityLink>
    );
  }

  return result;
}
