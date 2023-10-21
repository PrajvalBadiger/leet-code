function makeGood(s: string): string {
    let stack: string[] = [];

    for (const ch of s) {
        if (stack.length && stack[stack.length - 1]
            && Math.abs(ch.charCodeAt(0) - stack[stack.length - 1].charCodeAt(0)) === 32) {
            stack.pop();
        } else {
            stack.push(ch);
        }
    }

    return stack.join('');
};

console.log(makeGood("leEeetcode"))
console.log(makeGood("abBAcC"))
console.log(makeGood("Pp"))
console.log(makeGood("mC"))
