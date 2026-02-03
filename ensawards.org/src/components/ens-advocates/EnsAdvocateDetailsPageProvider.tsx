import { useMemo } from "react";
import type { Address } from "viem";

import { createConfig, ENSNodeProvider } from "@ensnode/ensnode-react";

import { FetchAndDisplayAdvocateProfile } from "@/components/ens-advocates/details-page-components/FetchAndDisplayAdvocateProfile.tsx";
import { FetchAndDisplayAdvocateReferrals } from "@/components/ens-advocates/details-page-components/FetchAndDisplayAdvocateReferrals.tsx";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { getENSNodeUrl } from "@/utils/env";

interface EnsAdvocateDetailsPageProviderProps {
  address: Address;
}

export function EnsAdvocateDetailsPageProvider({ address }: EnsAdvocateDetailsPageProviderProps) {
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
          <FetchAndDisplayAdvocateReferrals recordsPerPage={25} address={address} />
        </div>
      </TooltipProvider>
    </ENSNodeProvider>
  );
}
