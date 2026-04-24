// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying protocols

import CorkProject from "../../projects/cork";
import { defineProtocol } from "../registry.ts";
import { type DeFiProtocol, DeFiProtocolIds, ProtocolTypes } from "../types.ts";
import CorkIcon from "./icon.tsx";

const CorkDeFi: DeFiProtocol = {
  id: DeFiProtocolIds.Cork,
  protocolSlug: "cork-defi",
  protocolType: ProtocolTypes.DeFi,
  project: CorkProject,
  name: "Cork",
  description:
    "Programmable risk layer for onchain assets such as vault tokens, yield-bearing stablecoins, LSTs and RWAs.",
  icon: CorkIcon,
  socials: {
    twitter: new URL("https://x.com/Corkprotocol"),
    website: new URL("https://www.cork.tech"),
    ens: "cork.eth",
  },
  ogImagePath: "cork-defi/og.png",
  twitterOgImagePath: "cork-defi/twitter-og.png",
};

defineProtocol(CorkDeFi);

export default CorkDeFi;
