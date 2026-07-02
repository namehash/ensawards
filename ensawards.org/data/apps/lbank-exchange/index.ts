// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import LBankProject from "data/projects/lbank";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import LBankIcon from "./icon.tsx";

const LBankExchange: App = {
  id: "lbank-exchange",
  appSlug: "lbank-exchange",
  type: AppTypes.Exchange,
  project: LBankProject,
  name: "LBank",
  description:
    "Cryptocurrency exchange offering spot and futures trading, with early listings of emerging tokens and staking-based earn products.",
  socials: {
    website: new URL("https://www.lbank.com"),
    twitter: new URL("https://x.com/LBank_Exchange"),
  },
  icon: LBankIcon,
  // TODO: Add OG images
};

defineApp(LBankExchange);

export default LBankExchange;
