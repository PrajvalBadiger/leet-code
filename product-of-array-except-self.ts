function productExceptSelf(nums: number[]): number[] {
    //let res: number[] = new Array(nums.length).fill(1);
    let res: Array<number> = [];
    let product: number = 1;
    for (let i = 0; i < nums.length; i++) {
        res[i] = product;
        product *= nums[i];
    }

    product = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] *= product;
        product *= nums[i];
        if (res[i] === -0) res[i] = 0;
    }

    return res;
}

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));

