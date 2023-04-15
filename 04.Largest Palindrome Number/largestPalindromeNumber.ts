export const numberIsPalindrome = (num: number): boolean => {
    const numAsString = num.toString();

    if(numAsString === numAsString.split("").reverse().join("")){
        return true;
    }

    return false;
} 

export const largestPalindromeMadeWithTwo_N_DigitsNumbers = (n: number) => {
    let result = -1;

    const start = parseInt("1" + "0".repeat(n - 1));
    const end = parseInt("9" + "9".repeat(n - 1));

    for(let i = start; i <= end; i++){
        for(let j = start; j <= end; j++){
            const candidate = i * j;
            if(numberIsPalindrome(candidate) && candidate > result){
                result = candidate;
            }
        }
    }

    return result;
};