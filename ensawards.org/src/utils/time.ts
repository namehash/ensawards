import type { UnixTimestamp } from "@ensnode/ensnode-sdk";
import { millisecondsInSecond } from "date-fns/constants";

/**
 * Helper function to convert human-readable date to Unix timestamp.
 * Use this in data files for better readability.
 *
 * @param date - A Date object or ISO 8601 date string
 * @returns Unix timestamp in seconds
 *
 * @example
 * toUnixTimestamp("2025-12-03T10:00:00Z")
 * toUnixTimestamp(new Date())
 */
export function toUnixTimestamp(date: Date | string): UnixTimestamp {
  return Math.floor(new Date(date).getTime() / millisecondsInSecond);
}
