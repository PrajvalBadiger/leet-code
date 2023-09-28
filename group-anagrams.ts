import { isAnagram } from "./valid-anagram.ts";

function groupAnagrams(strs: string[]): string[][] {
    let res: string[][] = [];
    let seen: Map<number,boolean> = new Map();
    for (let idx = 0; idx < strs.length; idx++) {
        let temp: string[] = [];
        for (let j = 0; j < strs.length; j++) {
            if(seen.has(j)) {
                continue;
            }
            if (isAnagram(strs[idx], strs[j])) {
                temp.push(strs[j]);
                if(!seen.has(j)) {
                    seen.set(j, true);
                }
            }
        }
        if(temp.length) {
            res.push(temp)
        }
    }

    return res;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))
