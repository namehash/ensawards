import { FetchAndDisplayAdvocateProfile } from "@/components/ens-advocates/details-page-components/FetchAndDisplayAdvocateProfile.tsx";
import { FetchAndDisplayAdvocateReferrals } from "@/components/ens-advocates/details-page-components/FetchAndDisplayAdvocateReferrals.tsx";
import type { EnsAdvocateDetailsPageProps } from "@/components/ens-advocates/details-page-components/advocate-profile/types.ts";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { getENSNodeUrl } from "@/utils/env";
import { ENSNodeProvider, createConfig } from "@ensnode/ensnode-react";
import { useMemo } from "react";

export function EnsAdvocateDetailsPageProvider({ address }: EnsAdvocateDetailsPageProps) {
  const ensNodeUrl = getENSNodeUrl();
  const config = useMemo(() => createConfig({ url: ensNodeUrl }), [ensNodeUrl]);

  return (
    <ENSNodeProvider
      config={config}
      queryClientOptions={{
        defaultOptions: { queries: { staleTime: 30 * 1000 } },
      }}
    >
      <TooltipProvider delayDuration={200} skipDelayDuration={0}>
        <div className="w-full h-fit box-border flex flex-col justify-start items-center gap-6 sm:gap-10">
          <FetchAndDisplayAdvocateProfile address={address} />
          <FetchAndDisplayAdvocateReferrals recordsPerPage={5} address={address} />
        </div>
      </TooltipProvider>
    </ENSNodeProvider>
  );
}
