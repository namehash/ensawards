import { defineProject } from "../registry.ts";
import type { Project } from "../types.ts";
import { ProjectIds } from "../types.ts";
import SuperfluidIcon from "./icon.tsx";

const SuperfluidProject: Project = {
  id: ProjectIds.Superfluid,
  name: "Superfluid",
  description:
    "The money streaming protocol — stream tokens by the second in real time to power onchain payments, payroll, subscriptions, and rewards.",
  icon: SuperfluidIcon,
  socials: {
    website: new URL("https://superfluid.org"),
    twitter: new URL("https://x.com/Superfluid_HQ"),
  },
};

defineProject(SuperfluidProject);

export default SuperfluidProject;
