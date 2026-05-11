// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying protocols

import { asInterpretedName } from "enssdk";

import TaikoProject from "../../projects/taiko";
import { defineProtocol } from "../registry.ts";
import { type DeFiProtocol, DeFiProtocolIds, ProtocolTypes } from "../types.ts";
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
    website: new URL("https://taiko.xyz"),
    twitter: new URL("https://x.com/taikoxyz"),
    ens: asInterpretedName("taiko.eth"),
  },
  ogImagePath: "taiko-defi/og.png",
  twitterOgImagePath: "taiko-defi/twitter-og.png",
};

defineProtocol(TaikoDeFi);

export default TaikoDeFi;
