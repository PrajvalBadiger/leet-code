function singleNonDuplicate(nums: number[]): number {

    let l = 0;
    let r = nums.length - 1;
    let ls = 0; // left size

    let res = 0;
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);

        // base case: mid, mid - 1 and mid + 1 are all three are not same, mid is the answer
        if (nums[m] !== nums[m - 1] && nums[m] !== nums[m + 1]) {
            res = nums[m];
            break;
        }

        // find the size of the left subarray to know where to search
        if ((m - 1) >= 0 && nums[m] === nums[m - 1]) {
            ls = m - 1;
        } else {
            ls = m;
        }

        // if left size if odd then binary search left subarray else binary search right subarray
        if (ls % 2) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
    return res;
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));
console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
