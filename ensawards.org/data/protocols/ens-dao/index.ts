// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying protocols

import { asInterpretedName } from "enssdk";

import ENSProject from "../../projects/ens";
import { defineProtocol } from "../registry.ts";
import { type DAOProtocol, DAOProtocolIds, ProtocolTypes } from "../types.ts";
import EnsIcon from "./icon.tsx";

const ENSDao: DAOProtocol = {
  id: DAOProtocolIds.EnsDao,
  protocolSlug: "ens-dao",
  protocolType: ProtocolTypes.DAO,
  project: ENSProject,
  name: "ENS DAO",
  description:
    "The Ethereum Name Service (ENS) is a decentralized domain name system. The ENS DAO governs the ENS protocol and treasury.",
  icon: EnsIcon,
  socials: {
    website: new URL("https://ensdao.org"),
    twitter: new URL("https://x.com/ENS_DAO"),
    ens: asInterpretedName("ensdao.eth"),
  },
  ogImagePath: "ens-dao/og.png",
  twitterOgImagePath: "ens-dao/twitter-og.png",
};

defineProtocol(ENSDao);

export default ENSDao;
