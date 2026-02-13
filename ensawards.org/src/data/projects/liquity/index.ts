import { LiquityIcon } from "@/components/atoms/icons/ens-integrating-entities/shared/LiquityIcon.tsx";
import type { Project } from "@/types/projects.ts";
import { ProjectIds } from "@/types/projects.ts";

export const LiquityProject: Project = {
  id: ProjectIds.Liquity,
  name: "Liquity",
  description: "DeFi protocol for borrowing against ETH & staked ETH.",
  icon: LiquityIcon,
  socials: {
    twitter: new URL("https://x.com/LiquityProtocol"),
    website: new URL("https://www.liquity.org/"),
  },
};
