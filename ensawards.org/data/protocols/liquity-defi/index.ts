// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying protocols

import LiquityProject from "../../projects/liquity";
import { defineProtocol } from "../registry.ts";
import { type DeFiProtocol, DeFiProtocolIds, ProtocolTypes } from "../types.ts";
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
    website: new URL("https://www.liquity.org"),
    twitter: new URL("https://x.com/LiquityProtocol"),
    ens: "liquity-protocol.eth",
  },
  ogImagePath: "liquity-defi/og.png",
  twitterOgImagePath: "liquity-defi/twitter-og.png",
};

defineProtocol(LiquityDeFi);

export default LiquityDeFi;
