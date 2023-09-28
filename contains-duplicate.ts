function containsDuplicate(nums: number[]): boolean {
    let map = new Map<number, boolean>();
    for (let idx = 0; idx < nums.length; idx++) {
        if (map.has(nums[idx])) {
            return true;
        }
        map.set(nums[idx], true);
    }
    return false
};
