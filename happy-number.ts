function isHappy(n: number): boolean {
    let st = new Set()

    const sum_of_sqrs = (n: number): number => {
        let sum = 0
        while (n != 0) {
            let r = n % 10
            sum += r * r
            n = Math.floor(n / 10)
        }

        return sum
    }

    while (n != 1) {
        // if the number is already present in set it means we are infinitely looping
        if (st.has(n)) {
            return false
        } else {
            st.add(n)
        }

        // fins sum of sqrs
        n = sum_of_sqrs(n);
    }

    return true
};

console.log(isHappy(19));
console.log(isHappy(4));
console.log(isHappy(2));
