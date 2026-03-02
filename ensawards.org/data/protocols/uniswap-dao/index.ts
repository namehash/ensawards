// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying protocols

import contributors from "data/contributors/index.ts";

import { ProtocolTypes } from "../../ens-best-practices/types.ts";
import UniswapProject from "../../projects/uniswap";
import { defineProtocol } from "../registry.ts";
import { type DAOProtocol, DAOProtocolIds } from "../types.ts";
import UniswapIcon from "./icon.tsx";

const UniswapDao: DAOProtocol = {
  id: DAOProtocolIds.UniswapDao,
  protocolSlug: "uniswap-dao",
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
  ogImagePath: "https://ensawards.org/data/protocols/uniswap-dao/og.png",
  twitterOgImagePath: "https://ensawards.org/data/protocols/uniswap-dao/twitter-og.png",
  contributors: [contributors.y3drk, contributors.lightwalker, contributors.theloner],
};

defineProtocol(UniswapDao);

export default UniswapDao;
