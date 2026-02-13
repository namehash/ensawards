import { UniswapIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/UniswapIcon.tsx";
import { ProtocolTypes } from "@/types/bestPractices.ts";
import type { DAOProtocol } from "@/types/protocols.ts";
import { DAOProtocolIds } from "@/types/protocols.ts";

import { UniswapProject } from "../../projects/uniswap";

//TODO: The way I understood our previous talks we do not want to do that, but just to confirm:
// WE DO NOT WANT A COMMON DIRECTORY FOR PROTOCOLS THAT HAVE BOTH THE DAO AND THE DEFI VARIANT:
// -----------
// example:
// /uniswap
//     /dao
//         index.ts
//     /defi
//         index.ts
// ---------------
// I understand that we don't want that and the goal is to keep them separate,
// like this:
// /uniswap-dao
//     index.ts
// /uniswap-defi
//     index.ts
// ---------------
// Let me know which option is better and I'll adjust the code to satisfy it
export const UniswapDao: DAOProtocol = {
  id: DAOProtocolIds.UniswapDao,
  slug: "uniswap",
  protocolType: ProtocolTypes.DAO,
  project: UniswapProject,
  name: "Uniswap DAO",
  description:
    "Uniswap governance is a collective of companies, communities, and token holders working together to steward the future of the Uniswap protocol.",
  icon: UniswapIcon,
  socials: {
    website: new URL("https://www.uniswapfoundation.org/"),
    twitter: new URL("https://x.com/UniswapFND"),
    ens: "uniswap.eth",
  },
  ogImagePath: "https://ensawards.org/protocol-uniswap-dao_og_image.png",
  twitterOgImagePath: "https://ensawards.org/protocol-uniswap-dao_twitter_og_image.png",
};
