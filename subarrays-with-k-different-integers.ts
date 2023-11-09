function has_distinct(nums: number[], start: number, end: number, k: number): boolean {
    let st = new Set()
    for (let i = start; i < end; i++) {
        st.add(nums[i])
    }
    return st.size === k
}

function subarraysWithKDistinct1(nums: number[], k: number): number {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= nums.length; j++) {
            if (has_distinct(nums, i, j, k)) count++
        }
    }

    return count
};

function subarraysWithKDistinct(nums: number[], k: number): number {
    let count = Array(nums.length + 1).fill(0)
    let res = 0;
    let m = 0;
    let l = 0;

    for (const n of nums) {
        count[n] += 1
        if (count[n] === 1) {
            k -= 1
            if (k < 0) {
                count[nums[m]] = 0
                m += 1
                l = m
            }
        }
        if (k <= 0) {
            while (count[nums[m]] > 1) {
                count[nums[m]] -= 1
                m += 1
            }
            res += m - l + 1
        }
    }

    return res
}
console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2))
console.log(subarraysWithKDistinct([1, 2, 1, 3, 4], 3))
