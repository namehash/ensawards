import { ProtocolTypes } from "../../ens-best-practices/types.ts";
import NounsProject from "../../projects/nouns";
import type { DAOProtocol } from "../types.ts";
import { DAOProtocolIds } from "../types.ts";
import NounsIcon from "./icon.tsx";

const NounsDao: DAOProtocol = {
  id: DAOProtocolIds.NounsDao,
  slug: "nouns",
  protocolType: ProtocolTypes.DAO,
  project: NounsProject,
  name: "Nouns DAO",
  description:
    "Nouns is a community-owned brand that makes a positive impact by funding ideas and fostering collaboration.",
  icon: NounsIcon,
  socials: {
    website: new URL("https://nouns.wtf/"),
    twitter: new URL("https://x.com/nounsdao"),
    ens: "nouns.eth",
  },
  ogImagePath: "https://ensawards.org/data/protocols/nouns-dao/og.png",
  twitterOgImagePath: "https://ensawards.org/data/protocols/nouns-dao/twitter-og.png",
};

export default NounsDao;
