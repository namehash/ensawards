import { useMemo } from "react";

import { createConfig, ENSNodeProvider } from "@ensnode/ensnode-react";

import {
  FetchAndDisplayRegistrarActionsFeed,
  type FetchAndDisplayRegistrarActionsFeedProps,
} from "@/components/referral-awards-program/referrals/FetchAndDisplayRegistrarActionsFeed.tsx";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { getENSNodeUrl } from "@/utils/env";

/**
 * Wrapper of the FetchAndDisplayRegistrarActionsFeed component, granting access to necessary providers
 */
export function LiveReferralFeed({
  recordsPerPage,
  title,
}: FetchAndDisplayRegistrarActionsFeedProps) {
  const config = useMemo(() => createConfig({ url: getENSNodeUrl() }), []);

  return (
    <ENSNodeProvider
      config={config}
      queryClientOptions={{
        defaultOptions: { queries: { staleTime: 30 * 1000 } },
      }}
    >
      <TooltipProvider delayDuration={200} skipDelayDuration={0}>
        <FetchAndDisplayRegistrarActionsFeed recordsPerPage={recordsPerPage} title={title} />
      </TooltipProvider>
    </ENSNodeProvider>
  );
}
