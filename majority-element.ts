function majorityElement(nums: number[]): number {
    let map = new Map();
    let res = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i])! + 1);
            if (map.get(nums[i])! >= Math.ceil(nums.length / 2)) {
                res = nums[i];
                break;
            }
        } else {
            map.set(nums[i], 1);
        }
    }

    return res;
};

console.log(majorityElement([3, 2, 3]))
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
console.log(majorityElement([6, 5, 5]))
