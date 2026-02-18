import { ProtocolTypes } from "../../ens-best-practices/types.ts";
import LiquityProject from "../../projects/liquity";
import type { DeFiProtocol } from "../types.ts";
import { DeFiProtocolIds } from "../types.ts";
import LiquityIcon from "./icon.tsx";

const LiquityDeFi: DeFiProtocol = {
  id: DeFiProtocolIds.Liquity,
  slug: "liquity",
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
};

export default LiquityDeFi;
