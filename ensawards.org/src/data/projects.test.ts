import { describe, expect, it } from "vitest";

import { PROJECTS } from "@/data/projects.ts";
import { ProjectIds } from "@/types/projects.ts";

describe("projects data", () => {
  const data = PROJECTS;
  it("Should have exactly one project per ProjectId", () => {
    const expectedLengthOfFoundProjects = 1;

    Object.values(ProjectIds).forEach((projectId) => {
      const foundProjects = data.filter((project) => project.id === projectId);

      expect(foundProjects.length).toEqual(expectedLengthOfFoundProjects);
      expect(foundProjects[0].id).toEqual(projectId);
    });
  });
});
