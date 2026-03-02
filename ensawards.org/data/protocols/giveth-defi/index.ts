// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying protocols

import contributors from "data/contributors/index.ts";

import { ProtocolTypes } from "../../ens-best-practices/types.ts";
import GivethProject from "../../projects/giveth";
import { defineProtocol } from "../registry.ts";
import { type DeFiProtocol, DeFiProtocolIds } from "../types.ts";
import GivethIcon from "./icon.tsx";

const GivethDeFi: DeFiProtocol = {
  id: DeFiProtocolIds.Giveth,
  protocolSlug: "giveth-defi",
  protocolType: ProtocolTypes.DeFi,
  project: GivethProject,
  name: "Giveth",
  description:
    "Crypto donation and public-goods funding platform that enables zero-fee giving and community-driven impact projects.",
  icon: GivethIcon,
  socials: {
    twitter: new URL("https://x.com/giveth"),
    website: new URL("https://giveth.io/"),
    ens: "giv.eth",
  },
  ogImagePath: "https://ensawards.org/data/protocols/giveth-defi/og.png",
  twitterOgImagePath: "https://ensawards.org/data/protocols/giveth-defi/twitter-og.png",
  contributors: [contributors.y3drk, contributors.theloner],
};

defineProtocol(GivethDeFi);

export default GivethDeFi;
