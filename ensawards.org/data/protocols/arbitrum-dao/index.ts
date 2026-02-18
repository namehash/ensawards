import { ProtocolTypes } from "../../ens-best-practices/types.ts";
import ArbitrumProject from "../../projects/arbitrum";
import type { DAOProtocol } from "../types.ts";
import { DAOProtocolIds } from "../types.ts";
import ArbitrumIcon from "./icon.tsx";

const ArbitrumDao: DAOProtocol = {
  id: DAOProtocolIds.ArbitrumDao,
  slug: "arbitrum",
  protocolType: ProtocolTypes.DAO,
  project: ArbitrumProject,
  name: "Arbitrum DAO",
  description:
    "The Arbitrum DAO provides governance for Arbitrum, a unified blockchain for everyone, where ideas thrive and boundaries fade.",
  icon: ArbitrumIcon,
  socials: {
    website: new URL("https://arbitrum.foundation/"),
    twitter: new URL("https://x.com/arbitrum"),
  },
  ogImagePath: "https://ensawards.org/data/protocols/arbitrum-dao/og.png",
  twitterOgImagePath: "https://ensawards.org/data/protocols/arbitrum-dao/twitter-og.png",
};

export default ArbitrumDao;
