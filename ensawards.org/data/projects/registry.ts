import type { Project, ProjectId } from "./types.ts";

const definedProjects = new Map<ProjectId, Project>();

export function defineProject(project: Project): void {
  // enforce project's id uniqueness invariant
  if (definedProjects.has(project.id)) {
    throw new Error(`Project with id="${project.id}" is already defined`);
  }

  definedProjects.set(project.id, project);
}

export function getDefinedProjects(): Project[] {
  return [...definedProjects.values()];
}
