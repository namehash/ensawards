import { getDefinedProjects } from "./registry.ts";
import type { Project } from "./types.ts";

import.meta.glob("./*/index.ts", { eager: true });

/**
 * Array of supported projects.
 *
 * Invariant: This array should contain exactly one {@link Project} for each {@link ProjectId}.
 */
export const PROJECTS: Project[] = [...getDefinedProjects()];
