function generateParenthesis(n: number): string[] {

    let stack: string[] = []
    let res: string[] = []

    let backtrack = (open: number, close: number): void => {
        if (open === n && close === n) {
            res.push(stack.join(''))
        }

        if (open < n) {
            stack.push("(")
            backtrack(open + 1, close)
            stack.pop()
        }

        if (open > close) {
            stack.push(")")
            backtrack(open, close + 1)
            stack.pop()
        }
    }

    backtrack(0, 0)

    return res
};

console.log(generateParenthesis(3));
