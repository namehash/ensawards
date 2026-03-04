// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md for additional advice
// on adding and modifying protocols

import { ProtocolTypes } from "../../ens-best-practices/types.ts";
import UniswapProject from "../../projects/uniswap";
import { defineProtocol } from "../registry.ts";
import { type DeFiProtocol, DeFiProtocolIds } from "../types.ts";
import UniswapIcon from "./icon.tsx";

const UniswapDeFi: DeFiProtocol = {
  id: DeFiProtocolIds.Uniswap,
  protocolSlug: "uniswap-defi",
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
  ogImagePath: "https://ensawards.org/data/protocols/uniswap-defi/og.png",
  twitterOgImagePath: "https://ensawards.org/data/protocols/uniswap-defi/twitter-og.png",
};

defineProtocol(UniswapDeFi);

export default UniswapDeFi;
