function arrayPairSum(nums: number[]): number {
    if(!nums) return 0;

    let sum: number = 0;

    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 1; i += 2) {
        sum += Math.min(nums[i], nums[i + 1]);
    }

    return sum;
};


console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));
console.log(arrayPairSum([1,4,3,2]));
