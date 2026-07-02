// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import UniswapProject from "data/projects/uniswap";
import { asInterpretedName } from "enssdk";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import UniswapIcon from "./icon.tsx";

const UniswapWallet: App = {
  id: "uniswap-wallet",
  appSlug: "uniswap-wallet",
  type: AppTypes.Wallet,
  project: UniswapProject,
  name: "Uniswap Wallet",
  description:
    "Self-custodial wallet for swapping, sending, and managing tokens and NFTs across Ethereum and other chains, with built-in access to the Uniswap protocol.",
  socials: {
    website: new URL("https://wallet.uniswap.org/"),
    twitter: new URL("https://x.com/Uniswap"),
    ens: asInterpretedName("uniswap.eth"),
  },
  icon: UniswapIcon,
  // TODO: Add OG images
};

defineApp(UniswapWallet);

export default UniswapWallet;
