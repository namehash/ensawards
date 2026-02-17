import type { Project } from "@/types/projects.ts";
import { ProjectIds } from "@/types/projects.ts";

import CoinbaseIcon from "./icon.tsx";

const CoinbaseProject: Project = {
  id: ProjectIds.Coinbase,
  name: "Coinbase",
  description:
    "Regulated crypto exchange and financial platform for buying, selling, storing, and using digital assets.",
  icon: CoinbaseIcon,
  socials: {
    website: new URL("https://www.coinbase.com/"),
    twitter: new URL("https://x.com/coinbase"),
  },
};

export default CoinbaseProject;
