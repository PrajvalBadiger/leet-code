function twoSum(nums: number[], target: number): number[] {
    let map: Map<number, number> = new Map();

    for (let idx = 0; idx < nums.length; idx++) {

        const curr = nums[idx];
        const x = target - curr;

        if (map.has(x)) {
            return [map.get(x)!, idx]
        }
        map.set(curr, idx);
    }

    return [];
}

/* Notes
 * return [map.get(x)!, idx]
 * ! operator: "non-null assertion operator" or "definite assignment assertion."
 * map.get(x) returns number | undefined, we use the ! operator to indicate
 * that the value would not be undefined
 */
