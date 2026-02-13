import { AppTypes } from "@/types/apps.ts";
import type { BestPracticeApp } from "@/types/bestPractices.ts";
import { BestPracticeTypes } from "@/types/bestPractices.ts";

export const displayNamedSmartContractsL2: BestPracticeApp = {
  type: BestPracticeTypes.App,
  id: "display-named-smart-contracts-l2-chains",
  slug: "display-named-smart-contracts-l2-chains",
  name: "Display named smart contracts on L2 chains",
  description:
    "Display ENS names instead of addresses when users interact with named smart contracts on L2 chains.",
  categoryName: "Contract naming",
  categorySlug: "contract-naming",
  appliesTo: [AppTypes.Wallet, AppTypes.Explorer],
  technicalDetails: {
    main: {
      header: "Technical Details",
      content:
        "When users interact with a contract on a L2 chain, use the [ENSIP-19](https://docs.ens.domains/ensip/19) standard to lookup the primary name of the contract. " +
        "ENSIP-19 provides chain-specific primary names for L2 networks (including Optimism, Arbitrum, Base, Linea, and Scroll), with an automatic fallback to a default primary name (defined on mainnet) if no chain-specific primary name is defined. " +
        "There are several libraries to choose from that support ENSIP-19 and all ENS best practices: \n" +
        "- [ensnode-sdk](https://github.com/namehash/ensnode/blob/main/packages/ensnode-sdk/README.md) (v1.0.0+)\n" +
        "- [ensnode-react](https://github.com/namehash/ensnode/blob/main/packages/ensnode-react/README.md) (v1.0.0+)\n" +
        "- [Viem](https://viem.sh/docs/ens/actions/getEnsName#chain-specific-resolution) (v2.35.0+)\n" +
        "- [Wagmi](https://wagmi.sh/react/api/hooks/useEnsName#chainid) (v2.18.0+)\n" +
        "Libraries and tools for additional languages or frameworks can be found in the [ENS documentation](https://docs.ens.domains/web/libraries/).",
    },
    sides: [
      {
        header: "Additional Details",
        content:
          "ENSIP-19 enables primary names to be set on any chain. " +
          "Contracts deployed to an L2 chain benefit from this, as the contract can then configure its name directly on the chain it is deployed to without any need to update state on mainnet. " +
          "If a contract has an ENS name, you can use the contract's ENS profile to power additional UX improvements such as displaying the contract's avatar, metadata, audit information, and more. " +
          "More information can be found at [this ENSIP](https://discuss.ens.domains/t/ensip-proposal-contract-metadata-standard-and-text-records/21397).",
      },
    ],
  },
};
