import type { App } from "./types.ts";

const definedApps = new Map<string, App>();

export function defineApp(app: App): void {
  // enforce app's id uniqueness
  if (definedApps.has(app.id)) {
    throw new Error(`App with id="${app.id}" is already defined`);
  }

  definedApps.set(app.id, app);
}

export function getDefinedApps(): App[] {
  return [...definedApps.values()];
}
