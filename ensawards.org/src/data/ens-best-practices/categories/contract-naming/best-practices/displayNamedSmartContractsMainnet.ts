import { AppTypes } from "@/types/apps.ts";
import type { BestPracticeApp } from "@/types/bestPractices.ts";
import { BestPracticeTypes } from "@/types/bestPractices.ts";

export const displayNamedSmartContractsMainnet: BestPracticeApp = {
  type: BestPracticeTypes.App,
  id: "display-named-smart-contracts-mainnet",
  slug: "display-named-smart-contracts-mainnet",
  name: "Display named smart contracts on Ethereum mainnet",
  description:
    "Display ENS names instead of addresses when users interact with named smart contracts on Ethereum mainnet.",
  categoryName: "Contract naming",
  categorySlug: "contract-naming",
  appliesTo: [AppTypes.Wallet, AppTypes.Explorer],
  technicalDetails: {
    main: {
      header: "Technical Details",
      content:
        "Looking up the name of a smart contract on Ethereum mainnet uses the same process as looking up the name of any other account. " +
        "There are a variety of libraries capable of looking up the [primary name](https://docs.ens.domains/web/reverse) of a contract address according to all ENS best practices:\n" +
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
          "If a contract has an ENS name, you can use its ENS profile to power additional UX improvements such as avatars, metadata, audit information, and more. " +
          "More information can be found at the [ENSIP Proposal](https://discuss.ens.domains/t/ensip-proposal-contract-metadata-standard-and-text-records/21397).",
      },
    ],
  },
};
