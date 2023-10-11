function search(nums: number[], target: number): number {

    let start = 0;
    let end = nums.length - 1;
    let mid: number;

    while (start <= end) {
        mid = start + Math.floor((end - start) / 2);
        // found the element, return its index
        if (nums[mid] === target) {
            return mid;
        }
        // search end sub-array
        if (target > nums[mid]) {
            start = mid + 1;
        }
        // search start sub-array
        if (target < nums[mid]) {
            end = mid - 1;
        }
    }
    return -1;
};

console.log(search([-1,0,3,5,9,12], 9));
console.log(search([-1,0,3,5,9,12], 2));
