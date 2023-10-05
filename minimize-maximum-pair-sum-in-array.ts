function minPairSum(nums: number[]): number {
    let l = 0;
    let r = nums.length - 1;
    let pairs: number[] = [];

    // sort the array
    nums.sort((a, b) => a - b);

    // get the sum of min, max pairs
    while (l < r) {
        pairs.push(nums[l] + nums[r]);
        l++;
        r--;
    }

    // find the max sum
    let max = pairs[0];
    for (let i = 1; i < pairs.length; i++) {
        if (max < pairs[i]) {
            max = pairs[i];
        }
    }

    return max;
};

console.log(minPairSum([3,5,2,3]));
console.log(minPairSum([3,5,4,2,4,6]));
console.log(minPairSum([4,1,5,1,2,5,1,5,5,4]));
