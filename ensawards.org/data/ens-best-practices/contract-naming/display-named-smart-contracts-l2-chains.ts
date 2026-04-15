// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying best practices

import contributors from "data/contributors/index.ts";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { AppTypes } from "../../apps/types.ts";
import { defineBestPractice } from "../registry.ts";
import { type BestPracticeApp, BestPracticeTypes } from "../types.ts";
import ContractNamingCategory from ".";

const technicalDetailsMainContent = `When users interact with a contract on an L2 chain, use the 
[ENSIP-19](https://docs.ens.domains/ensip/19) standard to lookup the primary name of the contract. 
ENSIP-19 provides chain-specific primary names for L2 networks (including Optimism, Arbitrum, Base, 
Linea, and Scroll), with an automatic fallback to a default primary name (defined on mainnet) if no 
chain-specific primary name is defined. There are several libraries to choose from that support 
ENSIP-19 and all ENS best practices:
- [ensnode-sdk](https://github.com/namehash/ensnode/blob/main/packages/ensnode-sdk/README.md) (v1.0.0+)
- [ensnode-react](https://github.com/namehash/ensnode/blob/main/packages/ensnode-react/README.md) (v1.0.0+)
- [Viem](https://viem.sh/docs/ens/actions/getEnsName#chain-specific-resolution) (v2.35.0+)
- [Wagmi](https://wagmi.sh/react/api/hooks/useEnsName#chainid) (v2.18.0+)
Libraries and tools for additional languages or frameworks can be found in the [ENS documentation](https://docs.ens.domains/web/libraries).`;

const technicalDetailsAdditionalContent = `ENSIP-19 enables primary names to be set on any chain. 
Contracts deployed to an L2 chain benefit from this, as the contract can then configure its name 
directly on the chain it is deployed to without any need to update state on mainnet. If a contract 
has an ENS name, you can use the contract's ENS profile to power additional UX improvements such as 
displaying the contract's avatar, metadata, audit information, and more. More information can be found 
at [this ENSIP](https://discuss.ens.domains/t/ensip-proposal-contract-metadata-standard-and-text-records/21397).`;

const displayNamedSmartContractsL2: BestPracticeApp = {
  type: BestPracticeTypes.App,
  id: "display-named-smart-contracts-l2-chains",
  bestPracticeSlug: "display-named-smart-contracts-l2-chains",
  name: "Display named smart contracts on L2 chains",
  description:
    "Display ENS names instead of addresses when users interact with named smart contracts on L2 chains.",
  category: ContractNamingCategory,
  appliesTo: [AppTypes.Wallet, AppTypes.Explorer],
  technicalDetails: {
    main: {
      header: "ENS best practice details",
      content: technicalDetailsMainContent,
    },
    sides: [
      {
        header: "Additional Details",
        content: technicalDetailsAdditionalContent,
      },
    ],
  },
  contributions: [
    { from: contributors.lightwalker, lastUpdated: parseTimestamp("2025-11-03T11:25:00.000Z") },
    { from: contributors.stevedylan, lastUpdated: parseTimestamp("2025-12-12T14:51:00.000Z") },
  ],
};

defineBestPractice(displayNamedSmartContractsL2);

export default displayNamedSmartContractsL2;
