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
    website: new URL("https://arbitrum.foundation/"),
    twitter: new URL("https://x.com/arbitrum"),
  },
  ogImagePath: "https://ensawards.org/data/protocols/arbitrum-dao/og.png",
  twitterOgImagePath: "https://ensawards.org/data/protocols/arbitrum-dao/twitter-og.png",
  contributors: [],
};

defineProtocol(ArbitrumDao);

export default ArbitrumDao;
