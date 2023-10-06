function romanToInt(s: string): number {
    let romanNumMap = new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000],
    ]);

    let prev = 0;
    let res = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        let digit = romanNumMap.get(s[i])!;
        if (digit < prev) {
            res -= digit;
        } else {
            res += digit;
        }
        prev = digit;
    }

    return res;
};


console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
