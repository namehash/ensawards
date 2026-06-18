import { getDefinedApps } from "./registry.ts";
import { type App, type AppType, AppTypes } from "./types.ts";

import.meta.glob("./*/index.ts", { eager: true });

export const APPS: App[] = [...getDefinedApps()];

/**
 * Display groups of the app leaderboard snippets on the main page.
 * * Divides the app types into two groups based on their position on the landing page (top and bottom).
 * * Decides the order of the app types inside each group.
 */

export const TOP_DISPLAY_APP_TYPES: AppType[] = [AppTypes.Wallet, AppTypes.DeFi];

export const BOTTOM_DISPLAY_APP_TYPES: AppType[] = [AppTypes.Exchange, AppTypes.Explorer];
