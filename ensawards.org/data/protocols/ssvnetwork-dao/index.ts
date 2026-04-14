// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying protocols

import { ProtocolTypes } from "../../ens-best-practices/types.ts";
import SSVNetworkProject from "../../projects/ssvnetwork";
import { defineProtocol } from "../registry.ts";
import { type DAOProtocol, DAOProtocolIds } from "../types.ts";
import SSVNetworkIcon from "./icon.tsx";

const SSVNetworkDao: DAOProtocol = {
  id: DAOProtocolIds.SSVNetworkDao,
  protocolSlug: "ssvnetwork-dao",
  protocolType: ProtocolTypes.DAO,
  project: SSVNetworkProject,
  name: "SSV DAO",
  description:
    "SSV is the largest DVT staking protocol on Ethereum — securing and decentralizing the network",
  icon: SSVNetworkIcon,
  socials: {
    website: new URL("https://ssv.network"),
    twitter: new URL("https://x.com/ssv_network"),
    ens: "ssvnetwork.eth",
  },
  ogImagePath: "ssvnetwork-dao/og.png",
  twitterOgImagePath: "ssvnetwork-dao/twitter-og.png",
};

defineProtocol(SSVNetworkDao);

export default SSVNetworkDao;
