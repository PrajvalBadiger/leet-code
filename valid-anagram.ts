function isAnagram(s: string, t: string): boolean {

    if (s.length !== t.length) return false;

    let map = new Map<String, number>();

    // map all the values in first string with number of occurances of the chars
    for (let idx = 0; idx < s.length; idx++) {
        if (map.has(s[idx])) {
            let s_val = map.get(s[idx])! + 1;
            map.set(s[idx], s_val);
        } else {
            map.set(s[idx], 1);
        }
    }

    // check if each char is present in the map with exact same number of occurances in the second string
    for (let idx = 0; idx < t.length; idx++) {
        const count = map.get(t[idx]);
        if(count !== undefined && count !== 0) {
            map.set(t[idx], count -1);
        } else {
            return false;
        }
    }

    return true;
};
