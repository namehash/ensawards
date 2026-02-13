import { UniswapIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/UniswapIcon.tsx";
import { UniswapProject } from "@/data/projects/uniswap";
import { ProtocolTypes } from "@/types/bestPractices.ts";
import type { DeFiProtocol } from "@/types/protocols.ts";
import { DeFiProtocolIds } from "@/types/protocols.ts";

export const UniswapDeFiProtocol: DeFiProtocol = {
  id: DeFiProtocolIds.Uniswap,
  slug: "uniswap",
  protocolType: ProtocolTypes.DeFi,
  project: UniswapProject,
  name: "Uniswap",
  description:
    "Decentralized exchange protocol for swapping crypto tokens via automated market makers.",
  icon: UniswapIcon,
  socials: {
    website: new URL("https://app.uniswap.org/"),
    twitter: new URL("https://x.com/Uniswap"),
    ens: "uniswap.eth",
  },
  ogImagePath: "https://ensawards.org/protocol-uniswap-defi_og_image.png",
  twitterOgImagePath: "https://ensawards.org/protocol-uniswap-defi_twitter_og_image.png",
};
