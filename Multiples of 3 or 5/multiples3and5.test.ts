import { sumMultiples3and5UnderValue } from "./multiples3and5";

describe("Sum of the multiples of 3 or 5", () => {
    it("should return 23 for the numbers under 10", () => {
        expect(sumMultiples3and5UnderValue(10)).toBe(23);
    });

    it("should return 233168 as a result for multiples of 3 and 5 under 1000", () => {
        expect(sumMultiples3and5UnderValue(1000)).toBe(233168);
    });
});