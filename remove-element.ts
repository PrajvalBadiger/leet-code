function removeElement(nums: number[], val: number): number {
    let k = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k += 1;
        }
    }
    return k;
};

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
console.log(removeElement([1], 1));
console.log(removeElement([4, 5], 5));
console.log(removeElement([2, 2, 2], 2));
