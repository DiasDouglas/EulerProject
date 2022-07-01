import { 
    getNFirstFibonacciNumbers, 
    getFibonacciNumbersUntilValue, 
    getEvenFibonacciNumbersUntilValue, 
    sumAllEvenFibonacciNumbersUntilValue 
} from "./evenFibonacciNumbers";

describe("Even Fibonacci Numbers", () => {
    describe("getNFirstFibonacciNumbers", () => {
        it("returns '[1, 2, 3, 5, 8]' if n = 5", () => {
            expect(getNFirstFibonacciNumbers(5)).toEqual([1, 2, 3, 5, 8]);
        });
    });

    describe("getFibonacciNumbersUntilValue", () => {
        it("returns '[1, 2, 3, 5, 8, 13]' if value = 15", () => {
            expect(getFibonacciNumbersUntilValue(15)).toEqual([1, 2, 3, 5, 8, 13]);
        });
    });

    describe("getEvenFibonacciNumbersUntilValue", () => {
        it("returns '[2, 8, 34]' if value = 40", () => {
            expect(getEvenFibonacciNumbersUntilValue(40)).toEqual([2, 8, 34]);
        });
    });

    describe("sumAllEvenFibonacciNumbersUntilValue", () => {
        it("returns 44 if value = 40", () => {
            expect(sumAllEvenFibonacciNumbersUntilValue(40)).toEqual(44);
        });

        // The answer
        it("returns 4613732 if value = 4000000", () => {
            expect(sumAllEvenFibonacciNumbersUntilValue(4000000)).toEqual(4613732);
        });
    });
});