function longestConsecutive(nums: number[]): number {
    const numsLen = nums.length;

    if (numsLen === 0) {
        return 0;
    }

    nums.sort((a, b) => a - b);

    let count = 1;
    let largestLen = 0;

    for (let i = 0; i < numsLen; i++) {
        if (nums[i] !== nums[i - 1]) {
            if (nums[i] === nums[i - 1] + 1) {
                count++;
            } else {
                largestLen = Math.max(largestLen, count);
                count = 1;
            }
        }
    }

    return Math.max(largestLen, count);
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([3, 0, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(longestConsecutive([1, 2, 0, 1]));
