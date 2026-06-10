// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying protocols

import KlerosProject from "../../projects/kleros";
import { defineProtocol } from "../registry.ts";
import { type DAOProtocol, DAOProtocolIds, ProtocolTypes } from "../types.ts";
import KlerosIcon from "./icon.tsx";

const KlerosDao: DAOProtocol = {
  id: DAOProtocolIds.KlerosDao,
  protocolSlug: "kleros-dao",
  protocolType: ProtocolTypes.DAO,
  project: KlerosProject,
  name: "Kleros DAO",
  description:
    "Decentralized arbitration protocol that uses crowdsourced jurors and game theory to resolve disputes for onchain applications.",
  icon: KlerosIcon,
  socials: {
    website: new URL("https://kleros.io"),
    twitter: new URL("https://x.com/Kleros_io"),
  },
  ogImagePath: "kleros-dao/og.png",
  twitterOgImagePath: "kleros-dao/twitter-og.png",
};

defineProtocol(KlerosDao);

export default KlerosDao;
