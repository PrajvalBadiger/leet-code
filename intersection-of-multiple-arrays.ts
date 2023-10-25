function intersection(nums: number[][]): number[] {
    let mp = new Map()

    // create a map of number and its count
    for (const num_arr of nums) {
        for (const num of num_arr) {
            if (mp.has(num)) {
                mp.set(num, mp.get(num) + 1)
            } else {
                mp.set(num, 1)
            }
        }
    }

    let res = []
    for (const [key, value] of mp.entries()) {
        if (value === nums.length) {
            res.push(key)
        }
    }
    return res.sort((a, b) => a - b)
};

console.log(intersection([[3, 1, 2, 4, 5], [1, 2, 3, 4], [3, 4, 5, 6]]));
console.log(intersection([[1, 2, 3], [4, 5, 6]]));
console.log(intersection([[4, 43, 15, 30, 27, 22], [15, 30, 43, 27, 10, 4]]));
