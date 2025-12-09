import { HighResolutionSyncedClock, type SyncedClock } from "@/utils/syncedClock.ts";

/**
 * Synced System Clock
 *
 * There is just one instance of it in ENSAwards.
 */
export const systemClock: SyncedClock = new HighResolutionSyncedClock();
