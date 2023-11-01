function letterCombinations(digits) {
    if (digits.length === 0) {
        return [];
    }

    const numberMap = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    const res = []

    function backtrack(combination, res, nextDigits) {
        if (nextDigits.length === 0) {
            res.push(combination)
            return
        }

        const letters = numberMap[parseInt(nextDigits[0] - 2)]

        for (const letter of letters) {
            backtrack(combination + letter, res, nextDigits.slice(1))
        }
    }

    backtrack("", res, digits)
    return res;
};

console.log(letterCombinations(""));
console.log(letterCombinations("2"));
console.log(letterCombinations("23"));
console.log(letterCombinations("234"));
