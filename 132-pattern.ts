function find132pattern(nums: number[]): boolean {
    let stack: number[][] = []; // stack of [nums[i], curr_min]
    let curr_min = nums[0]; // min until nums[i]

    for (let i = 1; i < nums.length; i++) {
        // pop all the elements that are lesser than nums[i]
        while (stack.length !== 0 && nums[i] >= stack[stack.length - 1][0]) {
            stack.pop();
        }

        // check if curr_min < nums[i] < stack[top][0] (max_elem)
        if (stack.length !== 0 && nums[i] > stack[stack.length - 1][1]) {
            return true;
        }

        // push the element and the curr min to the stack
        stack.push([nums[i], curr_min]);
        curr_min = Math.min(curr_min, nums[i]);
    }

    return false;
}

console.log(find132pattern([1, 2, 3, 4]));
console.log(find132pattern([3, 1, 4, 2]));
console.log(find132pattern([-1, 3, 2, 0]));
