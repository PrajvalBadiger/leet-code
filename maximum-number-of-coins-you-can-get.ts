function maxCoins(piles: number[]): number {

    let sum = 0;
    //sort the piles in descending order
    piles.sort((a, b) => b - a);

    // iterate for piles.length/3 times and pick the second element
    let k = 1;
    for (let i = 1; i <= piles.length/3; i++) {
        sum += piles[k];
        k  += 2;
    }

    return sum;
};


console.log(maxCoins([2, 4, 1, 2, 7, 8]));
console.log(maxCoins([9, 8, 7, 6, 5, 1, 2, 3, 4]));
console.log(maxCoins([2, 4, 5]));
console.log(maxCoins([4,4,17,7,16,16,16,15,2,3,1,17,6,12,9]));
