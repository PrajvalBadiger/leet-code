function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let mp = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (mp.has(nums[i])) {
            let idx = mp.get(nums[i])
            if (Math.abs(idx - i) <= k) {
                return true
            }
        }

        // update index for each value (even if the num is already in the map)
        mp.set(nums[i], i)
    }

    return false
};


console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
console.log(containsNearbyDuplicate([1, 2, 1, 4, 5], 2));
console.log(containsNearbyDuplicate([99, 99], 2));
