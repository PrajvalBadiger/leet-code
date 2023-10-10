function targetIndices(nums: number[], target: number): number[] {

    let res: number[] = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            res.push(i);
        }
    }

    return res;
};


console.log(targetIndices([1,2,5,2,3], 2))
