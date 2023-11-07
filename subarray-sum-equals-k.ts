function subarraySum(nums: number[], k: number): number {
    let sum = Array(nums.length).fill(0)
    let count = 0

    for (let i = 0; i < nums.length; i++) {
        let sum = 0
        for (let j = i; j < nums.length; j++) {
            sum += nums[j]
            if (sum === k) {
                count++
            }
        }
    }

    return count
};

console.log(subarraySum([1, 1, 1], 2))
console.log(subarraySum([1, 2, 3], 3))
