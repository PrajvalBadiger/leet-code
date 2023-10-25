function countPrefixes(words: string[], s: string): number {

    const is_prefix = (prefix: string, s: string): boolean => {
        if (prefix.length > s.length) {
            return false
        }

        let i = 0
        for (const ch of prefix) {
            if (ch != s[i++]) {
                return false
            }
        }

        return true
    }

    let count = 0;
    for (const st of words) {
        if (is_prefix(st, s)) {
            count++;
        }
    }
    return count
};


console.log(countPrefixes(["a", "b", "c", "ab", "bc", "abc"], "abc"))
