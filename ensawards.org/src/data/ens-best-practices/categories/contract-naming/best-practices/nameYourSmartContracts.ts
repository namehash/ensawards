import type { BestPracticeProtocol } from "@/types/bestPractices.ts";
import { BestPracticeTypes, ProtocolTypes } from "@/types/bestPractices.ts";

export const nameYourSmartContracts: BestPracticeProtocol = {
  type: BestPracticeTypes.Protocol,
  id: "name-your-smart-contracts",
  slug: "name-your-smart-contracts",
  name: "Name your smart contracts",
  description: "Upgrade security and UX when users interact with your smart contracts.",
  categoryName: "Contract naming",
  categorySlug: "contract-naming",
  appliesTo: [ProtocolTypes.DAO, ProtocolTypes.DeFi],
  technicalDetails: {
    main: {
      header: "Technical Details",
      content:
        "Contracts should be [assigned ENS names](https://docs.ens.domains/web/naming-contracts/) during or after deployment. " +
        "For deployment-time naming, see the [Enscribe documentation](https://www.enscribe.xyz/docs/introduction/naming-contracts) which goes into greater detail on the process. " +
        "For post-deployment naming we recommend using the [Enscribe App](https://app.enscribe.xyz/). " +
        "Note that setting a [primary name](https://docs.ens.domains/web/reverse) (reverse resolution) requires the contract to implement [Ownable](https://docs.openzeppelin.com/contracts/5.x/access-control#ownership-and-ownable). " +
        "Contracts without Ownable can still have forward resolution configured (`name → address`) but cannot set a reverse record (`address → name`).",
    },
    sides: [
      {
        header: "Additional Details",
        content:
          "Assigning ENS names to contracts gives users confidence they're interacting with the correct contract. " +
          "This is particularly valuable for security, as users can confirm `uniswap.eth` instead of validating a long hexadecimal address. " +
          "If you've deployed contracts without Ownable, you can still improve UX by configuring forward resolution, though full naming (with reverse resolution) provides the best user experience.",
      },
    ],
  },
};
