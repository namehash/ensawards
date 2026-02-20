import { getDefinedApps } from "./registry.ts";
import type { App } from "./types.ts";

import.meta.glob("./*/index.ts", { eager: true });

export const APPS: App[] = [...getDefinedApps()];
