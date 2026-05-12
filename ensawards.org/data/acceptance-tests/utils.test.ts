import { generalizeAcceptanceTestBenchmarks } from "data/acceptance-tests/utils";
import { type AcceptanceTestBenchmarks, BenchmarkResults } from "data/benchmarks/types";
import { createMockAcceptanceTestBenchmark } from "data/shared/test-utils";
import { describe, expect, it } from "vitest";

describe("Acceptance test utils", () => {
  describe("generalizeAcceptanceTestBenchmarks", () => {
    it("Returns `BenchmarkResults.Pass` if all defined benchmarks are `BenchmarkResults.Pass` or `BenchmarkResults.PartialPass`", () => {
      const expectedResult = BenchmarkResults.Pass;

      const inputBenchmarks = {
        "mock-acceptance-test-1": createMockAcceptanceTestBenchmark(BenchmarkResults.Pass),
        "mock-acceptance-test-2": createMockAcceptanceTestBenchmark(BenchmarkResults.PartialPass),
      } as const satisfies AcceptanceTestBenchmarks;

      expect(
        generalizeAcceptanceTestBenchmarks(inputBenchmarks),
        "generalizeAcceptanceTestBenchmarks should return `BenchmarkResults.Pass`",
      ).toEqual(expectedResult);
    });

    it("Returns `BenchmarkResults.Fail` if all defined benchmarks are `BenchmarkResults.Fail`", () => {
      const expectedResult = BenchmarkResults.Fail;

      const inputBenchmarks = {
        "mock-acceptance-test-1": createMockAcceptanceTestBenchmark(BenchmarkResults.Fail),
        "mock-acceptance-test-2": createMockAcceptanceTestBenchmark(BenchmarkResults.Fail),
      } as const satisfies AcceptanceTestBenchmarks;

      expect(
        generalizeAcceptanceTestBenchmarks(inputBenchmarks),
        "generalizeAcceptanceTestBenchmarks should return `BenchmarkResults.Fail`",
      ).toEqual(expectedResult);
    });

    it(
      "Returns `BenchmarkResults.PartialPass` if at least one defined benchmark is `BenchmarkResults.Fail`" +
        " and at least one defined benchmark is `BenchmarkResults.Pass`",
      () => {
        const expectedResult = BenchmarkResults.PartialPass;

        const inputBenchmarks = {
          "mock-acceptance-test-1": createMockAcceptanceTestBenchmark(BenchmarkResults.Fail),
          "mock-acceptance-test-2": createMockAcceptanceTestBenchmark(BenchmarkResults.Pass),
        } as const satisfies AcceptanceTestBenchmarks;

        expect(
          generalizeAcceptanceTestBenchmarks(inputBenchmarks),
          "generalizeAcceptanceTestBenchmarks should return `BenchmarkResults.PartialPass`",
        ).toEqual(expectedResult);
      },
    );

    it("Returns `BenchmarkResults.PartialPass` if all defined benchmarks are `BenchmarkResults.PartialPass`", () => {
      const expectedResult = BenchmarkResults.PartialPass;

      const inputBenchmarks = {
        "mock-acceptance-test-1": createMockAcceptanceTestBenchmark(BenchmarkResults.PartialPass),
        "mock-acceptance-test-2": createMockAcceptanceTestBenchmark(BenchmarkResults.PartialPass),
      } as const satisfies AcceptanceTestBenchmarks;

      expect(
        generalizeAcceptanceTestBenchmarks(inputBenchmarks),
        "generalizeAcceptanceTestBenchmarks should return `BenchmarkResults.PartialPass`",
      ).toEqual(expectedResult);
    });

    it("Returns `undefined` if all benchmarks are `undefined` (pending)", () => {
      const expectedResult = undefined;

      const inputBenchmarks = {
        "mock-acceptance-test-1": undefined,
        "mock-acceptance-test-2": undefined,
      } as const satisfies AcceptanceTestBenchmarks;

      expect(
        generalizeAcceptanceTestBenchmarks(inputBenchmarks),
        "generalizeAcceptanceTestBenchmarks should return `undefined` for all pending benchmarks",
      ).toEqual(expectedResult);
    });
  });
});
