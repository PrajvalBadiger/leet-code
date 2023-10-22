function buildArray(target: number[], n: number): string[] {
    let res: string[] = [];
    let k = 0;

    let min_size = Math.min(target[target.length - 1], n);
    for (let i = 1; i <= min_size; i++) {
        if (target[k] === i) {
            res.push("Push");
            k++;
        } else {
            res.push("Push", "Pop")
        }
    }

    return res;
};

console.log(buildArray([1,3], 3));
console.log(buildArray([1,2,3], 3));
console.log(buildArray([1,2], 3));
