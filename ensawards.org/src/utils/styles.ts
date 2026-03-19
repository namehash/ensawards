import {
  BenchmarkResult,
  BenchmarkStatuses,
  type EffectiveAppBenchmark,
} from "../../data/apps/benchmarks-types.ts";
import { DeFiProtocolIds, type ProtocolId } from "../../data/protocols/types.ts";

export const getAppSupportColor = (value: number): string =>
  value > 75 ? "emerald-600" : value > 35 ? "amber-600" : "red-600";

export const benchmarkResultToBadgeStyles = (benchmark: EffectiveAppBenchmark) => {
  if (benchmark.status === BenchmarkStatuses.Pending) {
    return "text-muted-foreground bg-black/8";
  }
  switch (benchmark.result) {
    case BenchmarkResult.PartialPass:
      return "text-orange-600 bg-orange-100";
    case BenchmarkResult.Pass:
      return "text-emerald-600 bg-emerald-100";
    case BenchmarkResult.Fail:
    default:
      return "text-red-600 bg-[rgba(220,38,38,0.1)]";
  }
};

/**
 * Special styling for `ENS name` field because some protocols have really long contract names.
 *
 * Not included protocols will use a default value for minimum width equal to 225px
 */
const ensNameFieldStyles = new Map<ProtocolId, string>([
  [DeFiProtocolIds.Liquity, "sm:min-w-[310px]"],
  [DeFiProtocolIds.Taiko, "sm:min-w-[245px]"],
  [DeFiProtocolIds.Cork, "sm:min-w-[310px]"],
]);

export const getENSNameFieldStyles = (protocolId: ProtocolId): string =>
  ensNameFieldStyles.get(protocolId) ?? "sm:min-w-[225px]";
