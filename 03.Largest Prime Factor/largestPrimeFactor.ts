export const isPrime = (num: number): boolean => {
    if(num < 2){
        return false;
    }

    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }

    return true;
}

export const getNextPrime = (num: number, stopNumber: number = 1000000000000): number => {
    let result: number = -1;

    for(let i = num + 1; i < stopNumber; i++){
        if(isPrime(i)){
            return i;
        }
    }

    return result;
}

export const getLargestPrimeFactor = (num: number, currFactor: number = 2): number => {
    if(num === 1){
        return currFactor;
    }

    if(num % currFactor === 0){
        return getLargestPrimeFactor(num / currFactor, currFactor);
    }
    else {
        return getLargestPrimeFactor(num, getNextPrime(currFactor));
    }
}