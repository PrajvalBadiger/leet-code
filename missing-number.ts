function missingNumber(nums: number[]): number {
    let num_sum = 0;
    let idx_sum = nums.length;
    // calculat sum of the numbers and sum of index and return the diff
    for (let i = 0; i < nums.length; i++) {
        num_sum += nums[i];
        idx_sum += i;
    }

    return idx_sum - num_sum;
};


console.log(missingNumber([3, 0, 1]))
console.log(missingNumber([0, 1]))
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))
