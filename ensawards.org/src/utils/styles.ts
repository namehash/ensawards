import { BenchmarkResult } from "@/types/benchmarks";
import type { ProtocolId } from "@/types/protocols.ts";
import { DeFiProtocolIds } from "@/types/protocols.ts";

export const getAppSupportColor = (value: number): string =>
  value > 75 ? "emerald-600" : value > 35 ? "amber-600" : "red-600";

export const BenchmarkResultToBadgeStyles = new Map<BenchmarkResult, string>([
  [BenchmarkResult.PartialPass, "text-neutral-900 bg-neutral-100"],
  [BenchmarkResult.Pass, "text-emerald-600 bg-[#0596691A]"],
  [BenchmarkResult.Fail, "text-red-600 bg-[#DC26261A]"],
]);

/**
 * Special styling for `ENS name` field because some protocols have really long contract names.
 *
 * Not included protocols will use a default value for minimum width equal to 225px
 */
const ensNameFieldStyles = new Map<ProtocolId, string>([
  [DeFiProtocolIds.Liquity, "sm:min-w-[310px]"],
  [DeFiProtocolIds.Taiko, "sm:min-w-[245px]"],
]);

export const getENSNameFieldStyles = (protocolId: ProtocolId): string =>
  ensNameFieldStyles.get(protocolId) ?? "sm:min-w-[225px]";
