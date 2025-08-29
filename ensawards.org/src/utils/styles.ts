import { BenchmarkResult } from "@/data/appData.ts";

export const getAppSupportColor = (value: number): string =>
  value > 75 ? "text-emerald-600" : value > 35 ? "text-amber-600" : "text-red-600";

export const BenchmarkResultToBadgeStyles = new Map<BenchmarkResult, string>([
  [BenchmarkResult.PartialPass, "text-neutral-900 bg-neutral-100"],
  [BenchmarkResult.Pass, "text-emerald-600 bg-[#0596691A]"],
  [BenchmarkResult.Fail, "text-red-600 bg-[#DC26261A]"],
]);
