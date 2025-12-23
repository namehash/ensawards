import { GenericTooltip } from "@/components/atoms/GenericTooltip.tsx";
import { AbsoluteTime } from "@/components/atoms/datetime/AbsoluteTime.tsx";
import { ResolveAndDisplayIdentity } from "@/components/atoms/identity";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { type AppBenchmark, BenchmarkResult } from "@/types/apps.ts";
import { getENSNodeUrl } from "@/utils/env";
import { DEFAULT_ENSAWARDS_ENS_NAMESPACE } from "@/utils/namespace.ts";
import { ENSNodeProvider, createConfig } from "@ensnode/ensnode-react";
import { ENSNodeClient, buildUnresolvedIdentity } from "@ensnode/ensnode-sdk";
import { X as FailIcon, Check as PartialPassIcon, CheckCheck as PassIcon } from "lucide-react";
import { cn } from "../../../utils/tailwindClassConcatenation";

export interface BenchmarkResultBadgeProps {
  benchmark: AppBenchmark;
  className?: string;
  isLoading?: boolean;
}

const TooltipContent = ({ benchmark }: { benchmark: AppBenchmark }) => {
  const identity = buildUnresolvedIdentity(
    benchmark.benchmarkedBy.address,
    DEFAULT_ENSAWARDS_ENS_NAMESPACE,
    benchmark.benchmarkedBy.chainId,
  );

  return (
    <div className="flex flex-col gap-3 p-1">
      <div className="flex flex-col gap-1">
        <p className="text-muted-foreground text-xs">Benchmarked by</p>
        <ResolveAndDisplayIdentity
          identity={identity}
          namespaceId={DEFAULT_ENSAWARDS_ENS_NAMESPACE}
          withLink={true}
          withTooltip={false}
          withAvatar={true}
          className="text-blue-400 hover:underline hover:underline-offset-[25%]"
        />
      </div>
      <p className="text-xs text-muted-foreground">
        on{" "}
        <AbsoluteTime
          timestamp={benchmark.benchmarkedAt}
          options={{
            year: "numeric",
            month: "long",
            day: "numeric",
          }}
        />
      </p>
    </div>
  );
};

const client = new ENSNodeClient({
  url: getENSNodeUrl(),
});

const ensNodeReactConfig = createConfig({
  url: getENSNodeUrl(),
});

const getResultIcon = (result: BenchmarkResult) => {
  switch (result) {
    case "Pass":
      return <PassIcon width={16} height={16} />;
    case "Partial pass":
      return <PartialPassIcon width={16} height={16} />;
    case "Fail":
      return <FailIcon width={16} height={16} />;
  }
};

export function BenchmarkResultBadge({ benchmark, className }: BenchmarkResultBadgeProps) {
  const badgeContent = (
    <span
      className={cn(
        "w-fit flex flex-row flex-nowrap justify-center items-center gap-1.5 pl-2.5 pr-3 " +
          "py-1 rounded-full text-xs leading-normal font-medium hover:opacity-80 cursor-default",
        className,
      )}
    >
      {getResultIcon(benchmark.result)}
      {benchmark.result}
    </span>
  );

  return (
    <ENSNodeProvider config={ensNodeReactConfig}>
      <TooltipProvider delayDuration={250} skipDelayDuration={0}>
        <GenericTooltip content={<TooltipContent benchmark={benchmark} />}>
          {badgeContent}
        </GenericTooltip>
      </TooltipProvider>
    </ENSNodeProvider>
  );
}
