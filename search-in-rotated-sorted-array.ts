function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    let mid: number = 0;

    // finding the point of rotation
    while (left <= right) {
        mid = left + Math.ceil((right - left) / 2);

        // console.log(left, mid, right, nums.slice(left, right + 1));
        if (nums[mid] < nums[mid - 1]) {
            break;
        } if (nums[mid] > nums[0] && nums[mid] > nums[nums.length - 1]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // check where the target lies(is it mid or left of mid or right of mid)
    if (nums[mid] === target) {
        return mid;
    } else if (nums[mid] < target && nums[nums.length - 1] >= target) {
        left = mid + 1;
        right = nums.length - 1;
    } else {
        left = 0;
        right = mid - 1;
    }

    //Binary search on the side where target lies
    while (left <= right) {
        mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1;
};
