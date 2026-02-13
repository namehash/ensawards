import { LiquityIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/LiquityIcon.tsx";
import { LiquityProject } from "@/data/projects/liquity";
import { ProtocolTypes } from "@/types/bestPractices.ts";
import type { DeFiProtocol } from "@/types/protocols.ts";
import { DeFiProtocolIds } from "@/types/protocols.ts";

export const LiquityDeFiProtocol: DeFiProtocol = {
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
  ogImagePath: "https://ensawards.org/protocol-liquity-defi_og_image.png",
  twitterOgImagePath: "https://ensawards.org/protocol-liquity-defi_twitter_og_image.png",
};
