import { MetaMaskIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/MetaMaskIcon.tsx";
import type { Project } from "@/types/projects.ts";
import { ProjectIds } from "@/types/projects.ts";

export const MetaMaskProject: Project = {
  id: ProjectIds.MetaMask,
  name: "MetaMask",
  description: "MetaMask is a widely used, self-custodial cryptocurrency wallet.",
  icon: MetaMaskIcon,
  socials: {
    website: new URL("https://metamask.io/"),
    twitter: new URL("https://x.com/MetaMask"),
  },
};
