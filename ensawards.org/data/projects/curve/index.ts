// Read https://github.com/namehash/ensawards/blob/main/CONTRIBUTING.md
// for additional advice on adding and modifying projects

import { defineProject } from "data/projects/registry";
import { type Project, ProjectIds } from "data/projects/types";

import CurveIcon from "./icon.tsx";

const CurveProject: Project = {
  id: ProjectIds.Curve,
  name: "Curve",
  description:
    "Curve is building the software that powers the future world economy: decentralised, trustless, inclusive and autonomous.",
  icon: CurveIcon,
  socials: {
    website: new URL("https://www.curve.finance/"),
    twitter: new URL("https://x.com/curvefinance"),
  },
};

defineProject(CurveProject);

export default CurveProject;
