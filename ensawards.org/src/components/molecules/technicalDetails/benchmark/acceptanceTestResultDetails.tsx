import { RelativeTime } from "@namehash/namehash-ui";
import type { AcceptanceTestBenchmark } from "data/acceptance-tests/types";
import { useMemo } from "react";

import { createEnsNodeProviderOptions, EnsNodeProvider } from "@ensnode/ensnode-react";

import { DisplayContributorIdentity } from "@/components/atoms/cards/ContributorsCard";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getENSNodeUrl } from "@/utils/env";
import { cn } from "@/utils/tailwindClassConcatenation";

export interface AcceptanceTestResultFooterProps {
  acceptanceTestBenchmark: AcceptanceTestBenchmark;
}

export const AcceptanceTestResultFooter = ({
  acceptanceTestBenchmark,
}: AcceptanceTestResultFooterProps) => {
  const lastBenchmarkUpdate = acceptanceTestBenchmark.contributions.reduce(
    (latest, contribution) => {
      return contribution.lastUpdated > latest.lastUpdated ? contribution : latest;
    },
    acceptanceTestBenchmark.contributions[0],
  );

  const ensNodeProviderOptions = useMemo(
    () =>
      createEnsNodeProviderOptions({
        url: getENSNodeUrl(),
      }),
    [],
  );

  return (
    <EnsNodeProvider options={ensNodeProviderOptions}>
      <TooltipProvider delayDuration={250} skipDelayDuration={0}>
        <div className="w-full flex flex-row flex-wrap justify-between items-center gap-5">
          <p className="w-fit">
            Last updated{" "}
            <span className="text-black font-medium">
              <RelativeTime enforcePast timestamp={lastBenchmarkUpdate.lastUpdated} />
            </span>
          </p>
          <div className="w-fit flex flex-row flex-nowrap justify-end items-center gap-3">
            by
            <DisplayContributorIdentity contributor={lastBenchmarkUpdate.from} />
          </div>
        </div>
      </TooltipProvider>
    </EnsNodeProvider>
  );
};

export const AcceptanceTestResultFooterLoading = () => {
  const loadingStateStyles = "animate-pulse bg-gray-200 rounded-sm";
  return (
    <div className="w-full flex flex-row flex-wrap justify-between items-center gap-5">
      <div className="w-fit flex flex-row items-center justify-start gap-2">
        Last updated <div className={cn(loadingStateStyles, "w-[95px] h-4")} />
      </div>
      <div className="w-fit flex flex-row flex-nowrap justify-end items-center gap-3">
        by
        <div className={cn(loadingStateStyles, "w-10 h-10 rounded-full")} />
      </div>
    </div>
  );
};

export const AcceptanceTestResultNotes = ({
  acceptanceTestBenchmark,
}: {
  acceptanceTestBenchmark: AcceptanceTestBenchmark;
}) => <>{acceptanceTestBenchmark.notes}</>;
