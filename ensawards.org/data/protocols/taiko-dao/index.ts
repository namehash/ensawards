import { ProtocolTypes } from "../../ens-best-practices/types.ts";
import TaikoProject from "../../projects/taiko";
import type { DAOProtocol } from "../types.ts";
import { DAOProtocolIds } from "../types.ts";
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
    website: new URL("https://dao.taiko.xyz/"),
    twitter: new URL("https://x.com/taikoxyz"),
    ens: "taiko.eth",
  },
  ogImagePath: "https://ensawards.org/data/protocols/taiko-dao/og.png",
  twitterOgImagePath: "https://ensawards.org/data/protocols/taiko-dao/twitter-og.png",
};

export default TaikoDao;
