export const sumMultiples3and5UnderValue = (value: number): number => {
    let result = 0;

    for(let i = 0; i < value; i++){
        if(i % 3 === 0 || i % 5 === 0){
            result += i;
        }
    }

    return result;
}