import { describe, expect, it } from "vitest";
import testContractsData from "../data/contracts-test.json";
import type {Contract} from "@/types/contracts.ts";
import type {SupportedGroupByCategory} from "@/contract-pipelines/index.ts";
import {binaryWeights} from "@/contract-pipelines/weights.ts";


describe("weight functions", () => {
    const testData = testContractsData as Array<Contract>;
    const mockGroupedTestData = {
        "ENS": testData.slice(0, 10),
        "Uniswap": testData.slice(10)
    } as Record<SupportedGroupByCategory, Contract[]>;

    describe("binaryWeights", () => {
        it("should give weight = 1 to all named contracts", () => {

            const expectedOutput = {
                "ENS": [0,0,1,1,1,1,1,1,1,1],
                "Uniswap": [0,0,0,0,0,0,0,1,1,1]
            } as Record<SupportedGroupByCategory, number[]>;

            const result = binaryWeights(mockGroupedTestData);

            expect(result).toEqual(expectedOutput);
        })
    })
})