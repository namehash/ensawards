import { ArbitrumDaoIcon } from "@/components/atoms/icons/ens-integrating-entities/dao-protocols/ArbitrumDaoIcon.tsx";
import { ArbitrumProject } from "@/data/projects/arbitrum";
import { ProtocolTypes } from "@/types/bestPractices.ts";
import type { DAOProtocol } from "@/types/protocols.ts";
import { DAOProtocolIds } from "@/types/protocols.ts";

export const ArbitrumDao: DAOProtocol = {
  id: DAOProtocolIds.ArbitrumDao,
  slug: "arbitrum",
  protocolType: ProtocolTypes.DAO,
  project: ArbitrumProject,
  name: "Arbitrum DAO",
  description:
    "The Arbitrum DAO provides governance for Arbitrum, a unified blockchain for everyone, where ideas thrive and boundaries fade.",
  icon: ArbitrumDaoIcon,
  socials: {
    website: new URL("https://arbitrum.foundation/"),
    twitter: new URL("https://x.com/arbitrum"),
  },
  ogImagePath: "https://ensawards.org/protocol-arbitrum-dao_og_image.png",
  twitterOgImagePath: "https://ensawards.org/protocol-arbitrum-dao_twitter_og_image.png",
};
