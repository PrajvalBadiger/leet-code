function rearrangeCharacters(s: string, target: string): number {
    let s_mp = new Map()
    let target_mp = new Map()

    for (const ch of s) {
        if (s_mp.has(ch)) {
            s_mp.set(ch, s_mp.get(ch) + 1)
        } else {
            s_mp.set(ch, 1)
        }
    }

    for (const ch of target) {
        if (target_mp.has(ch)) {
            target_mp.set(ch, target_mp.get(ch) + 1)
        } else {
            target_mp.set(ch, 1)
        }
    }

    let res = Number.MAX_SAFE_INTEGER
    for (const ch of target) {
        if (s_mp.has(ch)) {
            res = Math.min(res, Math.floor(s_mp.get(ch) / target_mp.get(ch)))
        } else {
            return 0
        }
    }

    return res
};

console.log(rearrangeCharacters("ilovecodingonleetcode", "code"));
console.log(rearrangeCharacters("abcba", "abc"));
console.log(rearrangeCharacters("abbaccaddaeea", "aaaaa"));
