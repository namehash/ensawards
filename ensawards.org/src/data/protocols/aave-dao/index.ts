import { AaveDaoIcon } from "@/components/atoms/icons/ens-integrating-entities/dao-protocols/AaveDaoIcon.tsx";
import { AaveProject } from "@/data/projects/aave";
import { ProtocolTypes } from "@/types/bestPractices.ts";
import type { DAOProtocol } from "@/types/protocols.ts";
import { DAOProtocolIds } from "@/types/protocols.ts";

export const AaveDao: DAOProtocol = {
  id: DAOProtocolIds.AaveDao,
  slug: "aave",
  protocolType: ProtocolTypes.DAO,
  project: AaveProject,
  name: "Aave DAO",
  description:
    "The Aave DAO provides governance to DeFi's largest lending network: Aave, where you can earn, borrow, save, and swap with millions of users.",
  icon: AaveDaoIcon,
  socials: {
    website: new URL("https://aave.com/"),
    twitter: new URL("https://x.com/aave"),
    ens: "aave.eth",
  },
  ogImagePath: "https://ensawards.org/protocol-aave-dao_og_image.png",
  twitterOgImagePath: "https://ensawards.org/protocol-aave-dao_twitter_og_image.png",
};
