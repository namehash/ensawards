// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying apps

import CurveProject from "data/projects/curve/index.ts";

import { defineApp } from "../registry.ts";
import { type App, AppTypes } from "../types.ts";
import CurveIcon from "./icon.tsx";

const CurveDeFiApp: App = {
  id: "curve-defi-app",
  appSlug: "curve-defi-app",
  type: AppTypes.DeFi,
  project: CurveProject,
  name: "Curve",
  description:
    "Curve is a decentralised protocol powering DeFi stablecoin and crypto markets by enabling high-yield onchain savings, protected borrowing, and low-slippage swaps.",
  socials: {
    website: new URL("https://www.curve.finance/"),
    twitter: new URL("https://x.com/curvefinance"),
  },
  icon: CurveIcon,
  // TODO: Add OG images
};

defineApp(CurveDeFiApp);

export default CurveDeFiApp;
