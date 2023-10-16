import { isAnagram } from "./valid-anagram.ts";

function groupAnagrams(strs: string[]): string[][] {
    let res: string[][] = [];
    let seen: Map<number, boolean> = new Map();
    for (let idx = 0; idx < strs.length; idx++) {
        let temp: string[] = [];
        for (let j = 0; j < strs.length; j++) {
            if (seen.has(j)) {
                continue;
            }
            if (isAnagram(strs[idx], strs[j])) {
                temp.push(strs[j]);
                if (!seen.has(j)) {
                    seen.set(j, true);
                }
            }
        }
        if (temp.length) {
            res.push(temp)
        }
    }

    return res;
};

// using freq counter and hashmap
function groupAnagrams2(strs: string[]): string[][] {
    let res: Map<string, string[]> = new Map();

    for (const str of strs) {
        let count = new Array(26).fill(0);
        for (let i = 0; i < str.length; i++) {
            count[str.charCodeAt(i) - 97] += 1;
        }

        let key = count.join(',');
        if (res.has(key)) {
            res.get(key)!.push(str);
        } else {
            res.set(key, [str]);
        }
    }

    return [...res.values()];
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))

console.log(groupAnagrams2(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log(groupAnagrams2([""]))
console.log(groupAnagrams2(["a"]))
console.log(groupAnagrams2(["bdddddddddd","bbbbbbbbbbc"]))
