import { GenericTooltip } from "@/components/atoms/GenericTooltip.tsx";
import { ResolveAndDisplayIdentity } from "@/components/atoms/identity";
import { Skeleton } from "@/components/ui/skeleton";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { type BenchmarkResult, type BenchmarkVerifier } from "@/types/apps.ts";
import { chainIdToNamespaceId } from "@/utils/chains.ts";
import { getENSNodeUrl } from "@/utils/env";
import { ENSNodeProvider, createConfig } from "@ensnode/ensnode-react";
import { ENSNodeClient, type UnresolvedIdentity } from "@ensnode/ensnode-sdk";
import { Check, CheckCheck, X as XIcon } from "lucide-react";
import React from "react";
import { cn } from "../../../utils/tailwindClassConcatenation";

export interface MatrixBadgeProps {
  text: string;
  className: string;
  result: BenchmarkResult;
  verification?: BenchmarkVerifier;
  isLoading?: boolean;
}

const TooltipContent = ({ verification }: { verification?: BenchmarkVerifier }) => {
  if (!verification) {
    return <p className="max-w-[275px]">This benchmark has not been verified yet.</p>;
  }

  const identity: UnresolvedIdentity = {
    chainId: verification.chainId,
    address: verification.address,
    resolutionStatus: "unresolved",
  };

  const namespaceId = chainIdToNamespaceId(verification.chainId);

  const verifiedDate = new Date(verification.verifiedAt * 1000).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col gap-3 p-1">
      <div className="flex flex-col gap-1">
        <p className="text-muted-foreground text-xs">Verifier info:</p>
        <ResolveAndDisplayIdentity
          identity={identity}
          namespaceId={namespaceId}
          withLink={true}
          withTooltip={false}
          withAvatar={true}
          className="text-blue-400 hover:underline hover:underline-offset-[25%]"
        />
      </div>
      <p className="text-xs text-muted-foreground">Benchmarked on {verifiedDate}</p>
    </div>
  );
};

const client = new ENSNodeClient({
  url: getENSNodeUrl(),
});

const ensNodeReactConfig = createConfig({
  url: getENSNodeUrl(),
});

export function MatrixBadge({
  text,
  className,
  result,
  verification,
  isLoading = false,
}: MatrixBadgeProps) {
  if (isLoading) {
    return <MatrixBadgeLoading />;
  }

  const badgeContent = (
    <span
      className={cn(
        "w-fit flex flex-row flex-nowrap justify-center items-center gap-[6px] pl-[10px] pr-3 " +
          "py-1 rounded-full text-xs leading-normal font-medium hover:opacity-80 cursor-default",
        className,
      )}
    >
      {result === "Pass" ? (
        <Check width={16} height={16} />
      ) : result === "Fail" ? (
        <XIcon width={16} height={16} />
      ) : (
        <CheckCheck width={16} height={16} />
      )}
      {text}
    </span>
  );

  return (
    <ENSNodeProvider config={ensNodeReactConfig}>
      <TooltipProvider delayDuration={250} skipDelayDuration={0}>
        <GenericTooltip content={<TooltipContent verification={verification} />}>
          {badgeContent}
        </GenericTooltip>
      </TooltipProvider>
    </ENSNodeProvider>
  );
}

export function MatrixBadgeLoading() {
  return (
    <div className="w-fit flex flex-row flex-nowrap justify-center items-center gap-[6px] pl-[10px] pr-3 py-1 rounded-full">
      <Skeleton className="h-4 w-4 rounded-full bg-gray-300" />
      <Skeleton className="h-4 w-16 bg-gray-300" />
    </div>
  );
}
