function sortArrayByParity(nums: number[]): number[] {
    let even: number[] = [];
    let odd: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            even.push(nums[i]);
        } else {
            odd.push(nums[i]);
        }
    }

    return even.concat(odd);
};


function sortArrayByParity2(nums: number[]): number[] {
    let l = 0;
    let r = nums.length - 1;

    let i = 0;
    let res = new Array(nums.length);

    while (l <= r) {
        if (nums[i] % 2 === 0) {
            res[l++] = nums[i];
        } else {
            res[r--] = nums[i];
        }
        i++;
    }

    return res;
};


console.log(sortArrayByParity([3, 1, 2, 4]));
console.log(sortArrayByParity2([3, 1, 2, 4]));
