// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import CryptoComProject from "data/projects/cryptocom";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import CryptoComIcon from "./icon.tsx";

const CryptoComExchange: App = {
  id: "cryptocom-exchange",
  appSlug: "cryptocom-exchange",
  type: AppTypes.Exchange,
  project: CryptoComProject,
  name: "Crypto.com",
  description:
    "Cryptocurrency exchange for buying, selling, and trading a wide range of digital assets.",
  socials: {
    website: new URL("https://crypto.com"),
    twitter: new URL("https://x.com/cryptocom"),
  },
  icon: CryptoComIcon,
  ogImagePath: "cryptocom-exchange/og.png",
  twitterOgImagePath: "cryptocom-exchange/twitter-og.png",
};

defineApp(CryptoComExchange);

export default CryptoComExchange;
