// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying protocols

import { ProtocolTypes } from "../../ens-best-practices/types.ts";
import ArbitrumProject from "../../projects/arbitrum";
import { defineProtocol } from "../registry.ts";
import { type DAOProtocol, DAOProtocolIds } from "../types.ts";
import ArbitrumIcon from "./icon.tsx";

const ArbitrumDao: DAOProtocol = {
  id: DAOProtocolIds.ArbitrumDao,
  protocolSlug: "arbitrum-dao",
  protocolType: ProtocolTypes.DAO,
  project: ArbitrumProject,
  name: "Arbitrum DAO",
  description:
    "The Arbitrum DAO provides governance for Arbitrum, a unified blockchain for everyone, where ideas thrive and boundaries fade.",
  icon: ArbitrumIcon,
  socials: {
    website: new URL("https://arbitrum.foundation"),
    twitter: new URL("https://x.com/arbitrum"),
    ens: "arbfoundation.eth",
  },
  ogImagePath: "arbitrum-dao/og.png",
  twitterOgImagePath: "arbitrum-dao/twitter-og.png",
};

defineProtocol(ArbitrumDao);

export default ArbitrumDao;
