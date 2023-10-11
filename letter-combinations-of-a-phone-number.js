function letterCombinations(digits) {

    if (digits.length === 0) {
        return [];
    }

    let numberMap = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
    };

    let res = [""];

    // 1. collect the letters of first digit (newCombinations = res + first digit letter) 
    // 2. add the letters of next digit to the letters collected in step 1 (res + second digit letter)
    // 3. repeat for n digits
    // Ex: "23"
    // 1. [""] -> ["a", "b", "c"] (add a, b, c)
    // 2. ["a", "b", "c"] -> [ "ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf" ] (add d, e, f)
    for (let i = 0; i < digits.length; i++) {
        let newCombinations = [];
        for (let j = 0; j < res.length; j++) {
            for (let k = 0; k < numberMap[digits[i]].length; k++) {
                newCombinations.push(res[j] + numberMap[digits[i]][k]);
            }
        }
        console.log(newCombinations);
        res = newCombinations;
    }

    return res;
};

console.log(letterCombinations(""));
console.log(letterCombinations("2"));
console.log(letterCombinations("23"));
console.log(letterCombinations("234"));
