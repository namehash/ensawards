import {
  EnsAdvocateDetailsPage,
  type EnsAdvocateDetailsPageProps,
} from "@/components/ens-advocates/EnsAdvocateDetailsPage.tsx";
import { getENSNodeUrl } from "@/utils/env";
import { ENSNodeProvider, createConfig } from "@ensnode/ensnode-react";
import { useMemo } from "react";

export function EnsAdvocateDetailsPageProvider({ name }: EnsAdvocateDetailsPageProps) {
  const ensNodeUrl = getENSNodeUrl();
  const config = useMemo(() => createConfig({ url: ensNodeUrl }), [ensNodeUrl]);

  return (
    <ENSNodeProvider
      config={config}
      queryClientOptions={{
        defaultOptions: { queries: { staleTime: 30 * 1000 } },
      }}
    >
      <EnsAdvocateDetailsPage name={name} />
    </ENSNodeProvider>
  );
}
