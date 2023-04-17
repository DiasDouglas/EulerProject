import { smallestMultiple } from "./smallestMultiple";

describe("Smallest multiple", () => {
    it("should return '2520' as the smallest common multiple of all numbers from 1 to 10", () => {
        expect(smallestMultiple(1, 10)).toEqual(2520);
    });

    it("GETTING THE RESPONSE - should return the smallest common multiple of all numbers from 1 to 20", () => {
        console.log(smallestMultiple(1, 20));
    })
});