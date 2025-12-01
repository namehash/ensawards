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

import { cn } from "@/utils/tailwindClassConcatenation.ts";
import { AddressDisplay, IdentityLink, IdentityTooltip, NameDisplay } from "./utils";

interface ResolveAndDisplayIdentityProps {
  identity: UnresolvedIdentity;
  namespaceId: ENSNamespaceId;
  prefix?: string;
  withLink?: boolean;
  withTooltip?: boolean;
  withAvatar?: boolean;
  className?: string;
}

/**
 * Resolves the provided `UnresolvedIdentity` through ENSNode and displays the result.
 *
 * @param identity - The `UnresolvedIdentity` to resolve and display.
 * @param withLink - Whether to wrap the displayed identity in an `IdentityLink` component.
 * @param withTooltip - Whether to wrap the displayed identity in an `IdentityInfoTooltip` component.
 * @param withAvatar - Whether to display an avatar image.
 * @param className - The class name to apply to the displayed identity.
 */
export function ResolveAndDisplayIdentity({
  identity,
  namespaceId,
  prefix,
  withLink = true,
  withTooltip = true,
  withAvatar = false,
  className,
}: ResolveAndDisplayIdentityProps) {
  // resolve the primary name for `identity` using ENSNode
  // TODO: extract out the concept of resolving an `Identity` into a provider that child
  //       components can then hook into.
  const { identity: identityResult } = useResolvedIdentity({
    identity,
    namespaceId,
  });

  return (
    <DisplayIdentity
      identity={identityResult}
      namespaceId={namespaceId}
      prefix={prefix}
      withLink={withLink}
      withTooltip={withTooltip}
      withAvatar={withAvatar}
      className={className}
    />
  );
}

interface DisplayIdentityProps {
  identity: Identity;
  namespaceId: ENSNamespaceId;
  prefix?: string;
  withLink?: boolean;
  withTooltip?: boolean;
  withAvatar?: boolean;
  className?: string;
}

/**
 * Displays the provided `Identity`.
 *
 * Performs _NO_ resolution if the provided `identity` is not already a `ResolvedIdentity`.
 *
 * @param identity - The identity to display. May be a `ResolvedIdentity` or an `UnresolvedIdentity`.
 *                      If not a `ResolvedIdentity` (and therefore just an `UnresolvedIdentity`) then displays a loading state.
 * @param withLink - Whether to wrap the displayed identity in an `IdentityLink` component.
 * @param withTooltip - Whether to wrap the displayed identity in an `IdentityInfoTooltip` component.
 * @param withAvatar - Whether to display an avatar image.
 * @param className - The class name to apply to the displayed identity.
 */
export function DisplayIdentity({
  identity,
  namespaceId,
  prefix,
  withLink = true,
  withTooltip = true,
  withAvatar = false,
  className,
}: DisplayIdentityProps) {
  let avatar: React.ReactElement;
  let identitifer: React.ReactElement;

  if (!isResolvedIdentity(identity)) {
    // identity is an `UnresolvedIdentity` which represents that it hasn't been resolved yet
    // display loading state
    avatar = <Skeleton className="h-10 w-10 rounded-full" />;
    identitifer = <Skeleton className={cn("h-4 w-24", className)} />;
  } else if (
    identity.resolutionStatus === ResolutionStatusIds.Unnamed ||
    identity.resolutionStatus === ResolutionStatusIds.Unknown
  ) {
    avatar = (
      <div className="w-10 h-10 flex justify-center items-center">
        <ChainIcon
          chainId={translateDefaultableChainIdToChainId(identity.chainId, namespaceId)}
          height={24}
          width={24}
        />
      </div>
    );
    identitifer = (
      <AddressDisplay
        address={identity.address}
        className={cn("whitespace-nowrap hover:underline hover:underline-offset-[25%]", className)}
      />
    );
  } else {
    avatar = <EnsAvatar name={identity.name} namespaceId={namespaceId} className="h-10 w-10" />;
    identitifer = (
      <NameDisplay
        name={identity.name}
        className={cn(
          "whitespace-nowrap hover:underline hover:underline-offset-[25%] w-full overflow-x-auto max-sm:text-end",
          className,
        )}
      />
    );
  }

  let result = (
    <div className="max-sm:w-full flex flex-col sm:flex-row justify-start items-start sm:items-center gap-2 sm:gap-3">
      {/* TODO: extract the `EnsAvatar` / `ChainIcon` out of this component and remove the
      `withAvatar` prop. */}
      {withAvatar && avatar}
      {/*// TODO: for now, this is styled to fit the Referrer Card designs, but it should be made more flexible --> connected with the other todos in this file*/}
      <div className="min-md:w-[170px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch">
        {prefix && (
          <p className="text-muted-foreground text-sm leading-normal font-normal">{prefix}</p>
        )}
        {identitifer}
      </div>
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
      <IdentityLink identity={identity} namespaceId={namespaceId} className="max-sm:w-full">
        {result}
      </IdentityLink>
    );
  }

  return result;
}
