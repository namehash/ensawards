import { ProtocolTypes } from "../../ens-best-practices/types.ts";
import TaikoProject from "../../projects/taiko";
import type { DeFiProtocol } from "../types.ts";
import { DeFiProtocolIds } from "../types.ts";
import TaikoIcon from "./icon.tsx";

const TaikoDeFi: DeFiProtocol = {
  id: DeFiProtocolIds.Taiko,
  protocolSlug: "taiko-defi",
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
  ogImagePath: "https://ensawards.org/data/protocols/taiko-defi/og.png",
  twitterOgImagePath: "https://ensawards.org/data/protocols/taiko-defi/twitter-og.png",
};

export default TaikoDeFi;
