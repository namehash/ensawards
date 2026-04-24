// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying protocols

import TaikoProject from "../../projects/taiko";
import { defineProtocol } from "../registry.ts";
import { type DAOProtocol, DAOProtocolIds, ProtocolTypes } from "../types.ts";
import TaikoIcon from "./icon.tsx";

const TaikoDao: DAOProtocol = {
  id: DAOProtocolIds.TaikoDao,
  protocolSlug: "taiko-dao",
  protocolType: ProtocolTypes.DAO,
  project: TaikoProject,
  name: "Taiko DAO",
  description:
    "Taiko DAO, created in collaboration with Aragon, plays a critical role in governing Taiko in a decentralized way.",
  icon: TaikoIcon,
  socials: {
    website: new URL("https://dao.taiko.xyz"),
    twitter: new URL("https://x.com/taikoxyz"),
    ens: "taiko.eth",
  },
  ogImagePath: "taiko-dao/og.png",
  twitterOgImagePath: "taiko-dao/twitter-og.png",
};

defineProtocol(TaikoDao);

export default TaikoDao;
