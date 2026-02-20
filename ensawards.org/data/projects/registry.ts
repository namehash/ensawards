import type { Project, ProjectId } from "./types.ts";

const definedProjects = new Map<ProjectId, Project>();

export function defineProject(project: Project): void {
  definedProjects.set(project.id, project);
}

export function getDefinedProjects(): Project[] {
  return [...definedProjects.values()];
}
