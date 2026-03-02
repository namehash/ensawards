import { ProtocolTypes } from "../../ens-best-practices/types.ts";
import CorkProject from "../../projects/cork";
import { defineProtocol } from "../registry.ts";
import { type DeFiProtocol, DeFiProtocolIds } from "../types.ts";
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
    website: new URL("https://www.cork.tech/"),
    ens: "cork.eth",
  },
  ogImagePath: "https://ensawards.org/data/protocols/cork-defi/og.png",
  twitterOgImagePath: "https://ensawards.org/data/protocols/cork-defi/twitter-og.png",
};

defineProtocol(CorkDeFi);

export default CorkDeFi;
