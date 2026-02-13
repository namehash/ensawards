import { CoinbaseProjectIcon } from "@/components/atoms/icons/ens-integrating-entities/projects/CoinbaseProjectIcon.tsx";
import type { Project } from "@/types/projects.ts";
import { ProjectIds } from "@/types/projects.ts";

export const CoinbaseProject: Project = {
  id: ProjectIds.Coinbase,
  name: "Coinbase",
  description:
    "Regulated crypto exchange and financial platform for buying, selling, storing, and using digital assets.",
  icon: CoinbaseProjectIcon,
  socials: {
    website: new URL("https://www.coinbase.com/"),
    twitter: new URL("https://x.com/coinbase"),
  },
};
