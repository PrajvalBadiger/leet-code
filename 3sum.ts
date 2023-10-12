function threeSum(nums: number[]): number[][] {
    let res: number[][] = [];

    nums.sort((a, b) => a - b);
    // i, l, r -> pointers to triplets
    // for each i use two pointers to check if nums[i] + nums[l] + nums[r] = 0
    // if sum < 0 move left pointer and if sum > 0 move right pointer, else we found a triplet
    for (let i = 0; i < nums.length - 2; i++) {
        // since the array is sorted if nums[i] > 0 then rest of the elements are all positive numbers
        if (nums[i] > 0) {
            break;
        }
        // if duplicate number then continue
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let l = i + 1;
        let r = nums.length - 1;

        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            if (sum < 0) {
                l++;
            } else if (sum > 0) {
                r--;
            } else {
                let triplet: number[] = [nums[i], nums[l], nums[r]];
                res.push(triplet);
                // skip duplicates
                while (l < r && nums[l] === triplet[1]) {
                    l++;
                }
                // skip duplicates
                while (l < r && nums[r] === triplet[2]) {
                    r--;
                }
            }
        }
    }
    return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 0, 0]));
console.log(threeSum([0, 1, 1]));
