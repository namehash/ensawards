// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying protocols

import UniswapProject from "../../projects/uniswap";
import { defineProtocol } from "../registry.ts";
import { type DAOProtocol, DAOProtocolIds, ProtocolTypes } from "../types.ts";
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
    website: new URL("https://www.uniswapfoundation.org"),
    twitter: new URL("https://x.com/UniswapFND"),
    ens: "uniswap.eth",
  },
  ogImagePath: "uniswap-dao/og.png",
  twitterOgImagePath: "uniswap-dao/twitter-og.png",
};

defineProtocol(UniswapDao);

export default UniswapDao;
