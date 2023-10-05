function smallerNumbersThanCurrent(nums: number[]): number[] {

    let res: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                count += 1;
            }
        }
        res.push(count);
    }

    return res;
};

function smallerNumbersThanCurrent2(nums: number[]): number[] {
    const sorted = [...nums].sort((a, b) => a - b);
    return nums.map((v) => sorted.indexOf(v))
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]));
console.log(smallerNumbersThanCurrent2([8,1,2,2,3]));
