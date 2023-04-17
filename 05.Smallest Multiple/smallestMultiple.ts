export const smallestMultiple = (lowerBound: number, higherBound: number): number => {
    let currNumber = higherBound % 2 === 0 ? higherBound : higherBound + 1;
    let hits: number;
    
    const range = higherBound - (lowerBound - 1); 

    do {
        hits = 0;

        for(let j = lowerBound; j <= higherBound; j++){
            if(currNumber % j !== 0) {
                currNumber++;
                break;
            }
            else {
                hits += 1;
            }
        }
    }
    while(hits != range && currNumber !== Number.MAX_SAFE_INTEGER);

    return currNumber;
};