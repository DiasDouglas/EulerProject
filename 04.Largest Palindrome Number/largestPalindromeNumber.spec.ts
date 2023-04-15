import { largestPalindromeMadeWithTwo_N_DigitsNumbers, numberIsPalindrome } from "./largestPalindromeNumber";

describe("Largest Palindrome Number", () => {
    it.each`
        number  | outcome
        ${59}   | ${false}
        ${99}   | ${true}
        ${9009} | ${true}
    `("'numberIsPalindrome' returns $outcome if '$number' is provided as parameter", ({number, outcome}) => {
        expect(numberIsPalindrome(number)).toEqual(outcome);
    })

    it("returns 9009 as the largest palindrome made from the product of two 2-digit numbers", () => {
        expect(largestPalindromeMadeWithTwo_N_DigitsNumbers(2)).toEqual(9009);
    })

    it("GETTING THE RESPONSE - Should return the largest palindrome made from the product of two 3-digit numbers", () => {
        console.log(largestPalindromeMadeWithTwo_N_DigitsNumbers(3));
    })
});