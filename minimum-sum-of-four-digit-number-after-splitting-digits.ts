function minimumSum(num: number): number {
    let n = num;
    let arr: number[] = [];
    let rem = 0;
    rem = n % 10;
    while (n != 0) {
        rem = n % 10;
        n = Math.floor(n / 10);
        arr.push(rem);
    }

    arr.sort();
    return arr[0] * 10 + arr[arr.length - 1] + arr[1] * 10 + arr[2];
}

console.log(minimumSum(2932));
console.log(minimumSum(4009));
