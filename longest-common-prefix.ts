function longestCommonPrefix(strs: string[]): string {
    let even = [2, 4];
    let odd = [1, 3];

    let prefix = "";

    for (let j = 0; j < strs[0].length; j++) {
        for (let i = 1; i < strs.length; i++) {
            if (strs[i][j] !== strs[0][j]) {
                return prefix;
            }
        }
        prefix += strs[0][j];
    }

    return prefix;
};


console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
