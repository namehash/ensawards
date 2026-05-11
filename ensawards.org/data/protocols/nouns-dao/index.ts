// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying protocols

import { asInterpretedName } from "enssdk";

import NounsProject from "../../projects/nouns";
import { defineProtocol } from "../registry.ts";
import { type DAOProtocol, DAOProtocolIds, ProtocolTypes } from "../types.ts";
import NounsIcon from "./icon.tsx";

const NounsDao: DAOProtocol = {
  id: DAOProtocolIds.NounsDao,
  protocolSlug: "nouns-dao",
  protocolType: ProtocolTypes.DAO,
  project: NounsProject,
  name: "Nouns DAO",
  description:
    "Nouns is a community-owned brand that makes a positive impact by funding ideas and fostering collaboration.",
  icon: NounsIcon,
  socials: {
    website: new URL("https://nouns.wtf"),
    twitter: new URL("https://x.com/nounsdao"),
    ens: asInterpretedName("nouns.eth"),
  },
  ogImagePath: "nouns-dao/og.png",
  twitterOgImagePath: "nouns-dao/twitter-og.png",
};

defineProtocol(NounsDao);

export default NounsDao;
