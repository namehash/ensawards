import { ResolveAndDisplayIdentity } from "@/components/atoms/identity";
import { getENSNodeUrl } from "@/utils/env";
import { ENSNodeProvider, createConfig } from "@ensnode/ensnode-react";
import { buildUnresolvedIdentity, ENSNamespaceIds, type AccountId } from "@ensnode/ensnode-sdk";

interface AuthorDisplayProps {
  author: AccountId;
  className?: string;
}

const ensNodeReactConfig = createConfig({
  url: getENSNodeUrl(),
});

export function AuthorDisplay({ author, className }: AuthorDisplayProps) {
  const identity = buildUnresolvedIdentity(author.address, ENSNamespaceIds.Mainnet, author.chainId);

  return (
    <ENSNodeProvider config={ensNodeReactConfig}>
      <ResolveAndDisplayIdentity
        identity={identity}
        namespaceId={ENSNamespaceIds.Mainnet}
        withAvatar={true}
        withLink={true}
        withTooltip={false}
        className={className}
      />
    </ENSNodeProvider>
  );
}
