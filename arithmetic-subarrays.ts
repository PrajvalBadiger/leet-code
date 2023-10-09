function checkArithmeticSubarrays(nums: number[], l: number[], r: number[]): boolean[] {
    let res: boolean[] = new Array(l.length).fill(true);

    for (let i = 0; i < l.length; i++) {
        let s = nums.slice(l[i], r[i] + 1).sort((a, b) => a - b);
        for (let j = 0; j < s.length - 1; j++) {
            if (s[j + 1] - s[j] !== s[1] - s[0]) {
                res[i] = false;
                break;
            }
        }
    }
    return res;
};

console.log(checkArithmeticSubarrays([4, 6, 5, 9, 3, 7], [0, 0, 2], [2, 3, 5]));
console.log(checkArithmeticSubarrays([-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10], [0,1,6,4,8,7], [4,4,9,7,9,10]));
