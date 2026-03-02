// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying protocols

import contributors from "data/contributors/index.ts";

import { ProtocolTypes } from "../../ens-best-practices/types.ts";
import LiquityProject from "../../projects/liquity";
import { defineProtocol } from "../registry.ts";
import { type DeFiProtocol, DeFiProtocolIds } from "../types.ts";
import LiquityIcon from "./icon.tsx";

const LiquityDeFi: DeFiProtocol = {
  id: DeFiProtocolIds.Liquity,
  protocolSlug: "liquity-defi",
  protocolType: ProtocolTypes.DeFi,
  project: LiquityProject,
  name: "Liquity",
  description: "DeFi protocol for borrowing against ETH & staked ETH.",
  icon: LiquityIcon,
  socials: {
    website: new URL("https://www.liquity.org/"),
    twitter: new URL("https://x.com/LiquityProtocol"),
    ens: "liquity-protocol.eth",
  },
  ogImagePath: "https://ensawards.org/data/protocols/liquity-defi/og.png",
  twitterOgImagePath: "https://ensawards.org/data/protocols/liquity-defi/twitter-og.png",
  contributors: [contributors.y3drk, contributors.lightwalker, contributors.theloner],
};

defineProtocol(LiquityDeFi);

export default LiquityDeFi;
