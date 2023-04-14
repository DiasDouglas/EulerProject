import { getLargestPrimeFactor, getNextPrime, isPrime } from "./largestPrimeFactor";

describe("Largest Prime Factor", () => {
    describe("isPrime", () => {
        it.each
        `
        number | outcome
        ${0} | ${false}
        ${1} | ${false}
        ${2} | ${true}
        ${3} | ${true}
        ${4} | ${false}
        ${5} | ${true}
        ${6} | ${false}
        ${7} | ${true}
        ${8} | ${false}
        ${9} | ${false}
        ${10} | ${false}
        ${11} | ${true}
        `("should return $outcome for $number", ({number, outcome}) => {
            expect(isPrime(number)).toEqual(outcome);
        });
    });


    describe("getNextPrime", () => {
        it.each`
        number | nextPrime
        ${0} | ${2}
        ${1} | ${2}
        ${2} | ${3}
        ${3} | ${5}
        ${4} | ${5}
        ${5} | ${7}
        ${6} | ${7}
        ${7} | ${11}
        ${8} | ${11}
        ${9} | ${11}
        ${10} | ${11}
        ${11} | ${13}
        `("should return $nextPrime for $number", ({number, nextPrime}) => {
            expect(getNextPrime(number, 20)).toEqual(nextPrime);
        })
    });

    it("Should return 29 as the largest prime factor of 13195", () => {
        expect(getLargestPrimeFactor(13195)).toEqual(29);
    });

    it("GETTING THE RESPONSE - Should return the largest prime factor of 600851475143", () => {
        console.log("The largest prime factor of 600851475143 is: ", getLargestPrimeFactor(600851475143));
    });
});

