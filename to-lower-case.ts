function toLowerCase(s: string): string {
    let res = "";

    for (let idx = 0; idx < s.length; idx++) {
        if (s[idx] >= "A" && s[idx] <= "Z") {
            res += String.fromCharCode(s.charCodeAt(idx) + 32);
        } else {
            res += s[idx];
        }
    }

    return res;
};
