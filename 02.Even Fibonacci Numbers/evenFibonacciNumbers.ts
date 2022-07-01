const getFibonacciNumbers = (currentNumbers: number[], n: number): number[] => {
    const currentLength = currentNumbers.length;

    if(currentLength === n){
        return currentNumbers;
    }

    currentNumbers.push(currentNumbers[currentLength - 2] + currentNumbers[currentLength - 1]);

    return getFibonacciNumbers(currentNumbers, n);
}

const getAllFibonacciNumbersUntilValue = (currentNumbers: number[], value: number): number[] => {
    const currentLength = currentNumbers.length;
    const currentValue = currentNumbers[currentLength - 2] + currentNumbers[currentLength - 1];

    if(currentValue > value){
        return currentNumbers;
    }

    currentNumbers.push(currentValue);

    return getAllFibonacciNumbersUntilValue(currentNumbers, value);
}

const getAllEvenFibonacciNumbersUntilValue = (currentFibonacciNumbers: number[], currentEvenFibonacciNumbers: number[], value: number): number[] => {
    const currentLength = currentFibonacciNumbers.length;
    const currentValue = currentFibonacciNumbers[currentLength - 2] + currentFibonacciNumbers[currentLength - 1];

    if(currentValue > value){
        return currentEvenFibonacciNumbers;
    }

    currentFibonacciNumbers.push(currentValue);

    if(currentValue % 2 === 0){
        currentEvenFibonacciNumbers.push(currentValue);
    }

    return getAllEvenFibonacciNumbersUntilValue(currentFibonacciNumbers, currentEvenFibonacciNumbers, value);
}
 
export const getNFirstFibonacciNumbers = (n: number): number[] => {
    const baseNumbers: number[] = [1, 2];

    if(n === 1){
        return [1];
    }
    else if(n === 2){
        return baseNumbers;
    }

    return getFibonacciNumbers(baseNumbers, n);
}

export const getFibonacciNumbersUntilValue = (value: number): number[] => {
    const baseNumbers: number[] = [1, 2];

    if(value === 1){
        return [1];
    }
    else if(value === 2){
        return baseNumbers;
    }

    return getAllFibonacciNumbersUntilValue(baseNumbers, value);
}

export const getEvenFibonacciNumbersUntilValue = (value: number): number[] => {
    const baseNumbers: number[] = [1, 2];

    if(value < 2){
        return [];
    }
    else if(value === 2){
        return [2];
    }

    const currentEvenNumbers: number[] = [2];

    return getAllEvenFibonacciNumbersUntilValue(baseNumbers, currentEvenNumbers, value);
}

export const sumAllEvenFibonacciNumbersUntilValue = (value: number): number => {
    const initialValue = 0;

    return getEvenFibonacciNumbersUntilValue(value).reduce((previousValue, currentValue) => {
        return previousValue + currentValue;
    }, initialValue)
}