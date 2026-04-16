// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying best practices

import contributors from "data/contributors/index.ts";
import { ProtocolTypes } from "data/protocols/types.ts";

import { parseTimestamp } from "@ensnode/ensnode-sdk";

import { defineBestPractice } from "../registry.ts";
import { type BestPracticeProtocol, BestPracticeTypes } from "../types.ts";
import ContractNamingCategory from ".";

const technicalDetailsMainContent = `Contracts should be [assigned ENS names](https://docs.ens.domains/web/naming-contracts) during or after deployment. 
For deployment-time naming, see the [Enscribe documentation](https://www.enscribe.xyz/docs/introduction/naming-contracts) which goes into greater detail on the process. 
For post-deployment naming we recommend using the [Enscribe App](https://app.enscribe.xyz). 
Note that setting a [primary name](https://docs.ens.domains/web/reverse) (reverse resolution) requires the contract to implement 
[Ownable](https://docs.openzeppelin.com/contracts/5.x/access-control#ownership-and-ownable). 
Contracts without Ownable can still have forward resolution configured (\`name → address\`) but cannot set a reverse record (\`address → name\`).`;

const technicalDetailsAdditionalContent = `Assigning ENS names to contracts gives users confidence they're interacting with the correct contract. 
This is particularly valuable for security, as users can confirm \`uniswap.eth\` instead of validating a long hexadecimal address. 
If you've deployed contracts without Ownable, you can still improve UX by configuring forward resolution, though full naming (with reverse resolution) provides the best user experience.`;

const nameYourSmartContracts: BestPracticeProtocol = {
  type: BestPracticeTypes.Protocol,
  id: "name-your-smart-contracts",
  bestPracticeSlug: "name-your-smart-contracts",
  name: "Name your smart contracts",
  description: "Upgrade security and UX when users interact with your smart contracts.",
  category: ContractNamingCategory,
  appliesTo: [ProtocolTypes.DAO, ProtocolTypes.DeFi],
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

defineBestPractice(nameYourSmartContracts);

export default nameYourSmartContracts;
