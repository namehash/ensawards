import type { App } from "./types.ts";

const definedApps = new Map<string, App>();

export function defineApp(app: App): void {
  definedApps.set(app.id, app);
}

export function getDefinedApps(): App[] {
  return [...definedApps.values()];
}
