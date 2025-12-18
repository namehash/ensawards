import { FetchAndDisplayAdvocateProfile } from "@/components/ens-advocates/details-page-components/FetchAndDisplayAdvocateProfile.tsx";
import { FetchAndDisplayAdvocateReferrals } from "@/components/ens-advocates/details-page-components/FetchAndDisplayAdvocateReferrals.tsx";
import type { EnsAdvocateDetailsPageProps } from "@/components/ens-advocates/details-page-components/advocate-profile/types.ts";
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
      <div className="w-full h-fit box-border flex flex-col justify-start items-center gap-6 sm:gap-10">
        <FetchAndDisplayAdvocateProfile address={address} />
        <FetchAndDisplayAdvocateReferrals address={address} />
      </div>
    </ENSNodeProvider>
  );
}
