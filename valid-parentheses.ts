function isValid(s: string): boolean {
    let stack: String[] = [];

    for (let i = 0; i < s.length; i++) {
        // push
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            stack.push(s[i]);
        } else {

            // pop
            let peek_element = stack[stack.length - 1];

            switch (s[i]) {
                case ")":
                    if (peek_element === "(") {
                        stack.pop();
                    } else {
                        return false;
                    }
                    break;
                case "]":
                    if (peek_element === "[") {
                        stack.pop();
                    } else {
                        return false;
                    }
                    break;
                case "}":
                    if (peek_element === "{") {
                        stack.pop();
                    } else {
                        return false;
                    }
                    break;
                default:
                    break;
            }
        }
    }

    if (stack.length !== 0) {
        return false;
    }

    return true;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));

