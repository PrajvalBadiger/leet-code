function countAndSay(n: number): string {

    // ceate a string of number and its count "11" => "21" and "21" "1211"
    const count_occurances = (num: string): string => {
        let res = ""
        for (let i = 0; i < num.length;) {
            let count = 1;
            let k = i + 1;
            while (num[i] === num[k]) {
                count++
                k++
            }
            res += count.toString() + num[i];
            i = k
        }
        return res
    }

    let res = "1"
    for (let i = 0; i < n - 1; i++) {
        res = count_occurances(res)
    }

    return res
};

console.log(countAndSay(1));
console.log(countAndSay(2));
console.log(countAndSay(3));
console.log(countAndSay(4));
