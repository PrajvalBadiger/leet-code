function subsets(nums: number[]): number[][] {
    let res: number[][] = []

    let subset: number[] = []
    function dfs(i: number) {
        if (i >= nums.length) {
            res.push([...subset])
            return
        }

        // decision to include nums[i]
        subset.push(nums[i])
        dfs(i + 1)
        // decision to exclude nums[i]
        subset.pop()
        dfs(i + 1)
    }

    dfs(0)
    return res
};

console.log(subsets([1, 2, 3]))
console.log(subsets([0]))
console.log(subsets([]))
