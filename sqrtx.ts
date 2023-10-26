function mySqrt(x: number): number {
    if (x === 0 || x === 1) {
        return x
    }

    let left = 0;
    let right = Math.floor(x / 2);
    let mid = 0;
    let res = 0;

    while (left <= right) {
        mid = left + Math.floor((right - left) / 2);
        let sqr = mid * mid
        if (sqr == x) {
            return mid
        }

        if (sqr > x) {
            right = mid - 1;
        }

        if (sqr <= x) {
            left = mid + 1;
            res = mid
        }
    }
    return res
};

console.log(mySqrt(64));
console.log(mySqrt(8));
