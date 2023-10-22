/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let output = 0;
    let curr = 0;
    let sign = 1; // 1 for + and -1 for -
    let stack = []

    const isDigit = (c) => {
        return (c >= '0' && c <= '9') ? true : false;
    };

    for (const c of s) {
        if (isDigit(c)) {
            curr = curr * 10 + Number.parseInt(c);
        } else if (c === '+' || c === '-') {
            output += (curr * sign);
            curr = 0;
            sign = c === '-' ? -1 : 1;
        } else if (c === '(') {
            stack.push(output); // push current ouput
            stack.push(sign); // push current sign
            output = 0;
            sign = 1;
        } else if (c === ')') {
            output += (curr * sign);
            output *= stack.pop(); // pop sign
            output += stack.pop(); // pop prev output
            curr = 0;
        }
    }

    return output + (curr * sign);
};

console.log(calculate("1+1"));
console.log(calculate("(1+(4+5+2)-3)+(6+8)"));
