function findDifference(nums1: number[], nums2: number[]): number[][] {
    // Use set to get the unique elements
    let st1 = new Set(nums1)
    let st2 = new Set(nums2)
    let res: number[][] = [[], []]

    // get the values which are not present in set2
    for (const s of st1.values()) {
        if (!st2.has(s)) {
            res[0].push(s)
        }
    }
    // get the values which are not present in set1
    for (const s of st2.values()) {
        if (!st1.has(s)) {
            res[1].push(s)
        }
    }

    return res
};


console.log(findDifference([1, 2, 3], [2, 4, 6]))
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]))
