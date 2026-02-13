import { TaikoIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/TaikoIcon.tsx";
import { TaikoProject } from "@/data/projects/taiko";
import { ProtocolTypes } from "@/types/bestPractices.ts";
import type { DeFiProtocol } from "@/types/protocols.ts";
import { DeFiProtocolIds } from "@/types/protocols.ts";

export const TaikoDeFiProtocol: DeFiProtocol = {
  id: DeFiProtocolIds.Taiko,
  slug: "taiko",
  protocolType: ProtocolTypes.DeFi,
  project: TaikoProject,
  name: "Taiko",
  description:
    "Ethereum-equivalent zkRollup protocol enabling decentralized, permissionless Layer-2 scaling secured by Ethereum.",
  icon: TaikoIcon,
  socials: {
    website: new URL("https://taiko.xyz/"),
    twitter: new URL("https://x.com/taikoxyz"),
    ens: "taiko.eth",
  },
  ogImagePath: "https://ensawards.org/protocol-taiko-defi_og_image.png",
  twitterOgImagePath: "https://ensawards.org/protocol-taiko-defi_twitter_og_image.png",
};
