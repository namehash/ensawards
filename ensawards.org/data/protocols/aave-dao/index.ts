import { ProtocolTypes } from "@/types/bestPractices.ts";
import type { DAOProtocol } from "@/types/protocols.ts";
import { DAOProtocolIds } from "@/types/protocols.ts";

import AaveProject from "../../projects/aave";
import AaveIcon from "./icon.tsx";

const AaveDao: DAOProtocol = {
  id: DAOProtocolIds.AaveDao,
  slug: "aave",
  protocolType: ProtocolTypes.DAO,
  project: AaveProject,
  name: "Aave DAO",
  description:
    "The Aave DAO provides governance to DeFi's largest lending network: Aave, where you can earn, borrow, save, and swap with millions of users.",
  icon: AaveIcon,
  socials: {
    website: new URL("https://aave.com/"),
    twitter: new URL("https://x.com/aave"),
    ens: "aave.eth",
  },
  ogImagePath: "https://ensawards.org/data/protocols/aave-dao/og.png",
  twitterOgImagePath: "https://ensawards.org/data/protocols/aave-dao/twitter-og.png",
};

export default AaveDao;
