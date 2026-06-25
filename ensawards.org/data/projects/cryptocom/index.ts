// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import CryptoComIcon from "./icon.tsx";

const CryptoComProject: Project = {
  id: ProjectIds.CryptoCom,
  name: "Crypto.com",
  description:
    "Cryptocurrency exchange and app for buying, selling, trading, and storing digital assets, with a payment card and other Web3 financial products.",
  icon: CryptoComIcon,
  socials: {
    website: new URL("https://crypto.com"),
    twitter: new URL("https://x.com/cryptocom"),
  },
};

defineProject(CryptoComProject);

export default CryptoComProject;
