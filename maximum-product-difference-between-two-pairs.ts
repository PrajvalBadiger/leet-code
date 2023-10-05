function maxProductDifference(nums: number[]): number {
    nums.sort((a, b) => a - b);
    return ((nums[nums.length - 1] * nums[nums.length - 2]) - (nums[0] * nums[1]));
};

console.log(maxProductDifference([5, 6, 2, 7, 4]));
console.log(maxProductDifference([4, 2, 5, 9, 7, 4, 8]));
